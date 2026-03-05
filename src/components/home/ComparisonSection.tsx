import { X, Minus, CheckCircle2 } from "lucide-react";

const rows = [
  {
    criteria: "Thiết kế hệ thống",
    self: "Thiếu kinh nghiệm hệ thống tổng thể",
    freelancer: "Làm theo yêu cầu từng phần",
    lark: "Thiết kế hệ thống end-to-end",
  },
  {
    criteria: "Đo lường hiệu quả",
    self: "Không đo được hiệu quả",
    freelancer: "Không đồng hành lâu dài",
    lark: "Có KPI & đồng hành dài hạn",
  },
  {
    criteria: "Trọng tâm triển khai",
    self: "Dễ triển khai sai trọng tâm",
    freelancer: "Thiếu hiểu biết mô hình kinh doanh",
    lark: "Bóc tách mô hình trước khi đề xuất",
  },
];

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Vì sao không nên{" "}
            <span className="text-primary">tự làm hoặc chỉ thuê freelancer?</span>
          </h2>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground" />
                <th className="p-4 text-sm font-medium text-muted-foreground text-center">Tự làm</th>
                <th className="p-4 text-sm font-medium text-muted-foreground text-center">Freelancer</th>
                <th className="p-4 text-sm font-medium text-primary text-center bg-primary/5 rounded-t-lg">Lark Consult</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 text-sm font-medium text-foreground">{row.criteria}</td>
                  <td className="p-4 text-sm text-muted-foreground text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span>{row.self}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Minus className="w-4 h-4 text-warning flex-shrink-0" />
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-center bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-primary font-medium">{row.lark}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
