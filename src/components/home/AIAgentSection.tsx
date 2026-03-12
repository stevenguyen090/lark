import { useState, useEffect, useCallback, useRef } from "react";

type MessagePart = {
  t: string;
  v?: string;
  variant?: string;
  icon?: string;
  items?: any[];
};

type ConvMessage = {
  role: "user" | "ai";
  text?: string;
  parts?: MessagePart[];
};

const CASES = [
  {
    icon: "📊",
    iconBg: "rgba(37,99,235,0.12)",
    title: "Báo cáo tức thì",
    desc: "Hỏi doanh thu, tiến độ, KPI bất kỳ lúc nào — AI tổng hợp ngay từ dữ liệu thật trong Lark.",
    msgs: [
      { role: "user" as const, text: "Doanh thu tuần này so với tuần trước thế nào? Team sales đang ra sao?" },
      {
        role: "ai" as const,
        parts: [
          { t: "text", v: 'Tổng hợp từ Lark Base · Sales Pipeline · cập nhật lúc <b>08:47</b> hôm nay:' },
          { t: "metrics", items: [
            { val: "284tr", lbl: "Doanh thu tuần này", delta: "↑ 18% so tuần trước", cls: "c-up" },
            { val: "12/15", lbl: "Deal đang chạy", delta: "3 deal cần follow-up", cls: "c-warn" },
            { val: "68%", lbl: "Tỷ lệ chốt tháng", delta: "↑ 5pp so T2", cls: "c-up" },
          ]},
          { t: "callout", variant: "warn", icon: "⚠️", v: 'Deal <b>VIFIT Active</b> ở giai đoạn Proposal đã <b>5 ngày chưa có update</b>. Giá trị: 45tr. Tạo reminder cho Huy không?' },
          { t: "chips", items: ["✓ Tạo reminder cho Huy", "📋 Xem pipeline đầy đủ", "📊 So sánh theo tuần"] },
        ],
      },
    ],
  },
  {
    icon: "🚨",
    iconBg: "rgba(245,158,11,0.12)",
    title: "Alert thông minh",
    desc: "AI tự phát hiện bất thường và nhắn sếp trước khi thành vấn đề lớn.",
    msgs: [
      { role: "user" as const, text: "Có vấn đề gì đang xảy ra trong hệ thống không?" },
      {
        role: "ai" as const,
        parts: [
          { t: "text", v: 'Tôi đã quét toàn bộ hệ thống lúc <b>09:15</b>. Phát hiện <b>3 điểm cần chú ý:</b>' },
          { t: "callout", variant: "error", icon: "🔴", v: '<b>[Nghiêm trọng]</b> Task "Cập nhật quy trình CSKH" — trễ <b>3 ngày</b>, chưa ai nhận.' },
          { t: "callout", variant: "warn", icon: "🟡", v: '<b>[Cảnh báo]</b> Sprint tháng 3 đang ở <b>54%</b> — thấp hơn mục tiêu 80%.' },
          { t: "callout", variant: "ok", icon: "🟢", v: '<b>[Bình thường]</b> 8 task còn lại đúng tiến độ.' },
          { t: "chips", items: ["🎯 Giao task cho team", "📈 Xem sprint forecast", "🔕 Tắt alert này"] },
        ],
      },
    ],
  },
  {
    icon: "🤝",
    iconBg: "rgba(16,185,129,0.12)",
    title: "Onboarding nhân sự",
    desc: "Nhân viên mới hỏi quy trình — AI trả lời từ tài liệu nội bộ, không cần manager giải thích lại.",
    msgs: [
      { role: "user" as const, text: "Quy trình xử lý khiếu nại khách hàng là gì? Tôi mới vào chưa biết." },
      {
        role: "ai" as const,
        parts: [
          { t: "text", v: 'Tôi tìm thấy quy trình trong <b>Wiki nội bộ / CSKH · cập nhật 12/02</b>. Tóm tắt:' },
          { t: "list", items: [
            { color: "#3B82F6", icon: "①", v: '<b>Tiếp nhận (0–2h):</b> Log vào Lark Base · Tag "Khiếu nại" · Assign CS on-duty.' },
            { color: "#8B5CF6", icon: "②", v: '<b>Xử lý (2–24h):</b> Liên hệ KH · Xác nhận vấn đề · Phối hợp bộ phận liên quan.' },
            { color: "#10B981", icon: "③", v: '<b>Đóng ticket:</b> KH confirm hài lòng · Update "Resolved" · Ghi note.' },
            { color: "#EF4444", icon: "🚨", v: '<b>Escalate:</b> Quá 24h chưa xong → auto notify Manager.' },
          ]},
          { t: "callout", variant: "ok", icon: "📄", v: 'Tài liệu đầy đủ: <b>QT-003-Khieu-Nai.docx</b> · Mở không?' },
          { t: "chips", items: ["📖 Mở tài liệu đầy đủ", "🎥 Xem video hướng dẫn", "❓ Hỏi thêm"] },
        ],
      },
    ],
  },
  {
    icon: "🔍",
    iconBg: "rgba(139,92,246,0.12)",
    title: "Phân tích điểm nghẽn",
    desc: "Hỏi team đang bị tắc ở đâu — AI phân tích pipeline và chỉ ra nguyên nhân gốc rễ.",
    msgs: [
      { role: "user" as const, text: "Tháng này team sales đang bị nghẽn ở đâu? Tại sao deal lâu chốt vậy?" },
      {
        role: "ai" as const,
        parts: [
          { t: "text", v: 'Tôi đã phân tích <b>47 deal</b> trong tháng 3. Tìm thấy điểm nghẽn rõ ràng:' },
          { t: "metrics", items: [
            { val: "8.3 ngày", lbl: "Proposal → Demo", delta: "↑ 3 ngày so T2", cls: "c-down" },
            { val: "4 deal", lbl: "Stuck ở Negotiation", delta: "Trung bình 12 ngày", cls: "c-warn" },
            { val: "23%", lbl: "Drop-off ở Proposal", delta: "Cao hơn bình thường", cls: "c-down" },
          ]},
          { t: "list", items: [
            { color: "#EF4444", icon: "🔴", v: '<b>Proposal gửi chậm</b> — 60% case mất hơn 3 ngày sau demo mới gửi. Khách mất hứng.' },
            { color: "#F59E0B", icon: "🟡", v: '<b>Thiếu follow-up</b> — 4 deal ở Negotiation không có activity trong 5+ ngày.' },
            { color: "#3B82F6", icon: "🔵", v: '<b>Deal size lớn</b> — 3 deal >100tr đang chờ sếp KH duyệt nội bộ.' },
          ]},
          { t: "chips", items: ["📋 Tạo SLA cho proposal", "🔔 Set auto-reminder", "📊 Full funnel report"] },
        ],
      },
    ],
  },
];

const AIAgentSection = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [displayMsgs, setDisplayMsgs] = useState<Array<{ role: string; data: ConvMessage }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const msgsRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const playConv = useCallback((msgs: ConvMessage[]) => {
    clearTimers();
    setDisplayMsgs([]);
    setIsTyping(false);
    let delay = 0;
    msgs.forEach((msg) => {
      if (msg.role === "user") {
        const t1 = setTimeout(() => {
          setDisplayMsgs(prev => [...prev, { role: "user", data: msg }]);
          setIsTyping(true);
        }, delay);
        timersRef.current.push(t1);
        delay += 900;
      } else {
        const t2 = setTimeout(() => {
          setIsTyping(false);
          setDisplayMsgs(prev => [...prev, { role: "ai", data: msg }]);
        }, delay);
        timersRef.current.push(t2);
        delay += 350;
      }
    });
  }, [clearTimers]);

  const selectCase = useCallback((idx: number) => {
    setActiveCase(idx);
    playConv(CASES[idx].msgs);
  }, [playConv]);

  useEffect(() => {
    const t = setTimeout(() => selectCase(0), 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveCase(prev => {
        const next = (prev + 1) % CASES.length;
        playConv(CASES[next].msgs);
        return next;
      });
    }, 9000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [playConv]);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [displayMsgs, isTyping]);

  const handleClick = (idx: number) => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = null;
    selectCase(idx);
  };

  const deltaColor = (cls: string) => cls === "c-up" ? "#34D399" : cls === "c-down" ? "#F87171" : "#FBBF24";

  return (
    <section id="ai-agent" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* BG effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(37,99,235,0.07), transparent), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(6,182,212,0.05), transparent)" }} />

      <div className="container-content relative z-[1]">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />AI Agent on Lark</div>
        <h2 className="heading-h2 reveal">Sếp hỏi 1 câu — hệ thống <span className="kw">trả lời tức thì</span></h2>
        <p className="body-lg reveal mt-4" style={{ maxWidth: 580 }}>
          Khi hệ thống vận hành đủ chuẩn, AI Agent đọc toàn bộ dữ liệu và trả lời bất kỳ câu hỏi nào của lãnh đạo — thay vì mở chục dashboard để tìm câu trả lời.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 mt-12">
          {/* Cases */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:sticky lg:top-[90px] lg:self-start pb-2 lg:pb-0">
            {CASES.map((c, i) => (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className="flex-shrink-0 min-w-[190px] lg:min-w-0 w-full text-left rounded-[14px] p-4 px-5 transition-all relative overflow-hidden"
                style={{
                  background: activeCase === i ? "rgba(37,99,235,0.06)" : "#0A1628",
                  border: activeCase === i ? "1.5px solid rgba(37,99,235,0.5)" : "1.5px solid rgba(255,255,255,0.09)",
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[3px] transition-colors" style={{ background: activeCase === i ? "#3B82F6" : "transparent" }} />
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center text-sm" style={{ background: c.iconBg }}>{c.icon}</div>
                  <div className="text-base font-semibold text-t-primary" style={{ lineHeight: 1.3 }}>{c.title}</div>
                </div>
                <p className="text-sm text-t-secondary hidden lg:block" style={{ lineHeight: 1.5, paddingLeft: 40 }}>{c.desc}</p>
              </button>
            ))}
          </div>

          {/* Chat Window */}
          <div className="rounded-[20px] flex flex-col overflow-hidden" style={{
            background: "#0A1628",
            border: "1px solid rgba(255,255,255,0.14)",
            minHeight: 560,
            boxShadow: "0 0 0 1px rgba(37,99,235,0.1), 0 40px 80px rgba(0,0,0,0.5), 0 0 100px rgba(37,99,235,0.06)",
          }}>
            {/* Chrome */}
            <div className="flex items-center gap-3 px-[18px] py-3" style={{ background: "#0E1E35", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex gap-[5px]">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <div className="flex items-center gap-[9px] flex-1">
                <div className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center text-xs text-white" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", boxShadow: "0 0 12px rgba(37,99,235,0.4)" }}>✦</div>
                <div>
                  <div className="text-sm font-bold text-t-primary">Lark AI Agent</div>
                  <div className="flex items-center gap-1 text-[11px] text-g-400">
                    <span className="w-[5px] h-[5px] rounded-full blink-dot" style={{ background: "#34D399", boxShadow: "0 0 5px #34D399" }} />
                    connected · real-time data
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-t-tertiary px-2 py-[3px] rounded-md" style={{ background: "#1C2E45", border: "1px solid rgba(255,255,255,0.05)" }}>
                context: lark_base
              </div>
            </div>

            {/* Messages */}
            <div ref={msgsRef} className="flex-1 overflow-y-auto p-5 px-5 flex flex-col gap-[18px]" style={{ scrollBehavior: "smooth" }}>
              {displayMsgs.map((msg, idx) => (
                <div key={idx} className={`flex gap-[9px] items-start animate-fade-in ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-[27px] h-[27px] rounded-[7px] flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 ${msg.role === "user" ? "" : ""}`}
                    style={msg.role === "user"
                      ? { background: "#1C2E45", color: "#94A3B8", border: "1px solid rgba(255,255,255,0.09)" }
                      : { background: "linear-gradient(135deg, #2563EB, #06B6D4)", color: "white", boxShadow: "0 0 10px rgba(37,99,235,0.3)" }
                    }>
                    {msg.role === "user" ? "S" : "✦"}
                  </div>

                  {msg.role === "user" ? (
                    <div className="max-w-[80%] px-3.5 py-[11px] text-sm text-white font-medium" style={{ background: "#2563EB", borderRadius: "12px 3px 12px 12px" }}>
                      {msg.data.text}
                    </div>
                  ) : (
                    <div className="max-w-[80%] flex flex-col gap-2">
                      {msg.data.parts?.map((part, pi) => (
                        <div key={pi}>
                          {part.t === "text" && (
                            <div className="px-3.5 py-[11px] text-sm text-t-primary" style={{ background: "#0E1E35", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "3px 12px 12px 12px", lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: part.v || "" }} />
                          )}
                          {part.t === "metrics" && (
                            <div className="flex flex-wrap gap-2">
                              {part.items?.map((m: any, mi: number) => (
                                <div key={mi} className="rounded-lg px-[11px] py-2 min-w-[90px]" style={{ background: "#1C2E45", border: "1px solid rgba(255,255,255,0.09)" }}>
                                  <div className="text-base font-bold text-t-primary" style={{ lineHeight: 1.2 }}>{m.val}</div>
                                  <div className="text-[11px] text-t-tertiary mt-0.5">{m.lbl}</div>
                                  <div className="text-[11px] mt-[3px]" style={{ color: deltaColor(m.cls) }}>{m.delta}</div>
                                </div>
                              ))}
                            </div>
                          )}
                          {part.t === "callout" && (
                            <div className="flex items-start gap-2 rounded-lg px-[11px] py-[9px] text-[13px]" style={{
                              background: part.variant === "warn" ? "rgba(245,158,11,0.08)" : part.variant === "ok" ? "rgba(16,185,129,0.07)" : "rgba(239,68,68,0.07)",
                              border: `1px solid ${part.variant === "warn" ? "rgba(245,158,11,0.2)" : part.variant === "ok" ? "rgba(16,185,129,0.18)" : "rgba(239,68,68,0.18)"}`,
                              lineHeight: 1.55,
                            }}>
                              <span>{part.icon}</span>
                              <span dangerouslySetInnerHTML={{ __html: part.v || "" }} />
                            </div>
                          )}
                          {part.t === "list" && (
                            <div className="flex flex-col gap-1.5">
                              {part.items?.map((item: any, li: number) => (
                                <div key={li} className="flex items-start gap-2 text-[13px]" style={{ lineHeight: 1.5 }}>
                                  <div className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0 mt-0.5" style={{ background: `${item.color}20`, color: item.color }}>{item.icon}</div>
                                  <span dangerouslySetInnerHTML={{ __html: item.v }} />
                                </div>
                              ))}
                            </div>
                          )}
                          {part.t === "chips" && (
                            <div className="flex flex-wrap gap-[5px] mt-2.5">
                              {part.items?.map((chip: string, ci: number) => (
                                <span key={ci} className="text-xs font-semibold px-2.5 py-1 rounded-full cursor-pointer transition-all text-c-400 hover:bg-[rgba(6,182,212,0.12)]" style={{ border: "1px solid rgba(255,255,255,0.14)", background: "rgba(6,182,212,0.05)" }}>{chip}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-[9px] items-start animate-fade-in">
                  <div className="w-[27px] h-[27px] rounded-[7px] flex items-center justify-center text-[11px] text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", boxShadow: "0 0 10px rgba(37,99,235,0.3)" }}>✦</div>
                  <div className="flex items-center gap-1 px-3.5 py-3" style={{ background: "#0E1E35", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "3px 12px 12px 12px" }}>
                    {[0, 1, 2].map(d => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full" style={{ background: "#4E6380", animation: `typingBounce 1.3s ease-in-out infinite ${d * 0.18}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-[13px]" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "#0E1E35" }}>
              <div className="flex items-center gap-[9px] rounded-[10px] px-3.5 py-2.5" style={{ background: "#1C2E45", border: "1px solid rgba(255,255,255,0.09)" }}>
                <input type="text" readOnly placeholder="Hỏi AI Agent bất cứ điều gì về vận hành..." className="flex-1 bg-transparent border-none outline-none text-sm text-t-primary" style={{ caretColor: "#3B82F6" }} />
                <button className="w-[27px] h-[27px] rounded-md flex items-center justify-center flex-shrink-0 transition-all hover:scale-105" style={{ background: "#2563EB" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-white"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
              <div className="text-[11px] text-t-tertiary mt-[7px] pl-0.5">↑ Chọn một use case để xem demo · Powered by Lark AI Agent</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 relative z-[1]">
          {[
            { icon: "⚡", bg: "rgba(37,99,235,0.1)", val: "< 3s", lbl: "Thời gian phản hồi" },
            { icon: "🎯", bg: "rgba(16,185,129,0.1)", val: "94%", lbl: "Độ chính xác trên data thật" },
            { icon: "🔗", bg: "rgba(245,158,11,0.1)", val: "12+", lbl: "Nguồn data tích hợp" },
            { icon: "💬", bg: "rgba(139,92,246,0.1)", val: "24/7", lbl: "Hoạt động liên tục" },
          ].map((s, i) => (
            <div key={i} className="card-dark flex items-center gap-3 p-4 px-5 reveal">
              <div className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-[15px] flex-shrink-0" style={{ background: s.bg }}>{s.icon}</div>
              <div>
                <div className="heading-h3 text-xl">{s.val}</div>
                <div className="text-sm text-t-secondary mt-0.5">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;
