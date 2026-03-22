export interface DictionaryTerm {
  term: string;
  englishExplanation: string;
  turkishExplanation: string;
}

export interface DictionaryCategory {
  title: string;
  terms: DictionaryTerm[];
}

export const dictionaryData: DictionaryCategory[] = [
  {
    title: "1. Lean Manufacturing and Toyota Production System",
    terms: [
      { term: "Muda", englishExplanation: "Waste / Any activity that consumes resources without creating value for the customer", turkishExplanation: "(İsraf)" },
      { term: "Mura", englishExplanation: "Unevenness / Inconsistency in production volume or workflow", turkishExplanation: "(Dengesizlik / Dalgalanma)" },
      { term: "Muri", englishExplanation: "Overburden / Unreasonable stress on people, machines, or systems", turkishExplanation: "(Aşırı Yüklenme)" },
      { term: "Kaizen", englishExplanation: "Continuous Improvement / A philosophy of small, incremental, and continuous changes for the better", turkishExplanation: "(Sürekli İyileştirme)" },
      { term: "Kanban", englishExplanation: "Visual Signal / A card or signal used to trigger production or material movement in a pull system", turkishExplanation: "(Görsel Sinyal / Çekme Kartı)" },
      { term: "Jidoka", englishExplanation: "Autonomation / Automation with a human touch; the ability of a machine to detect errors and stop automatically", turkishExplanation: "(Otonomasyon)" },
      { term: "Poka-Yoke", englishExplanation: "Mistake-Proofing / A mechanism that prevents an operator from making an error", turkishExplanation: "(Hata Önleyici Sistem)" },
      { term: "Gemba", englishExplanation: "The Real Place / The actual location where value is created, such as the shop floor", turkishExplanation: "(Olayın Gerçekleştiği Yer / Saha)" },
      { term: "Heijunka", englishExplanation: "Production Leveling / Smoothing the type and quantity of production over a fixed period", turkishExplanation: "(Üretim Seviyelendirme)" },
      { term: "Takt Time", englishExplanation: "The rate at which products must be made in order to meet customer demand", turkishExplanation: "(Müşteri Talep Hızı)" },
      { term: "Andon", englishExplanation: "Visual Feedback System / A tool that alerts supervisors to factory floor problems, often with lights", turkishExplanation: "(Görsel Uyarı / Durum Panosu)" },
      { term: "SMED (Single-Minute Exchange of Die)", englishExplanation: "Rapid Changeover / A system for reducing equipment setup time to less than 10 minutes", turkishExplanation: "(Tekli Dakikalarda Kalıp Değişimi)" },
      { term: "Hoshin Kanri", englishExplanation: "Policy Deployment / A strategic planning process aligning company goals with daily operations", turkishExplanation: "(Stratejik Yönelim)" },
      { term: "Obeya", englishExplanation: "Big Room / A dedicated \"war room\" for project management and collaborative problem-solving", turkishExplanation: "(Büyük Proje Odası)" },
      { term: "Yokoten", englishExplanation: "Best Practice Sharing / The horizontal deployment of learned information across the organization", turkishExplanation: "(En İyi Uygulamaların Yayılımı)" },
      { term: "Chaku-Chaku", englishExplanation: "Load-Load / A continuous, single-piece flow process where the operator only loads machines", turkishExplanation: "(Yükle-Yükle Hücresel Üretimi)" },
      { term: "Nemawashi", englishExplanation: "Consensus Building / Laying the foundation for a proposed change or project before formal decisions are made", turkishExplanation: "(Karar Öncesi Zemin Hazırlama)" },
      { term: "Value Stream Mapping (VSM)", englishExplanation: "A lean management method used to visually analyze the current and design a future state for the series of events that take a product from its beginning through to the customer.", turkishExplanation: "(Değer Akış Haritalama)" },
      { term: "5S (Sort, Set in order, Shine, Standardize, Sustain)", englishExplanation: "A workplace organization methodology focused on visual order, cleanliness, and standardization to improve profitability, efficiency, service, and safety by eliminating waste and reducing non-value-added activities.", turkishExplanation: "(5S Metodu)" },
      { term: "Standard Work", englishExplanation: "The documented, current best-known method to produce a product or perform a service safely, consistently, and with high quality, establishing a reliable baseline for future continuous improvement.", turkishExplanation: "(Standart İş)" },
      { term: "Takt Image / Pitch", englishExplanation: "A visual management tool used in lean manufacturing to represent the pace of production aligned with customer demand, organizing work into manageable time blocks to ensure smooth flow.", turkishExplanation: "(Üretim Ritim Görselleştirme)" },
      { term: "Line Balancing", englishExplanation: "The strategic process of distributing workload evenly across all workstations in a production line to eliminate bottlenecks, minimize idle time, and match the production rate with takt time.", turkishExplanation: "(Hat Dengeleme)" },
      { term: "Cellular Manufacturing", englishExplanation: "A lean production approach where equipment and workstations are arranged in a specific sequence that supports a smooth flow of materials and components through the process, often in a U-shape.", turkishExplanation: "(Hücresel Üretim)" },
      { term: "Supermarket System", englishExplanation: "A controlled inventory system used in pull manufacturing where a downstream process withdraws parts from an upstream process, triggering replenishment exclusively for what was actually consumed.", turkishExplanation: "(Süpermarket Sistemi)" },
      { term: "Milk Run", englishExplanation: "A logistics method for frequent, regular collection or distribution of materials across multiple standardized routes, reducing inventory levels and transportation costs while significantly improving supply chain efficiency.", turkishExplanation: "(Süt Toplama Lojistiği)" },
      { term: "Visual Management", englishExplanation: "A communication technique that uses intuitive visual cues, charts, and indicators to display performance, standards, and abnormalities in real-time, enabling quick understanding and immediate corrective actions.", turkishExplanation: "(Görsel Yönetim)" }
    ]
  },
  {
    title: "2. Operations Research & Analytics",
    terms: [
      { term: "Heuristic", englishExplanation: "A practical, rule-of-thumb approach to problem-solving that is not guaranteed to be optimal but is sufficient for immediate goals", turkishExplanation: "(Sezgisel Yaklaşım)" },
      { term: "Stochastic", englishExplanation: "Having a random probability distribution or pattern that may be analyzed statistically but not predicted precisely", turkishExplanation: "(Olasılıksal / Rastlantısal)" },
      { term: "Deterministic", englishExplanation: "A system or model in which no randomness is involved in the development of future states", turkishExplanation: "(Belirlenimci / Kesin)" },
      { term: "Objective Function", englishExplanation: "The mathematical equation in an optimization model that needs to be maximized or minimized", turkishExplanation: "(Amaç Fonksiyonu)" },
      { term: "Constraint", englishExplanation: "A restriction or limitation imposed on a mathematical or operational model", turkishExplanation: "(Kısıt)" },
      { term: "Feasible Region", englishExplanation: "The set of all possible points (solutions) that satisfy the problem's given constraints", turkishExplanation: "(Uygun Çözüm Uzayı)" },
      { term: "Iteration", englishExplanation: "A single execution of a set of instructions within a cyclical algorithm", turkishExplanation: "(İterasyon / Tekrarlama Adımı)" },
      { term: "Bottleneck", englishExplanation: "The stage in a process that reduces the overall capacity of the entire system", turkishExplanation: "(Darboğaz)" },
      { term: "Node", englishExplanation: "A point of intersection or connection within a network graph", turkishExplanation: "(Düğüm)" },
      { term: "Slack / Float", englishExplanation: "The amount of time a project activity can be delayed without delaying the entire project completion time", turkishExplanation: "(Gevşeklik / Tolerans Süresi)" },
      { term: "Simplex Method", englishExplanation: "A mathematical algorithm used to solve linear programming problems", turkishExplanation: "(Simpleks Yöntemi)" },
      { term: "Local Optimum", englishExplanation: "A solution that is optimal within a neighboring set of candidate solutions, but possibly not globally", turkishExplanation: "(Yerel Optimum)" },
      { term: "Linear Programming (LP)", englishExplanation: "A mathematical modeling technique used to determine the best possible outcome or optimal allocation of limited resources within a given system, strictly subject to defined linear constraints.", turkishExplanation: "(Doğrusal Programlama)" },
      { term: "Integer Programming (IP)", englishExplanation: "A specialized mathematical optimization model where some or all of the decision variables are restricted to take only whole, integer values, typically used for discrete operational and scheduling problems.", turkishExplanation: "(Tamsayılı Programlama)" },
      { term: "Dynamic Programming", englishExplanation: "A sophisticated computational method for solving complex optimization problems by breaking them down into simpler, overlapping subproblems, making sequential decisions to find the overall optimal policy.", turkishExplanation: "(Dinamik Programlama)" },
      { term: "Simulation", englishExplanation: "The process of creating a dynamic digital model of a real-world system or process to analyze its behavior over time under various conditions without risking the actual physical system.", turkishExplanation: "(Benzetim)" },
      { term: "Monte Carlo Simulation", englishExplanation: "A computational algorithm that relies on repeated random sampling to model the probability of different outcomes in complex systems characterized by significant uncertainty and statistical variability.", turkishExplanation: "(Monte Carlo Benzetimi)" },
      { term: "Queuing Theory", englishExplanation: "The mathematical study of waiting lines, used to predict queue lengths and waiting times to optimize service facility capacity, staffing levels, and overall system efficiency.", turkishExplanation: "(Kuyruk Teorisi)" },
      { term: "Markov Chain", englishExplanation: "A stochastic mathematical model representing a sequence of possible events, where the probability of each subsequent state depends exclusively on the current state, completely regardless of past history.", turkishExplanation: "(Markov Zinciri)" },
      { term: "Game Theory", englishExplanation: "A formal mathematical framework for analyzing strategic interactions and decision-making scenarios where multiple rational actors attempt to maximize their own outcomes based on the anticipated choices of others.", turkishExplanation: "(Oyun Teorisi)" },
      { term: "Sensitivity Analysis", englishExplanation: "A technique used to systematically determine how different values of an independent variable impact a particular dependent variable under a given set of assumptions, ultimately testing model robustness.", turkishExplanation: "(Duyarlılık Analizi)" }
    ]
  },
  {
    title: "3. Supply Chain and Inventory",
    terms: [
      { term: "Lead Time", englishExplanation: "The total amount of time it takes to complete a process from start to finish, such as fulfilling an order", turkishExplanation: "(Teslim / Tedarik Süresi)" },
      { term: "WIP (Work In Process)", englishExplanation: "Partially finished goods waiting for completion or further processing", turkishExplanation: "(Yarı Mamul)" },
      { term: "EOQ (Economic Order Quantity)", englishExplanation: "The ideal order size that minimizes the sum of inventory holding costs and ordering costs", turkishExplanation: "(Ekonomik Sipariş Miktarı)" },
      { term: "BOM (Bill of Materials)", englishExplanation: "A comprehensive inventory list of the raw materials, components, and assemblies required to build a product", turkishExplanation: "(Ürün Ağacı)" },
      { term: "Bullwhip Effect", englishExplanation: "A supply chain phenomenon describing how small fluctuations in demand at the retail level cause progressively larger fluctuations upstream", turkishExplanation: "(Kamçı Etkisi)" },
      { term: "Safety Stock", englishExplanation: "Extra inventory held to mitigate the risk of stockouts caused by uncertainties in supply or demand", turkishExplanation: "(Emniyet Stoku)" },
      { term: "JIT (Just-in-Time)", englishExplanation: "An inventory strategy where materials are ordered and received strictly as they are needed in the production process", turkishExplanation: "(Tam Zamanında Üretim)" },
      { term: "ERP (Enterprise Resource Planning)", englishExplanation: "Software systems that integrate and manage a company's core business processes", turkishExplanation: "(Kurumsal Kaynak Planlaması)" },
      { term: "Cross-Docking", englishExplanation: "A logistics practice where incoming materials are unloaded and loaded directly into outbound trucks with little or no storage time", turkishExplanation: "(Çapraz Sevkiyat)" },
      { term: "SKU (Stock Keeping Unit)", englishExplanation: "A scannable bar code printed on product labels to track inventory movement", turkishExplanation: "(Stok Tutma Birimi)" },
      { term: "FIFO (First-In, First-Out)", englishExplanation: "An inventory valuation method where the oldest items produced or purchased are sold or used first", turkishExplanation: "(İlk Giren İlk Çıkar)" },
      { term: "VMI (Vendor-Managed Inventory)", englishExplanation: "A business model where the buyer of a product provides information to a supplier who takes full responsibility for maintaining an agreed inventory of the material", turkishExplanation: "(Satıcı Yönetimli Envanter)" },
      { term: "Demand Forecasting", englishExplanation: "The analytical process of estimating future customer demand for a product or service using historical data, market trends, and statistical techniques to optimize inventory and production planning.", turkishExplanation: "(Talep Tahmini)" },
      { term: "ABC Analysis", englishExplanation: "An inventory categorization technique that divides items into three distinct classes (A, B, and C) based on their importance, value, and consumption rate, allowing for prioritized inventory control.", turkishExplanation: "(ABC Analizi)" },
      { term: "Last Mile Delivery", englishExplanation: "The final and often most expensive leg of the supply chain, involving the complex transportation of goods from a distribution hub directly to the final customer's destination.", turkishExplanation: "(Son Kilometre Dağıtım)" },
      { term: "Reverse Logistics", englishExplanation: "The comprehensive set of operations related to the reuse of products and materials, managing the backward flow of goods from the customer to the manufacturer for returns or recycling.", turkishExplanation: "(Tersine Lojistik)" },
      { term: "Omnichannel Supply Chain", englishExplanation: "An integrated operational approach that synchronizes physical and digital retail channels, providing a seamless and unified customer shopping experience from inventory management to final delivery.", turkishExplanation: "(Çok Kanallı Tedarik Zinciri)" },
      { term: "Capacity Planning", englishExplanation: "The strategic process of determining the overall production capacity needed by an organization to meet changing demands for its products over a specific operational period.", turkishExplanation: "(Kapasite Planlama)" },
      { term: "Safety Lead Time", englishExplanation: "An intentional extra buffer of time added to the expected delivery schedule of an order to protect against supplier delays, transit disruptions, or unexpected variations in the supply chain.", turkishExplanation: "(Emniyet Süresi)" },
      { term: "Dropshipping", englishExplanation: "A retail fulfillment method where a store does not keep the products it sells in stock; instead, it purchases items from a third party and ships them directly to customers.", turkishExplanation: "(Stoksuz Tedarik)" }
    ]
  },
  {
    title: "4. Quality Management and Statistics",
    terms: [
      { term: "Six Sigma", englishExplanation: "A data-driven methodology aimed at reducing defects to no more than 3.4 occurrences per million opportunities", turkishExplanation: "(Altı Sigma)" },
      { term: "DMAIC", englishExplanation: "Define, Measure, Analyze, Improve, Control; the core problem-solving process used in Six Sigma", turkishExplanation: "(Tanımla, Ölç, Analiz Et, İyileştir, Kontrol Et)" },
      { term: "FMEA (Failure Mode and Effects Analysis)", englishExplanation: "A systematic step-by-step approach for identifying all possible failures in a design, a manufacturing or assembly process", turkishExplanation: "(Hata Türleri ve Etkileri Analizi)" },
      { term: "Variance", englishExplanation: "A statistical measurement of the spread between numbers in a data set from their average value", turkishExplanation: "(Varyans)" },
      { term: "TQM (Total Quality Management)", englishExplanation: "A holistic management approach to long-term success through continuous customer satisfaction and employee involvement", turkishExplanation: "(Toplam Kalite Yönetimi)" },
      { term: "QFD (Quality Function Deployment)", englishExplanation: "A structured approach to transforming customer requirements (Voice of the Customer) into engineering characteristics", turkishExplanation: "(Kalite Fonksiyon Göçerimi)" },
      { term: "OEE (Overall Equipment Effectiveness)", englishExplanation: "A framework for measuring manufacturing productivity, calculating Availability, Performance, and Quality", turkishExplanation: "(Genel Ekipman Etkinliği)" },
      { term: "ANOVA (Analysis of Variance)", englishExplanation: "A statistical method used to test differences between two or more means", turkishExplanation: "(Varyans Analizi)" },
      { term: "Control Chart", englishExplanation: "A graph used to study how a process changes over time, displaying data with upper and lower control limits", turkishExplanation: "(Kontrol Grafiği)" },
      { term: "Process Capability (Cp, Cpk)", englishExplanation: "A critical statistical measurement that evaluates whether a manufacturing process is fundamentally capable of consistently producing output within specified customer tolerance limits and strict engineering specifications.", turkishExplanation: "(Süreç Yeterliliği)" },
      { term: "Root Cause Analysis (RCA)", englishExplanation: "A systematic problem-solving process used to discover the fundamental, underlying reasons for a defect, failure, or problem, preventing future recurrence by addressing core causes rather than superficial symptoms.", turkishExplanation: "(Kök Neden Analizi)" },
      { term: "5 Whys", englishExplanation: "An iterative, interrogative technique used to explore the cause-and-effect relationships underlying a specific problem by asking \"why\" multiple times until the systemic root cause is successfully identified.", turkishExplanation: "(5 Neden Analizi)" },
      { term: "Pareto Analysis (80/20 Rule)", englishExplanation: "A powerful decision-making technique based on the Pareto Principle, suggesting that approximately 80 percent of problems, defects, or effects originate from just 20 percent of the potential causes.", turkishExplanation: "(Pareto Analizi)" },
      { term: "Design of Experiments (DOE)", englishExplanation: "A structured statistical method used to simultaneously investigate the impact of multiple input variables on a desired outcome, optimizing product or process performance efficiently and effectively.", turkishExplanation: "(Deney Tasarımı)" },
      { term: "Statistical Process Control (SPC)", englishExplanation: "The rigorous application of statistical methods and control charts to monitor, analyze, and control a process, ensuring it operates efficiently, consistently, and precisely within target quality limits.", turkishExplanation: "(İstatistiksel Süreç Kontrolü)" },
      { term: "Measurement System Analysis (MSA)", englishExplanation: "A thorough mathematical evaluation of the testing and measurement equipment, procedures, and personnel used in a process to formally ensure data accuracy, precision, and overall reliability.", turkishExplanation: "(Ölçüm Sistemi Analizi)" }
    ]
  },
  {
    title: "5. Ergonomics and Work Study",
    terms: [
      { term: "Ergonomics / Human Factors", englishExplanation: "The scientific discipline concerned with the understanding of interactions among humans and other elements of a system", turkishExplanation: "(Ergonomi / İşbilim)" },
      { term: "Anthropometry", englishExplanation: "The scientific study of the measurements and proportions of the human body for equipment design", turkishExplanation: "(Antropometri)" },
      { term: "Therblig", englishExplanation: "A set of fundamental, basic motions required for a worker to perform a manual operation, developed by Frank Gilbreth", turkishExplanation: "(Temel El/İş Hareketleri)" },
      { term: "Standard Time", englishExplanation: "The time required by a qualified operator, working at a standard pace, to perform a specified task", turkishExplanation: "(Standart Zaman)" },
      { term: "Allowances", englishExplanation: "Extra time added to the normal time to compensate for personal needs, fatigue, and unavoidable delays", turkishExplanation: "(Yorgunluk ve İhtiyaç Payları)" },
      { term: "Cycle Time", englishExplanation: "The time it takes to complete one full sequence of operations to produce a single unit", turkishExplanation: "(Çevrim Süresi)" },
      { term: "Biomechanics", englishExplanation: "The study of the mechanical laws relating to the movement or structure of living organisms, used in evaluating physical strain", turkishExplanation: "(Biyomekanik)" }
    ]
  },
  {
    title: "6. Project Management",
    terms: [
      { term: "Critical Path Method (CPM)", englishExplanation: "A vital project modeling technique that identifies the longest sequence of dependent activities required to complete a project, effectively determining the absolute shortest possible project duration.", turkishExplanation: "(Kritik Yol Metodu)" },
      { term: "PERT (Program Evaluation and Review Technique)", englishExplanation: "A statistical tool used in project management to analyze and represent tasks, especially when task durations are highly uncertain, utilizing optimistic, pessimistic, and most likely estimates.", turkishExplanation: "(PERT Analizi)" },
      { term: "Gantt Chart", englishExplanation: "A visual project management tool consisting of a horizontal bar chart that clearly displays the project schedule, illustrating tasks, durations, start and end dates, and interdependencies over time.", turkishExplanation: "(Gantt Şeması)" },
      { term: "Work Breakdown Structure (WBS)", englishExplanation: "A hierarchical, deliverable-oriented decomposition of a larger project into smaller, much more manageable components or individual tasks to drastically facilitate planning, accurate cost estimation, and smooth execution.", turkishExplanation: "(İş Kırılım Yapısı)" },
      { term: "Risk Management", englishExplanation: "The highly systematic process of identifying, analyzing, prioritizing, and mitigating potential threats or critical uncertainties that could negatively impact project objectives or broad organizational operations.", turkishExplanation: "(Risk Yönetimi)" }
    ]
  },
  {
    title: "7. Production and System Design",
    terms: [
      { term: "Capacity Utilization", englishExplanation: "A crucial key performance metric that measures the extent to which a manufacturing plant uses its installed productive capacity, traditionally expressed as a clear percentage of total potential output.", turkishExplanation: "(Kapasite Kullanım Oranı)" },
      { term: "Throughput", englishExplanation: "The actual, measured rate at which a system processes or produces a final product over a specific time period, directly indicating overall manufacturing effectiveness, flow, and speed.", turkishExplanation: "(Çıktı Hızı)" },
      { term: "Little’s Law", englishExplanation: "A foundational theorem stating that the long-term average number of items in a stationary system is equal to the long-term average effective arrival rate multiplied by the average time an item spends in the system.", turkishExplanation: "(Little Yasası)" },
      { term: "Setup Time", englishExplanation: "The complete total time strictly required to fully prepare a machine, workstation, or process line to switch from producing the last good part of one batch to the first good part of the next.", turkishExplanation: "(Ayar Süresi)" },
      { term: "Downtime", englishExplanation: "The unavoidable or unexpected period during which a machine, process, or entire system is completely not operating due to planned maintenance, unexpected equipment failures, or severe material shortages.", turkishExplanation: "(Duruş Süresi)" },
      { term: "Overall Lead Time", englishExplanation: "The total elapsed time measured precisely from the moment a customer initially places an order until the completed product or service is successfully and fully delivered into the customer's hands.", turkishExplanation: "(Toplam Süre)" }
    ]
  },
  {
    title: "8. Digitalization and Industry 4.0",
    terms: [
      { term: "Industry 4.0", englishExplanation: "The transformative fourth industrial revolution, distinctly characterized by the integration of digital technologies, smart manufacturing, advanced automation, and seamless data exchange to create fully interconnected production systems.", turkishExplanation: "(Endüstri 4.0)" },
      { term: "Digital Twin", englishExplanation: "A highly dynamic, real-time virtual representation of a physical object, process, or system, effectively used for advanced simulation, continuous monitoring, and performance optimization throughout its entire lifecycle.", turkishExplanation: "(Dijital İkiz)" },
      { term: "IoT (Internet of Things)", englishExplanation: "A massive network of physical devices, machines, and remote sensors embedded with specialized software and connectivity, smoothly allowing them to collect, share, and intelligently act on data over the internet.", turkishExplanation: "(Nesnelerin İnterneti)" },
      { term: "Big Data", englishExplanation: "Extremely large, highly complex datasets continuously generated by modern systems that strictly require advanced analytical tools to successfully extract valuable patterns, subtle trends, and actionable operational insights.", turkishExplanation: "(Büyük Veri)" },
      { term: "Machine Learning", englishExplanation: "A sophisticated subset of artificial intelligence that heavily involves training algorithms to autonomously learn from historical data, identify distinct patterns, and make accurate predictions with minimal human intervention.", turkishExplanation: "(Makine Öğrenmesi)" },
      { term: "Predictive Maintenance", englishExplanation: "A highly proactive maintenance strategy that utilizes real-time monitoring and advanced data analytics to accurately predict equipment failures before they happen, flawlessly scheduling repairs exactly when needed.", turkishExplanation: "(Kestirimci Bakım)" }
    ]
  },
  {
    title: "9. People and Organization",
    terms: [
      { term: "Change Management", englishExplanation: "A deeply structured approach to successfully transitioning individuals, teams, and organizations from a current state to a desired future state, carefully ensuring structural shifts are implemented smoothly and sustainably.", turkishExplanation: "(Değişim Yönetimi)" },
      { term: "Leadership vs Management", englishExplanation: "The critical distinction between deeply inspiring and guiding people toward a shared vision (leadership) versus effectively organizing, planning, and controlling resources to accomplish specific operational goals (management).", turkishExplanation: "(Liderlik vs Yönetim)" },
      { term: "Motivation Theory (Maslow, Herzberg)", englishExplanation: "Foundational psychological frameworks heavily used in organizational behavior to deeply understand what uniquely drives employee performance, directly focusing on fulfilling intrinsic and extrinsic needs to boost engagement.", turkishExplanation: "(Motivasyon Teorileri)" },
      { term: "Team Dynamics", englishExplanation: "The frequently unconscious, psychological forces that heavily influence the general direction, behavior, and overall performance of a group, profoundly affecting how team members interact, communicate, and collaborate.", turkishExplanation: "(Takım Dinamikleri)" }
    ]
  }
];
