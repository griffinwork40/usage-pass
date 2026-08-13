import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ModelStrip } from "@/components/model-strip";
import { Problem } from "@/components/problem";
import { ApiExample } from "@/components/api-example";
import { Benefits } from "@/components/benefits";
import { Pricing } from "@/components/pricing";
import { SignupSection } from "@/components/signup-section";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { EarnedPath, ScopeRule } from "@/components/signature";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ModelStrip />

        {/* Descent: signal → depth transition */}
        <EarnedPath className="opacity-60" direction="right" />

        <Problem />

        <ScopeRule className="mx-auto max-w-6xl px-6" label="how" />

        <ApiExample />

        {/* Compression zone transition */}
        <EarnedPath className="opacity-40" direction="left" />

        <Benefits />

        <ScopeRule className="mx-auto max-w-6xl px-6" label="cost" />

        <Pricing />

        {/* Rise: compression → embodiment transition */}
        <EarnedPath className="opacity-50" direction="right" />

        <SignupSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
