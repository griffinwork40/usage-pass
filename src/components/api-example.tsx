"use client";

import { useState } from "react";

type Tab = "before" | "after";

export function ApiExample() {
  const [tab, setTab] = useState<Tab>("before");

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Two env vars. That&apos;s the migration.
            </h2>
            <p className="mb-6 text-lg text-muted max-w-md">
              UsagePass exposes an OpenAI-compatible API. If your tool supports{" "}
              <code className="rounded bg-surface-raised px-1.5 py-0.5 font-mono text-sm text-accent">
                OPENAI_BASE_URL
              </code>
              , it already works with UsagePass.
            </p>
            <div className="space-y-4 text-sm text-muted">
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs text-accent">
                  1
                </span>
                <p>Set your base URL and API key</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs text-accent">
                  2
                </span>
                <p>Choose any supported model in your request</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs text-accent">
                  3
                </span>
                <p>Switch models anytime — same key, same endpoint</p>
              </div>
            </div>
          </div>

          {/* Code block — before / after diff */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
            {/* Subtle depth contour behind the code */}
            <div
              className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full opacity-[0.04]"
              style={{
                background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Tab bar */}
            <div className="flex items-center gap-0 border-b border-border-subtle">
              <button
                onClick={() => setTab("before")}
                className={`px-4 py-3 font-mono text-xs transition-colors ${
                  tab === "before"
                    ? "text-foreground border-b-2 border-accent"
                    : "text-muted-foreground hover:text-muted"
                }`}
              >
                before
              </button>
              <button
                onClick={() => setTab("after")}
                className={`px-4 py-3 font-mono text-xs transition-colors ${
                  tab === "after"
                    ? "text-foreground border-b-2 border-accent"
                    : "text-muted-foreground hover:text-muted"
                }`}
              >
                after
              </button>
            </div>

            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
              <code>
                {tab === "before" ? <BeforeCode /> : <AfterCode />}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeCode() {
  return (
    <>
      <Line comment="# Direct OpenAI setup" />
      <Line>
        <span className="text-accent">export</span>{" "}
        OPENAI_BASE_URL=&quot;https://api.openai.com/v1&quot;
      </Line>
      <Line>
        <span className="text-accent">export</span>{" "}
        OPENAI_API_KEY=&quot;sk-...&quot;
      </Line>
      <br />
      <Line comment="# Locked to one provider" />
      <Line>
        curl $OPENAI_BASE_URL/chat/completions \
      </Line>
      <Line indent>
        -H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \
      </Line>
      <Line indent>
        -d <span className="text-accent">&apos;&#123;</span>
      </Line>
      <Line indent>
        {"    "}&quot;model&quot;: &quot;gpt-4o&quot;,
      </Line>
      <Line indent>
        {"    "}&quot;messages&quot;: [&#123;&quot;role&quot;:
        &quot;user&quot;, &quot;content&quot;: &quot;Hello&quot;&#125;]
      </Line>
      <Line indent>
        <span className="text-accent">&#125;&apos;</span>
      </Line>
    </>
  );
}

function AfterCode() {
  return (
    <>
      <Line comment="# Point at UsagePass — that's it" />
      <Line>
        <span className="text-accent">export</span>{" "}
        OPENAI_BASE_URL=&quot;<span className="text-accent">https://api.usagepass.com/v1</span>&quot;
      </Line>
      <Line>
        <span className="text-accent">export</span>{" "}
        OPENAI_API_KEY=&quot;<span className="text-accent">up_live_...</span>&quot;
      </Line>
      <br />
      <Line comment="# Now use any model from any provider" />
      <Line>
        curl $OPENAI_BASE_URL/chat/completions \
      </Line>
      <Line indent>
        -H &quot;Authorization: Bearer $OPENAI_API_KEY&quot; \
      </Line>
      <Line indent>
        -d <span className="text-accent">&apos;&#123;</span>
      </Line>
      <Line indent>
        {"    "}&quot;model&quot;: &quot;<span className="text-accent">anthropic/claude-sonnet</span>&quot;,
      </Line>
      <Line indent>
        {"    "}&quot;messages&quot;: [&#123;&quot;role&quot;:
        &quot;user&quot;, &quot;content&quot;: &quot;Hello&quot;&#125;]
      </Line>
      <Line indent>
        <span className="text-accent">&#125;&apos;</span>
      </Line>
    </>
  );
}

function Line({
  children,
  comment,
  indent,
}: {
  children?: React.ReactNode;
  comment?: string;
  indent?: boolean;
}) {
  if (comment) {
    return (
      <div className="text-[var(--color-code-muted)]">
        {comment}
      </div>
    );
  }
  return (
    <div className={`text-foreground ${indent ? "pl-4" : ""}`}>
      {children}
    </div>
  );
}
