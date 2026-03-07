import vifitLogo from "@/assets/logos/vifit.png";
import ecomeliteLogo from "@/assets/logos/ecomelite.png";
import bivaLogo from "@/assets/logos/biva.png";
import ptfitnessLogo from "@/assets/logos/ptfitness.png";
import bohometelLogo from "@/assets/logos/bohometel.png";

const logos = [
  { src: vifitLogo, alt: "VIFIT Active" },
  { src: ecomeliteLogo, alt: "EcomElite" },
  { src: bivaLogo, alt: "Biva" },
  { src: ptfitnessLogo, alt: "PT Fitness" },
  { src: bohometelLogo, alt: "Bơ Hometel" },
];

const SocialProofSection = () => {
  // Duplicate logos for seamless infinite scroll
  const scrollLogos = [...logos, ...logos];

  return (
    <section className="py-10 bg-secondary/20 border-y border-border overflow-hidden">
      <div className="container-content">
        <p className="text-center text-muted-foreground font-medium mb-8 text-sm md:text-base">
          Được hơn <span className="text-primary font-bold">30+</span> doanh nghiệp đã tin tưởng triển khai
        </p>
      </div>
      {/* Auto-scrolling logo slider */}
      <div className="relative">
        <div className="flex items-center gap-12 md:gap-16 animate-scroll-x">
          {scrollLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-14 w-auto object-contain"
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
