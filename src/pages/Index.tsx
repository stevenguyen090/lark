import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import JTBDSection from "@/components/home/JTBDSection";
import SolutionSection from "@/components/home/SolutionSection";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import ReviewSection from "@/components/home/ReviewSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* Section 1: Hero - Value Proposition + Dual CTA */}
      <HeroSection />
      
      {/* Section 2: Social Proof theo ngành (moved up) */}
      <SocialProofSection />
      
      {/* Section 3: SME Reality Check - Scan-based checklist */}
      <PainPointsSection />
      
      {/* Section 4: Core Solution Statement */}
      <JTBDSection />
      
      {/* Section 5: Process Steps (updated Step 2 & 4) */}
      <SolutionSection />
      
      {/* Section 6: Case Study Preview */}
      <CaseStudyPreview />
      
      {/* Section 7: Review & Feedback (NEW) */}
      <ReviewSection />
      
      {/* Section 8: Final CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
