import CheckoutButton from "@/components/checkout-button";
import StickyCTA from "@/components/sticky-cta";
import { getStripePublishableKey, validateStripeEnv } from "@/lib/env";
import { faqs, features, plans, testimonials, trustSignals } from "@/lib/site-data";

export default function Home() {
  const stripePublishableKey = getStripePublishableKey();
  const stripeClientReady = validateStripeEnv().valid;

  return (
    <main className="relative overflow-x-clip pb-32 noise">
      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-cobalt/30 blur-[110px]" />
      <div className="absolute -right-12 top-56 h-56 w-56 rounded-full bg-rose/25 blur-[100px]" />
      <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-signal/20 blur-[120px]" />

      <header className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <div className="font-display text-xl font-semibold tracking-tight">dClaude</div>
        <a
          href="#pricing"
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
          View Plans
        </a>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-14 pt-8 md:px-8 md:pb-24 md:pt-12">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <span className="reveal inline-flex items-center rounded-full border border-signal/40 bg-signal/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-signal">
              Precision Trading Automation
            </span>
            <h1 className="reveal reveal-delay-1 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Scale your edge with a bot built for disciplined execution.
            </h1>
            <p className="reveal reveal-delay-2 max-w-xl text-base text-sand/80 sm:text-lg">
              dClaude combines adaptive strategy logic, portfolio-level risk controls, and low-latency order routing
              so you can trade with structure instead of emotion.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col gap-3 sm:flex-row">
              <CheckoutButton
                label={stripeClientReady ? "Launch dClaude with Stripe" : "Set Stripe Keys to Enable Checkout"}
                planId="pro"
                stripePublishableKey={stripePublishableKey}
                disabled={!stripeClientReady}
                className="rounded-xl bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#7dffd4] disabled:cursor-not-allowed disabled:bg-sand/30 disabled:text-sand/70"
              />
              <a
                href="#performance"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
              >
                Explore Performance Model
              </a>
            </div>

            {!stripeClientReady ? (
              <p className="text-sm text-rose-200/90">
                Stripe is not fully configured yet. Add the required environment variables to activate checkout.
              </p>
            ) : null}
          </div>

          <div className="relative reveal reveal-delay-2">
            <div className="glass-card soft-ring animate-float rounded-3xl p-6 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.22em] text-sand/70">Live Risk Console</p>
                <span className="rounded-full bg-signal/20 px-2 py-1 text-xs font-semibold text-signal">Online</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-ink/55 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-sand/60">Target Performance</p>
                  <p className="mt-1 font-display text-3xl font-medium text-white">10% / month</p>
                  <p className="mt-2 text-xs text-sand/70">Target only. Returns are variable and never guaranteed.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-ink/55 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-sand/60">Risk Guardrail</p>
                    <p className="text-sm font-medium text-signal">Daily loss cap: 1.8%</p>
                  </div>
                  <div className="h-2 rounded-full bg-slate">
                    <div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-signal to-cobalt" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-ink/55 p-4">
                    <p className="text-sand/70">Win-rate (30d)</p>
                    <p className="mt-1 font-display text-2xl text-white">62.4%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-ink/55 p-4">
                    <p className="text-sand/70">Max drawdown</p>
                    <p className="mt-1 font-display text-2xl text-white">-4.1%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="mb-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-sand/70">
            Trusted conversion pattern
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-sand/70">
            Non-custodial by design
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-sand/70">
            Stripe-secured billing
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl p-5">
              <h3 className="font-display text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-sand/75">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8" id="features">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-signal">Feature Grid</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Built to convert strategy into repeatable execution.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-signal/60 hover:bg-white/[0.06]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-sand/70">{feature.kicker}</p>
              <h3 className="mt-2 font-display text-xl text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-sand/75">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8" id="performance">
        <div className="glass-card rounded-3xl p-7 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-signal">Performance</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                Targeting 10% monthly through systematic risk-managed execution.
              </h2>
              <p className="mt-4 max-w-xl text-sm text-sand/80 sm:text-base">
                dClaude runs strategy stacks that prioritize risk-adjusted outcomes. Performance targets guide
                portfolio configuration and are reviewed against drawdown tolerance every cycle.
              </p>
              <p className="mt-4 rounded-xl border border-rose/35 bg-rose/10 px-4 py-3 text-xs text-rose-100/90">
                Risk disclaimer: A 10% monthly return is a target scenario, not a promise. Trading involves substantial
                risk, including possible loss of principal.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Strategy Quality Score", value: "88/100" },
                { label: "Execution Uptime", value: "99.93%" },
                { label: "Average Slippage Reduction", value: "19%" }
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/15 bg-ink/55 p-5">
                  <p className="text-sm text-sand/70">{metric.label}</p>
                  <p className="mt-1 font-display text-3xl text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8" id="testimonials">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-signal">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Social proof placeholders</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-card rounded-2xl p-6">
              <p className="text-sm text-sand/80">&quot;{testimonial.quote}&quot;</p>
              <p className="mt-5 font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-sand/65">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8" id="pricing">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-signal">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Plans designed for every stage of your trading stack.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-signal/45 bg-gradient-to-b from-signal/15 to-cobalt/15 animate-pulseGlow"
                  : "border-white/15 bg-white/[0.04]"
              }`}
            >
              <p className="font-display text-2xl text-white">{plan.name}</p>
              <p className="mt-1 text-sm text-sand/70">{plan.subtitle}</p>
              <p className="mt-4 font-display text-4xl text-white">{plan.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-sand/80">
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <CheckoutButton
                label={stripeClientReady ? `Choose ${plan.name}` : "Stripe Setup Required"}
                planId={plan.id}
                stripePublishableKey={stripePublishableKey}
                disabled={!stripeClientReady}
                className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-signal text-ink hover:bg-[#7dffd4]"
                    : "border border-white/25 bg-white/[0.03] text-white hover:border-white/45 hover:bg-white/[0.08]"
                } disabled:cursor-not-allowed disabled:border-sand/15 disabled:bg-sand/20 disabled:text-sand/60`}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8" id="faq">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.24em] text-signal">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Questions before you automate?
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-white/15 bg-white/[0.04] p-5">
              <summary className="cursor-pointer list-none font-medium text-white">{faq.question}</summary>
              <p className="mt-3 text-sm text-sand/75">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-7xl border-t border-white/10 px-5 py-10 md:px-8">
        <div className="flex flex-col gap-3 text-sm text-sand/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} dClaude. Built for disciplined automation.</p>
          <p className="max-w-2xl">
            Disclaimer: This website is for informational purposes only and does not constitute financial advice.
            Returns, including 10% monthly targets, are not guaranteed. Trading involves risk, including loss of
            principal.
          </p>
        </div>
      </footer>

      <StickyCTA stripePublishableKey={stripePublishableKey} stripeEnabled={stripeClientReady} />
    </main>
  );
}
