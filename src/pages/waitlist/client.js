import { CommitmentSection } from "@/components/CommitmentSection/CommitmentSection";
import { DecoratorSection } from "@/components/DecoratorSection/DecoratorSection";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { Footer } from "@/components/Footer/Footer";
import { WaitlistHeroSection } from "@/components/HeroSection/WaitlistHeroSection";
import { OfferingSection } from "@/components/OfferingSection/OfferingSection";
import { PageMargin } from "@/components/PageMargin/PageMargin";
import { ProcessSection } from "@/components/ProcessSection/ProcessSection";
import { SubscriptionSection } from "@/components/SubscriptionSection/SubscriptionSection";

import heroImage from '@/assets/images/hero-img.png';

export default function Index() {
  return (
    <>
      <WaitlistHeroSection
        heroImage= {heroImage}
        tagLine="A marketplace for digital services"
        title="Save Money, Hire Smarter: Access Top Nigerian Freelancers"
        description="Hamzry connects you to talented Nigerian Freelancers. That have been vetted by industry professionals"
        buttonText="Join the waitlist"
      />

      <PageMargin>
        <DecoratorSection
          ratingCount= "233"
          ratingName= "James Okafor"
          milestoneCount= "8"
          ratingCountTwo= "628"
          ratingNameTwo= "Esther Ngozi"
          milestoneCountTwo= "8"
          paymentOne= "1,283,000"
          paymentTwo= "723,450"
        />

        <ProcessSection
          tagLine="Welcome to Hamzry"
          title="Hire and Pay on Demand"
          description="Are you tired of the constant expenses associated with hiring and
          maintaining a full time staff? Imagine a world where you only pay
          for the work you need when you need it. Hamzry makes that
          possible!"
          buttonText="Join the waitlist"
        />

        <CommitmentSection />
      </PageMargin>

      <FeaturesSection
        title="You Don&apos;t need HR"
        description=" Say goodbye to the lengthy hiring process and endless hours wasted
        on unqualified applicants. At Hamzry, we carefully vet every
        freelancer before their profiles go live, ensuring that
        you&apos;re only connected with the best in the country."
        buttonText="Join the Waitlist"
      />

      <PageMargin>
        <OfferingSection
          tagLine="Ready to Supercharge Your Business?"
          title="Cut down on business expenses by hiring skilled freelancers."
          description="Join our waitlist now and be the first to know when we launch!
          Experience the time and energy-saving benefits of hamzry, where
          finding and hiring top talent for your business is faster, easier, and
          more cost effective than ever before."
          buttonText="Join the waitlist"
        />
      </PageMargin>

      <SubscriptionSection />

      <Footer />
    </>
  );
}
