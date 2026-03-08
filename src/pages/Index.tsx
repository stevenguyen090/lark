import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import ResultsSection from "@/components/home/ResultsSection";
import SolutionSection from "@/components/home/SolutionSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import ReviewSection from "@/components/home/ReviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero – Hook & Value Prop */}
      <HeroSection />

      {/* 2. Social Proof Logos */}
      <SocialProofSection />

      {/* 3. Kết quả triển khai thực tế */}
      <ResultsSection />

      {/* 4. Lark Consult làm gì cho doanh nghiệp */}
      <SolutionSection />

      {/* 5. Before/After – So sánh trước và sau */}
      <BeforeAfterSection />

      {/* 6. Case Study – Evidence */}
      <CaseStudyPreview />

      {/* 7. Testimonials */}
      <ReviewSection />

      {/* 8. Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
