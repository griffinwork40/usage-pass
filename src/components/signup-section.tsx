import { SignupForm } from "./signup-form";
import { DepthGlow } from "@/components/signature";

export function SignupSection() {
  return (
    <section
      id="signup"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Warm glow — embodiment zone, arrival */}
      <DepthGlow position="upper-right" warmth="warm" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Get early access
            </h2>
            <p className="mb-6 text-lg text-muted">
              UsagePass is currently in validation. Join the list and
              you&apos;ll be first in line when the private beta opens.
            </p>
            <div className="space-y-4">
              <Bullet>
                Choose your plan now — lock in early-access pricing.
              </Bullet>
              <Bullet>
                No payment required until launch.
              </Bullet>
              <Bullet>
                Beta members shape the product.
              </Bullet>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs text-accent">
        ✓
      </span>
      <p className="text-sm text-muted">{children}</p>
    </div>
  );
}
