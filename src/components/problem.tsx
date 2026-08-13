import { CheckIcon, XIcon } from "@/components/icons";

export function Problem() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Pick one. You shouldn&apos;t have to.
          </h2>
          <p className="text-lg text-muted">
            Today, developers choose between predictable pricing tied to one
            provider, or multi-model access that bills per token. UsagePass
            removes the tradeoff.
          </p>
        </div>

        {/* Comparison matrix */}
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-xl border border-border">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-border bg-surface px-4 py-3 md:px-6">
              <div />
              <div className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Predictable cost
              </div>
              <div className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Multi-model
              </div>
            </div>

            {/* Row: Model subscriptions */}
            <ComparisonRow
              label="Model subscriptions"
              predictable
              multiModel={false}
            />

            {/* Row: PAYG gateways */}
            <ComparisonRow
              label="Pay-as-you-go APIs"
              predictable={false}
              multiModel
              border
            />

            {/* Row: UsagePass */}
            <div className="grid grid-cols-3 items-center bg-accent/5 px-4 py-4 md:px-6">
              <div className="font-mono text-sm font-semibold text-accent">
                UsagePass
              </div>
              <div className="flex justify-center">
                <CheckIcon filled />
              </div>
              <div className="flex justify-center">
                <CheckIcon filled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({
  label,
  predictable,
  multiModel,
  border,
}: {
  label: string;
  predictable: boolean;
  multiModel: boolean;
  border?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-3 items-center px-4 py-4 md:px-6 ${border ? "border-b border-border-subtle" : ""}`}
    >
      <div className="text-sm text-muted">{label}</div>
      <div className="flex justify-center">
        {predictable ? <CheckIcon /> : <XIcon />}
      </div>
      <div className="flex justify-center">
        {multiModel ? <CheckIcon /> : <XIcon />}
      </div>
    </div>
  );
}
