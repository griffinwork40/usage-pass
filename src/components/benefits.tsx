const benefits = [
  {
    title: "One API",
    description:
      "An OpenAI-compatible endpoint. Point your existing tools at it and go — no new SDK, no new workflow.",
    icon: "→",
  },
  {
    title: "Switch models freely",
    description:
      "Use Claude for reasoning, GPT for generation, Gemini for context — without juggling provider accounts or API keys.",
    icon: "⇄",
  },
  {
    title: "Predictable bill",
    description:
      "One monthly subscription. No per-token metering, no surprise invoices, no prepaid balances draining overnight.",
    icon: "$",
  },
  {
    title: "Built for agents",
    description:
      "Agentic workflows burn through tokens unpredictably. UsagePass absorbs the variance so you can ship without watching the meter.",
    icon: "◆",
  },
  {
    title: "Generous limits",
    description:
      "Rolling fair-use limits per model and plan. Designed for real daily usage, not demo-tier toy allowances.",
    icon: "▲",
  },
  {
    title: "No vendor lock-in",
    description:
      "Standard OpenAI-compatible API. If you leave, change one environment variable. Your code stays the same.",
    icon: "◇",
  },
];

export function Benefits() {
  return (
    <section className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Why developers switch
          </h2>
          <p className="text-lg text-muted">
            One integration. Every model. One price.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-xl border border-border-subtle bg-surface p-6 transition-colors hover:border-border"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-raised font-mono text-lg text-accent">
                {b.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
