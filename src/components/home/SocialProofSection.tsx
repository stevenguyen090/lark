const logos = ["VIFIT Active", "EcomElite", "Biva", "PT Fitness", "Bơ Hometel"];

const SocialProofSection = () => {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "24px 0" }}>
      <div className="container-content">
        <div className="flex items-center gap-10 flex-wrap">
          <span className="text-sm font-semibold text-t-tertiary whitespace-nowrap pr-6" style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            Đồng hành với hơn 30+ doanh nghiệp
          </span>
          <div className="flex items-center gap-8 flex-wrap flex-1">
            {logos.map((name) => (
              <span key={name} className="font-bold text-sm text-t-tertiary hover:text-t-secondary transition-colors" style={{ letterSpacing: "0.5px" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
