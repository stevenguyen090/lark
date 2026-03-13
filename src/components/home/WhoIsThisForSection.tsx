import { useEffect, useRef } from "react";

const personas = [
  { num: "01", title: "Bán được nhưng không biết thực sự đang lãi hay lỗ ở đâu", desc: "Doanh thu trông ổn, nhưng margin thực, chi phí ẩn, deal nào đang bù lỗ cho deal nào — không có con số rõ ràng để quyết định." },
  { num: "02", title: "Giao việc xong rồi... không biết đang chạy đến đâu", desc: "Task giao qua Zalo, deadline trong đầu mỗi người. Muốn biết tiến độ thì phải đi hỏi — mà hỏi xong cũng chưa chắc biết thật sự đang như thế nào." },
  { num: "03", title: "Sales hứa khách, Ops không biết — phối hợp qua Zalo và trí nhớ", desc: "Không có luồng thông tin chung giữa các phòng. Mỗi bộ phận tự chạy riêng, sự cố xảy ra rồi mới phát hiện ra chỗ đứt gãy." },
  { num: "04", title: "Dữ liệu ở khắp nơi, không có bức tranh tổng", desc: "Pancake, Shopify, Meta Ads, Sepay chạy song song — không có một nơi duy nhất để nhìn thấy toàn bộ kinh doanh." },
];

const WhoIsThisForSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); observer.unobserve(e.target); } }), { threshold: 0.08 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="for" ref={sectionRef} className="section-padding">
      <div className="container-content">
        <div className="eyebrow reveal"><div className="eyebrow-pip" />Đối tượng phù hợp</div>
        <h2 className="heading-h2 reveal">Bạn đang <span className="kw">gặp vấn đề này</span> không?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {personas.map((p, i) => (
            <div key={p.num} className={`card-dark p-6 flex gap-4 items-start reveal ${i > 0 ? `reveal-d${i}` : ""}`}>
              <div className="text-sm font-semibold text-b-500 opacity-60 px-[7px] py-1 rounded-md flex-shrink-0 mt-0.5" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)" }}>{p.num}</div>
              <div>
                <div className="heading-h3 mb-2" style={{ lineHeight: 1.3 }}>{p.title}</div>
                <div className="text-sm text-t-secondary" style={{ lineHeight: 1.65 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
