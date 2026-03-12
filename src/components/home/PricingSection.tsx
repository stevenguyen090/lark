import { useEffect, useRef } from "react";
const PricingSection = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const o = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); o.unobserve(e.target); } }), { threshold: 0.08 });
    ref.current?.querySelectorAll(".reveal").forEach(el => o.observe(el));
    return () => o.disconnect();
  }, []);
  return (
    <section id="pricing" ref={ref} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Pricing</div>
        <h2 className="heading-h2 reveal">Chọn mức độ đồng hành <span className="kw">phù hợp với bạn</span></h2>
        <p className="body-lg reveal mt-4">Dù bạn mới tìm hiểu hay đã sẵn sàng xây hệ thống — chúng tôi đều có cách phù hợp.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 items-start">
          {/* Gói 1 */}
          <div className="card-dark p-8 reveal">
            <div className="text-sm font-semibold text-t-tertiary mb-2">Gói 01</div>
            <div className="heading-h2 mb-4" style={{ lineHeight: 1.2 }}>Tư vấn vận hành</div>
            <div className="mb-3"><span className="text-[32px] font-bold text-b-500 leading-none">Miễn phí</span></div>
            <div className="text-sm text-t-secondary p-3 px-4 rounded-[10px] mb-6" style={{ background: "#0E1E35", lineHeight: 1.65 }}>Dành cho doanh nghiệp muốn hiểu rõ điểm nghẽn trước khi đầu tư.</div>
            <ul className="flex flex-col gap-3 mb-6 list-none">
              {["1 buổi tư vấn 60 phút", "Phân tích mô hình vận hành", "Xác định 2–3 điểm nghẽn chính", "Đề xuất hướng giải quyết", "Không ràng buộc"].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-t-secondary" style={{ lineHeight: 1.55 }}>
                  <div className="w-[15px] h-[15px] rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(16,185,129,0.15)", color: "#34D399" }}>✓</div>{f}
                </li>
              ))}
            </ul>
            <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center">Đặt lịch ngay →</a>
          </div>
          {/* Gói 2 */}
          <div className="card-dark card-featured p-8 relative reveal reveal-d1">
            <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 text-[11px] font-bold text-white px-3.5 py-1 rounded-full whitespace-nowrap" style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }}>Phổ biến nhất</div>
            <div className="text-sm font-semibold text-t-tertiary mb-2">Gói 02</div>
            <div className="heading-h2 mb-4" style={{ lineHeight: 1.2 }}>Triển khai hệ thống</div>
            <div className="mb-3"><span className="text-[32px] font-bold text-b-500 leading-none">149K</span><span className="text-sm text-t-tertiary ml-[5px]">/ giờ thực tế</span></div>
            <div className="text-sm text-t-secondary p-3 px-4 rounded-[10px] mb-6" style={{ background: "#0E1E35", lineHeight: 1.65 }}>Xây hệ thống vận hành bài bản trên Lark. Trung bình 40–80 giờ.</div>
            <ul className="flex flex-col gap-3 mb-6 list-none">
              {["Toàn bộ nội dung Gói 1", "Chuẩn hoá quy trình & phân công", "Thiết kế & triển khai Lark đầy đủ", "Tích hợp tool bên thứ 3", "Training đội ngũ vận hành"].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-t-secondary" style={{ lineHeight: 1.55 }}>
                  <div className="w-[15px] h-[15px] rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(16,185,129,0.15)", color: "#34D399" }}>✓</div>{f}
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-[10px] text-sm text-t-secondary mb-6" style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.07), rgba(6,182,212,0.05))", border: "1px solid rgba(37,99,235,0.35)", lineHeight: 1.6 }}>
              <strong className="text-c-400">🤝 Cam kết:</strong> Chỉ thanh toán khi nghiệm thu đúng yêu cầu.
            </div>
            <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">Nhận báo giá →</a>
          </div>
          {/* Gói 3 */}
          <div className="card-dark p-8 reveal reveal-d2">
            <div className="text-sm font-semibold text-t-tertiary mb-2">Gói 03</div>
            <div className="heading-h2 mb-4" style={{ lineHeight: 1.2 }}>Kích hoạt AI Agent</div>
            <div className="mb-3"><span className="text-2xl font-bold text-c-400 leading-none">Báo giá riêng</span></div>
            <div className="text-sm text-t-secondary p-3 px-4 rounded-[10px] mb-6" style={{ background: "#0E1E35", lineHeight: 1.65 }}>Sau khi có nền tảng từ Gói 2, kích hoạt AI Agent.</div>
            <ul className="flex flex-col gap-3 mb-6 list-none">
              {["Toàn bộ nội dung Gói 2", "Tích hợp AI Agent vào Lark", "Cấu hình knowledge base", "Alert tự động khi bất thường", "Training AI theo đặc thù DN"].map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-t-secondary" style={{ lineHeight: 1.55 }}>
                  <div className="w-[15px] h-[15px] rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0 mt-0.5" style={{ background: "rgba(6,182,212,0.15)", color: "#22D3EE" }}>✓</div>{f}
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-[10px] text-sm text-t-secondary mb-6" style={{ background: "rgba(6,182,212,0.04)", border: "1px solid rgba(6,182,212,0.2)", lineHeight: 1.6 }}>
              <strong className="text-c-400">🤝 Cam kết:</strong> Không đạt, không thu.
            </div>
            <a href="https://larkconsult.sg.larksuite.com/share/base/form/shrlgQE4t5vcnWnbcDirbBCXj9d" target="_blank" rel="noopener noreferrer" className="btn-ghost w-full justify-center" style={{ borderColor: "rgba(6,182,212,0.3)", color: "#22D3EE" }}>Nhận báo giá →</a>
          </div>
        </div>
        {/* Guarantee */}
        <div className="mt-10 reveal">
          <div className="flex gap-6 items-start rounded-[20px] p-8 px-10" style={{ background: "#0E1E35", border: "1px solid rgba(37,99,235,0.35)" }}>
            <span className="text-[28px] flex-shrink-0 mt-0.5">🤝</span>
            <div>
              <div className="text-sm font-bold text-t-primary mb-4">Cam kết của Lark Consult — áp dụng cho mọi gói</div>
              <div className="flex flex-col gap-3">
                {["Chỉ thanh toán khi nghiệm thu đúng yêu cầu đã thống nhất", "Đồng hành liên tục cho đến khi vận hành ổn định", "Không kết thúc dự án khi hết giờ — kết thúc khi hệ thống hoạt động đúng"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-t-secondary" style={{ lineHeight: 1.6 }}>
                    <span className="text-g-400 font-bold flex-shrink-0 mt-0.5">✓</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
