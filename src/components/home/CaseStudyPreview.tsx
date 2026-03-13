import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { usePublishedCaseStudies } from "@/hooks/useCaseStudies";

<<<<<<< HEAD
=======
/* ── Keyframes injected once ── */
const KEYFRAMES = `
@keyframes csSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

/* ── Static data shape ── */
type CaseItem = {
  id: string;
  slug: string;
  title: string;
  industry?: string;
  industryLabel?: string;
  scaleLabel?: string;
  mainProblemLabel?: string;
  results?: unknown;
  solution?: unknown;
};

/* ── Helpers ── */
const getKeyResult = (cs: CaseItem): string | null => {
  try {
    const r = cs.results as { label?: string; value?: string }[];
    if (Array.isArray(r) && r.length > 0) return r[0].label || r[0].value || null;
  } catch {}
  return null;
};

const getThumbnail = (cs: CaseItem): string | null => {
  try {
    const sol = cs.solution as { attachments?: { type: string; url: string }[] };
    if (sol?.attachments) {
      const img = sol.attachments.find((a) => a.type === "image");
      if (img) return img.url;
    }
  } catch {}
  return null;
};

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  service:       { bg: "rgba(37,99,235,0.12)",  color: "#3B82F6" },
  fitness:       { bg: "rgba(245,158,11,0.12)", color: "#FBBF24" },
  retail:        { bg: "rgba(16,185,129,0.12)", color: "#34D399" },
  manufacturing: { bg: "rgba(167,139,250,0.12)",color: "#A78BFA" },
};
const tagColor = (ind: string) => TAG_COLORS[ind] ?? { bg: "rgba(37,99,235,0.12)", color: "#3B82F6" };

const INDUSTRIES = [
  { value: null,             label: "Tất cả" },
  { value: "service",        label: "Dịch vụ" },
  { value: "retail",         label: "Bán lẻ" },
  { value: "fitness",        label: "Fitness" },
  { value: "manufacturing",  label: "Sản xuất" },
];

/* ════════════════════════════════════════════
   Main Component
════════════════════════════════════════════ */
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
const CaseStudyPreview = () => {
<<<<<<< HEAD
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const { data: allCases, isLoading } = usePublishedCaseStudies(selectedIndustry ? { industry: selectedIndustry } : undefined);
  const ref = useRef<HTMLElement>(null);
=======
  const [selected, setSelected] = useState<string | null>(null);
  const { data: allCases, isLoading } = usePublishedCaseStudies(
    selected ? { industry: selected } : undefined
  );

  /* inject keyframes once */
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
  useEffect(() => {
<<<<<<< HEAD
    const o = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); o.unobserve(e.target); } }), { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => o.observe(el));
    return () => o.disconnect();
=======
    if (document.getElementById("cs-keyframes")) return;
    const s = document.createElement("style");
    s.id = "cs-keyframes";
    s.textContent = KEYFRAMES;
    document.head.appendChild(s);
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
  }, []);

<<<<<<< HEAD
  const industries = [
    { value: null, label: "Tất cả" },
    { value: "service", label: "Dịch vụ" },
    { value: "retail", label: "Bán lẻ" },
    { value: "fitness", label: "Fitness" },
    { value: "manufacturing", label: "Sản xuất" },
  ];
=======
  /* sort: cards with thumbnail first, cap at 3 */
  const cases: CaseItem[] = [...((allCases as CaseItem[]) || [])]
    .sort((a, b) => (getThumbnail(b) ? 1 : 0) - (getThumbnail(a) ? 1 : 0))
    .slice(0, 3);

  /* ── Styles ── */
  const S = {
    section: {
      padding: "96px 0",
      background: "#060D18",
    } as React.CSSProperties,
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382

<<<<<<< HEAD
  const getThumbnail = (cs: any): string | null => {
    try { const sol = cs.solution as any; if (sol?.attachments) { const img = sol.attachments.find((a: any) => a.type === "image"); if (img) return img.url; } } catch {} return null;
  };
  const previewCases = [...(allCases || [])].sort((a, b) => { const aH = !!getThumbnail(a); const bH = !!getThumbnail(b); return (bH ? 1 : 0) - (aH ? 1 : 0); }).slice(0, 3);
  const getKeyResult = (cs: any): string | null => { try { const r = cs.results as any; if (Array.isArray(r) && r.length > 0) return r[0].label || r[0].value || null; } catch {} return null; };
  const tagColor = (ind: string) => {
    switch (ind) { case "service": return { bg: "rgba(37,99,235,0.1)", color: "#3B82F6" }; case "fitness": return { bg: "rgba(245,158,11,0.1)", color: "#FBBF24" }; case "retail": return { bg: "rgba(16,185,129,0.1)", color: "#34D399" }; default: return { bg: "rgba(37,99,235,0.1)", color: "#3B82F6" }; }
=======
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 24px",
    } as React.CSSProperties,

    eyebrow: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase" as const,
      color: "#3B82F6",
      marginBottom: 16,
      animation: "csSlideUp 0.6s ease 0.05s both",
    } as React.CSSProperties,

    eyebrowPip: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#3B82F6",
      flexShrink: 0,
    } as React.CSSProperties,

    heading: {
      fontSize: "clamp(26px, 3.5vw, 40px)",
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "#E8EAF0",
      marginBottom: 32,
      animation: "csSlideUp 0.6s ease 0.15s both",
    } as React.CSSProperties,

    kw: {
      background: "linear-gradient(135deg, #3B82F6, #22D3EE)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    } as React.CSSProperties,

    filters: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap" as const,
      marginBottom: 24,
      animation: "csSlideUp 0.6s ease 0.25s both",
    } as React.CSSProperties,

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
    } as React.CSSProperties,

    gridMobile: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 20,
    } as React.CSSProperties,
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
  };

  const filterBtn = (active: boolean) => ({
    padding: "7px 16px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    border: `1px solid ${active ? "#2563EB" : "rgba(255,255,255,0.09)"}`,
    background: active ? "#2563EB" : "#0E1E35",
    color: active ? "#ffffff" : "#94A3B8",
    transition: "all 0.18s ease",
    fontFamily: "Inter, system-ui, sans-serif",
  } as React.CSSProperties);

  /* responsive grid: use CSS media query via a ref trick */
  const gridRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const update = () => setCols(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
<<<<<<< HEAD
    <section id="cases" ref={ref} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Case Studies</div>
        <h2 className="heading-h2 reveal">Doanh nghiệp giống bạn đã giải quyết <span className="kw">như thế nào?</span></h2>
        <div className="flex gap-2 flex-wrap mt-8 mb-6 reveal">
          {industries.map((ind) => (
            <button key={ind.label} onClick={() => setSelectedIndustry(ind.value)} className="px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all cursor-pointer" style={{ background: selectedIndustry === ind.value ? "#2563EB" : "#0E1E35", color: selectedIndustry === ind.value ? "white" : "#94A3B8", border: `1px solid ${selectedIndustry === ind.value ? "#2563EB" : "rgba(255,255,255,0.09)"}`, fontFamily: "Inter, system-ui, sans-serif" }}>{ind.label}</button>
=======
    <section id="cases" style={S.section}>
      <div style={S.container}>

        {/* Eyebrow */}
        <div style={S.eyebrow}>
          <div style={S.eyebrowPip} />
          Case Studies
        </div>

        {/* Heading */}
        <h2 style={S.heading}>
          Doanh nghiệp giống bạn đã giải quyết{" "}
          <span style={S.kw}>như thế nào?</span>
        </h2>

        {/* Filter tabs */}
        <div style={S.filters}>
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.label}
              onClick={() => setSelected(ind.value)}
              style={filterBtn(selected === ind.value)}
              onMouseEnter={e => {
                if (selected !== ind.value) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#E8EAF0";
                }
              }}
              onMouseLeave={e => {
                if (selected !== ind.value) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.09)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
                }
              }}
            >
              {ind.label}
            </button>
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
          ))}
        </div>
<<<<<<< HEAD
        {isLoading ? <div className="text-center py-12 text-t-secondary">Đang tải...</div> : previewCases.length === 0 ? <div className="text-center py-12 text-t-secondary">Chưa có case study.</div> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {previewCases.map((cs, i) => {
=======

        {/* Content */}
        {isLoading ? (
          /* Loading skeleton */
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 20 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{
                borderRadius: 16,
                background: "#0E1E35",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: 24,
                animation: `csSlideUp 0.5s ease ${i * 0.08}s both`,
              }}>
                {/* skeleton lines */}
                {[80, 60, 100, 90, 70].map((w, j) => (
                  <div key={j} style={{
                    height: j === 0 ? 10 : j === 3 ? 16 : 10,
                    width: `${w}%`,
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.05)",
                    marginBottom: j === 2 ? 16 : 8,
                  }} />
                ))}
              </div>
            ))}
          </div>
        ) : cases.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 0", color: "#4E6380", fontSize: 15 }}>
            Chưa có case study cho danh mục này.
          </div>
        ) : (
          <div
            ref={gridRef}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 20,
            }}
          >
            {cases.map((cs, i) => {
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
              const tc = tagColor(cs.industry || "");
              const result = getKeyResult(cs);
              const delays = [0.35, 0.45, 0.55];

              return (
<<<<<<< HEAD
                <Link key={cs.id} to={`/case-studies/${cs.slug}`} className={`card-dark p-6 cursor-pointer reveal ${i > 0 ? `reveal-d${i}` : ""}`}>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="text-[11px] font-bold px-2 py-[3px] rounded" style={{ background: tc.bg, color: tc.color }}>{cs.industryLabel}</span>
                    <span className="text-[11px] font-bold px-2 py-[3px] rounded" style={{ background: "#132540", color: "#4E6380" }}>{cs.scaleLabel}</span>
=======
                <Link
                  key={cs.id}
                  to={`/case-studies/${cs.slug}`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: 16,
                    background: "#0E1E35",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: 24,
                    cursor: "pointer",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                    animation: `csSlideUp 0.6s ease ${delays[i] ?? 0.35}s both`,
                    /* force visible — no opacity:0 trap */
                    opacity: 1,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(59,130,246,0.45)";
                    el.style.boxShadow = "0 0 0 1px rgba(59,130,246,0.12), 0 8px 32px rgba(37,99,235,0.15)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Tags */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700,
                      padding: "3px 8px", borderRadius: 4,
                      background: tc.bg, color: tc.color,
                    }}>
                      {cs.industryLabel || cs.industry}
                    </span>
                    {cs.scaleLabel && (
                      <span style={{
                        fontSize: 11, fontWeight: 700,
                        padding: "3px 8px", borderRadius: 4,
                        background: "rgba(255,255,255,0.05)",
                        color: "#4E6380",
                      }}>
                        {cs.scaleLabel}
                      </span>
                    )}
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
                  </div>
<<<<<<< HEAD
                  <div className="text-[11px] font-semibold text-t-tertiary mb-1.5">Vấn đề: {cs.mainProblemLabel}</div>
                  <div className="font-semibold text-base text-t-primary mb-4" style={{ lineHeight: 1.5 }}>{cs.title}</div>
                  {result && <div className="text-sm font-bold text-g-400 flex items-center gap-1.5">⚡ {result}</div>}
                  <div className="text-sm font-semibold text-b-500 mt-3 flex items-center gap-1">Xem chi tiết →</div>
=======

                  {/* Problem label */}
                  {cs.mainProblemLabel && (
                    <div style={{
                      fontSize: 11, fontWeight: 600,
                      color: "#4E6380", marginBottom: 8,
                    }}>
                      Vấn đề: {cs.mainProblemLabel}
                    </div>
                  )}

                  {/* Title */}
                  <div style={{
                    fontSize: 15, fontWeight: 600,
                    color: "#E8EAF0", lineHeight: 1.55,
                    marginBottom: 16,
                  }}>
                    {cs.title}
                  </div>

                  {/* Key result */}
                  {result && (
                    <div style={{
                      fontSize: 13, fontWeight: 700,
                      color: "#34D399",
                      display: "flex", alignItems: "center", gap: 6,
                      marginBottom: 12,
                    }}>
                      ⚡ {result}
                    </div>
                  )}

                  {/* CTA arrow */}
                  <div style={{
                    fontSize: 13, fontWeight: 600,
                    color: "#3B82F6",
                    display: "flex", alignItems: "center", gap: 4,
                    marginTop: 4,
                  }}>
                    Xem chi tiết →
                  </div>
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
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
