# dClaude TradePilot Landing

A conversion-focused marketing and checkout landing page for the dClaude TradePilot multi-asset trading bot, built with Next.js, TypeScript, Tailwind CSS, and Stripe.

## Tech Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Payments:** Stripe (`stripe`, `@stripe/stripe-js`)
- **Language:** TypeScript

## Setup

```bash
npm install
```

Create a `.env.local` file with the required Stripe keys:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Build / Run / Test

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Project Structure

```
dclaude-landing/
├── src/
│   ├── app/
│   │   ├── api/          # Server-side API routes (Stripe checkout, webhook)
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main landing page
│   ├── components/
│   │   ├── checkout-button.tsx  # Stripe Checkout trigger button
│   │   └── sticky-cta.tsx       # Sticky call-to-action bar
│   └── lib/              # Utility functions
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Architecture & Key Files

- `src/app/page.tsx` — the single landing page; sections include hero, trust/safety, features, performance, testimonials, FAQ, pricing.
- `src/app/api/` — server routes for Stripe Checkout session creation and webhook handling.
- `src/components/checkout-button.tsx` — client component that initiates Stripe Checkout.
- `src/components/sticky-cta.tsx` — persistent CTA bar that follows the user as they scroll.

## Conventions & Notes for Agents

- Uses Next.js App Router; components that use browser APIs or React hooks must be marked `'use client'`.
- Stripe secret key (`STRIPE_SECRET_KEY`) must only be used in server-side code (`app/api/` routes) — never expose it to the client.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is safe to use in client components.
- The Stripe webhook route requires `STRIPE_WEBHOOK_SECRET` to verify event signatures; set this up in your Stripe dashboard.
- Page structure follows a conversion-funnel order — maintain that order when adding or reordering sections.
- No test suite is currently present.
