export function CheckIcon({ filled }: { filled?: boolean }) {
  return (
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-full ${
        filled
          ? "bg-accent/20 text-accent"
          : "bg-surface-raised text-muted"
      }`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 7L6 9.5L10.5 4.5" />
      </svg>
    </div>
  );
}

export function XIcon() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-raised text-muted-foreground">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M3 3L9 9M9 3L3 9" />
      </svg>
    </div>
  );
}
