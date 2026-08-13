"use client";

import { trackCtaClick, trackTierSelect } from "@/lib/analytics";
import { useSignupModal } from "./signup-modal-provider";

const tiers = [
  {
    name: "Starter",
    price: 29,
    description: "For individual developers experimenting with multiple models.",
    features: [
      "All supported model families",
      "OpenAI-compatible API",
      "~1M tokens / day across models",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 49,
    description:
      "For developers regularly using AI coding tools and agents.",
    features: [
      "Everything in Starter",
      "~5M tokens / day across models",
      "Priority rate limits",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Max",
    price: 99,
    description: "For heavy agent and multi-model workflows.",
    features: [
      "Everything in Pro",
      "~15M tokens / day across models",
      "Dedicated rate capacity",
      "Direct support channel",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Simple, predictable pricing
          </h2>
          <p className="text-lg text-muted">
            Early-access pricing. Usage limits vary by model and plan.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  name,
  price,
  description,
  features,
  highlighted,
}: (typeof tiers)[number]) {
  const { openModal } = useSignupModal();

  return (
    <div
      className={`relative flex flex-col rounded-xl border p-6 transition-colors ${
        highlighted
          ? "border-accent bg-accent/[0.03]"
          : "border-border-subtle bg-surface hover:border-border"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-background">
          Most popular
        </span>
      )}

      <h3 className="mb-1 text-lg font-semibold">{name}</h3>
      <div className="mb-3 flex items-baseline gap-1">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-sm text-muted">/month</span>
      </div>
      <p className="mb-6 text-sm text-muted">{description}</p>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted">
            <span className="mt-0.5 text-accent">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          trackCtaClick("pricing", name.toLowerCase());
          trackTierSelect(name.toLowerCase());
          openModal(name.toLowerCase());
        }}
        className={`block rounded-lg py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
          highlighted
            ? "bg-accent text-background"
            : "bg-foreground text-background"
        }`}
      >
        Lock in {name} pricing
      </button>
    </div>
  );
}
