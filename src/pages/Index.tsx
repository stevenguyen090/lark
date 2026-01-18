import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import JTBDSection from "@/components/home/JTBDSection";
import SolutionSection from "@/components/home/SolutionSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* Section 1: Hero - Value Proposition */}
      <HeroSection />
      
      {/* Section 2: Social Proof theo ngành */}
      <SocialProofSection />
      
      {/* Section 3: Thực trạng quen thuộc của CEO SME */}
      <PainPointsSection />
      
      {/* Section 4: Job To Be Done của CEO */}
      <JTBDSection />
      
      {/* Section 5: Cách Lark Consult giải quyết */}
      <SolutionSection />
      
      {/* Section 6: Dẫn sang Case Study */}
      <CaseStudyPreview />
      
      {/* Section 7: CTA cuối trang */}
      <CTASection />
    </Layout>
  );
};

export default Index;
