export function ApiExample() {
  return (
    <section className="border-t border-border-subtle py-20 md:py-28">
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

          {/* Code block */}
          <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
              <span className="font-mono text-xs text-muted-foreground">
                setup.sh
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
              <code>
                <Line comment="# Point any OpenAI-compatible tool at UsagePass" />
                <Line>
                  <span className="text-accent">export</span>{" "}
                  OPENAI_BASE_URL=&quot;https://api.usagepass.com/v1&quot;
                </Line>
                <Line>
                  <span className="text-accent">export</span>{" "}
                  OPENAI_API_KEY=&quot;up_live_...&quot;
                </Line>
                <br />
                <Line comment="# Now use any model" />
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
                  {"    "}&quot;model&quot;: &quot;anthropic/claude-sonnet&quot;,
                </Line>
                <Line indent>
                  {"    "}&quot;messages&quot;: [&#123;&quot;role&quot;:
                  &quot;user&quot;, &quot;content&quot;: &quot;Hello&quot;&#125;]
                </Line>
                <Line indent>
                  <span className="text-accent">&#125;&apos;</span>
                </Line>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
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
      <div className="text-muted-foreground">
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
