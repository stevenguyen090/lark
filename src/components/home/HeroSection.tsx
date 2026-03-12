import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";

/* ── Hero Chat Conversation ── */
const HERO_CONV = [
  { delay: 1200, role: "user" as const, text: "Cho tôi tóm tắt tình hình kinh doanh tuần này" },
  {
    delay: 3200,
    role: "ai" as const,
    html: `<div style="display:inline-flex;align-items:center;gap:3px;font-size:8px;font-weight:700;background:rgba(37,99,235,0.15);color:#3B82F6;padding:1px 5px;border-radius:3px;margin-bottom:4px">✦ AI Agent · Tổng hợp realtime</div>
<strong>Tuần 2/T3 — Báo cáo tóm tắt:</strong><br/><br/>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin:6px 0 4px">
  <div style="background:#0E1E35;border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:5px 7px"><div style="font-size:13px;font-weight:700;color:#3B82F6;line-height:1">284tr</div><div style="font-size:8px;color:#4E6380;margin-top:1px">Doanh thu tuần</div><div style="font-size:8px;color:#34D399;margin-top:1px">↑ 18% vs T2</div></div>
  <div style="background:#0E1E35;border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:5px 7px"><div style="font-size:13px;font-weight:700;color:#34D399;line-height:1">94%</div><div style="font-size:8px;color:#4E6380;margin-top:1px">Task hoàn thành</div><div style="font-size:8px;color:#34D399;margin-top:1px">↑ 8pp</div></div>
  <div style="background:#0E1E35;border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:5px 7px"><div style="font-size:13px;font-weight:700;color:#FBBF24;line-height:1">12/15</div><div style="font-size:8px;color:#4E6380;margin-top:1px">Deal active</div><div style="font-size:8px;color:#FBBF24;margin-top:1px">3 cần follow</div></div>
  <div style="background:#0E1E35;border:1px solid rgba(255,255,255,0.06);border-radius:6px;padding:5px 7px"><div style="font-size:13px;font-weight:700;color:#F87171;line-height:1">1</div><div style="font-size:8px;color:#4E6380;margin-top:1px">Task trễ hạn</div><div style="font-size:8px;color:#F87171;margin-top:1px">Cần xử lý</div></div>
</div>
⚠️ Deal <strong>VIFIT</strong> (45tr) — 5 ngày chưa có update từ Huy.`,
  },
  { delay: 7000, role: "user" as const, text: "Deal VIFIT đang bị stuck ở đâu vậy?" },
  {
    delay: 9200,
    role: "ai" as const,
    html: `Deal <strong>VIFIT Active</strong> đang ở giai đoạn <strong>Proposal</strong> từ 05/03.<br/><br/>Huy chưa gửi vì đang chờ báo giá từ team kỹ thuật — đã quá <strong>5 ngày SLA</strong>.<br/><br/>Tôi tạo reminder cho Huy và tag team kỹ thuật không?`,
  },
];

const HeroSection = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const addMsg = useCallback((role: string, html: string) => {
    const container = chatRef.current;
    if (!container) return;
    const el = document.createElement("div");
    el.className = role === "user" ? "hw-bubble-user" : "hw-bubble-ai";
    el.innerHTML = html;
    Object.assign(el.style, {
      alignSelf: role === "user" ? "flex-end" : "flex-start",
      background: role === "user" ? "#2563EB" : "#182D4C",
      color: role === "user" ? "white" : "#94A3B8",
      fontSize: "10px",
      lineHeight: role === "user" ? "1.5" : "1.55",
      fontWeight: role === "user" ? "500" : "400",
      padding: role === "user" ? "7px 10px" : "8px 10px",
      borderRadius: role === "user" ? "10px 2px 10px 10px" : "2px 10px 10px 10px",
      maxWidth: role === "user" ? "88%" : "98%",
      opacity: "0",
      transform: "translateY(6px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
      ...(role === "ai" ? { border: "1px solid rgba(255,255,255,0.06)" } : {}),
    });
    container.appendChild(el);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
    container.scrollTop = container.scrollHeight;
  }, []);

  const addTyping = useCallback(() => {
    const container = chatRef.current;
    if (!container) return;
    const el = document.createElement("div");
    el.className = "hw-bubble-typing";
    Object.assign(el.style, {
      alignSelf: "flex-start",
      background: "#182D4C",
      border: "1px solid rgba(255,255,255,0.06)",
      padding: "9px 12px",
      borderRadius: "2px 10px 10px 10px",
      display: "flex",
      gap: "3px",
      alignItems: "center",
      opacity: "0",
      transition: "opacity 0.2s ease",
    });
    el.innerHTML = `<div style="width:5px;height:5px;border-radius:50%;background:#4E6380;animation:typingBounce 1.2s ease-in-out infinite"></div><div style="width:5px;height:5px;border-radius:50%;background:#4E6380;animation:typingBounce 1.2s ease-in-out infinite 0.15s"></div><div style="width:5px;height:5px;border-radius:50%;background:#4E6380;animation:typingBounce 1.2s ease-in-out infinite 0.3s"></div>`;
    container.appendChild(el);
    requestAnimationFrame(() => { el.style.opacity = "1"; });
    container.scrollTop = container.scrollHeight;
  }, []);

  const removeTyping = useCallback(() => {
    chatRef.current?.querySelectorAll(".hw-bubble-typing").forEach(el => el.remove());
  }, []);

  const runConv = useCallback(() => {
    const container = chatRef.current;
    if (!container) return;
    container.innerHTML = "";

    HERO_CONV.forEach((step) => {
      setTimeout(() => {
        if (!chatRef.current) return;
        removeTyping();
        if (step.role === "user") {
          addMsg("user", step.text);
          setTimeout(() => addTyping(), 400);
        } else {
          addMsg("ai", step.html);
        }
      }, step.delay);
    });

    timerRef.current = setTimeout(runConv, 13000);
  }, [addMsg, addTyping, removeTyping]);

  useEffect(() => {
    const t = setTimeout(runConv, 800);
    return () => {
      clearTimeout(t);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [runConv]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" style={{ padding: "120px 0 80px" }}>
      {/* Orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 600, height: 600, top: -100, right: -150, background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)", filter: "blur(100px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, bottom: 0, left: -100, background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", filter: "blur(100px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 300, height: 300, top: "40%", left: "40%", background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", filter: "blur(100px)" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
      }} />

      <div className="container-content relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Live badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium text-t-secondary" style={{ background: "#0E1E35", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(10px)" }}>
                <span className="w-[7px] h-[7px] rounded-full blink-dot" style={{ background: "#34D399", boxShadow: "0 0 6px #34D399" }} />
                Đặt lịch tư vấn · Không ràng buộc
              </div>
            </div>

            {/* H1 */}
            <h1 className="heading-hero mb-5">
              Xây hệ thống vận hành để AI giúp việc <span className="kw">quản lý nhàn hơn</span>
            </h1>

            {/* Sub */}
            <p className="body-lg mb-8" style={{ maxWidth: 520 }}>
              Lark Consult xây hệ thống vận hành đủ chuẩn trên Lark — nền tảng để AI Agent giúp các sếp nắm tình hình qua 1 câu hỏi.
            </p>

            {/* Proof */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <div className="flex items-center gap-1.5 text-sm font-medium text-t-secondary">
                <strong className="text-t-primary font-bold">30+</strong> doanh nghiệp
              </div>
              <div className="w-[3px] h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.14)" }} />
              <div className="flex items-center gap-1.5 text-sm font-medium text-t-secondary">
                ⭐ <strong className="text-t-primary font-bold">92/100</strong> hài lòng
              </div>
              <div className="w-[3px] h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.14)" }} />
              <div className="flex items-center gap-1.5 text-sm font-medium text-t-secondary">
                <strong className="text-t-primary font-bold">30–50%</strong> giảm thời gian xử lý
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap mb-5">
              <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Đặt lịch tư vấn
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#ai-agent" className="btn-ghost">Xem AI Agent →</a>
            </div>
          </div>

          {/* Right: Dashboard Widget */}
          <div className="hidden lg:block relative" style={{ paddingRight: 20, paddingBottom: 20 }}>
            {/* Glow */}
            <div className="absolute pointer-events-none z-0" style={{ inset: -40, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.14) 0%, rgba(6,182,212,0.06) 50%, transparent 75%)" }} />

            {/* Main Dashboard */}
            <div className="relative z-[1] rounded-[20px] overflow-hidden" style={{
              background: "#0A1628",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(37,99,235,0.12), inset 0 1px 0 rgba(255,255,255,0.05)",
              animation: "dashFloat 7s ease-in-out infinite",
            }}>
              {/* Title bar */}
              <div className="flex items-center gap-2.5 px-4 py-[11px]" style={{ background: "#0E1E35", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex gap-[5px]">
                  <div className="w-[9px] h-[9px] rounded-full" style={{ background: "#FF5F57" }} />
                  <div className="w-[9px] h-[9px] rounded-full" style={{ background: "#FEBC2E" }} />
                  <div className="w-[9px] h-[9px] rounded-full" style={{ background: "#28C840" }} />
                </div>
                <div className="flex-1 flex items-center gap-[7px] text-[11px] text-t-tertiary font-medium">
                  <div className="w-[17px] h-[17px] rounded flex items-center justify-center text-[9px] text-white" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>✦</div>
                  Lark — Dashboard vận hành · Q1/2025
                </div>
                <div className="flex items-center gap-[5px] text-[10px] font-semibold" style={{ color: "#34D399" }}>
                  <span className="w-1.5 h-1.5 rounded-full blink-dot" style={{ background: "#34D399", boxShadow: "0 0 6px #34D399" }} />
                  Live
                </div>
              </div>

              {/* Body */}
              <div className="p-3.5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-t-primary">👋 Xin chào Anh Khang</span>
                  <span className="text-[10px] text-t-tertiary">Thứ Tư, 12/03 · 09:15</span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Doanh thu tháng", val: "1.24", unit: "tỷ", delta: "↑ 18.4% so T2", deltaColor: "#34D399", bar: "linear-gradient(90deg, #2563EB, #22D3EE)" },
                    { label: "Task hoàn thành", val: "94", unit: "%", delta: "↑ 8pp vs tuần trước", deltaColor: "#34D399", bar: "linear-gradient(90deg, #10B981, #34D399)" },
                    { label: "Deal đang chạy", val: "12", unit: "/15", delta: "3 cần follow-up", deltaColor: "#FBBF24", bar: "linear-gradient(90deg, #F59E0B, #FBBF24)" },
                  ].map((m, i) => (
                    <div key={i} className="relative overflow-hidden rounded-[10px] p-[10px_11px]" style={{ background: "#132540", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[10px]" style={{ background: m.bar }} />
                      <div className="text-[9px] font-semibold text-t-tertiary mb-1" style={{ letterSpacing: ".5px" }}>{m.label}</div>
                      <div className="text-[18px] font-bold text-t-primary leading-none mb-[3px]">{m.val}<span className="text-[11px] text-n-400">{m.unit}</span></div>
                      <div className="text-[9px] font-semibold" style={{ color: m.deltaColor }}>{m.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Line Chart */}
                <div className="rounded-xl p-3" style={{ background: "#0E1E35", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-semibold text-t-secondary">Doanh thu — 8 tuần gần nhất</span>
                    <div className="flex gap-2.5">
                      <span className="flex items-center gap-1 text-[9px] text-t-tertiary font-medium"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#3B82F6" }} />Tháng này</span>
                      <span className="flex items-center gap-1 text-[9px] text-t-tertiary font-medium"><span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22D3EE" }} />Tháng trước</span>
                    </div>
                  </div>
                  <svg className="w-full overflow-visible" viewBox="0 0 520 90" preserveAspectRatio="none" style={{ height: 90 }}>
                    <defs>
                      <linearGradient id="hwGradRev" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/><stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/></linearGradient>
                      <linearGradient id="hwGradLast" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1"/><stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/></linearGradient>
                    </defs>
                    <line x1="0" y1="22" x2="520" y2="22" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                    <line x1="0" y1="45" x2="520" y2="45" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                    <line x1="0" y1="68" x2="520" y2="68" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                    <path d="M 38,62 C 100,55 130,48 168,42 C 206,36 240,50 280,38 C 318,26 350,32 390,20 C 420,14 460,18 510,12 L 510,90 L 38,90 Z" fill="url(#hwGradRev)" style={{ opacity: 0, animation: "areaFade 0.6s ease 2.3s forwards" }}/>
                    <path d="M 38,72 C 100,68 130,64 168,58 C 206,52 240,62 280,55 C 318,48 350,52 390,44 C 420,38 460,40 510,34 L 510,90 L 38,90 Z" fill="url(#hwGradLast)" style={{ opacity: 0, animation: "areaFade 0.6s ease 2.3s forwards" }}/>
                    <path d="M 38,72 C 100,68 130,64 168,58 C 206,52 240,62 280,55 C 318,48 350,52 390,44 C 420,38 460,40 510,34" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: "hwDraw 2s ease-out 0.3s forwards" }}/>
                    <path d="M 38,62 C 100,55 130,48 168,42 C 206,36 240,50 280,38 C 318,26 350,32 390,20 C 420,14 460,18 510,12" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: "hwDraw 2s ease-out 0.6s forwards" }}/>
                    {[{ cx: 38, cy: 62, d: 2.1 }, { cx: 168, cy: 42, d: 2.2 }, { cx: 280, cy: 38, d: 2.3 }, { cx: 390, cy: 20, d: 2.4 }, { cx: 510, cy: 12, d: 2.5 }].map((dot, i) => (
                      <circle key={i} cx={dot.cx} cy={dot.cy} r={3} fill="#3B82F6" style={{ opacity: 0, animation: `dotPop 0.25s ease ${dot.d}s forwards` }}/>
                    ))}
                  </svg>
                  <div className="flex justify-between px-0.5 mt-1">
                    {["T1/W1","T1/W2","T1/W3","T2/W1","T2/W2","T2/W3","T3/W1","T3/W2"].map(l => (
                      <span key={l} className="text-[8px]" style={{ color: "#2A4570" }}>{l}</span>
                    ))}
                  </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Bar chart */}
                  <div className="rounded-[10px] p-[10px_12px]" style={{ background: "#0E1E35", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-[9px] font-semibold text-t-secondary mb-2.5">Doanh thu theo kênh (triệu đ)</div>
                    <div className="flex items-end gap-[5px]" style={{ height: 52 }}>
                      {[
                        { h: 42, color: "linear-gradient(to top, #1D4ED8, #3B82F6)", label: "Direct", delay: 0.8 },
                        { h: 30, color: "linear-gradient(to top, #0891B2, #22D3EE)", label: "Zalo", delay: 0.95 },
                        { h: 36, color: "linear-gradient(to top, #059669, #34D399)", label: "Ref", delay: 1.1 },
                        { h: 20, color: "linear-gradient(to top, #D97706, #FBBF24)", label: "Ads", delay: 1.25 },
                        { h: 48, color: "linear-gradient(to top, #1D4ED8, #3B82F6)", label: "Online", delay: 1.4 },
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full overflow-hidden" style={{ height: bar.h, borderRadius: "3px 3px 0 0", transformOrigin: "bottom", animation: `barGrow 1s ease-out ${bar.delay}s forwards`, transform: "scaleY(0)" }}>
                            <div className="w-full h-full" style={{ background: bar.color, borderRadius: "3px 3px 0 0" }} />
                          </div>
                          <span className="text-[8px]" style={{ color: "#2A4570" }}>{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="rounded-[10px] p-[10px_12px]" style={{ background: "#0E1E35", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-[9px] font-semibold text-t-secondary mb-2">Task hôm nay</div>
                    {[
                      { name: "Báo cáo doanh thu T2", status: "Done", color: "#34D399", bg: "rgba(16,185,129,0.15)" },
                      { name: "Onboarding VIFIT", status: "Đang chạy", color: "#FBBF24", bg: "rgba(245,158,11,0.15)" },
                      { name: "Cập nhật quy trình CSKH", status: "Trễ", color: "#F87171", bg: "rgba(239,68,68,0.15)" },
                      { name: "Review campaign T2", status: "Done", color: "#34D399", bg: "rgba(16,185,129,0.15)" },
                    ].map((task, i) => (
                      <div key={i} className="flex items-center gap-1.5 py-1" style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: task.color }} />
                        <span className="text-[9px] text-t-secondary flex-1 truncate">{task.name}</span>
                        <span className="text-[8px] font-semibold px-[5px] py-px rounded-[3px]" style={{ background: task.bg, color: task.color }}>{task.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Alert */}
            <div className="absolute top-[54px] right-0 z-[12] flex items-center gap-[7px] rounded-[10px] p-[7px_10px] text-[9px] font-semibold" style={{
              background: "#0E1E35",
              border: "1px solid rgba(245,158,11,0.35)",
              color: "#FBBF24",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4), 0 0 20px rgba(245,158,11,0.08)",
              animation: "alertIn 0.5s cubic-bezier(0.16,1,0.3,1) 3.5s both, alertPulse 2s ease-in-out 4s infinite",
            }}>
              <span className="text-xs">⚠️</span>
              <div style={{ lineHeight: 1.4 }}>
                Deal VIFIT — 5 ngày chưa update
                <span className="block text-t-secondary font-normal text-[8px]">AI Agent phát hiện · vừa xong</span>
              </div>
            </div>

            {/* Chatbot */}
            <div className="absolute bottom-0 right-0 z-[11] w-[232px] rounded-2xl overflow-hidden" style={{
              background: "#0E1E35",
              border: "1px solid rgba(37,99,235,0.4)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.08), 0 0 40px rgba(37,99,235,0.1)",
              animation: "chatIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both",
            }}>
              <div className="flex items-center gap-2 px-3 py-[9px]" style={{ background: "#132540", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="w-[22px] h-[22px] rounded-md flex items-center justify-center text-[10px] text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", boxShadow: "0 0 10px rgba(37,99,235,0.4)" }}>✦</div>
                <div>
                  <div className="text-[10px] font-bold text-t-primary">Lark AI Agent</div>
                  <div className="flex items-center gap-[3px] text-[8px]" style={{ color: "#34D399" }}>
                    <span className="w-1 h-1 rounded-full blink-dot" style={{ background: "#34D399", boxShadow: "0 0 4px #34D399" }} />
                    Đang kết nối · realtime
                  </div>
                </div>
              </div>
              <div ref={chatRef} className="flex flex-col gap-[7px] overflow-hidden" style={{ padding: "10px 10px 8px", minHeight: 180, maxHeight: 220 }} />
              <div className="flex items-center gap-1.5 p-[7px_10px]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0A1628" }}>
                <span className="flex-1 text-[9px]" style={{ color: "#2A4570" }}>Hỏi AI về vận hành...</span>
                <div className="w-[22px] h-[22px] rounded-[5px] flex items-center justify-center" style={{ background: "#2563EB" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" stroke="none"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
