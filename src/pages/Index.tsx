import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import SolutionSection from "@/components/home/SolutionSection";
import ReviewSection from "@/components/home/ReviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Pain Points */}
      <PainPointsSection />

      {/* 3. Social Proof */}
      <SocialProofSection />

      {/* 4. Quy trình triển khai */}
      <SolutionSection />

      {/* 5. Testimonials */}
      <ReviewSection />

      {/* 6. Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
