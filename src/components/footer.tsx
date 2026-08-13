export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <span className="font-mono text-sm text-muted-foreground">
          UsagePass
        </span>
        <div className="flex gap-6">
          <a
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-muted"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-muted-foreground transition-colors hover:text-muted"
          >
            FAQ
          </a>
          <a
            href="mailto:hello@usagepass.com"
            className="text-sm text-muted-foreground transition-colors hover:text-muted"
          >
            Contact
          </a>
        </div>
        <span className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} UsagePass · Built by{" "}
          <a
            href="https://github.com/griffinwork40"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            Griffin Long
          </a>
        </span>
      </div>
    </footer>
  );
}
