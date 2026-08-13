/**
 * ContourField — concentric topographic rings implying hidden depth.
 *
 * "A small signal on the surface reveals hidden depth beneath it."
 *
 * The rings are off-center (biased lower-left) and fade outward,
 * suggesting a vast submerged system with only a small surface signal.
 * Intentionally irregular — not perfect circles, not uniform spacing.
 */
export function ContourField({
  className = "",
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "section";
}) {
  // Irregular ring definitions — each has its own distortion
  const heroRings = [
    { r: 55, rx: 1.0, ry: 0.95, cx: 0, cy: 0, rot: -2, sw: 1.0, op: 0.7 },
    { r: 100, rx: 1.06, ry: 0.97, cx: 5, cy: -3, rot: -1, sw: 0.7, op: 0.6 },
    { r: 155, rx: 1.03, ry: 0.94, cx: -3, cy: 4, rot: 1, sw: 0.6, op: 0.5 },
    { r: 210, rx: 1.08, ry: 0.96, cx: 8, cy: -2, rot: 2, sw: 0.5, op: 0.4 },
    { r: 280, rx: 1.02, ry: 0.93, cx: -4, cy: 6, rot: -1, sw: 0.5, op: 0.3 },
    { r: 355, rx: 1.05, ry: 0.98, cx: 6, cy: -5, rot: 3, sw: 0.4, op: 0.2 },
    { r: 430, rx: 1.01, ry: 0.95, cx: -2, cy: 3, rot: -2, sw: 0.3, op: 0.12 },
  ];

  const sectionRings = heroRings.slice(0, 4).map((ring) => ({
    ...ring,
    r: ring.r * 0.7,
    op: ring.op * 0.6,
  }));

  const rings = variant === "hero" ? heroRings : sectionRings;
  const center = { x: 260, y: 380 };

  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id={`contour-fade-${variant}`}
          cx="32%"
          cy="63%"
          r="50%"
        >
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="60%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`contour-mask-${variant}`}>
          <rect
            width="800"
            height="600"
            fill={`url(#contour-fade-${variant})`}
          />
        </mask>
      </defs>

      <g
        mask={`url(#contour-mask-${variant})`}
        opacity={variant === "hero" ? 0.08 : 0.05}
      >
        {rings.map((ring, i) => {
          const cx = center.x + ring.cx;
          const cy = center.y + ring.cy;
          const rx = ring.r * ring.rx;
          const ry = ring.r * ring.ry;

          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              stroke="var(--color-accent)"
              strokeWidth={ring.sw}
              opacity={ring.op}
              fill="none"
              transform={`rotate(${ring.rot}, ${cx}, ${cy})`}
            >
              {variant === "hero" && (
                <animate
                  attributeName="rx"
                  values={`${rx};${rx + 2};${rx}`}
                  dur={`${10 + i * 2}s`}
                  repeatCount="indefinite"
                />
              )}
            </ellipse>
          );
        })}

        {/* Central signal node — small, bright, still */}
        <circle
          cx={center.x}
          cy={center.y}
          r="2.5"
          fill="var(--color-accent)"
          opacity="0.5"
        />
        <circle
          cx={center.x}
          cy={center.y}
          r="1"
          fill="var(--color-accent)"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
