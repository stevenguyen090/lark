import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import {
  AlertTriangle, Database, GitBranch, Layers3,
} from "lucide-react";
import type { SolutionBlueprint as BlueprintData } from "@/types/solutionBlueprint";

let mermaidInitialized = false;

const loadMermaid = async () => {
  const { default: mermaid } = await import("mermaid");
  if (!mermaidInitialized) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: {
        background: "#0A1628", primaryColor: "#132540", primaryTextColor: "#F0F6FF",
        primaryBorderColor: "#3B82F6", secondaryColor: "#0E1E35",
        secondaryTextColor: "#F0F6FF", secondaryBorderColor: "#67E8F9",
        tertiaryColor: "#0A1628", tertiaryTextColor: "#E2E8F0",
        tertiaryBorderColor: "#94A3B8", lineColor: "#94A3B8", textColor: "#F0F6FF",
        fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px",
      },
      flowchart: { curve: "basis", htmlLabels: true, nodeSpacing: 32, rankSpacing: 42, useMaxWidth: true },
    });
    mermaidInitialized = true;
  }
  return mermaid;
};

const MermaidDiagram = ({ source, mobileSteps, hideMobileSummary = false }: { source: string; mobileSteps: string[]; hideMobileSummary?: boolean }) => {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const container = ref.current;
    setLoading(true);
    loadMermaid().then((mermaid) => mermaid.render(`solutionBlueprint${id}`, source)).then(({ svg, bindFunctions }) => {
      if (!active || !container) return;
      container.innerHTML = svg;
      bindFunctions?.(container);
      setError(false);
      setLoading(false);
    }).catch(() => { if (active) { setError(true); setLoading(false); } });
    return () => { active = false; if (container) container.innerHTML = ""; };
  }, [id, source]);

  if (error) return (
    <div role="alert" className="flex items-center gap-2 rounded-xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm text-amber-200">
      <AlertTriangle className="h-4 w-4" /> Sơ đồ chưa thể hiển thị. Vui lòng tải lại trang.
    </div>
  );

  return (
    <figure aria-labelledby={`${id}-caption`}>
      <div className={`${hideMobileSummary ? "hidden" : ""} rounded-2xl border border-white/15 bg-[#07111f] p-4 shadow-inner shadow-black/20 md:hidden`}>
        <h4 className="text-sm font-semibold text-slate-100">Luồng vận hành tổng quan</h4>
        <ol className="mt-4 space-y-3">
          {mobileSteps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-6 text-slate-300">
              <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 font-semibold text-blue-200">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="relative hidden overflow-x-auto rounded-2xl border border-white/15 bg-[#07111f] p-4 shadow-inner shadow-black/20 md:block md:p-6" aria-busy={loading}>
        {loading && <div role="status" className="absolute inset-4 flex items-center justify-center rounded-xl bg-[#07111f] text-sm text-slate-300">Đang tải sơ đồ giải pháp…</div>}
        <div ref={ref} className="mx-auto min-w-[680px] [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full" />
      </div>
      <figcaption id={`${id}-caption`} className="sr-only">{mobileSteps.join(" ")}</figcaption>
    </figure>
  );
};

const InfoList = ({ title, icon, items }: { title: string; icon: ReactNode; items: { name: string; description: string }[] }) => (
  <div className="rounded-2xl border border-white/15 bg-[#0e1e35] p-5 shadow-sm shadow-black/10">
    <h4 className="mb-4 flex items-center gap-2 text-base font-semibold"><span className="text-primary">{icon}</span>{title}</h4>
    <div className="space-y-4">{items.map((item) => (
      <div key={item.name}><div className="text-sm font-semibold text-slate-100">{item.name}</div><p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p></div>
    ))}</div>
  </div>
);

export default function SolutionBlueprint({ blueprint, hideMobileFlow = false }: { blueprint: BlueprintData; hideMobileFlow?: boolean }) {
  return (
    <div className="mb-9 overflow-hidden rounded-3xl border border-primary/35 bg-gradient-to-b from-[#10213a] to-[#091522] shadow-xl shadow-black/15">
      <div className="border-b border-white/15 bg-[#10213a]/80 px-5 py-6 md:px-7">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400"><GitBranch className="h-4 w-4" />Solution Blueprint · Data Flow Diagram</div>
        <h3 className="text-xl font-semibold text-foreground">{blueprint.title}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">{blueprint.description}</p>
      </div>

      <div className="space-y-7 p-5 md:p-7">
        <div>
          <MermaidDiagram source={blueprint.mermaid} mobileSteps={blueprint.mobileSteps} hideMobileSummary={hideMobileFlow} />
          <div className={`${hideMobileFlow ? "hidden md:flex" : "flex"} mt-3 flex-wrap gap-2 text-xs font-medium text-slate-300`}>
            <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-2.5 py-1">Người dùng / hệ thống ngoài</span>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1">Xử lý trên Lark</span>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1">Kho dữ liệu vận hành</span>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1">Điểm kiểm soát / ngoại lệ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <InfoList title="Nguồn dữ liệu gốc" icon={<Database className="h-4 w-4" />} items={blueprint.systemRecords} />
          <InfoList title="Vai trò của từng module Lark" icon={<Layers3 className="h-4 w-4" />} items={blueprint.larkModules} />
        </div>

      </div>
    </div>
  );
}
