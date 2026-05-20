import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import WhoIsThisForSection from "@/components/home/WhoIsThisForSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import SolutionSection from "@/components/home/SolutionSection";
import AIAgentSection from "@/components/home/AIAgentSection";
import PricingSection from "@/components/home/PricingSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import ReviewSection from "@/components/home/ReviewSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SocialProofSection />
      <WhoIsThisForSection />
      <BeforeAfterSection />
      <SolutionSection />
      <AIAgentSection />
      <PricingSection />
      <CaseStudyPreview />
      <ReviewSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
