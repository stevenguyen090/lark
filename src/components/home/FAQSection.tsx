import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Tôi không rành công nghệ, có dùng được Lark không?",
    a: "Lark được thiết kế cho người dùng phổ thông. Chúng tôi training đội ngũ từ đầu đến khi thành thạo — kể cả với những người chưa từng dùng phần mềm quản lý.",
  },
  {
    q: "Triển khai mất bao lâu?",
    a: "Thường 4–6 tuần cho hệ thống cơ bản. Tuỳ quy mô và độ phức tạp của doanh nghiệp, thời gian có thể điều chỉnh phù hợp.",
  },
  {
    q: "Sau khi triển khai xong, tôi có được hỗ trợ tiếp không?",
    a: "Có. Gói Triển khai toàn diện bao gồm đồng hành liên tục cho đến khi doanh nghiệp vận hành ổn định — không có thời hạn cố định.",
  },
  {
    q: "Chi phí thực tế là bao nhiêu?",
    a: "Tính theo giờ thực tế làm việc, từ 500.000đ/giờ. Dự án trung bình 40–80 giờ. Đặt lịch tư vấn miễn phí để nhận ước tính cụ thể cho doanh nghiệp bạn.",
  },
  {
    q: "Lark Consult có khác gì so với các đơn vị tư vấn IT khác?",
    a: "Chúng tôi tập trung vào vận hành thực tế, không chỉ cài tool. Chúng tôi không kết thúc dự án khi hết giờ — mà khi doanh nghiệp thực sự vận hành ổn định.",
  },
  {
    q: "Lark phù hợp với ngành của tôi không?",
    a: "Đã triển khai cho agency, fitness, bán lẻ, thương mại, dịch vụ. Buổi tư vấn miễn phí sẽ xác định Lark có phù hợp không trước khi bạn quyết định.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Câu hỏi <span className="text-primary">thường gặp</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
