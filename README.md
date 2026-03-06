# dClaude TradePilot Landing

Premium conversion-focused landing page for the dClaude TradePilot multi-asset trading bot, built with Next.js, Tailwind CSS, and TypeScript.

## Features

- Conversion-focused page structure: hero, trust/safety, features, performance, testimonials, FAQ, pricing, sticky CTA
- Stripe Checkout integration (frontend + server route)
- Stripe webhook scaffold for subscription lifecycle handling
- Environment variable validation with secret-safe defaults
- Responsive, mobile-first, high-end visual styling and motion

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Stripe (`stripe` + `@stripe/stripe-js`)

## Environment Variables

Create a local `.env` file based on `.env.example`:

```bash
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Local Development

```bash
npm install
npm run dev
```

## Stripe Test Flow

1. Set env vars in `.env`.
2. Start app and click a pricing CTA.
3. Confirm redirect to Stripe Checkout.
4. Complete payment using Stripe test card `4242 4242 4242 4242` with any future date/CVC/ZIP.
5. Confirm return to `/?checkout=success`.
6. For webhook testing, run:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Then trigger events with Stripe CLI.



