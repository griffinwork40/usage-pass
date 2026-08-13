/**
 * EarnedPath — a route formed through repeated passes, not merely drawn.
 *
 * Multiple traces converge into one confident route, conveying
 * iteration → compression → the found signal.
 *
 * Used between sections where the page descends or rises.
 */
export function EarnedPath({
  className = "",
  direction = "right",
}: {
  className?: string;
  direction?: "right" | "left";
}) {
  const flip =
    direction === "left"
      ? "scale(-1, 1) translate(-1200, 0)"
      : undefined;

  return (
    <div className={`relative h-12 ${className}`} aria-hidden="true">
      <svg
        className="pointer-events-none select-none absolute inset-0 w-full h-full"
        viewBox="0 0 1200 48"
        fill="none"
        preserveAspectRatio="none"
      >
        <g transform={flip}>
          {/* Ghost trace — earliest iteration, mostly faded */}
          <path
            d="M0 8 C150 6, 300 14, 500 20 C700 26, 900 28, 1050 24 L1200 24"
            stroke="var(--color-accent)"
            strokeWidth="0.3"
            opacity="0.06"
          />
          {/* Trace 1 — wide initial pass */}
          <path
            d="M0 32 C180 34, 360 28, 540 24 C720 20, 880 22, 1060 24 L1200 24"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            opacity="0.08"
          />
          {/* Trace 2 — closer approach */}
          <path
            d="M0 16 C200 13, 380 20, 560 24 C740 28, 900 26, 1060 24 L1200 24"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            opacity="0.08"
          />
          {/* Main earned route — the convergence */}
          <path
            d="M0 24 C200 21, 400 26, 600 24 C800 22, 1000 24, 1200 24"
            stroke="var(--color-accent)"
            strokeWidth="0.8"
            opacity="0.12"
          />
        </g>
      </svg>
    </div>
  );
}
