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
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-content">
        {/* Heading with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-[120px] bg-border" />
          <p className="text-center text-muted-foreground font-medium text-base md:text-lg tracking-wide uppercase">
            Được hơn <span className="text-primary font-bold">30+</span> doanh nghiệp đã tin tưởng triển khai
          </p>
          <div className="h-px flex-1 max-w-[120px] bg-border" />
        </div>

        {/* Static logo grid - centered */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
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
