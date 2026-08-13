"use client";

import { trackCtaClick } from "@/lib/analytics";

export function FinalCta() {
  return (
    <section className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
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
