"use client";

import { trackCtaClick } from "@/lib/analytics";
import { DepthGlow } from "@/components/signature";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle py-20 md:py-28">
      {/* Warm glow — embodiment zone, the most resolved part of the page */}
      <DepthGlow position="center" warmth="warm" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Stop paying per token.
        </h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-muted">
          Join the early-access list for flat-rate multi-model inference.
        </p>
        <a
          href="#signup"
          onClick={() => trackCtaClick("final-cta")}
          className="inline-block rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Get Early Access
        </a>
      </div>
    </section>
  );
}
