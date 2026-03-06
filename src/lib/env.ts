const read = (name: "STRIPE_PUBLISHABLE_KEY" | "STRIPE_SECRET_KEY" | "STRIPE_WEBHOOK_SECRET") =>
  (process.env[name] ?? "").trim();

export function validateStripeEnv(options?: { requireServer?: boolean; requireWebhook?: boolean }) {
  const missing: string[] = [];

  if (!read("STRIPE_PUBLISHABLE_KEY")) {
    missing.push("STRIPE_PUBLISHABLE_KEY");
  }

  if (options?.requireServer && !read("STRIPE_SECRET_KEY")) {
    missing.push("STRIPE_SECRET_KEY");
  }

  if (options?.requireWebhook && !read("STRIPE_WEBHOOK_SECRET")) {
    missing.push("STRIPE_WEBHOOK_SECRET");
  }

  return {
    valid: missing.length === 0,
    missing
  };
}

export function getStripePublishableKey() {
  return read("STRIPE_PUBLISHABLE_KEY");
}

export function getStripeSecretKey() {
  const key = read("STRIPE_SECRET_KEY");
  if (!key) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }
  return key;
}

export function getStripeWebhookSecret() {
  const key = read("STRIPE_WEBHOOK_SECRET");
  if (!key) {
    throw new Error("Missing STRIPE_WEBHOOK_SECRET");
  }
  return key;
}
