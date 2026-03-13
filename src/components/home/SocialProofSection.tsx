import vifit from "@/assets/logos/vifit.png";
import ecomelite from "@/assets/logos/ecomelite.png";
import biva from "@/assets/logos/biva.png";
import ptfitness from "@/assets/logos/ptfitness.png";
import bohometel from "@/assets/logos/bohometel.png";

const logos = [
  { name: "VIFIT Active", src: vifit },
  { name: "EcomElite", src: ecomelite },
  { name: "Biva", src: biva },
  { name: "PT Fitness", src: ptfitness },
  { name: "Bơ Hometel", src: bohometel },
];

const SocialProofSection = () => {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "24px 0" }}>
      <div className="container-content">
        <div className="flex items-center gap-10 flex-wrap">
          <span className="text-sm font-semibold text-t-tertiary whitespace-nowrap pr-6" style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            Đồng hành với hơn 30+ doanh nghiệp
          </span>
          <div className="flex items-center gap-8 flex-wrap flex-1">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-8 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
                title={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
