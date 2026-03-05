import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import SolutionSection from "@/components/home/SolutionSection";
import ReviewSection from "@/components/home/ReviewSection";
import ServicesSection from "@/components/home/ServicesSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Pain Points – 4 cards */}
      <PainPointsSection />

      {/* 3. Social Proof – logos, metrics, mini cases */}
      <SocialProofSection />

      {/* 4. Quy trình triển khai */}
      <SolutionSection />

      {/* 5. Testimonials */}
      <ReviewSection />

      {/* 6. Giải pháp cung cấp */}
      <ServicesSection />

      {/* 7. So sánh */}
      <ComparisonSection />

      {/* 8. Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
