/**
 * DepthGlow — a subtle radial glow suggesting hidden structure beneath.
 *
 * Not a generic "AI glow." This is positioned to feel like a light source
 * beneath layers, visible only at the edges. Used sparingly.
 */
export function DepthGlow({
  className = "",
  position = "center",
  warmth = "cool",
}: {
  className?: string;
  position?: "center" | "lower-left" | "upper-right";
  warmth?: "cool" | "warm";
}) {
  const positionStyles: Record<string, string> = {
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    "lower-left": "left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2",
    "upper-right": "right-[15%] top-[25%] translate-x-1/4 -translate-y-1/4",
  };

  const colorMap = {
    cool: "var(--color-accent)",
    warm: "color-mix(in srgb, var(--color-accent) 60%, #f59e0b)",
  };

  return (
    <div
      className={`absolute pointer-events-none select-none ${positionStyles[position]} ${className}`}
      aria-hidden="true"
      style={{
        width: "clamp(300px, 50vw, 700px)",
        height: "clamp(300px, 50vw, 700px)",
        background: `radial-gradient(ellipse at center, ${colorMap[warmth]} 0%, transparent 70%)`,
        opacity: warmth === "cool" ? 0.04 : 0.03,
        filter: "blur(60px)",
      }}
    />
  );
}
