import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import { validateStripeEnv } from "@/lib/env";

type PlanId = "starter" | "pro" | "elite";

const planPricing: Record<PlanId, { name: string; amount: number; description: string }> = {
  starter: {
    name: "dClaude Starter",
    amount: 9900,
    description: "Starter subscription for disciplined solo traders."
  },
  pro: {
    name: "dClaude Pro",
    amount: 19900,
    description: "Pro subscription with portfolio-level risk controls."
  },
  elite: {
    name: "dClaude Elite",
    amount: 39900,
    description: "Elite subscription for teams and high-volume operators."
  }
};

type CheckoutBody = {
  planId?: PlanId;
};

export async function POST(request: NextRequest) {
  const envState = validateStripeEnv({ requireServer: true });
  if (!envState.valid) {
    return NextResponse.json(
      { error: `Missing environment configuration: ${envState.missing.join(", ")}` },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as CheckoutBody;
    const planId = body.planId;

    if (!planId || !(planId in planPricing)) {
      return NextResponse.json({ error: "Invalid plan selected." }, { status: 400 });
    }

    const plan = planPricing[planId];
    const origin = request.headers.get("origin") ?? request.nextUrl.origin;

    const session = await getStripeClient().checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      allow_promotion_codes: true,
      metadata: {
        planId
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            recurring: {
              interval: "month"
            },
            product_data: {
              name: plan.name,
              description: plan.description
            },
            unit_amount: plan.amount
          }
        }
      ],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancel`
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create checkout session.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
