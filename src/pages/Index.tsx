import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import WhoIsThisForSection from "@/components/home/WhoIsThisForSection";
import VisionSection from "@/components/home/VisionSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import SolutionSection from "@/components/home/SolutionSection";
import AIAgentSection from "@/components/home/AIAgentSection";
import ResultsSection from "@/components/home/ResultsSection";
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

      {/* 4. Vision (MỚI v2.0) */}
      <VisionSection />

      {/* 5. Before/After */}
      <BeforeAfterSection />

      {/* 6. Services - 2 Tầng */}
      <SolutionSection />

      {/* 7. AI Agent Use Cases (MỚI v2.0) */}
      <AIAgentSection />

      {/* 8. Stats - Dark bg */}
      <ResultsSection />

      {/* 9. Pricing - 3 gói */}
      <PricingSection />

      {/* 10. Case Studies */}
      <CaseStudyPreview />

      {/* 11. Testimonials */}
      <ReviewSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
