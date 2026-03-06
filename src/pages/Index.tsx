import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import ResultsSection from "@/components/home/ResultsSection";
import SolutionSection from "@/components/home/SolutionSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import ReviewSection from "@/components/home/ReviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero – Hook & Value Prop */}
      <HeroSection />

      {/* 2. Pain Points – TIN: "Bạn có đang gặp vấn đề này?" */}
      <PainPointsSection />

      {/* 3. Social Proof Logos – TIN: Trust signals */}
      <SocialProofSection />

      {/* 4. Kết quả thực tế – HIỂU: Understand value */}
      <ResultsSection />

      {/* 5. Quy trình triển khai – HIỂU: How we work */}
      <SolutionSection />

      {/* 6. Case Study – HIỂU: Proof from similar businesses */}
      <CaseStudyPreview />

      {/* 7. Testimonials – MUA: Social proof push */}
      <ReviewSection />

      {/* 8. Final CTA – MUA: Action */}
      <CTASection />
    </Layout>
  );
};

export default Index;
