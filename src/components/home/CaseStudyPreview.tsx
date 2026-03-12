import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { usePublishedCaseStudies } from "@/hooks/useCaseStudies";

const CaseStudyPreview = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const { data: allCases, isLoading } = usePublishedCaseStudies(selectedIndustry ? { industry: selectedIndustry } : undefined);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); o.unobserve(e.target); } }), { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => o.observe(el));
    return () => o.disconnect();
  }, []);

  const industries = [
    { value: null, label: "Tất cả" },
    { value: "service", label: "Dịch vụ" },
    { value: "retail", label: "Bán lẻ" },
    { value: "fitness", label: "Fitness" },
    { value: "manufacturing", label: "Sản xuất" },
  ];

  const getThumbnail = (cs: any): string | null => {
    try { const sol = cs.solution as any; if (sol?.attachments) { const img = sol.attachments.find((a: any) => a.type === "image"); if (img) return img.url; } } catch {} return null;
  };
  const previewCases = [...(allCases || [])].sort((a, b) => { const aH = !!getThumbnail(a); const bH = !!getThumbnail(b); return (bH ? 1 : 0) - (aH ? 1 : 0); }).slice(0, 3);
  const getKeyResult = (cs: any): string | null => { try { const r = cs.results as any; if (Array.isArray(r) && r.length > 0) return r[0].label || r[0].value || null; } catch {} return null; };
  const tagColor = (ind: string) => {
    switch (ind) { case "service": return { bg: "rgba(37,99,235,0.1)", color: "#3B82F6" }; case "fitness": return { bg: "rgba(245,158,11,0.1)", color: "#FBBF24" }; case "retail": return { bg: "rgba(16,185,129,0.1)", color: "#34D399" }; default: return { bg: "rgba(37,99,235,0.1)", color: "#3B82F6" }; }
  };

  return (
    <section id="cases" ref={ref} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Case Studies</div>
        <h2 className="heading-h2 reveal">Doanh nghiệp giống bạn đã giải quyết <span className="kw">như thế nào?</span></h2>
        <div className="flex gap-2 flex-wrap mt-8 mb-6 reveal">
          {industries.map((ind) => (
            <button key={ind.label} onClick={() => setSelectedIndustry(ind.value)} className="px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer" style={{ background: selectedIndustry === ind.value ? "#2563EB" : "#0E1E35", color: selectedIndustry === ind.value ? "white" : "#94A3B8", border: `1px solid ${selectedIndustry === ind.value ? "#2563EB" : "rgba(255,255,255,0.09)"}`, fontFamily: "Inter, system-ui, sans-serif" }}>{ind.label}</button>
          ))}
        </div>
        {isLoading ? <div className="text-center py-12 text-t-secondary">Đang tải...</div> : previewCases.length === 0 ? <div className="text-center py-12 text-t-secondary">Chưa có case study.</div> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {previewCases.map((cs, i) => {
              const tc = tagColor(cs.industry || "");
              const result = getKeyResult(cs);
              return (
                <Link key={cs.id} to={`/case-studies/${cs.slug}`} className={`card-dark p-6 cursor-pointer reveal ${i > 0 ? `reveal-d${i}` : ""}`}>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="text-[11px] font-bold px-2 py-[3px] rounded" style={{ background: tc.bg, color: tc.color }}>{cs.industry_label}</span>
                    <span className="text-[11px] font-bold px-2 py-[3px] rounded" style={{ background: "#132540", color: "#4E6380" }}>{cs.scale_label}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-t-tertiary mb-1.5">Vấn đề: {cs.main_problem_label}</div>
                  <div className="font-semibold text-base text-t-primary mb-4" style={{ lineHeight: 1.5 }}>{cs.title}</div>
                  {result && <div className="text-sm font-bold text-g-400 flex items-center gap-1.5">⚡ {result}</div>}
                  <div className="text-sm font-semibold text-b-500 mt-3 flex items-center gap-1">Xem chi tiết →</div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default CaseStudyPreview;
