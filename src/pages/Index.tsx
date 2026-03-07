import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
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

      {/* 2. Social Proof Logos – ngay dưới dashboard */}
      <SocialProofSection />

      {/* 3. Kết quả thực tế – Proof */}
      <ResultsSection />

      {/* 4. Before/After – Relatability */}
      <BeforeAfterSection />

      {/* 5. Quy trình triển khai – How we work */}
      <SolutionSection />

      {/* 6. Case Study – Evidence */}
      <CaseStudyPreview />

      {/* 7. Testimonials – Social proof push */}
      <ReviewSection />

      {/* 8. Final CTA – Action */}
      <CTASection />
    </Layout>
  );
};

export default Index;
