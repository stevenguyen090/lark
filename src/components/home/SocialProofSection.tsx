import vifitLogo from "@/assets/logos/vifit.png";
import ecomeliteLogo from "@/assets/logos/ecomelite.png";
import bivaLogo from "@/assets/logos/biva.png";
import ptfitnessLogo from "@/assets/logos/ptfitness.png";

const logos = [
  { src: vifitLogo, alt: "VIFIT Active" },
  { src: ecomeliteLogo, alt: "EcomElite" },
  { src: bivaLogo, alt: "Biva" },
  { src: ptfitnessLogo, alt: "PT Fitness" },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div className="container-content">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Doanh nghiệp đã{" "}
            <span className="text-primary">tin tưởng triển khai</span>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
