import { useEffect, useRef } from "react";
const stats = [
  { num: "30+", label: "Doanh nghiệp triển khai", ctx: "5–100 nhân sự · đa ngành" },
  { num: "92/100", label: "Mức độ hài lòng", ctx: "Sẵn sàng giới thiệu network" },
  { num: "120+", label: "Quy trình chuẩn hoá", ctx: "Sales → ops → CSKH" },
  { num: "30–50%", label: "Giảm thời gian xử lý", ctx: "Trong 90 ngày đầu" },
];
const ResultsSection = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); o.unobserve(e.target); } }), { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => o.observe(el));
    return () => o.disconnect();
  }, []);
  return (
    <section ref={ref} className="section-padding-sm">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Kết quả thực tế</div>
        <h2 className="heading-h2 reveal">Những con số từ doanh nghiệp đã <span className="kw">đồng hành</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-12 rounded-[20px] overflow-hidden reveal" style={{ gap: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}>
          {stats.map((s, i) => (
            <div key={i} className="p-10 px-8 text-center transition-colors hover:bg-n-850" style={{ background: "#0A1628" }}>
              <div className="text-[40px] font-bold text-a-400 leading-none mb-2">{s.num}</div>
              <div className="text-base font-semibold text-t-primary mb-1">{s.label}</div>
              <div className="text-sm text-t-tertiary" style={{ lineHeight: 1.5 }}>{s.ctx}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ResultsSection;
