import { useEffect, useRef } from "react";

const CTA_LINK = "https://larkconsult.sg.larksuite.com/share/base/form/shrlgOQm9YZugwbV6FaVibRHQ3b";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); o.unobserve(e.target); } }), { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => o.observe(el));
    return () => o.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative overflow-hidden text-center" style={{ padding: "96px 0" }}>
      <div className="absolute pointer-events-none" style={{ top: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "50px 50px", maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)" }} />
      <div className="container-content relative z-[1]">
        <div className="eyebrow justify-center reveal"><div className="eyebrow-pip" />Bắt đầu ngay hôm nay</div>
        <h2 className="heading-hero max-w-[640px] mx-auto mb-4 reveal">Sẵn sàng xây hệ thống vận hành trong <span className="kw">90 ngày tới?</span></h2>
        <p className="body-lg max-w-[480px] mx-auto mb-10 reveal reveal-d1">Bắt đầu bằng buổi tư vấn miễn phí 60 phút — chúng tôi phân tích thực trạng và đề xuất hướng đi cụ thể, không ràng buộc.</p>
        <div className="flex gap-3 justify-center flex-wrap mb-8 reveal reveal-d2">
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow">Đặt lịch tư vấn →</a>
          <a href="https://zalo.me/0905652628" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.15)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z"/></svg>
            Nhắn Zalo — phản hồi trong 30 phút
          </a>
        </div>
        <div className="flex justify-center gap-6 flex-wrap reveal reveal-d3">
          {["Miễn phí, không ràng buộc", "Phản hồi trong 24h", "30+ doanh nghiệp đã tin tưởng"].map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm text-t-tertiary"><span className="text-g-400">✓</span> {t}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CTASection;
