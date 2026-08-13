/**
 * ScopeRule — one ruthless line of measurement crossing organic depth.
 *
 * A crisp horizontal rule with small coordinate annotations,
 * expressing clean judgment against living complexity.
 *
 * Replaces generic `border-t` dividers where the signature should be felt.
 */
export function ScopeRule({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      {/* Left tick mark */}
      <div className="flex items-center gap-2">
        <div className="h-3 w-px bg-accent/20" />
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
        )}
      </div>

      {/* The rule itself — gradient from accent to transparent */}
      <div className="flex-1 relative">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-accent) 0%, color-mix(in srgb, var(--color-accent) 20%, transparent) 40%, color-mix(in srgb, var(--color-border-subtle) 50%, transparent) 100%)",
          }}
        />
      </div>

      {/* Right tick mark */}
      <div className="h-3 w-px bg-border-subtle" />
    </div>
  );
}
