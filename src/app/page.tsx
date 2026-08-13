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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ModelStrip />
        <Problem />
        <ApiExample />
        <Benefits />
        <Pricing />
        <SignupSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
