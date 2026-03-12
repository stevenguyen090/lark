import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import WhoIsThisForSection from "@/components/home/WhoIsThisForSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import SolutionSection from "@/components/home/SolutionSection";
import ResultsSection from "@/components/home/ResultsSection";
import AIAgentSection from "@/components/home/AIAgentSection";
import PricingSection from "@/components/home/PricingSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import ReviewSection from "@/components/home/ReviewSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Logo Bar */}
      <SocialProofSection />

      {/* 3. Dành cho ai? */}
      <WhoIsThisForSection />

      {/* 4. Before/After */}
      <BeforeAfterSection />

      {/* 5. Services - 2 Tầng */}
      <SolutionSection />

      {/* 6. Stats */}
      <ResultsSection />

      {/* 7. AI Agent Use Cases */}
      <AIAgentSection />

      {/* 8. Pricing */}
      <PricingSection />

      {/* 9. Case Studies */}
      <CaseStudyPreview />

      {/* 10. Testimonials */}
      <ReviewSection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
