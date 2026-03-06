import CheckoutButton from "@/components/checkout-button";

type StickyCTAProps = {
  stripePublishableKey: string;
  stripeEnabled: boolean;
};

export default function StickyCTA({ stripePublishableKey, stripeEnabled }: StickyCTAProps) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:inset-x-auto md:bottom-6 md:right-6">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-white/20 bg-ink/85 p-3 shadow-glow backdrop-blur-xl md:max-w-none">
        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-[0.22em] text-sand/65">Launch dClaude</p>
          <p className="truncate text-sm font-semibold text-white">Automate your strategy stack</p>
        </div>
        <CheckoutButton
          label={stripeEnabled ? "Start Pro" : "Configure Stripe"}
          planId="pro"
          stripePublishableKey={stripePublishableKey}
          disabled={!stripeEnabled}
          className="rounded-xl bg-signal px-4 py-2 text-sm font-semibold text-ink transition hover:bg-[#77ffd0] disabled:cursor-not-allowed disabled:bg-sand/30 disabled:text-sand/70"
        />
      </div>
    </div>
  );
}
