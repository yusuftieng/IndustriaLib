import { Database, BarChart3, LineChart, Cpu, Building2, PenTool, PieChart, CalendarDays, Factory, Truck, Box, Bot } from 'lucide-react';

export const toolsData = [
  {
    id: "database-management",
    title: "Database Management and Data Extraction",
    description: "In today's industry, extracting accurate data seamlessly from massive servers is just as critical an engineering skill as analyzing it.",
    icon: Database,
    tools: [
      {
        name: "SQL (Structured Query Language)",
        purpose: "To manage relational databases, query large datasets, and filter/extract data into desired formats.",
        useCases: "Extracting data from the backend of ERP systems for custom production reports, parsing production data from sensors, and providing \"clean data\" to visualization tools.",
        importance: "An industrial engineer who can connect to the company database and write their own queries without needing an IT team becomes highly sought-after technical personnel in the era of Industry 4.0 and data science.",
        relatedTopics: ["Database Management Systems (DBMS)", "Data Mining", "Management Information Systems (MIS)"],
        imagePlaceholder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHAL9lwC3v52oaow4glc74V_u068ns3h2tg&s'
      }
    ]
  },
  {
    id: "data-analysis",
    title: "Data Analysis and Statistical Software",
    description: "These programs are the cornerstones for data-driven decision-making, keeping processes under control, and driving continuous improvement.",
    icon: BarChart3,
    tools: [
      {
        name: "Minitab",
        purpose: "To perform statistical data analysis and manage quality control processes.",
        useCases: "Statistical Process Control (SPC), Design of Experiments (DOE), hypothesis testing.",
        importance: "It is considered the standard software, especially in Six Sigma projects. It plays a vital role in identifying variability and defects in processes.",
        relatedTopics: ["Quality Management", "Six Sigma", "Statistical Process Control"],
        imagePlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Minitab_Logo.svg/500px-Minitab_Logo.svg.png'
      },
      {
        name: "Python and R",
        purpose: "Big data analysis, building machine learning models, and data manipulation.",
        useCases: "Demand forecasting, predictive maintenance, algorithm development.",
        importance: "Provides flexibility and speed in Big Data sets where traditional statistical programs fall short.",
        relatedTopics: ["Data Science", "Machine Learning", "Forecasting"],
        imagePlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/960px-Python_logo_01.svg.png'
      },
      {
        name: "SPSS (Statistical Package for the Social Sciences)",
        purpose: "Advanced statistical analysis software used when the human factor comes into play.",
        useCases: "Consumer behavior analysis, market segmentation, ergonomic research, and reliability analysis.",
        importance: "The most practical tool for engineers working in the service sector and marketing departments to draw meaningful conclusions from survey data.",
        relatedTopics: ["Market Research", "Ergonomics and Work Study", "Reliability Engineering"],
        imagePlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/SPSS_logo.svg/640px-SPSS_logo.svg.png'
      },
      {
        name: "MS Excel (Advanced & VBA)",
        purpose: "Table-based data storage, analysis, and automation.",
        useCases: "Production planning, cost analysis, inventory tracking, basic optimization with the Solver add-in.",
        importance: "The \"Swiss Army Knife\" of industrial engineers. Manual tasks can be automated using VBA macros.",
        relatedTopics: ["Data Management", "Production Planning", "Engineering Economy"],
        imagePlaceholder: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png'
      }
    ]
  },
  {
    id: "operations-research",
    title: "Operations Research and Optimization",
    description: "Mathematical modeling tools that ensure limited resources are used in the most efficient way possible.",
    icon: LineChart,
    tools: [
      {
        name: "GAMS & LINGO",
        purpose: "To model and solve complex mathematical and optimization problems.",
        useCases: "Route optimization, production planning, personnel scheduling, facility layout.",
        importance: "Ensures cost minimization or profit maximization by solving linear and mixed-integer problems.",
        relatedTopics: ["Operations Research", "Supply Chain Optimization"],
        imagePlaceholder: 'https://ars.els-cdn.com/content/image/3-s2.0-B9780128212042000751-f00075-14-9780128212042.jpg'
      }
    ]
  },
  {
    id: "system-simulation",
    title: "System Simulation",
    description: "Allows creating digital twins of real-life systems to observe the effects of changes without taking physical risks.",
    icon: Cpu,
    tools: [
      {
        name: "Arena Simulation Software",
        purpose: "To perform process analysis using discrete event simulation.",
        useCases: "Designing production lines, analyzing queues in service systems like hospitals/banks.",
        importance: "Allows identifying bottlenecks in the system and testing \"What-if\" scenarios.",
        relatedTopics: ["System Simulation", "Queueing Theory", "Facility Design"],
        imagePlaceholder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGsYp4ZtGG1SMsSdJZX51G9bIeC9ubABiMQ&s'
      },
      {
        name: "AnyLogic",
        purpose: "To offer agent-based, system dynamics, and discrete event simulations on a single platform.",
        useCases: "Complex supply chain networks, pedestrian traffic analysis.",
        importance: "Enables much more realistic modeling by combining different simulation paradigms.",
        relatedTopics: ["Multimethod Simulation", "Dynamic Systems"],
        imagePlaceholder: 'https://www.anylogic.com/upload/iblock/1d5/1d5d5a10b6e1b4f390a99034039530eb.png'
      }
    ]
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    description: "Massive management systems that ensure all departments of a company work in an integrated and synchronized manner.",
    icon: Building2,
    tools: [
      {
        name: "SAP",
        purpose: "To manage all business processes (finance, production, HR, logistics) through a single database.",
        useCases: "Material Requirements Planning (MRP), inventory management, purchasing processes.",
        importance: "The most widely used ERP system in the world. Knowing SAP processes is a huge advantage for an engineer aiming to work in global companies.",
        relatedTopics: ["Enterprise Resource Planning", "Material Requirements Planning", "Supply Chain Management"],
        imagePlaceholder: 'https://besystechnologies.com/wp-content/uploads/2024/07/erp.png.webp'
      }
    ]
  },
  {
    id: "cad-ergonomics",
    title: "Computer-Aided Design (CAD) and Ergonomics",
    description: "Used for the physical and ergonomic designs of products, workstations, or facilities.",
    icon: PenTool,
    tools: [
      {
        name: "AutoCAD / SolidWorks",
        purpose: "To create 2D and 3D technical drawings, part, and facility models.",
        useCases: "Facility layout planning, workstation design, product development.",
        importance: "Essential for visualizing the ergonomic suitability of a production line and the impact of the layout plan on material flow.",
        relatedTopics: ["Facility Planning", "Ergonomics and Work Study", "Product Design"],
        imagePlaceholder: 'https://play-lh.googleusercontent.com/y92LD5c5rdlNfquCy-YPNIvdnS4ISEL05wickp28OLya8WlmWQwXfAP0Yys9iTssny3K'
      }
    ]
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence (BI) and Data Visualization",
    description: "Ensures that the results obtained from analyses are presented to managers and decision-makers in a clear, understandable way.",
    icon: PieChart,
    tools: [
      {
        name: "Power BI / Tableau",
        purpose: "To transform complex datasets into interactive, understandable graphs and dashboards.",
        useCases: "KPI tracking, sales analytics, management reporting.",
        importance: "Enables fast decision-making by turning hundreds of rows of data piles into visual stories that can be understood in seconds.",
        relatedTopics: ["Business Intelligence", "Decision Support Systems", "Performance Management"],
        imagePlaceholder: 'https://mavvo.com.tr/wp-content/uploads/2025/03/Microsoft-Power-BI-Symbol.png'
      }
    ]
  },
  {
    id: "project-management",
    title: "Project Management and Agile Tracking",
    description: "Managing complex projects, tracking resources, and adapting to lean methodologies are daily requirements for industrial engineers.",
    icon: CalendarDays,
    tools: [
      {
        name: "MS Project / Primavera P6",
        purpose: "To plan, schedule, and control project resources, budgets, and timelines.",
        useCases: "Critical Path Method (CPM) analysis, resource leveling, planning a factory relocation, or scheduling a new production line setup.",
        importance: "Essential for classic \"Waterfall\" project management. It ensures that massive engineering projects are completed on time and within budget by making dependencies visible.",
        relatedTopics: ["Project Management", "Resource Allocation", "Gantt Charts"],
        imagePlaceholder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4acrD0q110pSYKdf4IBTxHTraqUpKABvrw&s'
      },
      {
        name: "Jira / Trello",
        purpose: "To manage projects using Agile methodologies (Scrum, Kanban) and track issues or tasks collaboratively.",
        useCases: "Managing software implementations on the shop floor, tracking Lean Six Sigma continuous improvement (Kaizen) tasks, and managing daily engineering team workflows.",
        importance: "As the industry shifts toward Agile frameworks, these tools are vital for iterative development and keeping cross-functional teams aligned in real time.",
        relatedTopics: ["Agile Methodologies", "Lean Manufacturing", "Task Management"],
        imagePlaceholder: 'https://pbs.twimg.com/profile_images/1361722806694785027/UY7DlO0a_400x400.png'
      }
    ]
  },
  {
    id: "mes-iiot",
    title: "Manufacturing Execution Systems (MES) & IIoT",
    description: "If ERP is the brain of a company, MES is the central nervous system connecting the brain to the shop floor.",
    icon: Factory,
    tools: [
      {
        name: "Ignition (by Inductive Automation) / PTC ThingWorx",
        purpose: "To bridge the gap between shop floor machines (SCADA/PLCs) and top-level enterprise systems, providing real-time production tracking.",
        useCases: "Tracking Overall Equipment Effectiveness (OEE), real-time machine downtime monitoring, and integrating Industrial Internet of Things (IIoT) sensors.",
        importance: "Crucial for Industry 4.0. It allows engineers to see exactly what is happening on the production line at any given second, enabling immediate intervention rather than waiting for end-of-shift reports.",
        relatedTopics: ["Industry 4.0", "OEE", "SCADA", "Industrial Automation"],
        imagePlaceholder: 'https://images.ctfassets.net/o7xu9whrs0u9/2cubryD6W2KgUWP5EEiYma/0d69154ccc76e3e04878d0f3b030bf1e/ThingWorx-logo.jpg'
      }
    ]
  },
  {
    id: "supply-chain",
    title: "Supply Chain and Logistics Network Design",
    description: "Tools dedicated specifically to the macroscopic optimization of supply chains, going beyond standard OR solvers.",
    icon: Truck,
    tools: [
      {
        name: "Coupa Supply Chain Modeler (formerly LLamasoft) / AnyLogistix",
        purpose: "To design, simulate, and optimize end-to-end global supply chain networks.",
        useCases: "Optimizing warehouse and distribution center locations, inventory positioning across multiple regions, and minimizing transportation carbon footprints.",
        importance: "Standard ERPs and OR tools struggle with the massive volatility of global supply chains. These tools allow engineers to build resilient supply chain digital twins to test risks (e.g., port closures, supplier failures).",
        relatedTopics: ["Supply Chain Management", "Logistics Planning", "Inventory Optimization"],
        imagePlaceholder: 'https://pbs.twimg.com/profile_images/694473348177334272/UJ9fwWx2_400x400.png'
      }
    ]
  },
  {
    id: "plm",
    title: "Product Lifecycle Management (PLM)",
    description: "Systems that track a product from its initial conceptual design all the way to manufacturing, maintenance, and disposal.",
    icon: Box,
    tools: [
      {
        name: "Siemens Teamcenter / PTC Windchill",
        purpose: "To manage the entire lifecycle of a product and collaborate globally on product data.",
        useCases: "Bill of Materials (BOM) management, engineering change management (ECN/ECO), and concurrent engineering.",
        importance: "Ensures that R&D, manufacturing, and procurement are all looking at the exact same, up-to-date version of a product. It prevents costly errors caused by manufacturing outdated designs.",
        relatedTopics: ["Product Lifecycle Management", "Concurrent Engineering", "Systems Engineering"],
        imagePlaceholder: 'https://mechanical.unitec.de/fileadmin/_processed_/a/a/csm_Teamcenter_b6bfd4e33f.png'
      }
    ]
  },
  {
    id: "rpa",
    title: "Robotic Process Automation (RPA)",
    description: "Industrial engineers don't just optimize physical processes; they optimize digital administrative processes as well.",
    icon: Bot,
    tools: [
      {
        name: "UiPath / Automation Anywhere",
        purpose: "To build software robots that automate repetitive, rule-based digital tasks.",
        useCases: "Automating data transfer between legacy software and modern ERPs, auto-generating daily production reports, and automating purchase order approvals.",
        importance: "Frees up human workers from \"copy-paste\" tasks, reducing digital bottlenecks and human error in data entry processes.",
        relatedTopics: ["Process Automation", "Digital Transformation", "Lean Office"],
        imagePlaceholder: 'https://yt3.googleusercontent.com/_n8YYJPogZc-ygoKxxMmK4-Y4--3GhJuXT6R1ArIb3CLehIZnkRSg7HD-pJcSXT3wxgAa_cv2Q=s900-c-k-c0x00ffffff-no-rj'
      }
    ]
  }
];
