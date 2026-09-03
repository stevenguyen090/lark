import type { SolutionBlueprint } from "@/types/solutionBlueprint";

type BlueprintKind = "reporting" | "workflow" | "onboarding" | "coordination";

interface BlueprintProfile {
  title: string;
  description: string;
  kind: BlueprintKind;
  source: string;
  sourceDescription: string;
  intake: string;
  record: string;
  check: string;
  output: string;
  owner: string;
  mobileSteps: string[];
  mermaid?: string;
}

const profiles: Record<string, BlueprintProfile> = {
  "fitness-chuoi-3-co-so-phoi-hop-kem": {
    title: "Luồng chuẩn hóa và so sánh hiệu quả ba cơ sở",
    description: "Phần mềm hội viên tại từng cơ sở vẫn là nguồn dữ liệu gốc. Lark chuẩn hóa cùng một bộ KPI, phát hiện cơ sở lệch chuẩn và giao hành động khắc phục cho đúng quản lý; không giả định kết nối thời gian thực khi API chưa được xác nhận.",
    kind: "coordination", source: "Phần mềm hội viên / POS từng cơ sở", sourceDescription: "Giữ giao dịch, hội viên và trạng thái gia hạn. Dữ liệu được nhận qua API, file export định kỳ hoặc biểu mẫu chuẩn tùy khả năng hệ thống hiện hữu.",
    intake: "Dữ liệu KPI và báo cáo theo kỳ", record: "Branch Operations", check: "Đủ dữ liệu và cùng định nghĩa KPI?", output: "Dashboard so sánh ba cơ sở", owner: "Chủ chuỗi và quản lý cơ sở",
    mobileSteps: ["Nhận dữ liệu từ từng cơ sở theo cùng kỳ báo cáo.", "Chuẩn hóa dữ liệu theo một bộ KPI chung.", "Kiểm tra bản ghi thiếu hoặc sai định nghĩa.", "So sánh cơ sở và phát hiện chỉ số lệch chuẩn.", "Cảnh báo, giao người xử lý và theo dõi kết quả."],
    mermaid: [
      "flowchart TB",
      "  POS[\"Phần mềm hội viên / POS<br/>từng cơ sở\"] -->|Export, API hoặc form chuẩn| NORMALIZE[\"Chuẩn hóa kỳ và định nghĩa KPI\"]",
      "  FORM[\"Quản lý cơ sở<br/>bổ sung dữ liệu vận hành\"] --> NORMALIZE",
      "  NORMALIZE --> BASE[(\"Lark Base<br/>Branch Operations\")]",
      "  BASE --> CHECK{\"Đủ dữ liệu và hợp lệ?\"}",
      "  CHECK -->|Chưa đạt| FIX[\"Trả lại cơ sở xác minh\"]",
      "  FIX --> BASE",
      "  CHECK -->|Đạt| DASH[\"Dashboard so sánh<br/>ba cơ sở\"]",
      "  BASE -->|Ngày hết hạn gói| QUEUE[\"Hàng đợi hội viên<br/>sắp hết hạn\"]",
      "  WIKI[(\"Wiki<br/>Playbook chung\")] -->|Kịch bản chăm sóc| CONTACT",
      "  QUEUE -->|Owner và deadline| STAFF[\"Lễ tân / CSKH phụ trách\"]",
      "  STAFF --> CONTACT[\"Liên hệ hội viên\"]",
      "  CONTACT --> RENEW{\"Gia hạn?\"}",
      "  RENEW -->|Có / Không và lý do| BASE",
      "  DASH --> GAP{\"Cơ sở lệch ngưỡng?\"}",
      "  GAP -->|Không| MONITOR[\"Theo dõi kỳ tiếp theo\"]",
      "  GAP -->|Có| ALERT[\"Cảnh báo chủ chuỗi\"]",
      "  ALERT --> TASK[\"Hành động khắc phục<br/>của quản lý cơ sở\"]",
      "  TASK -->|Nguyên nhân, hành động, kết quả| BASE",
      "  classDef actor fill:#132540,stroke:#64748B,color:#F0F6FF,stroke-width:1px",
      "  classDef process fill:#102A4C,stroke:#3B82F6,color:#F0F6FF,stroke-width:1.5px",
      "  classDef store fill:#0B3344,stroke:#22D3EE,color:#F0F6FF,stroke-width:1.5px",
      "  classDef decision fill:#3A2B0A,stroke:#FBBF24,color:#F8FAFC,stroke-width:1.5px",
      "  class POS,FORM,STAFF actor",
      "  class NORMALIZE,FIX,QUEUE,CONTACT,DASH,MONITOR,ALERT,TASK process",
      "  class BASE,WIKI store",
      "  class CHECK,RENEW,GAP decision",
    ].join("\n"),
  },
  "fitness-studio-yoga-onboarding": {
    title: "Luồng onboarding để nhân viên mới tự học và được xác nhận năng lực",
    description: "Kiến thức của chủ studio và nhân viên kỳ cựu được quản trị theo phiên bản trong Lark Wiki. Checklist, bài kiểm tra và bước duyệt năng lực giúp người mới chỉ làm độc lập sau khi đạt chuẩn.",
    kind: "onboarding", source: "Chủ studio và nhân viên kỳ cựu", sourceDescription: "Nguồn kiến thức gốc cho quy trình lễ tân, trải nghiệm hội viên và cách xử lý tình huống; chủ studio chịu trách nhiệm duyệt phiên bản.",
    intake: "SOP, video và tình huống thực tế", record: "Onboarding 10 ngày", check: "Đã hoàn tất và đạt chuẩn?", output: "Xác nhận làm việc độc lập", owner: "Chủ studio",
    mobileSteps: ["Ghi lại quy trình và tình huống thực tế.", "Đưa SOP, video vào Wiki có người sở hữu.", "Giao lộ trình và checklist theo từng ngày.", "Nhân viên nộp bài kiểm tra hoặc bằng chứng thực hành.", "Quản lý duyệt năng lực trước khi làm độc lập."],
    mermaid: [
      "flowchart TB",
      "  EXPERT[\"Chủ studio / lễ tân kỳ cựu\"] --> DRAFT[\"SOP, video và tình huống thực tế\"]",
      "  DRAFT --> REVIEW[\"Content owner review và duyệt phiên bản\"]",
      "  REVIEW --> WIKI[(\"Lark Wiki<br/>Playbook lễ tân\")]",
      "  WIKI --> BASE[(\"Lark Base<br/>Lộ trình 10 ngày\")]",
      "  BASE --> LEARN[\"Ngày 1–3<br/>Học và quan sát\"]",
      "  LEARN --> PRACTICE[\"Ngày 4–10<br/>Thực hành có giám sát\"]",
      "  PRACTICE --> EVIDENCE[\"Form / quiz / bằng chứng thực hành\"]",
      "  EVIDENCE --> ASSESS[\"Chủ studio đánh giá checklist\"]",
      "  ASSESS --> GATE{\"Đạt chuẩn vai trò?\"}",
      "  GATE -->|Chưa đạt| LEARN",
      "  GATE -->|Đạt| INDEPENDENT[\"Xác nhận làm việc độc lập\"]",
      "  PRACTICE -->|Tình huống mới| FEEDBACK[\"Gửi đề xuất cập nhật\"]",
      "  FEEDBACK --> REVIEW",
      "  classDef actor fill:#132540,stroke:#64748B,color:#F0F6FF,stroke-width:1px",
      "  classDef process fill:#102A4C,stroke:#3B82F6,color:#F0F6FF,stroke-width:1.5px",
      "  classDef store fill:#0B3344,stroke:#22D3EE,color:#F0F6FF,stroke-width:1.5px",
      "  classDef decision fill:#3A2B0A,stroke:#FBBF24,color:#F8FAFC,stroke-width:1.5px",
      "  class EXPERT actor",
      "  class DRAFT,REVIEW,LEARN,PRACTICE,EVIDENCE,ASSESS,INDEPENDENT,FEEDBACK process",
      "  class WIKI,BASE store",
      "  class GATE decision",
    ].join("\n"),
  },
  "fitness-gym-bao-cao-doanh-thu": {
    title: "Luồng đối soát doanh thu và danh sách hội viên cần chăm sóc",
    description: "POS hoặc phần mềm hội viên giữ giao dịch gốc. Lark nhận số liệu theo ngày, tách hoàn tiền/hủy giao dịch, cảnh báo dữ liệu thiếu và đưa hội viên sắp hết gói vào hàng đợi chăm sóc có người phụ trách.",
    kind: "reporting", source: "POS và phần mềm hội viên", sourceDescription: "Nguồn dữ liệu gốc cho giao dịch, hoàn tiền, phương thức thanh toán và ngày hết hạn gói; không thay thế hệ thống kế toán.",
    intake: "Giao dịch ngày và gói sắp hết hạn", record: "Daily Revenue & Renewal", check: "Đã đối soát đủ ca và ngoại lệ?", output: "Dashboard sáng và hàng đợi gia hạn", owner: "Chủ gym và lễ tân",
    mobileSteps: ["Nhận giao dịch và danh sách gói sắp hết hạn.", "Đối soát tiền mặt, chuyển khoản, hoàn và hủy.", "Cảnh báo ca chưa gửi hoặc số liệu bất thường.", "Cập nhật dashboard doanh thu mỗi sáng.", "Giao danh sách gia hạn và ghi nhận kết quả liên hệ."],
    mermaid: [
      "flowchart TB",
      "  POS[\"POS / Phần mềm hội viên\"] -->|Giao dịch, hoàn/hủy, ngày hết hạn| EXTRACT[\"Nhận dữ liệu theo ngày\"]",
      "  RECEPTION[\"Lễ tân cuối ca\"] -->|Xác nhận tiền mặt, chuyển khoản và ngoại lệ| RECONCILE[\"Đối soát cuối ca\"]",
      "  EXTRACT --> RECONCILE",
      "  RECONCILE --> CHECK{\"Đủ ca và cân số liệu?\"}",
      "  CHECK -->|Chưa| FIX[\"Nhắc ca xác minh chênh lệch\"]",
      "  FIX --> RECONCILE",
      "  CHECK -->|Đạt| BASE[(\"Lark Base<br/>Daily Revenue & Renewal\")]",
      "  BASE --> DASH[\"Dashboard doanh thu mỗi sáng\"]",
      "  DASH --> OWNER[\"Chủ gym quyết định ưu tiên\"]",
      "  BASE -->|Gói hết hạn trong 7 ngày| QUEUE[\"Hàng đợi gia hạn\"]",
      "  QUEUE --> STAFF[\"Lễ tân phụ trách + deadline\"]",
      "  STAFF --> CONTACT[\"Liên hệ hội viên\"]",
      "  CONTACT --> OUTCOME{\"Kết quả?\"}",
      "  OUTCOME -->|Gia hạn / chưa gia hạn + lý do| BASE",
      "  BASE -->|PT phụ trách, buổi hoàn thành, hội viên active, outcome gia hạn| PT[\"PT Scorecard<br/>hỗ trợ coaching\"]",
      "  classDef actor fill:#132540,stroke:#64748B,color:#F0F6FF,stroke-width:1px",
      "  classDef process fill:#102A4C,stroke:#3B82F6,color:#F0F6FF,stroke-width:1.5px",
      "  classDef store fill:#0B3344,stroke:#22D3EE,color:#F0F6FF,stroke-width:1.5px",
      "  classDef decision fill:#3A2B0A,stroke:#FBBF24,color:#F8FAFC,stroke-width:1.5px",
      "  class POS,RECEPTION,OWNER,STAFF actor",
      "  class EXTRACT,RECONCILE,FIX,DASH,QUEUE,CONTACT,PT process",
      "  class BASE store",
      "  class CHECK,OUTCOME decision",
    ].join("\n"),
  },
  "fitness-pt-freelance-quan-ly-lich": {
    title: "Luồng đặt lịch duy nhất cho PT freelance",
    description: "Lark Base là sổ vận hành cho availability và từng buổi tập. Học viên gửi yêu cầu qua link/form ngoài workspace; mọi yêu cầu được kiểm tra slot, buffer và quy tắc đổi/hủy. Nhắc mặc định qua email/Calendar; Zalo OA/SMS chỉ dùng khi có tích hợp, nếu không hệ thống giao task cho PT.",
    kind: "workflow", source: "Availability do PT công bố", sourceDescription: "Nguồn gốc cho khung giờ có thể nhận lịch, thời gian đệm và quy tắc đổi/hủy; lịch ngoài luồng phải được nhập vào trước khi nhận booking mới.",
    intake: "Yêu cầu đặt hoặc đổi lịch", record: "PT Session Ledger", check: "Slot còn trống và đúng quy tắc?", output: "Calendar, nhắc lịch và báo cáo tháng", owner: "PT freelance",
    mobileSteps: ["PT công bố khung giờ có thể nhận lịch.", "Học viên gửi yêu cầu qua một luồng đặt lịch.", "Hệ thống kiểm tra trùng, buffer và quy tắc đổi/hủy.", "Buổi hợp lệ được ghi Calendar và nhắc tự động.", "PT chốt hoàn thành, no-show hoặc đổi lịch để tính tháng."],
    mermaid: [
      "flowchart TB",
      "  PT[\"PT công bố availability,<br/>buffer và quy tắc đổi/hủy\"] --> BASE[(\"Lark Base<br/>PT Session Ledger\")]",
      "  STUDENT[\"Học viên ngoài workspace\"] -->|Link / form yêu cầu| REQUEST[\"Đặt mới / đổi / hủy\"]",
      "  OUTSIDE[\"Lịch nhận ngoài luồng\"] -->|Nhập trước khi mở slot| BASE",
      "  REQUEST --> TYPE{\"Loại yêu cầu?\"}",
      "  TYPE -->|Đặt mới| CHECK{\"Slot trống và đủ buffer?\"}",
      "  TYPE -->|Đổi| CURRENT[\"Tìm session hiện tại\"]",
      "  TYPE -->|Hủy| CANCEL_POLICY{\"Còn trong hạn hủy?\"}",
      "  CURRENT --> POLICY{\"Còn trong hạn đổi?\"}",
      "  POLICY -->|Có| TARGET{\"Slot mới trống<br/>và đủ buffer?\"}",
      "  TARGET -->|Có| UPDATE[\"Đổi cùng record<br/>rồi mới trả slot cũ\"]",
      "  TARGET -->|Không| ALTERNATIVE",
      "  POLICY -->|Không| KEEP[\"Giữ lịch cũ / chuyển ngoại lệ\"]",
      "  CANCEL_POLICY -->|Có| CANCEL[\"Cập nhật hủy<br/>và trả slot cũ\"]",
      "  CANCEL_POLICY -->|Không| KEEP",
      "  BASE --> CHECK",
      "  CHECK -->|Không| ALTERNATIVE[\"Đề xuất slot khác\"]",
      "  ALTERNATIVE -->|Học viên chọn lại| REQUEST",
      "  CHECK -->|Có| CONFIRM[\"Xác nhận session\"]",
      "  CONFIRM --> BASE",
      "  UPDATE --> BASE",
      "  CANCEL --> BASE",
      "  KEEP --> BASE",
      "  BASE --> CAL[(\"Calendar<br/>Lịch đã xác nhận\")]",
      "  CAL --> REMIND[\"Email / Calendar<br/>Zalo OA hoặc SMS nếu có tích hợp<br/>fallback: task cho PT\"]",
      "  REMIND --> STUDENT",
      "  CAL --> PT",
      "  PT --> STATUS{\"Kết quả buổi tập?\"}",
      "  STATUS -->|Hoàn thành / no-show / đổi lịch| BASE",
      "  BASE --> REPORT[\"Báo cáo tháng và căn cứ lập hóa đơn\"]",
      "  classDef actor fill:#132540,stroke:#64748B,color:#F0F6FF,stroke-width:1px",
      "  classDef process fill:#102A4C,stroke:#3B82F6,color:#F0F6FF,stroke-width:1.5px",
      "  classDef store fill:#0B3344,stroke:#22D3EE,color:#F0F6FF,stroke-width:1.5px",
      "  classDef decision fill:#3A2B0A,stroke:#FBBF24,color:#F8FAFC,stroke-width:1.5px",
      "  class PT,STUDENT actor",
      "  class OUTSIDE,REQUEST,CURRENT,UPDATE,CANCEL,KEEP,ALTERNATIVE,CONFIRM,REMIND,REPORT process",
      "  class BASE,CAL store",
      "  class TYPE,POLICY,CANCEL_POLICY,TARGET,CHECK,STATUS decision",
    ].join("\n"),
  },
  "fitness-chuoi-phong-tap-hoi-vien": {
    title: "Luồng xác thực gói liên thông khi hội viên check-in",
    description: "Hệ thống hội viên trung tâm vẫn giữ hồ sơ và quyền sử dụng gói. Lark theo dõi ngoại lệ và phối hợp xử lý; tốc độ đồng bộ phụ thuộc API thực tế, có luồng dự phòng khi kết nối gián đoạn.",
    kind: "coordination", source: "Hệ thống hội viên / POS trung tâm", sourceDescription: "Nguồn dữ liệu gốc cho mã hội viên duy nhất, trạng thái gói, quyền liên thông và số buổi còn lại.",
    intake: "Yêu cầu check-in tại cơ sở", record: "Cross-branch Check-ins", check: "Gói hợp lệ và còn quyền sử dụng?", output: "Xác nhận check-in hoặc hàng đợi ngoại lệ", owner: "Lễ tân và quản lý chuỗi",
    mobileSteps: ["Lễ tân quét mã hội viên tại cơ sở.", "Hệ thống tra trạng thái gói và quyền liên thông.", "Kiểm tra số buổi, ghi nhận trùng và trạng thái kết nối.", "Check-in hợp lệ được ghi một lần vào sổ trung tâm.", "Ngoại lệ được chuyển quản lý và theo dõi đến khi đóng."],
  },
  "ban-le-30-100-nhan-su": {
    title: "Luồng tổng hợp doanh số năm cửa hàng mỗi sáng", description: "POS từng cửa hàng giữ giao dịch gốc. Lark chuẩn hóa báo cáo ngày, kiểm tra cửa hàng chưa gửi và chỉ cảnh báo CEO khi doanh số, đơn hàng hoặc tồn kho lệch ngưỡng.", kind: "reporting",
    source: "POS từng cửa hàng", sourceDescription: "Nguồn dữ liệu gốc cho đơn hàng, doanh thu, hoàn/hủy và tồn kho; form chỉ dùng bổ sung diễn giải vận hành, không thay số liệu POS.", intake: "Doanh số và tồn kho cuối ngày", record: "Store Daily Performance", check: "Đủ năm cửa hàng và đã đối soát?", output: "Dashboard CEO lúc 8 giờ", owner: "Quản lý cửa hàng và CEO",
    mobileSteps: ["Nhận số liệu chốt ngày từ POS từng cửa hàng.", "Chuẩn hóa cùng định nghĩa doanh thu và đơn hàng.", "Cảnh báo cửa hàng thiếu báo cáo hoặc số liệu bất thường.", "Tổng hợp dashboard trước giờ làm việc.", "CEO can thiệp đúng cửa hàng lệch ngưỡng."],
  },
  "ban-le-ton-kho-khong-chinh-xac": {
    title: "Luồng kiểm soát mọi biến động tồn kho", description: "POS/kho giữ số tồn gốc; Lark ghi nhận kiểm kê, hàng hỏng, hàng trả và điều chỉnh có người thao tác để tìm đúng nguyên nhân chênh lệch.", kind: "workflow",
    source: "POS và hệ thống kho", sourceDescription: "Nguồn dữ liệu gốc cho SKU, nhập, bán và số tồn sổ sách; mọi điều chỉnh phải giữ lịch sử người thực hiện.", intake: "Quét kiểm kê và phiếu biến động", record: "Inventory Adjustments", check: "Chênh lệch vượt ngưỡng hoặc thiếu chứng từ?", output: "Danh sách đối soát theo SKU", owner: "Thủ kho và quản lý cửa hàng",
    mobileSteps: ["Nhận số tồn sổ sách theo SKU.", "Quét kiểm kê và ghi hàng trả, hỏng, điều chuyển.", "So sánh thực tế với số tồn hệ thống.", "Yêu cầu duyệt chênh lệch vượt ngưỡng.", "Cập nhật nguyên nhân và đóng đối soát."],
  },
  "ban-le-cham-soc-khach-hang": {
    title: "Luồng chăm sóc khách quay lại có đồng ý nhận tin", description: "POS/CRM giữ lịch sử mua và trạng thái đồng ý nhận tin. Lark phân nhóm, giao lượt chăm sóc và ghi kết quả để đo đúng doanh thu quay lại mà không gửi tràn lan.", kind: "workflow",
    source: "POS / CRM khách hàng", sourceDescription: "Nguồn dữ liệu gốc cho giao dịch, thông tin liên hệ, consent và opt-out; chỉ người có quyền mới được xem dữ liệu cá nhân.", intake: "Khách đủ điều kiện chăm sóc", record: "Customer Follow-up Queue", check: "Có consent và đúng phân khúc?", output: "Nhiệm vụ chăm sóc và kết quả", owner: "Nhân viên CSKH và quản lý",
    mobileSteps: ["Lấy khách đủ điều kiện từ lịch sử mua.", "Kiểm tra consent, opt-out và phân khúc.", "Tạo danh sách chăm sóc có người phụ trách.", "Gửi đúng nội dung và ghi nhận phản hồi.", "Đối chiếu giao dịch quay lại với chiến dịch."],
  },
  "ban-le-quan-ly-ca-nhan-vien": {
    title: "Luồng xếp và đổi ca có kiểm soát", description: "Lark tập trung availability, kỹ năng, nghỉ phép và giới hạn giờ làm trước khi phát hành lịch. Yêu cầu đổi ca được kiểm tra đủ người và phê duyệt thay vì nhắn riêng.", kind: "workflow",
    source: "Hồ sơ nhân sự và availability", sourceDescription: "Nguồn gốc cho hợp đồng, kỹ năng, giới hạn giờ làm và nghỉ đã duyệt; nhân viên chỉ thấy thông tin lịch cần thiết.", intake: "Nhu cầu ca và yêu cầu đổi", record: "Shift Roster", check: "Đủ kỹ năng, giờ làm và người thay?", output: "Lịch ca đã duyệt", owner: "Quản lý cửa hàng",
    mobileSteps: ["Nhận nhu cầu ca, availability và nghỉ phép.", "Xếp lịch theo kỹ năng và giới hạn giờ làm.", "Phát hành một phiên bản lịch chính thức.", "Kiểm tra người thay khi có yêu cầu đổi ca.", "Duyệt thay đổi và thông báo người liên quan."],
  },
  "ban-le-nhan-vien-moi-ban-hang": {
    title: "Luồng đào tạo sản phẩm trước khi tư vấn độc lập", description: "Kiến thức sản phẩm được quản lý theo phiên bản trong Wiki. Nhân viên mới học theo lộ trình, thực hành tình huống và phải được quản lý xác nhận trước khi tư vấn một mình.", kind: "onboarding",
    source: "Product owner và quản lý bán hàng", sourceDescription: "Nguồn kiến thức gốc về sản phẩm, giá, chính sách và tình huống tư vấn; thay đổi phải có người duyệt và ngày hiệu lực.", intake: "Kiến thức sản phẩm và kịch bản", record: "Sales Onboarding", check: "Đạt bài kiểm tra và thực hành?", output: "Quyền tư vấn độc lập", owner: "Quản lý bán hàng",
    mobileSteps: ["Chuẩn hóa kiến thức sản phẩm có phiên bản.", "Giao lộ trình học theo vai trò.", "Nhân viên hoàn thành quiz và tình huống mẫu.", "Quản lý quan sát buổi tư vấn có giám sát.", "Chỉ xác nhận độc lập khi đạt chuẩn."],
  },
  "ban-le-dat-hang-nha-cung-cap": {
    title: "Luồng đề xuất và duyệt đặt hàng theo nhu cầu thực", description: "POS/kho giữ bán ra và tồn. Lark tính đề xuất dựa trên tốc độ bán, tồn khả dụng, MOQ, lead time và hạn sử dụng; người mua vẫn duyệt ngoại lệ trước khi gửi nhà cung cấp.", kind: "coordination",
    source: "POS, kho và danh mục nhà cung cấp", sourceDescription: "Nguồn dữ liệu gốc cho bán ra, tồn, đơn vị tính, MOQ, lead time và hạn sử dụng.", intake: "Nhu cầu bổ sung theo SKU", record: "Purchase Requests", check: "Đủ nhu cầu, MOQ và ngân sách?", output: "Đơn đặt hàng đã duyệt", owner: "Quản lý mua hàng",
    mobileSteps: ["Nhận bán ra, tồn khả dụng và đơn đang về.", "Tính đề xuất theo tốc độ bán và lead time.", "Kiểm tra MOQ, hạn dùng và đơn vị tính.", "Duyệt ngoại lệ hoặc nhu cầu bất thường.", "Gửi đơn và theo dõi trạng thái giao."],
  },
  "san-xuat-10-30-nhan-su": {
    title: "Luồng bàn giao đơn hàng xuyên suốt xưởng", description: "Mỗi đơn hàng có một bản ghi vận hành từ yêu cầu khách đến thiết kế, vật tư, sản xuất và giao hàng. Lark làm rõ trạng thái, người nhận bàn giao và SLA giữa các công đoạn.", kind: "coordination",
    source: "Đơn hàng và bản vẽ đã duyệt", sourceDescription: "Nguồn gốc cho yêu cầu khách, phiên bản bản vẽ, số lượng và ngày giao; thay đổi phải giữ lịch sử phê duyệt.", intake: "Đơn hàng sẵn sàng sản xuất", record: "Production Orders", check: "Đủ bản vẽ, vật tư và người nhận?", output: "Trạng thái và cảnh báo giao trễ", owner: "Điều phối sản xuất",
    mobileSteps: ["Tạo một hồ sơ cho mỗi đơn hàng.", "Khóa phiên bản yêu cầu và bản vẽ đã duyệt.", "Bàn giao có người nhận giữa các công đoạn.", "Cảnh báo khi thiếu đầu vào hoặc quá SLA.", "Cập nhật hoàn thành và ngày giao thực tế."],
  },
  "san-xuat-nguyen-vat-lieu-thieu-hut": {
    title: "Luồng cảnh báo thiếu nguyên liệu trước khi dừng chuyền", description: "Kho/ERP giữ tồn gốc. Lark kết hợp BOM, kế hoạch sản xuất, lượng đã giữ và lead time để tạo cảnh báo mua hàng; tồn thực tế vẫn được đối soát trước quyết định.", kind: "workflow",
    source: "Kho, BOM và kế hoạch sản xuất", sourceDescription: "Nguồn dữ liệu gốc cho tồn thực tế, định mức, hao hụt, nguyên liệu đã phân bổ và lịch sản xuất.", intake: "Nhu cầu vật tư theo lệnh", record: "Material Requirements", check: "Tồn khả dụng đủ đến ngày sản xuất?", output: "Cảnh báo và yêu cầu mua", owner: "Kho và mua hàng",
    mobileSteps: ["Nhận BOM và kế hoạch sản xuất.", "Trừ tồn đã giữ cho lệnh khác và hao hụt.", "So sánh nhu cầu với tồn khả dụng theo ngày.", "Cảnh báo thiếu theo lead time nhà cung cấp.", "Mua hàng xử lý và cập nhật ngày về."],
  },
  "san-xuat-chat-luong-san-pham": {
    title: "Luồng kiểm soát chất lượng theo từng công đoạn", description: "Lark gắn checkpoint, tiêu chuẩn và kết quả đo với mã lô. Lô không đạt bị khóa và chuyển xử lý nguyên nhân thay vì chỉ phát hiện ở kiểm tra cuối.", kind: "workflow",
    source: "Lệnh sản xuất, tiêu chuẩn QC và thiết bị đo", sourceDescription: "Nguồn gốc cho mã lô, thông số chuẩn, phương pháp lấy mẫu và trạng thái hiệu chuẩn thiết bị.", intake: "Kết quả kiểm tra tại công đoạn", record: "Quality Checkpoints", check: "Mẫu đạt chuẩn và thiết bị hợp lệ?", output: "Cho qua, khóa lô hoặc CAPA", owner: "QC và quản đốc",
    mobileSteps: ["Gắn tiêu chuẩn kiểm tra vào từng mã lô.", "QC nhập kết quả tại đúng công đoạn.", "Kiểm tra ngưỡng và tình trạng thiết bị đo.", "Khóa lô lỗi và báo người chịu trách nhiệm.", "Ghi nguyên nhân, hành động và duyệt mở lại."],
  },
  "san-xuat-bao-tri-may-moc": {
    title: "Luồng bảo trì phòng ngừa theo máy và giờ chạy", description: "Hồ sơ máy và lịch sử sửa chữa là nguồn gốc. Lark lập lịch bảo trì theo thời gian/giờ chạy, giao checklist an toàn và chỉ đóng việc khi có người xác nhận cùng vật tư đã dùng.", kind: "workflow",
    source: "Hồ sơ máy và nhật ký vận hành", sourceDescription: "Nguồn dữ liệu gốc cho giờ chạy, khuyến nghị hãng, lịch sử hỏng và phụ tùng.", intake: "Mốc bảo trì hoặc dấu hiệu bất thường", record: "Maintenance Work Orders", check: "Đủ an toàn, người và phụ tùng?", output: "Lịch dừng máy và biên bản hoàn tất", owner: "Bảo trì và quản đốc",
    mobileSteps: ["Nhận giờ chạy và lịch bảo trì từng máy.", "Tạo work order trước hạn.", "Kiểm tra an toàn, nhân lực và phụ tùng.", "Thực hiện checklist trong khung downtime.", "Xác nhận hoàn tất và cập nhật lịch sử máy."],
  },
  "san-xuat-bao-cao-san-luong": {
    title: "Luồng cập nhật sản lượng theo ca để can thiệp sớm", description: "Kế hoạch ca là mốc so sánh. Tổ trưởng cập nhật sản lượng, phế phẩm và downtime; Lark kiểm tra thiếu/sai và cảnh báo quản đốc ngay khi lệch kế hoạch.", kind: "reporting",
    source: "Kế hoạch sản xuất và phiếu xác nhận ca", sourceDescription: "Nguồn gốc cho sản lượng kế hoạch, sản lượng đạt, phế phẩm và thời gian dừng; cần người xác nhận cuối ca.", intake: "Sản lượng thực tế theo mốc ca", record: "Shift Production", check: "Đủ dữ liệu và trong ngưỡng kế hoạch?", output: "Dashboard ngày và cảnh báo lệch", owner: "Tổ trưởng và quản đốc",
    mobileSteps: ["Nạp kế hoạch theo ca và sản phẩm.", "Tổ trưởng cập nhật sản lượng tại mốc quy định.", "Kiểm tra số liệu thiếu hoặc bất thường.", "So sánh thực tế với kế hoạch trong ngày.", "Cảnh báo quản đốc để xử lý trước cuối tuần."],
  },
  "san-xuat-cong-nhan-moi-khong-biet-lam": {
    title: "Luồng đào tạo và xác nhận tay nghề công nhân mới", description: "SOP, video và tiêu chuẩn an toàn được quản lý theo phiên bản. Công nhân học tại công đoạn, thực hành có giám sát và chỉ được làm độc lập sau khi đạt tay nghề, an toàn và chất lượng.", kind: "onboarding",
    source: "Kỹ thuật, an toàn và công nhân lành nghề", sourceDescription: "Nguồn kiến thức gốc cho thao tác chuẩn, điểm nguy hiểm, tiêu chí chất lượng và phiên bản hướng dẫn.", intake: "SOP và bài thực hành theo công đoạn", record: "Operator Qualification", check: "Đạt tay nghề, an toàn và chất lượng?", output: "Xác nhận công đoạn được phép làm", owner: "Tổ trưởng và an toàn",
    mobileSteps: ["Chuẩn hóa SOP và video theo công đoạn.", "Giao lộ trình học theo vị trí.", "Công nhân thực hành dưới giám sát.", "Đánh giá tay nghề, an toàn và chất lượng.", "Cấp xác nhận công đoạn hoặc đào tạo lại."],
  },
  "dich-vu-agency-bao-cao-khach-hang": {
    title: "Luồng cập nhật tiến độ khách hàng mà không ngắt team", description: "Công cụ dự án và nền tảng quảng cáo giữ dữ liệu gốc. Lark tổng hợp trạng thái được phép chia sẻ vào dashboard riêng từng khách, có owner và SLA phản hồi ngoại lệ.", kind: "reporting",
    source: "Công cụ dự án và nền tảng quảng cáo", sourceDescription: "Nguồn dữ liệu gốc cho task, deliverable và chỉ số chiến dịch; quyền xem được tách theo từng khách hàng.", intake: "Tiến độ và KPI đã xác nhận", record: "Client Status", check: "Đủ dữ liệu và được phép chia sẻ?", output: "Dashboard khách hàng và cảnh báo SLA", owner: "Account lead",
    mobileSteps: ["Nhận tiến độ từ công cụ làm việc gốc.", "Xác nhận KPI và nội dung được phép chia sẻ.", "Cập nhật dashboard riêng theo từng khách.", "Khách tự xem trạng thái và deliverable.", "Câu hỏi ngoại lệ được giao owner theo SLA."],
  },
  "dich-vu-phong-kham-lich-hen": {
    title: "Luồng đặt lịch khám có thời lượng và buffer", description: "Hệ thống lịch khám giữ thông tin bệnh nhân tối thiểu. Lark điều phối slot, buffer, ca khẩn cấp và nhắc hẹn theo consent; có quy trình dự phòng khi hệ thống gián đoạn.", kind: "workflow",
    source: "Hệ thống lịch khám", sourceDescription: "Nguồn dữ liệu gốc cho bác sĩ, dịch vụ, thời lượng, buffer và lịch hẹn; dữ liệu bệnh nhân được giới hạn theo vai trò.", intake: "Yêu cầu đặt hoặc đổi lịch", record: "Appointments", check: "Bác sĩ, phòng và buffer còn trống?", output: "Xác nhận hẹn hoặc hàng đợi ngoại lệ", owner: "Lễ tân phòng khám",
    mobileSteps: ["Chọn dịch vụ với thời lượng và bác sĩ phù hợp.", "Kiểm tra phòng, slot và thời gian buffer.", "Giữ một lịch hẹn duy nhất và gửi xác nhận.", "Nhắc hẹn khi bệnh nhân đã đồng ý nhận tin.", "Ca khẩn cấp hoặc downtime đi theo luồng ngoại lệ."],
  },
  "dich-vu-luat-su-ho-so-khach-hang": {
    title: "Luồng hồ sơ và deadline pháp lý có kiểm soát hai lớp", description: "Kho tài liệu phân quyền giữ hồ sơ theo vụ việc. Lark quản lý deadline với owner, người kiểm tra thứ hai, audit log và cảnh báo nhiều cấp; không dựa vào một lời nhắc duy nhất.", kind: "workflow",
    source: "Kho hồ sơ vụ việc được phân quyền", sourceDescription: "Nguồn dữ liệu gốc cho tài liệu, phiên bản, quyền truy cập và lịch sử thao tác; có chính sách backup và khôi phục.", intake: "Tài liệu và mốc pháp lý", record: "Matter Deadlines", check: "Đủ hồ sơ và đã kiểm tra hai lớp?", output: "Nộp đúng hạn và audit trail", owner: "Luật sư phụ trách",
    mobileSteps: ["Lưu tài liệu đúng vụ việc và phiên bản.", "Tạo deadline có owner và người kiểm tra.", "Theo dõi mốc chuẩn bị trước hạn pháp lý.", "Cảnh báo nhiều cấp khi có nguy cơ trễ.", "Xác nhận nộp và lưu bằng chứng hoàn tất."],
  },
  "dich-vu-spa-nhan-vien-khong-nho-khach": {
    title: "Luồng ghi nhớ trải nghiệm khách hàng có consent", description: "CRM giữ hồ sơ khách và consent. Lark chỉ đưa thông tin cần thiết như sở thích dịch vụ, dị ứng đã được đồng ý và lịch sử chăm sóc đến đúng nhân viên theo quyền.", kind: "workflow",
    source: "CRM và hồ sơ consent của khách", sourceDescription: "Nguồn dữ liệu gốc cho lịch sử dịch vụ, sở thích, cảnh báo sức khỏe được phép lưu và trạng thái đồng ý nhận tin.", intake: "Check-in và ghi chú sau dịch vụ", record: "Guest Preferences", check: "Có consent và người xem đúng quyền?", output: "Hồ sơ phục vụ cho lần ghé tiếp theo", owner: "Lễ tân và quản lý spa",
    mobileSteps: ["Xác nhận consent và phạm vi dữ liệu được lưu.", "Tra hồ sơ tối thiểu khi khách check-in.", "Hiển thị sở thích/cảnh báo cho đúng kỹ thuật viên.", "Ghi kết quả dịch vụ theo quy tắc chung.", "Cập nhật opt-out hoặc yêu cầu xóa khi phát sinh."],
  },
  "dich-vu-ke-toan-bao-cao-khach-hang": {
    title: "Luồng bàn giao hồ sơ kế toán an toàn và liên tục", description: "Hồ sơ khách, checklist kỳ và quyền truy cập được tách rõ. Lark điều phối công việc và tài liệu; mật khẩu được giữ trong kho bí mật có MFA, không lưu như trường dữ liệu thông thường.", kind: "coordination",
    source: "Kho hồ sơ khách và password vault", sourceDescription: "Tài liệu kế toán có phân quyền; thông tin xác thực nằm trong kho bí mật có MFA, audit log và quy trình thu hồi quyền.", intake: "Hồ sơ kỳ và checklist pháp lý", record: "Client Accounting Cycle", check: "Đủ hồ sơ, đúng phiên bản và quyền?", output: "Báo cáo kỳ và bàn giao liên tục", owner: "Kế toán phụ trách và reviewer",
    mobileSteps: ["Nhận hồ sơ khách theo checklist kỳ.", "Kiểm tra quyền và thông tin xác thực qua vault.", "Giao công việc có owner, reviewer và deadline.", "Theo dõi thiếu hồ sơ hoặc thay đổi pháp lý.", "Bàn giao có audit trail khi người phụ trách vắng."],
  },
  "dich-vu-tu-van-quan-ly-du-an": {
    title: "Luồng quản lý dependency giữa các team dự án", description: "Mỗi deliverable có owner, deadline và quan hệ phụ thuộc rõ ràng. Lark tự mở việc kế tiếp khi đầu vào hoàn tất, đồng thời cảnh báo dependency quá hạn từ nội bộ hoặc phía khách hàng.", kind: "coordination",
    source: "Kế hoạch dự án và cam kết khách hàng", sourceDescription: "Nguồn gốc cho deliverable, owner, deadline, dependency và đầu vào do khách hàng cung cấp.", intake: "Cập nhật trạng thái deliverable", record: "Project Dependencies", check: "Đầu vào đã hoàn tất đúng hạn?", output: "Việc kế tiếp và cảnh báo bottleneck", owner: "Project manager",
    mobileSteps: ["Khai báo deliverable, owner và dependency.", "Team cập nhật trạng thái tại một bảng chung.", "Hệ thống kiểm tra đầu vào đã sẵn sàng.", "Tự thông báo team kế tiếp khi có thể bắt đầu.", "Escalate dependency quá hạn đến project manager."],
  },
};

const moduleCatalog: Record<BlueprintKind, SolutionBlueprint["larkModules"]> = {
  reporting: [
    { name: "Lark Base", description: "Chuẩn hóa dữ liệu vận hành theo cùng kỳ, cùng định nghĩa và giữ lịch sử cập nhật." },
    { name: "Dashboard", description: "Trình bày KPI, xu hướng và ngoại lệ để người quản lý tập trung vào điểm cần can thiệp." },
    { name: "Automation + Messenger", description: "Nhắc người chưa cập nhật và cảnh báo khi dữ liệu hoặc kết quả lệch ngưỡng." },
  ],
  workflow: [
    { name: "Lark Base", description: "Giữ một bản ghi vận hành trung tâm, trạng thái, người phụ trách và lịch sử thay đổi." },
    { name: "Forms", description: "Thu thập yêu cầu hoặc cập nhật theo cùng cấu trúc, giảm trao đổi rời rạc qua tin nhắn." },
    { name: "Automation + Messenger", description: "Kiểm tra điều kiện, nhắc hạn và chuyển ngoại lệ đến đúng người xử lý." },
    { name: "Approval", description: "Ghi nhận quyết định đối với trường hợp vượt quy tắc hoặc cần kiểm soát bổ sung." },
  ],
  onboarding: [
    { name: "Wiki / Docs", description: "Quản lý SOP, video và kiến thức theo phiên bản với người sở hữu nội dung rõ ràng." },
    { name: "Lark Base", description: "Theo dõi lộ trình, checklist, bằng chứng thực hành và trạng thái đạt chuẩn của từng người." },
    { name: "Forms", description: "Thu bài kiểm tra, phản hồi và bằng chứng hoàn thành theo cùng tiêu chí." },
    { name: "Automation + Messenger", description: "Giao nội dung đúng ngày, nhắc phần còn thiếu và báo quản lý khi cần đánh giá." },
  ],
  coordination: [
    { name: "Lark Base", description: "Tạo một lớp dữ liệu vận hành chung cho nhiều cơ sở, bộ phận hoặc người phụ trách." },
    { name: "Dashboard", description: "Cho người quản lý nhìn thấy trạng thái tổng thể và điểm lệch cần can thiệp." },
    { name: "Tasks + Messenger", description: "Chuyển phát hiện thành hành động có owner, deadline và theo dõi đến khi đóng." },
    { name: "Wiki / Docs", description: "Giữ định nghĩa KPI, playbook và quy tắc phối hợp dùng chung." },
  ],
};

const escapeLabel = (value: string) => value.replaceAll('"', "'");

function buildMermaid(profile: BlueprintProfile) {
  const label = escapeLabel;
  return [
    "flowchart LR",
    `  SRC["${label(profile.source)}"] -->|Dữ liệu gốc| IN["${label(profile.intake)}"]`,
    `  IN --> BASE[("Lark Base<br/>${label(profile.record)}")]`,
    `  BASE --> CHECK{"${label(profile.check)}"}`,
    `  CHECK -->|Hợp lệ| OUT["${label(profile.output)}"]`,
    `  CHECK -->|Thiếu / ngoại lệ| TASK["Cảnh báo và giao xử lý"]`,
    `  OUT --> OWNER["${label(profile.owner)}"]`,
    "  TASK --> OWNER",
    "  OWNER -->|Cập nhật kết quả| BASE",
    "  classDef actor fill:#132540,stroke:#64748B,color:#F0F6FF,stroke-width:1px",
    "  classDef process fill:#102A4C,stroke:#3B82F6,color:#F0F6FF,stroke-width:1.5px",
    "  classDef store fill:#0B3344,stroke:#22D3EE,color:#F0F6FF,stroke-width:1.5px",
    "  classDef decision fill:#3A2B0A,stroke:#FBBF24,color:#F8FAFC,stroke-width:1.5px",
    "  class SRC,OWNER actor",
    "  class IN,OUT,TASK process",
    "  class BASE store",
    "  class CHECK decision",
  ].join("\n");
}

export function getSolutionBlueprint(slug: string): SolutionBlueprint | undefined {
  const profile = profiles[slug];
  if (!profile) return undefined;

  return {
    title: profile.title,
    description: profile.description,
    mobileSteps: profile.mobileSteps,
    mermaid: profile.mermaid ?? buildMermaid(profile),
    systemRecords: [
      { name: profile.source, description: profile.sourceDescription },
      { name: `Lark Base — ${profile.record}`, description: `Nguồn dữ liệu vận hành cho ${profile.intake.toLowerCase()}, trạng thái kiểm soát, người phụ trách và kết quả xử lý ngoại lệ.` },
    ],
    larkModules: moduleCatalog[profile.kind],
  };
}
