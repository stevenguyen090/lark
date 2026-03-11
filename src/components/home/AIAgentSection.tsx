import { useState, useEffect, useCallback, useRef } from "react";
import { Send, BarChart3, AlertTriangle, Users, GitBranch } from "lucide-react";

const cases = [
  {
    title: "Báo cáo tức thì",
    tag: "CEO · COO",
    desc: "Hỏi doanh thu, tiến độ, KPI bất kỳ lúc nào — AI tổng hợp ngay từ dữ liệu thật",
    icon: BarChart3,
    iconBg: "rgba(37,99,235,0.15)",
    context: "context: sales_data · kpi_board · lark_base",
    messages: [
      { role: "user" as const, text: "Doanh thu tuần này so với tuần trước thế nào? Team sales đang ra sao?" },
      {
        role: "ai" as const,
        parts: [
          { type: "text" as const, content: 'Tổng hợp từ Lark Base · Sales Pipeline · cập nhật lúc <strong>08:47</strong> hôm nay:' },
          {
            type: "metrics" as const,
            items: [
              { val: "284tr", label: "Doanh thu tuần này", delta: "↑ 18% so tuần trước", cls: "delta-up" },
              { val: "12/15", label: "Deal đang chạy", delta: "3 deal cần follow-up", cls: "delta-warn" },
              { val: "68%", label: "Tỷ lệ chốt tháng", delta: "↑ 5pp so T2", cls: "delta-up" },
            ],
          },
          { type: "text" as const, content: "Có <strong>1 điểm cần chú ý:</strong>" },
          { type: "alert" as const, icon: "⚠️", content: "Deal <strong>VIFIT Active đang ở giai đoạn Proposal đã 5 ngày chưa có update</strong>. Giá trị: 45tr. Bạn muốn tôi tạo reminder cho Huy không?" },
        ],
      },
    ],
  },
  {
    title: "Alert thông minh",
    tag: "CEO · Ops",
    desc: "AI tự phát hiện bất thường và nhắn vào chat của sếp trước khi thành vấn đề lớn",
    icon: AlertTriangle,
    iconBg: "rgba(245,158,11,0.15)",
    context: "context: task_monitor · deadline_tracker · lark_base",
    messages: [
      { role: "user" as const, text: "Có gì bất thường trong tuần này không?" },
      {
        role: "ai" as const,
        parts: [
          { type: "text" as const, content: "Tôi phát hiện <strong>2 vấn đề cần chú ý</strong> trong tuần này:" },
          { type: "alert" as const, icon: "🔴", content: "<strong>3 task quá hạn</strong> từ team Marketing — đều liên quan đến campaign Q2. Chưa có ai update." },
          { type: "alert" as const, icon: "🟡", content: "<strong>Tỷ lệ hoàn thành task giảm 15%</strong> so với tuần trước. Nguyên nhân: 2 nhân sự nghỉ phép chưa bàn giao." },
          { type: "text" as const, content: "Bạn muốn tôi gửi reminder cho các task quá hạn không?" },
        ],
      },
    ],
  },
  {
    title: "Onboarding nhân sự",
    tag: "HR · Manager",
    desc: "Nhân viên mới hỏi quy trình — AI trả lời từ tài liệu nội bộ",
    icon: Users,
    iconBg: "rgba(16,185,129,0.15)",
    context: "context: wiki_internal · hr_docs · onboarding_flow",
    messages: [
      { role: "user" as const, text: "Tôi mới vào, quy trình xử lý khiếu nại khách hàng như thế nào?" },
      {
        role: "ai" as const,
        parts: [
          { type: "text" as const, content: 'Chào bạn! Tôi tìm thấy quy trình trong <strong>Wiki nội bộ · Phòng CSKH</strong>. Đây là tóm tắt:' },
          { type: "text" as const, content: "• <strong>Tiếp nhận (0–2h):</strong> Log vào Lark Base · Tag \"Khiếu nại\" · Assign cho CS on-duty.<br/>• <strong>Xử lý (2–24h):</strong> Liên hệ KH, xác nhận vấn đề · Phối hợp bộ phận liên quan.<br/>• <strong>Đóng ticket:</strong> KH confirm hài lòng · Update trạng thái \"Resolved\".<br/>• <strong>Escalate:</strong> Nếu quá 24h chưa xử lý xong → tự động notify Manager." },
        ],
      },
    ],
  },
  {
    title: "Phân tích điểm nghẽn",
    tag: "CEO · Sales Lead",
    desc: "Hỏi team đang bị tắc ở đâu — AI phân tích pipeline và chỉ ra nguyên nhân",
    icon: GitBranch,
    iconBg: "rgba(139,92,246,0.15)",
    context: "context: sales_pipeline · deal_tracker · activity_log",
    messages: [
      { role: "user" as const, text: "Tháng này team sales đang bị nghẽn ở đâu? Tại sao deal lâu chốt vậy?" },
      {
        role: "ai" as const,
        parts: [
          { type: "text" as const, content: "Tôi đã phân tích <strong>47 deal</strong> trong tháng 3. Tìm thấy điểm nghẽn rõ ràng:" },
          {
            type: "metrics" as const,
            items: [
              { val: "8.3 ngày", label: "Proposal → Demo", delta: "↑ 3 ngày so T2", cls: "delta-warn" },
              { val: "4 deal", label: "Stuck ở Negotiation", delta: "Trung bình 12 ngày", cls: "delta-warn" },
              { val: "23%", label: "Drop-off ở Proposal", delta: "Cao hơn bình thường", cls: "delta-down" },
            ],
          },
          { type: "text" as const, content: "<strong>Nguyên nhân chính:</strong><br/>• <strong>Proposal gửi chậm</strong> — 60% case mất hơn 3 ngày.<br/>• <strong>Thiếu follow-up</strong> — 4 deal không có activity trong 5+ ngày.<br/>• <strong>Deal size lớn</strong> — 3 deal >100tr đang chờ sếp KH duyệt nội bộ." },
        ],
      },
    ],
  },
];

const statsBar = [
  { label: "Tốc độ phản hồi", value: "< 3s", sub: "Thời gian phản hồi trung bình" },
  { label: "Độ chính xác", value: "94%", sub: "Độ chính xác trên data thật" },
  { label: "Tích hợp", value: "12+", sub: "Nguồn data tích hợp được" },
  { label: "Uptime", value: "24/7", sub: "Hoạt động không nghỉ" },
];

type MessagePart = {
  type: "text" | "metrics" | "alert";
  content?: string;
  icon?: string;
  items?: { val: string; label: string; delta: string; cls: string }[];
};

type Message = {
  role: "user" | "ai";
  text?: string;
  parts?: MessagePart[];
};

const AIAgentSection = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [messages, setMessages] = useState<Array<{ type: string; data: Message }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const msgAreaRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const playConversation = useCallback((msgs: Message[]) => {
    clearTimeouts();
    setMessages([]);
    setIsTyping(false);
    let delay = 0;

    msgs.forEach((msg) => {
      if (msg.role === "user") {
        const t1 = setTimeout(() => {
          setMessages((prev) => [...prev, { type: "user", data: msg }]);
          setIsTyping(true);
        }, delay);
        timeoutsRef.current.push(t1);
        delay += 800;
      } else {
        const t2 = setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [...prev, { type: "ai", data: msg }]);
        }, delay + 300);
        timeoutsRef.current.push(t2);
        delay += 400;
      }
    });
  }, [clearTimeouts]);

  const selectCase = useCallback((idx: number) => {
    setActiveCase(idx);
    playConversation(cases[idx].messages);
  }, [playConversation]);

  // Auto-rotate
  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setActiveCase((prev) => {
        const next = (prev + 1) % cases.length;
        playConversation(cases[next].messages);
        return next;
      });
    }, 8000);
    return () => { if (autoRotateRef.current) clearInterval(autoRotateRef.current); };
  }, [playConversation]);

  // Init
  useEffect(() => {
    const t = setTimeout(() => selectCase(0), 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll to bottom
  useEffect(() => {
    if (msgAreaRef.current) {
      msgAreaRef.current.scrollTop = msgAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleCaseClick = (idx: number) => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    autoRotateRef.current = null;
    selectCase(idx);
  };

  const getDeltaColor = (cls: string) => {
    if (cls === "delta-up") return "#10B981";
    if (cls === "delta-down") return "#EF4444";
    return "#F59E0B";
  };

  return (
    <section id="ai-agent" className="relative overflow-hidden" style={{ background: "#09111F", padding: "90px 5%" }}>
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 blink-dot" />
            <span className="font-body text-xs font-bold uppercase tracking-[2px]" style={{ color: "#0EA5E9" }}>
              AI AGENT ON LARK — USE CASES
            </span>
          </div>
          <h2
            className="font-display font-extrabold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.15, color: "#F1F5F9" }}
          >
            Sếp hỏi 1 câu —<br />
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              hệ thống trả lời tức thì
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#94A3B8", fontSize: "1rem" }}>
            Khi hệ thống vận hành đủ chuẩn, AI Agent có thể đọc toàn bộ dữ liệu và trả lời bất kỳ câu hỏi nào từ sếp — trong vài giây.
          </p>
        </div>

        {/* Demo Layout: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
          {/* Use Case Panel */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:sticky lg:top-6 lg:self-start pb-2 lg:pb-0">
            {cases.map((c, i) => (
              <button
                key={i}
                onClick={() => handleCaseClick(i)}
                className="flex-shrink-0 w-[280px] lg:w-full text-left rounded-xl p-4 transition-all duration-200"
                style={{
                  background: activeCase === i ? "rgba(37,99,235,0.08)" : "#0F1C2E",
                  border: activeCase === i ? "1.5px solid rgba(37,99,235,0.5)" : "1.5px solid rgba(255,255,255,0.07)",
                  borderLeft: activeCase === i ? "3px solid #2563EB" : "3px solid transparent",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: c.iconBg }}>
                    <c.icon className="w-4 h-4" style={{ color: "#F1F5F9" }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#F1F5F9" }}>{c.title}</div>
                    <div className="font-mono-data text-[0.62rem]" style={{ color: "#94A3B8" }}>{c.tag}</div>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#94A3B8" }}>{c.desc}</p>
              </button>
            ))}
          </div>

          {/* Chat Window */}
          <div
            className="rounded-2xl flex flex-col overflow-hidden"
            style={{
              background: "#0F1C2E",
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: "580px",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.1), 0 32px 64px rgba(0,0,0,0.4), 0 0 80px rgba(37,99,235,0.05)",
            }}
          >
            {/* Chrome bar */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: "#162438", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", color: "white" }}>
                  ✦
                </div>
                <div>
                  <span className="text-xs font-bold" style={{ color: "#F1F5F9" }}>Lark AI Agent</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-green-500 blink-dot" />
                    <span className="font-mono-data text-[0.65rem]" style={{ color: "#10B981" }}>connected · real-time data</span>
                  </div>
                </div>
              </div>
              <div className="font-mono-data text-[0.62rem] px-2 py-1 rounded" style={{ color: "#64748B", background: "#1C2E45", border: "1px solid rgba(255,255,255,0.07)" }}>
                {cases[activeCase].context}
              </div>
            </div>

            {/* Messages area */}
            <div ref={msgAreaRef} className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: "smooth" }}>
              {messages.map((msg, idx) => (
                <div key={idx} className="animate-fade-in">
                  {msg.type === "user" ? (
                    <div className="flex justify-end gap-2">
                      <div className="rounded-xl px-4 py-2.5 max-w-[80%]" style={{ background: "#2563EB", borderRadius: "12px 4px 12px 12px" }}>
                        <p className="text-sm text-white">{msg.data.text}</p>
                      </div>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "#1C2E45", color: "#94A3B8" }}>S</div>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", color: "white" }}>✦</div>
                      <div className="space-y-3 max-w-[90%]">
                        {msg.data.parts?.map((part, pi) => (
                          <div key={pi}>
                            {part.type === "text" && (
                              <div className="rounded-xl px-4 py-2.5" style={{ background: "#162438", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px 12px 12px 12px" }}>
                                <p className="text-sm" style={{ color: "#F1F5F9" }} dangerouslySetInnerHTML={{ __html: part.content || "" }} />
                              </div>
                            )}
                            {part.type === "metrics" && (
                              <div className="flex flex-wrap gap-2">
                                {part.items?.map((m, mi) => (
                                  <div key={mi} className="rounded-lg px-3 py-2" style={{ background: "#1C2E45", border: "1px solid rgba(255,255,255,0.12)" }}>
                                    <div className="font-mono-data text-lg font-semibold" style={{ color: "#F1F5F9" }}>{m.val}</div>
                                    <div className="text-[0.65rem]" style={{ color: "#94A3B8" }}>{m.label}</div>
                                    <div className="font-mono-data text-[0.62rem] mt-0.5" style={{ color: getDeltaColor(m.cls) }}>{m.delta}</div>
                                  </div>
                                ))}
                              </div>
                            )}
                            {part.type === "alert" && (
                              <div className="rounded-lg px-3 py-2.5 flex items-start gap-2" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" }}>
                                <span className="text-sm flex-shrink-0">{part.icon}</span>
                                <p className="text-xs" style={{ color: "#F1F5F9" }} dangerouslySetInnerHTML={{ __html: part.content || "" }} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2 animate-fade-in">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs flex-shrink-0" style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", color: "white" }}>✦</div>
                  <div className="rounded-xl px-4 py-3 flex gap-1" style={{ background: "#162438", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px 12px 12px 12px" }}>
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full" style={{ background: "#64748B", animation: `typingBounce 1.2s ease infinite ${d * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input area */}
            <div className="px-4 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2.5" style={{ background: "#1C2E45", border: "1px solid rgba(255,255,255,0.12)" }}>
                <input
                  type="text"
                  readOnly
                  placeholder="Hỏi AI Agent bất cứ điều gì..."
                  className="flex-1 bg-transparent border-none outline-none text-sm font-body"
                  style={{ color: "#F1F5F9", caretColor: "#2563EB" }}
                />
                <button className="w-7 h-7 rounded-md flex items-center justify-center hover:scale-105 transition-transform" style={{ background: "#2563EB" }}>
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <p className="font-mono-data text-[0.62rem] mt-2 text-center" style={{ color: "#64748B" }}>
                ↑ Click một use case bên trái để xem demo · Powered by Lark AI Agent
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {statsBar.map((s, i) => (
            <div key={i} className="rounded-xl p-4 flex items-center gap-3" style={{ background: "#0F1C2E", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div>
                <div className="font-mono-data text-lg font-extrabold" style={{ color: "#F1F5F9" }}>{s.value}</div>
                <div className="text-[0.7rem]" style={{ color: "#94A3B8" }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div
          className="mt-8 rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(6,182,212,0.06))",
            border: "1px solid rgba(37,99,235,0.2)",
          }}
        >
          <div>
            <h3 className="font-display font-extrabold text-base mb-1" style={{ color: "#F1F5F9", fontSize: "1.05rem" }}>
              Muốn xây AI Agent cho doanh nghiệp của bạn?
            </h3>
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              Hệ thống vận hành đủ chuẩn là nền tảng bắt buộc — chúng tôi xây cả hai.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 py-2.5 rounded-lg font-bold text-sm text-white transition-all hover:-translate-y-0.5" style={{ background: "#2563EB", boxShadow: "0 0 20px rgba(37,99,235,0.4)" }}>
                Đặt lịch tư vấn miễn phí →
              </button>
            </a>
            <button className="px-5 py-2.5 rounded-lg font-bold text-sm transition-all" style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "#94A3B8" }}>
              Xem thêm use cases
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;
