const JTBDSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Điều CEO SME thực sự cần
          </div>

          {/* Main content */}
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Khi tìm giải pháp vận hành, CEO SME muốn chắc chắn giải pháp đó{" "}
            <span className="font-semibold text-primary">phù hợp với doanh nghiệp mình</span>, 
            không làm gián đoạn công việc, và có thể{" "}
            <span className="font-semibold text-primary">đo được hiệu quả thực tế</span>{" "}
            trước khi mở rộng.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JTBDSection;
