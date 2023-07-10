import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { PageMargin } from "@/components/PageMargin/PageMargin";

import { WaitlistSection } from "@/components/WaitlistSection/WaitlistSection";

export default function Index() {
  return (
    <>
      <HeroSection />
      <PageMargin>
        <WaitlistSection/>
      </PageMargin>

      <Footer />
    </>
  );
}
