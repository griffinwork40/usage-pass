"use client";

import { useEffect, useCallback } from "react";
import { SignupForm } from "./signup-form";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function SignupModal({ open, onClose, defaultPlan }: SignupModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get early access"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-fade-up rounded-xl border border-border bg-surface p-6 shadow-2xl md:p-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 4L12 12M12 4L4 12" />
          </svg>
        </button>

        <h3 className="mb-1 text-lg font-semibold text-foreground">
          Get early access
        </h3>
        <p className="mb-6 text-sm text-muted">
          No payment required — we&apos;ll email you when the beta opens.
        </p>

        <SignupForm compact defaultPlan={defaultPlan} onSuccess={onClose} />
      </div>
    </div>
  );
}
