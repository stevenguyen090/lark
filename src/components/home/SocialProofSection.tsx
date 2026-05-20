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

const stats = [
  { value: "30+", label: "Doanh nghiệp SME" },
  { value: "4.67/5", label: "Mức độ hài lòng" },
  { value: "120+", label: "Quy trình triển khai" },
  { value: "40%", label: "Giảm thời gian vận hành" },
];

const SocialProofSection = () => {
  // Duplicate logos for seamless marquee
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        padding: "72px 0 56px",
        background: "linear-gradient(180deg, hsl(var(--neutral-950)) 0%, hsl(var(--neutral-900)) 50%, hsl(var(--neutral-950)) 100%)",
        borderTop: "1px solid hsl(var(--border-subtle))",
        borderBottom: "1px solid hsl(var(--border-subtle))",
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="eyebrow justify-center" style={{ display: "inline-flex" }}>
            <span className="eyebrow-pip" />
            TRUSTED BY
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px, 3.2vw, 36px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "hsl(var(--text-primary))",
              marginBottom: 12,
            }}
          >
            Được tin tưởng bởi <span className="kw">30+ doanh nghiệp SME</span> đang tăng trưởng
          </h2>
          <p className="body-lg" style={{ maxWidth: 620, margin: "0 auto" }}>
            Từ thương hiệu thể hình, F&B đến hometel — các founder chọn Lark Consult để chuẩn hoá vận hành và kích hoạt AI.
          </p>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          style={{
            padding: "24px",
            background: "hsl(var(--surface-1) / 0.6)",
            border: "1px solid hsl(var(--border-default))",
            borderRadius: 16,
            backdropFilter: "blur(8px)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, hsl(var(--blue-500)), hsl(var(--cyan-400)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "hsl(var(--text-secondary))",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee logos */}
        <div className="relative" style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
          <div
            className="flex items-center gap-16"
            style={{
              animation: "marqueeScroll 32s linear infinite",
              width: "max-content",
            }}
          >
            {marqueeLogos.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center justify-center shrink-0"
                style={{
                  height: 64,
                  minWidth: 160,
                  padding: "0 16px",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className="h-12 w-auto object-contain transition-all duration-300"
                  style={{
                    filter: "brightness(0) invert(1)",
                    opacity: 0.7,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "1";
                    (e.currentTarget as HTMLImageElement).style.filter = "none";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.opacity = "0.7";
                    (e.currentTarget as HTMLImageElement).style.filter = "brightness(0) invert(1)";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom rating row */}
        <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="hsl(var(--amber-400))">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: "hsl(var(--text-primary))" }}>
              4.67/5
            </span>
            <span style={{ fontSize: 14, color: "hsl(var(--text-secondary))" }}>
              từ founder & ops lead
            </span>
          </div>
          <div style={{ width: 1, height: 20, background: "hsl(var(--border-default))" }} />
          <div className="flex items-center gap-2">
            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "hsl(var(--green-400))" }} />
            <span style={{ fontSize: 14, color: "hsl(var(--text-secondary))" }}>
              Đang nhận dự án Q2/2026
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default SocialProofSection;
