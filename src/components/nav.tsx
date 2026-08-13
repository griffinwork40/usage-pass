"use client";

import { useState } from "react";
import { trackCtaClick } from "@/lib/analytics";
import { useSignupModal } from "./signup-modal-provider";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useSignupModal();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/95">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-foreground"
        >
          UsagePass
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            FAQ
          </a>
          <button
            onClick={() => {
              trackCtaClick("nav");
              openModal();
            }}
            className="rounded-md bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border-subtle bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted hover:text-foreground"
            >
              How it works
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted hover:text-foreground"
            >
              FAQ
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                trackCtaClick("nav-mobile");
                openModal();
              }}
              className="rounded-md bg-foreground px-4 py-2 text-center text-sm font-medium text-background"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
