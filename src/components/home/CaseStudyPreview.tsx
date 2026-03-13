import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { usePublishedCaseStudies } from "@/hooks/useCaseStudies";

/* ─────────────────────────────────────────────────────────────────
   CSS classes inject từ HTML source — giữ nguyên 100% giá trị gốc
   (cùng file INJECTED_CSS với HeroSection, idempotent)
───────────────────────────────────────────────────────────────── */
const INJECTED_CSS = `
  :root {
    --blue-500:#3B82F6; --blue-600:#2563EB; --blue-700:#1D4ED8;
    --cyan-400:#22D3EE; --cyan-500:#06B6D4;
    --amber-400:#FBBF24; --green-400:#34D399; --green-500:#10B981;
    --red-400:#F87171;
    --neutral-950:#060D18; --neutral-900:#0A1628; --neutral-850:#0E1E35;
    --neutral-800:#132540; --neutral-750:#182D4C; --neutral-600:#2A4570;
    --neutral-300:#94A3B8;
    --bg:var(--neutral-950);
    --surface-1:var(--neutral-900); --surface-2:var(--neutral-850);
    --surface-3:var(--neutral-800); --surface-4:var(--neutral-750);
    --border-subtle:rgba(255,255,255,0.05); --border-default:rgba(255,255,255,0.09);
    --border-strong:rgba(255,255,255,0.14); --border-blue:rgba(37,99,235,0.35);
    --text-primary:#F0F6FF; --text-secondary:#94A3B8; --text-tertiary:#4E6380;
    --glow-blue:0 0 60px rgba(37,99,235,0.18);
    --font-primary:'Inter',system-ui,-apple-system,sans-serif;
    --text-hero:clamp(48px,5vw,56px); --text-h2:32px; --text-body:16px; --text-small:14px;
    --fw-hero:700; --fw-h2:600; --fw-body:400;
    --lh-hero:1.2; --lh-heading:1.25; --lh-body:1.65;
    --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px;
    --space-5:20px; --space-6:24px; --space-8:32px; --space-10:40px;
    --space-12:48px; --space-16:64px; --space-20:80px; --space-24:96px;
    --r-sm:6px; --r-md:10px; --r-lg:14px; --r-xl:20px; --r-full:9999px;
    --t-fast:150ms; --t-base:250ms; --t-slow:400ms;
    --ease:cubic-bezier(0.4,0,0.2,1);
  }
  .heading-hero { font-family:var(--font-primary); font-size:var(--text-hero); font-weight:var(--fw-hero); line-height:var(--lh-hero); letter-spacing:-0.02em; color:var(--text-primary); }
  .heading-h2   { font-family:var(--font-primary); font-size:var(--text-h2);   font-weight:var(--fw-h2);   line-height:var(--lh-heading); letter-spacing:-0.015em; color:var(--text-primary); }
  .body-lg      { font-size:var(--text-body); font-weight:var(--fw-body); color:var(--text-secondary); line-height:var(--lh-body); }
  .kw           { color:var(--blue-500); font-weight:inherit; }
  .eyebrow      { display:inline-flex; align-items:center; gap:var(--space-2); font-size:var(--text-small); font-weight:600; letter-spacing:1px; color:var(--cyan-400); margin-bottom:var(--space-4); }
  .eyebrow-pip  { width:5px; height:5px; border-radius:50%; background:var(--green-400); animation:pip-blink 2.4s ease-in-out infinite; }
  @keyframes pip-blink { 0%,100%{opacity:1} 50%{opacity:.25} }
  .btn { display:inline-flex; align-items:center; justify-content:center; gap:var(--space-2); border:none; border-radius:var(--r-md); font-family:var(--font-primary); font-weight:600; transition:all var(--t-base) var(--ease); white-space:nowrap; text-decoration:none; cursor:pointer; }
  .btn--lg  { padding:14px 28px; font-size:15px; }
  .btn--primary { background:var(--blue-600); color:#fff; box-shadow:0 0 0 1px var(--blue-700),0 4px 20px rgba(37,99,235,0.35); }
  .btn--primary:hover { background:var(--blue-500); transform:translateY(-2px); box-shadow:0 0 0 1px var(--blue-600),0 8px 32px rgba(37,99,235,0.5); }
  .btn--ghost { background:transparent; color:var(--text-secondary); border:1px solid var(--border-default); }
  .btn--ghost:hover { color:var(--text-primary); border-color:var(--border-strong); background:var(--surface-2); }
  .card { background:var(--surface-1); border:1px solid var(--border-default); border-radius:var(--r-lg); transition:border-color var(--t-base),box-shadow var(--t-base),transform var(--t-base); }
  .card:hover { border-color:var(--border-blue); box-shadow:var(--glow-blue); transform:translateY(-3px); }
  .container-content { max-width:1180px; margin:0 auto; padding:0 var(--space-6); }
  .section-padding { padding:var(--space-24) 0; }
  .reveal { opacity:0; transform:translateY(24px); transition:opacity var(--t-slow) var(--ease),transform var(--t-slow) var(--ease); }
  .reveal.revealed { opacity:1; transform:translateY(0); }
  .reveal-d1 { transition-delay:80ms; }
  .reveal-d2 { transition-delay:160ms; }
  .reveal-d3 { transition-delay:240ms; }
  .cs-filters { display:flex; gap:var(--space-2); flex-wrap:wrap; margin:var(--space-8) 0 var(--space-6); }
  .cs-filter { padding:7px 16px; border-radius:var(--r-full); font-size:var(--text-small); font-weight:600; cursor:pointer; background:var(--surface-2); color:var(--text-secondary); border:1px solid var(--border-default); transition:all var(--t-base); font-family:var(--font-primary); }
  .cs-filter.active, .cs-filter:hover { background:var(--blue-600); color:#fff; border-color:var(--blue-600); }
  .cs-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:var(--space-5); }
  .cs-card { padding:var(--space-6); cursor:pointer; }
  .cs-tags { display:flex; gap:var(--space-2); flex-wrap:wrap; margin-bottom:var(--space-4); }
  .cs-tag { font-size:11px; font-weight:700; padding:3px 8px; border-radius:4px; }
  .cs-tag--svc { background:rgba(37,99,235,0.1);   color:var(--blue-500); }
  .cs-tag--fit { background:rgba(245,158,11,0.1);  color:var(--amber-400); }
  .cs-tag--ret { background:rgba(16,185,129,0.1);  color:var(--green-400); }
  .cs-tag--mfg { background:rgba(167,139,250,0.1); color:#A78BFA; }
  .cs-tag--sz  { background:var(--surface-3); color:var(--text-tertiary); }
  .cs-pain   { font-size:11px; font-weight:600; color:var(--text-tertiary); margin-bottom:6px; }
  .cs-title  { font-weight:600; font-size:var(--text-body); line-height:1.5; margin-bottom:var(--space-4); color:var(--text-primary); }
  .cs-result { font-size:var(--text-small); font-weight:700; color:var(--green-400); display:flex; align-items:center; gap:6px; }
  .cs-arrow  { font-size:var(--text-small); font-weight:600; color:var(--blue-500); margin-top:var(--space-3); display:flex; align-items:center; gap:4px; }
  .text-t-secondary { color:var(--text-secondary); }
  .text-t-primary   { color:var(--text-primary); }
  .text-t-tertiary  { color:var(--text-tertiary); }
  .text-b-500       { color:var(--blue-500); }
  .text-g-400       { color:var(--green-400); }
  @media (max-width:768px) { .cs-grid { grid-template-columns:1fr; } }
`;

const CaseStudyPreview = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const { data: allCases, isLoading } = usePublishedCaseStudies(selectedIndustry ? { industry: selectedIndustry } : undefined);
  const ref = useRef<HTMLElement>(null);

  /* ── Inject CSS + trigger reveal ── */
  useEffect(() => {
    if (!document.getElementById("lc-injected-css")) {
      const style = document.createElement("style");
      style.id = "lc-injected-css";
      style.textContent = INJECTED_CSS;
      document.head.appendChild(style);
    }
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll(".reveal").forEach(el => el.classList.add("revealed"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  /* Re-trigger reveal khi data load xong */
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        ref.current?.querySelectorAll(".reveal").forEach(el => el.classList.add("revealed"));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const industries = [
    { value: null,            label: "Tất cả" },
    { value: "service",       label: "Dịch vụ" },
    { value: "retail",        label: "Bán lẻ" },
    { value: "fitness",       label: "Fitness" },
    { value: "manufacturing", label: "Sản xuất" },
  ];

  const getThumbnail = (cs: any): string | null => {
    try { const sol = cs.solution as any; if (sol?.attachments) { const img = sol.attachments.find((a: any) => a.type === "image"); if (img) return img.url; } } catch {} return null;
  };

  const previewCases = [...(allCases || [])].sort((a, b) => {
    const aH = !!getThumbnail(a); const bH = !!getThumbnail(b);
    return (bH ? 1 : 0) - (aH ? 1 : 0);
  }).slice(0, 3);

  const getKeyResult = (cs: any): string | null => {
    try { const r = cs.results as any; if (Array.isArray(r) && r.length > 0) return r[0].label || r[0].value || null; } catch {} return null;
  };

  const tagColor = (ind: string) => {
    switch (ind) {
      case "service":       return { bg: "rgba(37,99,235,0.1)",   color: "#3B82F6" };
      case "fitness":       return { bg: "rgba(245,158,11,0.1)",  color: "#FBBF24" };
      case "retail":        return { bg: "rgba(16,185,129,0.1)",  color: "#34D399" };
      case "manufacturing": return { bg: "rgba(167,139,250,0.1)", color: "#A78BFA" };
      default:              return { bg: "rgba(37,99,235,0.1)",   color: "#3B82F6" };
    }
  };

  return (
    <section id="cases" ref={ref} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Case Studies</div>
        <h2 className="heading-h2 reveal">Doanh nghiệp giống bạn đã giải quyết <span className="kw">như thế nào?</span></h2>

        {/* Filter tabs */}
        <div className="cs-filters reveal">
          {industries.map((ind) => (
            <button
              key={ind.label}
              onClick={() => setSelectedIndustry(ind.value)}
              className={`cs-filter${selectedIndustry === ind.value ? " active" : ""}`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="text-t-secondary" style={{ textAlign: "center", padding: "48px 0" }}>Đang tải...</div>
        ) : previewCases.length === 0 ? (
          <div className="text-t-secondary" style={{ textAlign: "center", padding: "48px 0" }}>Chưa có case study.</div>
        ) : (
          <div className="cs-grid">
            {previewCases.map((cs, i) => {
              const tc = tagColor(cs.industry || "");
              const result = getKeyResult(cs);
              return (
                <Link
                  key={cs.id}
                  to={`/case-studies/${cs.slug}`}
                  className={`card cs-card reveal${i > 0 ? ` reveal-d${i}` : ""}`}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div className="cs-tags">
                    <span className="cs-tag" style={{ background: tc.bg, color: tc.color }}>{cs.industryLabel}</span>
                    <span className="cs-tag cs-tag--sz">{cs.scaleLabel}</span>
                  </div>
                  <div className="cs-pain">Vấn đề: {cs.mainProblemLabel}</div>
                  <div className="cs-title">{cs.title}</div>
                  {result && <div className="cs-result">⚡ {result}</div>}
                  <div className="cs-arrow">Xem chi tiết →</div>
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