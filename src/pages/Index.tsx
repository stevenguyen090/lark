import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import WhoIsThisForSection from "@/components/home/WhoIsThisForSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import SolutionSection from "@/components/home/SolutionSection";
import ResultsSection from "@/components/home/ResultsSection";
import PricingSection from "@/components/home/PricingSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import ReviewSection from "@/components/home/ReviewSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero – Hook & Value Prop */}
      <HeroSection />

      {/* 2. Social Proof Logos */}
      <SocialProofSection />

      {/* 3. Dành cho ai? */}
      <WhoIsThisForSection />

      {/* 4. Before/After */}
      <BeforeAfterSection />

      {/* 5. Dịch vụ */}
      <SolutionSection />

      {/* 6. Kết quả thực tế */}
      <ResultsSection />

      {/* 7. Pricing */}
      <PricingSection />

      {/* 8. Case Studies */}
      <CaseStudyPreview />

      {/* 9. Testimonials */}
      <ReviewSection />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
