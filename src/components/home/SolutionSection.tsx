import { useEffect, useRef } from "react";

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dfdMsgsRef = useRef<HTMLDivElement>(null);
  const dfdTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // DFD chat animation
  useEffect(() => {
    const CONV = [
      { delay: 800, role: "user", text: "Doanh thu hôm nay so với hôm qua?" },
      { delay: 2400, role: "ai", html: '📊 Đọc <strong>Lark Base</strong>... Hôm nay <strong style="color:#34D399">+18%</strong> so hôm qua. Kênh Online dẫn đầu.' },
      { delay: 6000, role: "user", text: "Assign task follow-up deal VIFIT cho Huy" },
      { delay: 7800, role: "ai", html: '✅ Đã tạo task trên <strong>Lark</strong>, assign Huy, deadline sáng mai.' },
    ];

    function run() {
      const box = dfdMsgsRef.current;
      if (!box) return;
      box.innerHTML = "";
      CONV.forEach(step => {
        setTimeout(() => {
          if (!dfdMsgsRef.current) return;
          box.querySelectorAll("[data-typing]").forEach(e => e.remove());
          const el = document.createElement("div");
          Object.assign(el.style, {
            alignSelf: step.role === "user" ? "flex-end" : "flex-start",
            background: step.role === "user" ? "#2563EB" : "#132540",
            color: step.role === "user" ? "white" : "#94A3B8",
            fontSize: "9px",
            lineHeight: "1.5",
            fontWeight: step.role === "user" ? "500" : "400",
            padding: "5px 9px",
            borderRadius: step.role === "user" ? "9px 2px 9px 9px" : "2px 9px 9px 9px",
            maxWidth: step.role === "user" ? "80%" : "92%",
            opacity: "0",
            transform: "translateY(5px)",
            transition: "opacity 0.3s, transform 0.3s",
            ...(step.role === "ai" ? { border: "1px solid rgba(255,255,255,0.05)" } : {}),
          });
          if (step.role === "user") {
            el.textContent = step.text;
          } else {
            el.innerHTML = step.html;
          }
          box.appendChild(el);
          requestAnimationFrame(() => requestAnimationFrame(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }));
          box.scrollTop = box.scrollHeight;

          if (step.role === "user") {
            setTimeout(() => {
              const t = document.createElement("div");
              t.setAttribute("data-typing", "true");
              Object.assign(t.style, {
                alignSelf: "flex-start",
                background: "#132540",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "7px 10px",
                borderRadius: "2px 9px 9px 9px",
                display: "flex",
                gap: "3px",
                alignItems: "center",
                opacity: "0",
                transition: "opacity 0.2s",
              });
              t.innerHTML = '<div style="width:4px;height:4px;border-radius:50%;background:#4E6380;animation:typingBounce 1.2s ease-in-out infinite"></div><div style="width:4px;height:4px;border-radius:50%;background:#4E6380;animation:typingBounce 1.2s ease-in-out infinite 0.15s"></div><div style="width:4px;height:4px;border-radius:50%;background:#4E6380;animation:typingBounce 1.2s ease-in-out infinite 0.3s"></div>';
              box.appendChild(t);
              requestAnimationFrame(() => requestAnimationFrame(() => { t.style.opacity = "1"; }));
              box.scrollTop = box.scrollHeight;
            }, 400);
          }
        }, step.delay);
      });
      dfdTimerRef.current = setTimeout(run, 11000);
    }

    const t = setTimeout(run, 1800);
    return () => {
      clearTimeout(t);
      if (dfdTimerRef.current) clearTimeout(dfdTimerRef.current);
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Cách chúng tôi làm việc</div>
        <h2 className="heading-h2 reveal">2 tầng — từ nền tảng đến <span className="kw">AI vận hành</span></h2>
        <p className="body-lg reveal mt-4" style={{ maxWidth: 560 }}>
          Không phải cài tool rồi xong. Chúng tôi xây đủ 2 tầng để AI Agent thực sự hoạt động đúng.
        </p>

        {/* ── Data Flow Diagram ── */}
        <div className="mt-14 overflow-x-auto pb-1 reveal">
          {/* Column labels */}
          <div className="grid items-end mb-2" style={{ gridTemplateColumns: "1fr 52px 1.15fr 52px 1.1fr", minWidth: 880 }}>
            <div className="text-[9px] font-bold text-t-tertiary text-center tracking-wider uppercase">Nền tảng dữ liệu</div>
            <div />
            <div className="text-[9px] font-bold text-t-tertiary text-center tracking-wider uppercase">Lark System · Tầng 1</div>
            <div />
            <div className="text-[9px] font-bold text-t-tertiary text-center tracking-wider uppercase">AI Agent · Tầng 2</div>
          </div>

          {/* Main flow */}
          <div className="grid" style={{ gridTemplateColumns: "1fr 52px 1.15fr 52px 1.1fr", minWidth: 880, alignItems: "stretch" }}>
            {/* COL A: Sources */}
            <div className="flex flex-col gap-2">
              {[
                { name: "Meta Ads", sub: "Ad spend · ROAS · Leads", color: "#1877F2" },
                { name: "Pancake", sub: "Đơn hàng · Chat · KH", color: "#F97316" },
                { name: "Shopify", sub: "Doanh thu · Tồn kho", color: "#10B981" },
                { name: "POS", sub: "Giao dịch · Ca làm", color: "#8B5CF6" },
                { name: "Zalo OA", sub: "Tin nhắn · KH · Zalo Shop", color: "#06B6D4" },
                { name: "Sepay", sub: "Thanh toán · Đối soát", color: "#EC4899" },
              ].map((src, i) => (
                <div key={i} className="flex items-center gap-[9px] rounded-[10px] p-[10px_12px] cursor-default transition-all hover:translate-x-0.5" style={{
                  background: "#0E1E35",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderLeft: `3px solid ${src.color}`,
                  opacity: 0,
                  animation: `dfdNodeIn 0.4s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.1}s forwards`,
                }}>
                  <div className="w-[30px] h-[30px] rounded-[7px] flex items-center justify-center flex-shrink-0" style={{ background: `${src.color}15`, color: src.color }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-t-primary leading-tight">{src.name}</div>
                    <div className="text-[9px] text-t-tertiary leading-snug">{src.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connector A→B */}
            <div className="relative flex flex-col justify-center items-center overflow-hidden px-1">
              <div className="absolute top-1/2 w-full h-px -translate-y-1/2" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.09) 0%, rgba(37,99,235,0.35) 50%, rgba(255,255,255,0.09) 100%)" }} />
              {[0, 0.6, 1.2].map((d, i) => (
                <div key={i} className="absolute top-1/2 -translate-y-1/2 w-[14px] h-1 rounded-sm" style={{
                  background: i === 1 ? "#3B82F6" : "#22D3EE",
                  boxShadow: `0 0 8px ${i === 1 ? "#3B82F6" : "#22D3EE"}`,
                  animation: `dfdFlowH 1.8s ease-in-out ${d}s infinite`,
                }} />
              ))}
              <div className="absolute top-[calc(50%-18px)] text-[8px] font-bold text-b-500 px-[5px] py-px rounded whitespace-nowrap" style={{ background: "#060D18", border: "1px solid rgba(37,99,235,0.2)" }}>sync data</div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 text-sm" style={{ color: "rgba(37,99,235,0.35)" }}>›</div>
            </div>

            {/* COL B: Lark Hub */}
            <div className="flex flex-col gap-2">
              {/* Lark Base */}
              <div className="flex-1 rounded-[14px] p-3.5" style={{ background: "#0A1628", border: "1px solid rgba(255,255,255,0.09)", borderTop: "2px solid #3B82F6", opacity: 0, animation: "dfdNodeIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}>
                <div className="flex items-center gap-[9px] mb-2.5">
                  <div className="w-7 h-7 rounded-[7px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(37,99,235,0.15)", color: "#3B82F6" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-t-primary">Lark Base</div>
                    <div className="text-[9px] text-t-tertiary">Bảng dữ liệu tập trung</div>
                  </div>
                </div>
                <table className="w-full text-[8.5px]" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {["Deal", "Doanh thu", "Trạng thái"].map(h => (
                        <th key={h} className="text-left font-bold px-1.5 py-1" style={{ background: "rgba(37,99,235,0.1)", color: "#3B82F6", borderBottom: "1px solid rgba(37,99,235,0.2)", letterSpacing: "0.3px" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { deal: "VIFIT", rev: "45tr", badge: "Pending", bc: "rgba(251,191,36,0.15)", tc: "#FBBF24" },
                      { deal: "Happilac", rev: "32tr", badge: "Xong", bc: "rgba(52,211,153,0.15)", tc: "#34D399" },
                      { deal: "GreenFarm", rev: "28tr", badge: "Running", bc: "rgba(59,130,246,0.15)", tc: "#3B82F6" },
                      { deal: "TechBox", rev: "19tr", badge: "Trễ", bc: "rgba(248,113,113,0.15)", tc: "#F87171" },
                    ].map((r, i) => (
                      <tr key={i}>
                        <td className="px-1.5 py-1 font-semibold text-t-primary" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>{r.deal}</td>
                        <td className="px-1.5 py-1 text-t-secondary" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>{r.rev}</td>
                        <td className="px-1.5 py-1" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                          <span className="inline-block px-[5px] py-px rounded-full text-[7.5px] font-bold" style={{ background: r.bc, color: r.tc }}>{r.badge}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sync divider */}
              <div className="flex items-center gap-1.5 px-2 py-1">
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)" }} />
                <span className="text-[8px] font-bold text-c-400 px-1.5 py-px rounded-full whitespace-nowrap" style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)" }}>auto sync</span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.35), transparent)" }} />
              </div>

              {/* Lark Dashboard */}
              <div className="flex-1 rounded-[14px] p-3.5" style={{ background: "#0A1628", border: "1px solid rgba(255,255,255,0.09)", borderTop: "2px solid #22D3EE", opacity: 0, animation: "dfdNodeIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}>
                <div className="flex items-center gap-[9px] mb-2.5">
                  <div className="w-7 h-7 rounded-[7px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,182,212,0.15)", color: "#22D3EE" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 12v5M12 8v9M16 10v7"/><path d="M2 7h20"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-t-primary">Lark Dashboard</div>
                    <div className="text-[9px] text-t-tertiary">Báo cáo realtime</div>
                  </div>
                </div>
                <svg viewBox="0 0 220 40" preserveAspectRatio="none" className="w-full overflow-visible" style={{ height: 40 }}>
                  <defs>
                    <linearGradient id="dfdG2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22D3EE" stopOpacity="0.22"/><stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/></linearGradient>
                  </defs>
                  <path d="M0,32 C24,28 42,22 64,16 C86,10 104,22 128,14 C152,6 172,10 220,3 L220,40 L0,40 Z" fill="url(#dfdG2)"/>
                  <path d="M0,32 C24,28 42,22 64,16 C86,10 104,22 128,14 C152,6 172,10 220,3" fill="none" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" style={{ strokeDasharray: 280, strokeDashoffset: 280, animation: "hwDraw 2s ease-out 0.8s forwards" }}/>
                </svg>
                <div className="flex gap-2 text-[8px] font-semibold mt-1">
                  <span style={{ color: "#34D399" }}>↑ 18% DT</span>
                  <span style={{ color: "#FBBF24" }}>94% Tasks</span>
                  <span style={{ color: "#3B82F6" }}>12 Deal</span>
                </div>
              </div>
            </div>

            {/* Connector B→C */}
            <div className="relative flex flex-col justify-center items-center overflow-hidden px-1">
              <div className="absolute top-1/2 w-full h-0.5 -translate-y-1/2" style={{ background: "linear-gradient(90deg, rgba(37,99,235,0.2), rgba(37,99,235,0.6), rgba(37,99,235,0.2))" }} />
              {[0, 0.7, 1.4].map((d, i) => (
                <div key={i} className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[5px] rounded-sm" style={{
                  background: "#3B82F6",
                  boxShadow: "0 0 10px #3B82F6",
                  animation: `dfdFlowH 1.8s ease-in-out ${d}s infinite`,
                }} />
              ))}
              <div className="absolute top-[calc(50%-18px)] text-[8px] font-bold text-b-500 px-[5px] py-px rounded whitespace-nowrap" style={{ background: "#060D18", border: "1px solid rgba(37,99,235,0.2)" }}>AI đọc data</div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 text-sm" style={{ color: "#3B82F6" }}>›</div>
            </div>

            {/* COL C: AI Agent */}
            <div className="flex flex-col">
              <div className="flex-1 rounded-[20px] p-4 relative overflow-hidden" style={{
                background: "#0A1628",
                border: "1px solid rgba(37,99,235,0.35)",
                boxShadow: "0 0 0 1px rgba(6,182,212,0.06), 0 16px 48px rgba(0,0,0,0.3)",
                opacity: 0,
                animation: "dfdNodeIn 0.6s cubic-bezier(0.16,1,0.3,1) 1.1s both",
              }}>
                <div className="absolute pointer-events-none" style={{ inset: -50, background: "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(37,99,235,0.14), transparent 70%)" }} />
                <div className="relative z-[1]">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-[9px] flex items-center justify-center text-[13px] text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", boxShadow: "0 0 14px rgba(37,99,235,0.4)" }}>✦</div>
                    <div>
                      <div className="text-[13px] font-bold text-t-primary">Lark AI Agent</div>
                      <div className="flex items-center gap-1 text-[9px] text-g-400 font-medium">
                        <span className="w-[5px] h-[5px] rounded-full blink-dot" style={{ background: "#34D399", boxShadow: "0 0 5px #34D399" }} />
                        Realtime · đọc toàn bộ Lark
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[10px] p-[9px] mb-2.5 overflow-hidden" style={{ background: "#0E1E35", border: "1px solid rgba(255,255,255,0.05)", minHeight: 110 }}>
                    <div ref={dfdMsgsRef} className="flex flex-col gap-1.5" />
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    {[
                      { label: "Báo cáo tức thì", color: "#34D399" },
                      { label: "Alert thông minh", color: "#FBBF24" },
                      { label: "Giao task & follow-up", color: "#3B82F6" },
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[9px] font-semibold text-t-secondary">
                        <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: f.color }} />
                        {f.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-layer service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Layer 1 */}
          <div className="card-dark p-8 relative overflow-hidden reveal">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #2563EB, #3B82F6)" }} />
            <div className="text-sm font-semibold text-t-tertiary mb-4">Tầng 01 — Nền tảng · 4–6 tuần</div>
            <div className="heading-h3 mb-3" style={{ lineHeight: 1.3 }}>Chuẩn hoá vận hành & triển khai Lark</div>
            <p className="text-sm text-t-secondary mb-6" style={{ lineHeight: 1.7 }}>
              Rà soát quy trình, xác định điểm nghẽn, thiết kế hệ thống làm việc tập trung trên Lark với task management, tài liệu và dashboard.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Phân tích mô hình vận hành & điểm nghẽn",
                "Thiết kế quy trình & phân công trách nhiệm rõ ràng",
                "Triển khai Lark: task, docs, dashboard, tích hợp tool",
                "Training đội ngũ cho đến khi vận hành ổn định",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-t-secondary" style={{ lineHeight: 1.55 }}>
                  <div className="w-[18px] h-[18px] rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(37,99,235,0.15)", color: "#3B82F6" }}>✓</div>
                  {step}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[7px] p-3 px-4 rounded-[10px] text-sm font-semibold text-g-400" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
              ✓ Đội ngũ chủ động — lãnh đạo nắm tình hình mà không cần họp
            </div>
          </div>

          {/* Layer 2 */}
          <div className="card-dark p-8 relative overflow-hidden reveal reveal-d2">
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, #06B6D4, #34D399)" }} />
            <div className="text-sm font-semibold text-t-tertiary mb-4">Tầng 02 — AI Agent · Sau Tầng 1</div>
            <div className="heading-h3 mb-3" style={{ lineHeight: 1.3 }}>Kích hoạt AI Agent trên nền Lark</div>
            <p className="text-sm text-t-secondary mb-6" style={{ lineHeight: 1.7 }}>
              Khi data đã sạch và có cấu trúc, AI Agent có thể đọc toàn bộ hệ thống và trả lời bất kỳ câu hỏi nào của lãnh đạo bằng ngôn ngữ tự nhiên.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Tích hợp AI Agent vào Lark Messenger",
                "Cấu hình knowledge base từ tài liệu nội bộ",
                "Thiết lập alert tự động khi có bất thường",
                "Training AI theo đặc thù vận hành của doanh nghiệp",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-t-secondary" style={{ lineHeight: 1.55 }}>
                  <div className="w-[18px] h-[18px] rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(6,182,212,0.15)", color: "#22D3EE" }}>✓</div>
                  {step}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-[7px] p-3 px-4 rounded-[10px] text-sm font-semibold text-g-400" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
              ✓ Sếp hỏi 1 câu — AI trả lời tức thì từ dữ liệu thật
            </div>
          </div>

          {/* Connector */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-3 p-4 px-6 rounded-[10px] text-sm text-t-secondary reveal" style={{ background: "#0E1E35", border: "1px solid rgba(37,99,235,0.35)", lineHeight: 1.6, marginTop: -8, textAlign: "center" }}>
            <span>🔗</span>
            <span><strong className="text-c-400">Tầng 1 là điều kiện bắt buộc của Tầng 2</strong> — AI chỉ thông minh khi data phía dưới đã sạch và có cấu trúc. Đây là lý do các đơn vị chỉ cài AI mà bỏ qua nền tảng thường thất bại.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
