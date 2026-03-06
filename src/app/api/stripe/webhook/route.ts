import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripeWebhookSecret, validateStripeEnv } from "@/lib/env";
import { getStripeClient } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const envState = validateStripeEnv({ requireServer: true, requireWebhook: true });
  if (!envState.valid) {
    return NextResponse.json(
      { error: `Missing environment configuration: ${envState.missing.join(", ")}` },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header." }, { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = getStripeClient().webhooks.constructEvent(payload, signature, getStripeWebhookSecret());
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid webhook payload.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  // Add your persistence + fulfillment logic here once account/customer models are in place.
  switch (event.type) {
    case "checkout.session.completed":
      break;
    case "customer.subscription.deleted":
      break;
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
