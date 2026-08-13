const models = [
  "Claude",
  "GPT",
  "Gemini",
  "Kimi",
  "GLM",
  "Qwen",
  "DeepSeek",
];

export function ModelStrip() {
  return (
    <section className="border-y border-border-subtle bg-surface py-6">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Access models from every major provider
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {models.map((name) => (
            <span
              key={name}
              className="font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              {name}
            </span>
          ))}
          <span className="font-mono text-sm text-muted-foreground">
            + more
          </span>
        </div>
      </div>
    </section>
  );
}
