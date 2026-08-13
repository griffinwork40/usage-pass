"use client";

import { useState, type FormEvent } from "react";
import { trackSignupStarted, trackSignupCompleted } from "@/lib/analytics";

const plans = [
  { value: "starter", label: "Starter — $29/mo" },
  { value: "pro", label: "Pro — $49/mo" },
  { value: "max", label: "Max — $99/mo" },
];

const spendRanges = [
  { value: "0-20", label: "$0 – $20" },
  { value: "20-50", label: "$20 – $50" },
  { value: "50-100", label: "$50 – $100" },
  { value: "100-200", label: "$100 – $200" },
  { value: "200+", label: "$200+" },
];

const toolOptions = [
  "Claude Code",
  "Codex",
  "OpenCode",
  "Cursor",
  "Custom agents",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("pro");
  const [spend, setSpend] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function toggleTool(tool: string) {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool],
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");
    trackSignupStarted(plan);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan, spend, tools }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Signup failed. Please try again.");
      }

      trackSignupCompleted(plan, spend, tools);
      setState("success");
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong.",
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mb-3 text-3xl">✓</div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          You&apos;re on the list.
        </h3>
        <p className="text-sm text-muted">
          We&apos;ll reach out when early access opens. Thanks for signing up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent"
        />
      </div>

      {/* Plan */}
      <div>
        <label className="mb-1.5 block text-sm font-medium">
          Preferred plan
        </label>
        <div className="grid grid-cols-3 gap-2">
          {plans.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPlan(p.value)}
              className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                plan === p.value
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border-subtle bg-surface text-muted hover:border-border"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current spend */}
      <div>
        <label htmlFor="spend" className="mb-1.5 block text-sm font-medium">
          Current monthly AI / API spend
        </label>
        <select
          id="spend"
          required
          value={spend}
          onChange={(e) => setSpend(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
        >
          <option value="" disabled>
            Select range
          </option>
          {spendRanges.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tools */}
      <div>
        <label className="mb-1.5 block text-sm font-medium">
          Tools you currently use{" "}
          <span className="text-muted-foreground">(optional)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {toolOptions.map((tool) => (
            <button
              key={tool}
              type="button"
              onClick={() => toggleTool(tool)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                tools.includes(tool)
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border-subtle text-muted hover:border-border"
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {state === "error" && (
        <p className="text-sm text-error">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {state === "submitting" ? "Submitting…" : "Join Early Access"}
      </button>
    </form>
  );
}
