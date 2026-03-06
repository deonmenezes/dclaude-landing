"use client";

import { useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

type CheckoutButtonProps = {
  label: string;
  planId: "starter" | "pro" | "elite";
  stripePublishableKey: string;
  className?: string;
  disabled?: boolean;
};

type CheckoutResponse = {
  sessionId?: string;
  error?: string;
};

export default function CheckoutButton({
  label,
  planId,
  stripePublishableKey,
  className,
  disabled = false
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const stripePromise = useMemo(
    () => (stripePublishableKey ? loadStripe(stripePublishableKey) : null),
    [stripePublishableKey]
  );

  const handleCheckout = async () => {
    if (disabled || !stripePromise || isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ planId })
      });

      const payload = (await response.json()) as CheckoutResponse;

      if (!response.ok || !payload.sessionId) {
        throw new Error(payload.error ?? "Unable to create checkout session.");
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to initialize.");
      }

      const result = await stripe.redirectToCheckout({ sessionId: payload.sessionId });
      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      // Keep user feedback direct and actionable at conversion point.
      const message = error instanceof Error ? error.message : "Checkout failed.";
      window.alert(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={disabled || isLoading || !stripePublishableKey}
      className={className}
    >
      {isLoading ? "Redirecting..." : label}
    </button>
  );
}
