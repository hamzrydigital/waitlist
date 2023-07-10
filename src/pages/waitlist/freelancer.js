import { CommitmentSection } from "@/components/CommitmentSection/CommitmentSection";
import { DecoratorSection } from "@/components/DecoratorSection/DecoratorSection";
import { FeaturesSection } from "@/components/FeaturesSection/FeaturesSection";
import { Footer } from "@/components/Footer/Footer";
import { WaitlistHeroSection } from "@/components/HeroSection/WaitlistHeroSection";
import { OfferingSection } from "@/components/OfferingSection/OfferingSection";
import { PageMargin } from "@/components/PageMargin/PageMargin";
import { ProcessSection } from "@/components/ProcessSection/ProcessSection";
import { SubscriptionSection } from "@/components/SubscriptionSection/SubscriptionSection";

import heroImage from "@/assets/images/hero-image.png";

export default function Index() {
  return (
    <>
      <WaitlistHeroSection
        heroImage= {heroImage}
        tagLine="A marketplace for digital services"
        title=" Are you a talented freelancer? We&apos;ve got jobs for you!"
        description="Hamzry is a new platform that connects top clients from all over the
        world to"
        span="Nigerian Freelancers."
        buttonText="Join the waitlist"
      />

      <PageMargin>
        <DecoratorSection
          ratingCount= "374"
          ratingName= "James Okafor"
          milestoneCount= "8"
          ratingCountTwo= "378"
          ratingNameTwo= "Esther Ngozi"
          milestoneCountTwo= "8"
          paymentOne= "723,450"
          paymentTwo= "723,450"
        />

        <ProcessSection
          tagLine="Welcome to Hamzry"
          title="Where talent meets opportunity"
          description="Are you tired of the traditional job market and looking for a more
          flexible and rewarding way to work? Work with the largest network of
          independent professionals and get things done-from quick turnarounds
          to big transformations."
          buttonText="Join the waitlist"
        />

        <CommitmentSection />
      </PageMargin>

      <FeaturesSection
        title=""
        description="Our marketplace features a rating and review system, secure
        payment processing, and a support team dedicated to helping our
        users succeed"
        buttonText="Join the Waitlist"
      />

      <PageMargin>
        <OfferingSection
          tagLine=" Ready to Boost Your Career in the Creative Space?"
          title="Join Hamzry waitlist and start landing high-paying gigs."
          description="Join Hamzry Waitlist to Connect with Top Brands and Showcase Your
          Creative Talent to the World. Whether you are a graphic designer,
          social media manager,content writer or copywriter, Hamzry has the
          platform to help you elevate your career and connect with global
          clients. Join us now to access exclusive opportunities in web design,
          branding, content creation, and more."
        />
      </PageMargin>

      <SubscriptionSection />

      <Footer />
    </>
  );
}
