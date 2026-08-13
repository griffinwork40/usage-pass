"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is UsagePass unlimited?",
    a: "No. Plans include generous usage limits that vary based on model cost and plan tier. The goal is predictable monthly pricing without exposing you to per-token billing — not unlimited inference.",
  },
  {
    q: "Can I switch between models?",
    a: "Yes. Multi-model access is core to UsagePass. Change the model field in your request and your next call goes to a different provider. Same API key, same endpoint.",
  },
  {
    q: "Will it work with my existing tools?",
    a: "UsagePass exposes an OpenAI-compatible API. If your tool supports setting a custom base URL (Claude Code, Codex, Cursor, custom agents, and most OpenAI-compatible SDKs), you can point it at UsagePass by changing two environment variables.",
  },
  {
    q: "What happens if I hit my usage limit?",
    a: "Limits reset on a rolling basis. If you hit a limit, requests may be temporarily rate-limited until your usage rolls over. You're never charged overage fees.",
  },
  {
    q: "When does UsagePass launch?",
    a: "UsagePass is currently in validation. Early-access signups will be first in line for the private beta. Sign up to reserve your spot.",
  },
  {
    q: "Can I use this in production?",
    a: "That's the goal. UsagePass is designed to be reliable enough for production workloads. During early access, we'll be working closely with beta users to ensure stability.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Questions
        </h2>
        <div className="divide-y divide-border-subtle">
          {faqs.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-base font-medium text-foreground pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 font-mono text-lg text-muted transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-muted pr-8">
          {answer}
        </p>
      )}
    </div>
  );
}
