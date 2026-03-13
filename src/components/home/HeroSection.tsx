import { useEffect, useRef, useCallback } from "react";

const CTA_LINK =
  "https://larkconsult.sg.larksuite.com/share/base/form/shrlgOQm9YZugwbV6FaVibRHQ3b";

/* ─── Keyframes injected once ─── */
const KEYFRAMES = `
@keyframes dashFloat {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-8px); }
}
@keyframes alertIn {
  from { opacity:0; transform:translateX(20px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes alertPulse {
  0%,100% { box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 0px rgba(245,158,11,0); }
  50%     { box-shadow: 0 8px 24px rgba(0,0,0,0.4), 0 0 18px rgba(245,158,11,0.18); }
}
@keyframes chatIn {
  from { opacity:0; transform:translateY(16px) scale(0.97); }
  to   { opacity:1; transform:translateY(0) scale(1); }
}
@keyframes hwDraw {
  to { stroke-dashoffset: 0; }
}
@keyframes dotPop {
  to { opacity:1; }
}
@keyframes barGrow {
  to { transform: scaleY(1); }
}
@keyframes areaFade {
  to { opacity:1; }
}
@keyframes typingBounce {
  0%,80%,100% { transform:translateY(0); }
  40%         { transform:translateY(-4px); }
}
@keyframes blink {
  0%,100% { opacity:1; }
  50%     { opacity:0.3; }
}
@keyframes fadeSlideUp {
  from { opacity:0; transform:translateY(18px); }
  to   { opacity:1; transform:translateY(0); }
}
`;

/* ─── Chat conversation script ─── */
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

/* ─── Star icon ─── */
const StarFull = () => (
  <svg viewBox="0 0 20 20" fill="#FBBF24" width="13" height="13">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const StarPartial = () => (
  <svg viewBox="0 0 20 20" width="13" height="13">
    <defs>
      <linearGradient id="pstar67">
        <stop offset="67%" stopColor="#FBBF24" />
        <stop offset="67%" stopColor="#4B5563" />
      </linearGradient>
    </defs>
    <path fill="url(#pstar67)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

/* ─── Main Component ─── */
const HeroSection = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* inject keyframes once */
  useEffect(() => {
    if (document.getElementById("hero-keyframes")) return;
    const style = document.createElement("style");
    style.id = "hero-keyframes";
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
  }, []);

  const addMsg = useCallback((role: string, html: string) => {
    const container = chatRef.current;
    if (!container) return;
    const el = document.createElement("div");
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
    el.innerHTML = html;
    container.appendChild(el);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      })
    );
    container.scrollTop = container.scrollHeight;
  }, []);

  const addTyping = useCallback(() => {
    const container = chatRef.current;
    if (!container) return;
    const el = document.createElement("div");
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
    el.className = "hw-typing";
    el.innerHTML = [0, 0.15, 0.3]
      .map(
        (d) =>
          `<div style="width:5px;height:5px;border-radius:50%;background:#4E6380;animation:typingBounce 1.2s ease-in-out ${d}s infinite"></div>`
      )
      .join("");
    container.appendChild(el);
    requestAnimationFrame(() => { el.style.opacity = "1"; });
    container.scrollTop = container.scrollHeight;
  }, []);

  const removeTyping = useCallback(() => {
    chatRef.current?.querySelectorAll(".hw-typing").forEach((el) => el.remove());
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
          setTimeout(addTyping, 400);
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

  /* ── metrics data ── */
  const METRICS = [
    { label: "Doanh thu tháng", val: "1.24", unit: "tỷ", delta: "↑ 18.4% so T2", dColor: "#34D399", bar: "linear-gradient(90deg,#2563EB,#22D3EE)" },
    { label: "Task hoàn thành", val: "94", unit: "%", delta: "↑ 8pp vs tuần trước", dColor: "#34D399", bar: "linear-gradient(90deg,#10B981,#34D399)" },
    { label: "Deal đang chạy", val: "12", unit: "/15", delta: "3 cần follow-up", dColor: "#FBBF24", bar: "linear-gradient(90deg,#F59E0B,#FBBF24)" },
  ];

  const BARS = [
    { h: 42, color: "linear-gradient(to top,#1D4ED8,#3B82F6)", label: "Direct", d: 0.8 },
    { h: 30, color: "linear-gradient(to top,#0891B2,#22D3EE)", label: "Zalo", d: 0.95 },
    { h: 36, color: "linear-gradient(to top,#059669,#34D399)", label: "Ref", d: 1.1 },
    { h: 20, color: "linear-gradient(to top,#D97706,#FBBF24)", label: "Ads", d: 1.25 },
    { h: 48, color: "linear-gradient(to top,#1D4ED8,#3B82F6)", label: "Online", d: 1.4 },
  ];

  const TASKS = [
    { name: "Báo cáo doanh thu T2", status: "Done", c: "#34D399", bg: "rgba(16,185,129,0.15)" },
    { name: "Onboarding VIFIT", status: "Đang chạy", c: "#FBBF24", bg: "rgba(245,158,11,0.15)" },
    { name: "Cập nhật quy trình CSKH", status: "Trễ", c: "#F87171", bg: "rgba(239,68,68,0.15)" },
    { name: "Review campaign T2", status: "Done", c: "#34D399", bg: "rgba(16,185,129,0.15)" },
  ];

  /* ── inline style helpers ── */
  const S = {
    section: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative" as const,
      overflow: "hidden",
      padding: "120px 0 80px",
      background: "#060D18",
    } as React.CSSProperties,

    orb1: { position: "absolute" as const, width: 600, height: 600, top: -100, right: -150, background: "radial-gradient(circle,rgba(37,99,235,0.14) 0%,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" as const },
    orb2: { position: "absolute" as const, width: 400, height: 400, bottom: 0, left: -100, background: "radial-gradient(circle,rgba(6,182,212,0.08) 0%,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" as const },
    orb3: { position: "absolute" as const, width: 300, height: 300, top: "40%", left: "40%", background: "radial-gradient(circle,rgba(245,158,11,0.06) 0%,transparent 70%)", filter: "blur(100px)", pointerEvents: "none" as const },

    grid: {
      backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
      backgroundSize: "60px 60px",
      position: "absolute" as const,
      inset: 0,
      pointerEvents: "none" as const,
      maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%,black,transparent)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%,black,transparent)",
    } as React.CSSProperties,

    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 24px",
      position: "relative" as const,
      zIndex: 1,
      width: "100%",
    } as React.CSSProperties,

    twoCol: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center",
    } as React.CSSProperties,
  };

  return (
    <section style={S.section}>
      {/* Orbs + grid */}
      <div style={S.orb1} />
      <div style={S.orb2} />
      <div style={S.orb3} />
      <div style={S.grid} />

      <div style={S.container}>
        <div style={S.twoCol}>

          {/* ════ LEFT COLUMN ════ */}
          <div>
            {/* Badge */}
            <div style={{ marginBottom: 24 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px", borderRadius: 999,
                background: "#0E1E35", border: "1px solid rgba(255,255,255,0.09)",
                fontSize: 14, fontWeight: 500, color: "#8892A4",
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#34D399", boxShadow: "0 0 6px #34D399",
                  animation: "blink 2s ease-in-out infinite",
                  display: "inline-block",
                }} />
                Đặt lịch tư vấn · Không ràng buộc
              </div>
            </div>

<<<<<<< HEAD
            {/* Headline — NO reveal class, inline animation */}
            <h1 style={{
              fontSize: "clamp(48px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#E8EAF0",
              marginBottom: 20,
              animation: "fadeSlideUp 0.7s ease 0.1s both",
            }}>
              Xây hệ thống vận hành để AI giúp việc{" "}
              <span style={{
                background: "linear-gradient(135deg,#3B82F6,#22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                quản lý nhàn hơn
              </span>
=======
            {/* Headline — NO reveal class, inline animation */}
            <h1 style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#E8EAF0",
              marginBottom: 20,
              animation: "fadeSlideUp 0.7s ease 0.1s both",
            }}>
              Xây hệ thống vận hành để AI giúp việc{" "}
              <span style={{
                background: "linear-gradient(135deg,#3B82F6,#22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                quản lý nhàn hơn
              </span>
>>>>>>> 92e9407e5e7577c9437118178bbf18c951310382
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "#8892A4",
              maxWidth: 520,
              marginBottom: 32,
              animation: "fadeSlideUp 0.7s ease 0.25s both",
            }}>
              Lark Consult xây hệ thống vận hành đủ chuẩn trên Lark — nền tảng để AI Agent giúp các sếp nắm tình hình qua 1 câu hỏi.
            </p>

            {/* Proof row */}
            <div style={{
              display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
              marginBottom: 32,
              animation: "fadeSlideUp 0.7s ease 0.4s both",
            }}>
              {/* 30+ */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#8892A4", fontWeight: 500 }}>
                <strong style={{ color: "#E8EAF0", fontWeight: 700 }}>30+</strong> doanh nghiệp
              </div>
              <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.14)" }} />
              {/* Stars + 4.67 */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#8892A4", fontWeight: 500 }}>
                <span style={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <StarFull /><StarFull /><StarFull /><StarFull /><StarPartial />
                </span>
                <strong style={{ color: "#E8EAF0", fontWeight: 700 }}>4.67</strong> hài lòng
              </div>
              <div style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.14)" }} />
              {/* 30–50% */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#8892A4", fontWeight: 500 }}>
                <strong style={{ color: "#E8EAF0", fontWeight: 700 }}>30–50%</strong> giảm thời gian quản lý
              </div>
            </div>

            {/* CTAs */}
            <div style={{
              display: "flex", gap: 12, flexWrap: "wrap",
              animation: "fadeSlideUp 0.7s ease 0.55s both",
            }}>
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 10,
                  background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
                  color: "white", fontSize: 15, fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.4)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(37,99,235,0.5)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(37,99,235,0.4)"; }}
              >
                Đặt lịch tư vấn
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a
                href="#ai-agent"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 24px", borderRadius: 10,
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#8892A4", fontSize: 15, fontWeight: 500,
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; (e.currentTarget as HTMLElement).style.color = "#E8EAF0"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "#8892A4"; }}
              >
                Xem AI Agent →
              </a>
            </div>
          </div>

          {/* ════ RIGHT COLUMN — Dashboard ════ */}
          <div style={{ position: "relative", paddingRight: 20, paddingBottom: 20 }}>
            {/* Glow behind widget */}
            <div style={{
              position: "absolute", inset: -40, pointerEvents: "none", zIndex: 0,
              background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(37,99,235,0.14) 0%,rgba(6,182,212,0.06) 50%,transparent 75%)",
            }} />

            {/* ── Main Dashboard Card ── */}
            <div style={{
              position: "relative", zIndex: 1,
              borderRadius: 20, overflow: "hidden",
              background: "#0A1628",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6),0 0 0 1px rgba(37,99,235,0.12),inset 0 1px 0 rgba(255,255,255,0.05)",
              animation: "dashFloat 7s ease-in-out infinite",
            }}>
              {/* Title bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 16px", background: "#0E1E35", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {["#FF5F57","#FEBC2E","#28C840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                </div>
                <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, fontSize: 11, color: "#4E6380", fontWeight: 500 }}>
                  <div style={{ width: 17, height: 17, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "white", background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>✦</div>
                  Lark — Dashboard vận hành · Q1/2025
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 600, color: "#34D399" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 6px #34D399", animation: "blink 2s ease-in-out infinite", display: "inline-block" }} />
                  Live
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Greeting */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#E8EAF0" }}>👋 Xin chào Anh Khang</span>
                  <span style={{ fontSize: 10, color: "#4E6380" }}>Thứ Tư, 12/03 · 09:15</span>
                </div>

                {/* Metrics row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {METRICS.map((m, i) => (
                    <div key={i} style={{ position: "relative", overflow: "hidden", borderRadius: 10, padding: "10px 11px", background: "#132540", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "10px 10px 0 0", background: m.bar }} />
                      <div style={{ fontSize: 9, fontWeight: 600, color: "#4E6380", marginBottom: 4, letterSpacing: ".5px" }}>{m.label}</div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: "#E8EAF0", lineHeight: 1, marginBottom: 3 }}>
                        {m.val}<span style={{ fontSize: 11, color: "#4E6380" }}>{m.unit}</span>
                      </div>
                      <div style={{ fontSize: 9, fontWeight: 600, color: m.dColor }}>{m.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Line chart */}
                <div style={{ borderRadius: 12, padding: 12, background: "#0E1E35", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 600, color: "#8892A4" }}>Doanh thu — 8 tuần gần nhất</span>
                    <div style={{ display: "flex", gap: 10 }}>
                      {[["#3B82F6","Tháng này"],["#22D3EE","Tháng trước"]].map(([c,l]) => (
                        <span key={l} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9, color: "#4E6380", fontWeight: 500 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: c, display: "inline-block" }} />{l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg width="100%" viewBox="0 0 520 90" preserveAspectRatio="none" style={{ height: 90, overflow: "visible" }}>
                    <defs>
                      <linearGradient id="gRev" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/><stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/></linearGradient>
                      <linearGradient id="gLast" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1"/><stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/></linearGradient>
                    </defs>
                    {[22,45,68].map(y => <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>)}
                    <path d="M38,72C100,68 130,64 168,58C206,52 240,62 280,55C318,48 350,52 390,44C420,38 460,40 510,34L510,90L38,90Z" fill="url(#gLast)" style={{ opacity:0, animation:"areaFade 0.6s ease 2.3s forwards" }}/>
                    <path d="M38,62C100,55 130,48 168,42C206,36 240,50 280,38C318,26 350,32 390,20C420,14 460,18 510,12L510,90L38,90Z" fill="url(#gRev)" style={{ opacity:0, animation:"areaFade 0.6s ease 2.3s forwards" }}/>
                    <path d="M38,72C100,68 130,64 168,58C206,52 240,62 280,55C318,48 350,52 390,44C420,38 460,40 510,34" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" style={{ strokeDasharray:600, strokeDashoffset:600, animation:"hwDraw 2s ease-out 0.3s forwards" }}/>
                    <path d="M38,62C100,55 130,48 168,42C206,36 240,50 280,38C318,26 350,32 390,20C420,14 460,18 510,12" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" style={{ strokeDasharray:600, strokeDashoffset:600, animation:"hwDraw 2s ease-out 0.6s forwards" }}/>
                    {[[38,62,2.1],[168,42,2.2],[280,38,2.3],[390,20,2.4],[510,12,2.5]].map(([cx,cy,d],i) => (
                      <circle key={i} cx={cx} cy={cy} r={3} fill="#3B82F6" style={{ opacity:0, animation:`dotPop 0.25s ease ${d}s forwards` }}/>
                    ))}
                  </svg>
                  <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 4 }}>
                    {["T1/W1","T1/W2","T1/W3","T2/W1","T2/W2","T2/W3","T3/W1","T3/W2"].map(l => (
                      <span key={l} style={{ fontSize: 8, color: "#2A4570" }}>{l}</span>
                    ))}
                  </div>
                </div>

                {/* Bottom row: bars + tasks */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {/* Bar chart */}
                  <div style={{ borderRadius: 10, padding: "10px 12px", background: "#0E1E35", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: "#8892A4", marginBottom: 10 }}>Doanh thu theo kênh (triệu đ)</div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 52 }}>
                      {BARS.map((b, i) => (
                        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                          <div style={{ width: "100%", overflow: "hidden", height: b.h, borderRadius: "3px 3px 0 0", transformOrigin: "bottom", animation: `barGrow 1s ease-out ${b.d}s forwards`, transform: "scaleY(0)" }}>
                            <div style={{ width: "100%", height: "100%", background: b.color, borderRadius: "3px 3px 0 0" }} />
                          </div>
                          <span style={{ fontSize: 8, color: "#2A4570" }}>{b.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Task list */}
                  <div style={{ borderRadius: 10, padding: "10px 12px", background: "#0E1E35", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: 9, fontWeight: 600, color: "#8892A4", marginBottom: 8 }}>Task hôm nay</div>
                    {TASKS.map((t, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: t.c, flexShrink: 0 }} />
                        <span style={{ fontSize: 9, color: "#8892A4", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.name}</span>
                        <span style={{ fontSize: 8, fontWeight: 600, padding: "1px 5px", borderRadius: 3, background: t.bg, color: t.c, flexShrink: 0 }}>{t.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Floating Alert ── */}
            <div style={{
              position: "absolute", top: 54, right: 0, zIndex: 12,
              display: "flex", alignItems: "center", gap: 7,
              borderRadius: 10, padding: "7px 10px",
              background: "#0E1E35",
              border: "1px solid rgba(245,158,11,0.35)",
              color: "#FBBF24", fontSize: 9, fontWeight: 600,
              boxShadow: "0 8px 24px rgba(0,0,0,0.4),0 0 20px rgba(245,158,11,0.08)",
              animation: "alertIn 0.5s cubic-bezier(0.16,1,0.3,1) 3.5s both,alertPulse 2s ease-in-out 4s infinite",
              whiteSpace: "nowrap",
            }}>
              <span style={{ fontSize: 12 }}>⚠️</span>
              <div style={{ lineHeight: 1.4 }}>
                Deal VIFIT — 5 ngày chưa update
                <span style={{ display: "block", color: "#4E6380", fontWeight: 400, fontSize: 8 }}>AI Agent phát hiện · vừa xong</span>
              </div>
            </div>

            {/* ── Chatbot panel ── */}
            <div style={{
              position: "absolute", bottom: 0, right: 0, zIndex: 11,
              width: 232, borderRadius: 16, overflow: "hidden",
              background: "#0E1E35",
              border: "1px solid rgba(37,99,235,0.4)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5),0 0 0 1px rgba(6,182,212,0.08),0 0 40px rgba(37,99,235,0.1)",
              animation: "chatIn 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both",
            }}>
              {/* Chat header */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", background: "#132540", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white", flexShrink: 0, background: "linear-gradient(135deg,#2563EB,#06B6D4)", boxShadow: "0 0 10px rgba(37,99,235,0.4)" }}>✦</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#E8EAF0" }}>Lark AI Agent</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 8, color: "#34D399" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#34D399", boxShadow: "0 0 4px #34D399", animation: "blink 2s ease-in-out infinite", display: "inline-block" }} />
                    Đang kết nối · realtime
                  </div>
                </div>
              </div>
              {/* Messages area */}
              <div ref={chatRef} style={{ display: "flex", flexDirection: "column", gap: 7, padding: "10px 10px 8px", minHeight: 180, maxHeight: 220, overflow: "hidden" }} />
              {/* Input bar */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 10px", borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0A1628" }}>
                <span style={{ flex: 1, fontSize: 9, color: "#2A4570" }}>Hỏi AI về vận hành...</span>
                <div style={{ width: 22, height: 22, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", background: "#2563EB", flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" stroke="none"/></svg>
                </div>
              </div>
            </div>
          </div>
          {/* END right column */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;