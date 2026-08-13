"use client";

import { useEffect, useState } from "react";
import { trackCtaClick } from "@/lib/analytics";
import { ContourField, DepthGlow } from "@/components/signature";
import { useSignupModal } from "./signup-modal-provider";

const models = [
  { id: "anthropic/claude-sonnet", label: "Claude" },
  { id: "openai/gpt-5", label: "GPT" },
  { id: "google/gemini-pro", label: "Gemini" },
  { id: "deepseek/deepseek-r1", label: "DeepSeek" },
  { id: "qwen/qwen-3", label: "Qwen" },
];

export function Hero() {
  const [activeModel, setActiveModel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModel((prev) => (prev + 1) % models.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const { openModal } = useSignupModal();
  const current = models[activeModel];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Contour field — hidden depth beneath a small signal */}
      <div className="absolute inset-0">
        <ContourField variant="hero" className="absolute inset-0 w-full h-full" />
      </div>

      {/* Depth glow — light source beneath layers, lower-left bias */}
      <DepthGlow position="lower-left" warmth="cool" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <p className="mb-4 font-mono text-sm text-accent animate-fade-up">
              UsagePass
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-up delay-100">
              Every AI model.
              <br />
              One flat price.
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-muted animate-fade-up delay-200">
              Use Claude, GPT, Gemini, DeepSeek, and more through one
              OpenAI-compatible API for a predictable monthly subscription.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
              <button
                onClick={() => {
                  trackCtaClick("hero");
                  openModal();
                }}
                className="rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Get Early Access
              </button>
              <a
                href="#how-it-works"
                onClick={() => trackCtaClick("hero-secondary")}
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
              >
                How it works ↓
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground animate-fade-up delay-400">
              30+ models across 7 provider families · One API key
            </p>
          </div>

          {/* Code visual */}
          <div className="animate-fade-up delay-400">
            <HeroCodeBlock model={current} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCodeBlock({ model }: { model: (typeof models)[number] }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
      {/* Faint contour depth behind the terminal */}
      <div
        className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="h-2.5 w-2.5 rounded-full bg-border" />
        <div className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 font-mono text-xs text-muted">
          terminal
        </span>
      </div>

      <div className="p-5 font-mono text-sm leading-7">
        {/* Env setup */}
        <div className="text-[var(--color-code-muted)]">
          <span className="text-accent">$</span> export
          OPENAI_BASE_URL=
          <span className="text-foreground">
            https://api.usagepass.com/v1
          </span>
        </div>
        <div className="mb-5 text-muted">
          <span className="text-accent">$</span> export OPENAI_API_KEY=
          <span className="text-foreground">up_live_...</span>
        </div>

        {/* Model request */}
        <div className="rounded-lg bg-background/50 p-4 border border-border-subtle">
          <div className="text-[var(--color-code-muted)]">{"{"}</div>
          <div className="pl-4">
            <span className="text-[var(--color-code-muted)]">&quot;model&quot;: </span>
            <span
              key={model.id}
              className="inline-block text-accent transition-all duration-300"
            >
              &quot;{model.id}&quot;
            </span>
            <span className="text-[var(--color-code-muted)]">,</span>
          </div>
          <div className="pl-4 text-muted">
            &quot;messages&quot;: [...]
          </div>
          <div className="text-[var(--color-code-muted)]">{"}"}</div>
        </div>

        {/* Cycling label */}
        <p className="mt-3 text-xs text-muted">
          Same API. Different model.{" "}
          <span className="text-accent">{model.label}</span> →
        </p>
      </div>
    </div>
  );
}
