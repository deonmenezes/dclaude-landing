export type Feature = {
  title: string;
  body: string;
  kicker: string;
};

export type Plan = {
  id: "starter" | "pro" | "elite";
  name: string;
  price: string;
  subtitle: string;
  highlight: boolean;
  bullets: string[];
};

export const trustSignals = [
  {
    title: "Non-custodial architecture",
    body: "Your capital stays at your exchange. dClaude only executes approved strategies via API permissions."
  },
  {
    title: "Encrypted API credentials",
    body: "Keys are encrypted at rest and rotated under strict operational policy with least-privilege access."
  },
  {
    title: "Risk throttles always on",
    body: "Position sizing controls, drawdown circuit breakers, and configurable kill switches help cap downside."
  },
  {
    title: "Transparent execution logs",
    body: "Audit every decision with timestamped entries for strategy signals, entries, exits, and risk actions."
  }
];

export const features: Feature[] = [
  {
    kicker: "Automation",
    title: "Adaptive strategy engine",
    body: "Blend momentum, mean-reversion, and volatility regimes into one autonomous execution pipeline."
  },
  {
    kicker: "Control",
    title: "Portfolio risk orchestration",
    body: "Set cross-pair exposure limits, daily loss caps, and dynamic stop logic across every bot instance."
  },
  {
    kicker: "Insights",
    title: "Live market intelligence",
    body: "Signal scoring surfaces probability-weighted setups and rejects low-quality trades before execution."
  },
  {
    kicker: "Execution",
    title: "Low-latency order routing",
    body: "Fast order placement with slippage-aware entry logic and fill fallback behavior for volatile moves."
  },
  {
    kicker: "Backtesting",
    title: "Scenario stress testing",
    body: "Replay historical conditions, compare strategy versions, and deploy only when edge is statistically sound."
  },
  {
    kicker: "Operations",
    title: "Alerting and incident guardrails",
    body: "Get instant Telegram/email signals for anomalies, drawdowns, or exchange-level disruptions."
  }
];

export const testimonials = [
  {
    quote:
      "Placeholder: Insert verified customer quote focused on time saved and disciplined execution.",
    name: "Alex R.",
    role: "Quant Trader, NYC"
  },
  {
    quote:
      "Placeholder: Insert verified customer quote focused on risk controls during volatile weeks.",
    name: "Priya M.",
    role: "Portfolio Operator, Austin"
  },
  {
    quote:
      "Placeholder: Insert verified customer quote focused on onboarding speed and strategy customization.",
    name: "Daniel K.",
    role: "Fintech Founder, Miami"
  }
];

export const faqs = [
  {
    question: "Is dClaude beginner-friendly?",
    answer:
      "Yes. The onboarding flow includes presets, risk templates, and guided setup. Advanced users can customize every strategy parameter."
  },
  {
    question: "Do you guarantee returns?",
    answer:
      "No. Markets are volatile and losses can occur. dClaude is built to improve consistency through risk controls, not to guarantee profits."
  },
  {
    question: "What exchanges are supported?",
    answer:
      "The production integration supports major exchanges via API connectivity. Exchange list and permissions are shown during onboarding."
  },
  {
    question: "How quickly can I launch my first bot?",
    answer:
      "Most users connect an exchange and start a template strategy in under 15 minutes, then optimize over the first week."
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Stripe subscription billing can be canceled from your account settings with no long-term lock-in."
  }
];

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$99/mo",
    subtitle: "For disciplined solo traders",
    highlight: false,
    bullets: [
      "2 active bots",
      "Core strategy templates",
      "Basic risk controls",
      "Email support"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: "$199/mo",
    subtitle: "For growth-focused operators",
    highlight: true,
    bullets: [
      "10 active bots",
      "Advanced strategy builder",
      "Portfolio-level risk engine",
      "Priority support"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    price: "$399/mo",
    subtitle: "For teams and high-volume desks",
    highlight: false,
    bullets: [
      "Unlimited bots",
      "Custom execution rules",
      "Team permissions + audit logs",
      "Dedicated success channel"
    ]
  }
];
