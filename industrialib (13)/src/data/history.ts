export interface HistoryEvent {
  id: number;
  period: string;
  title: string;
  event: string;
  country: string;
  description: string;
  image?: string;
}

export const historyData: HistoryEvent[] = [
  {
    id: 1,
    period: "Pre-18th Century",
    title: "The Roots of Order and Early Logistics",
    event: "Military Logistics and Imperial Arsenals",
    country: "Republic of Venice",
    description: "Long before modern factories, the earliest forms of complex systems engineering were born out of military necessity. The massive logistical planning required for imperial campaigns, the precision of historical cartography to map supply routes, and the standardized production of artillery in facilities like the Imperial Arsenals (e.g., the Ottoman Tophane-i Âmire or the Venetian Arsenal) laid the foundational concepts of division of labor, standardization, and systemic \"order\". This massive operation laid the crucial groundwork for inventory control, mass production, and systematic workflow centuries before Henry Ford.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/View_of_the_entrance_to_the_Arsenal_by_Canaletto,_1732.jpg/960px-View_of_the_entrance_to_the_Arsenal_by_Canaletto,_1732.jpg'
  },
  {
    id: 2,
    period: "1776",
    title: "The Dawn of the Industrial Revolution",
    event: "Adam Smith publishes \"The Wealth of Nations\"",
    country: "Great Britain",
    description: "Adam Smith introduced the concept of the \"Division of Labor\" using a pin factory as an example. He demonstrated that breaking down a complex manufacturing process into simple, repetitive tasks performed by specialized workers drastically increased productivity.",
    image: 'https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/171/wn-cover.jpeg'
  },
  {
    id: 3,
    period: "1832",
    title: "The Analytical Approach to Manufacturing",
    event: "Charles Babbage and \"On the Economy of Machinery\"",
    country: "Great Britain",
    description: "The inventor of the first mechanical computer, Charles Babbage, expanded on Smith's work. He introduced the idea of analyzing and observing manufacturing processes scientifically, matching workers' specific skills to specific tasks to minimize wage costs and maximize output. Charles Babbage also contributed to early computing by introducing punched cards to control machines. Inspired by automated textile looms, he planned to use these cards to program the Analytical Engine, allowing it to execute instructions automatically. This concept became an important step toward programmable computers and early binary-based information processing.",
    image: 'https://www.daviddarling.info/images/Babbage.jpg'
  },
  {
    id: 4,
    period: "1880s - 1911",
    title: "The Era of Scientific Management",
    event: "Frederick Winslow Taylor's Time Studies",
    country: "United States",
    description: "Known as the \"Father of Industrial Engineering,\" Taylor replaced rule-of-thumb work methods with scientific study. By breaking jobs down into individual motions and using a stopwatch to time them, he established standardized work processes, forever changing how labor was managed.",
    image: 'https://www.christies.com/img/LotImages/2001/NYR/2001_NYR_09630_0183_000(024700).jpg?mode=max'
  },
  {
    id: 5,
    period: "1908",
    title: "The Birth of the Academic Discipline",
    event: "First Industrial Engineering Department at Penn State",
    country: "United States",
    description: "Pennsylvania State University established the world's first formal, degree-granting Department of Industrial Engineering. This marked the moment when efficiency, facility design, and worker management officially became a recognized engineering science.",
    image: 'https://www.juniper.net/content/dam/www/assets/images/us/en/customers/case-studies/2023/pennsylvania-state-university-hero.jpg'
  },
  {
    id: 6,
    period: "1910s",
    title: "The Human Element and Motion Study",
    event: "Frank and Lillian Gilbreth's Ergonomic Innovations",
    country: "United States",
    description: "While Taylor focused on time, the Gilbreths focused on motion. They categorized basic human motions into \"Therbligs\" and used motion-picture cameras to analyze work. Lillian Gilbreth, often called the \"Mother of Ergonomics,\" also integrated industrial psychology, ensuring the worker's well-being was part of the system design.",
    image: 'https://dijitaldonusumtoplulugu.com.tr/uploads/images/202409/image_750x_66dc3269c1f14.jpg'
  },
  {
    id: 7,
    period: "1913",
    title: "Mass Production and The Assembly Line",
    event: "Henry Ford's Moving Assembly Line",
    country: "United States",
    description: "Henry Ford revolutionized manufacturing by introducing the first moving assembly line for the Model T. By bringing the work to the worker rather than the worker to the work, he slashed assembly time from 12 hours to just 93 minutes, birthing the era of mass consumerism.",
    image: 'public/history/modeltline.png'
  },
  {
    id: 8,
    period: "1940s",
    title: "Operations Research and World War II",
    event: "The Mathematical Modeling of Complex Systems",
    country: "Great Britain and United States",
    description: "The immense logistical challenges of WWII led to the creation of Operations Research (OR). Scientists and engineers developed advanced mathematical models, linear programming, and optimization algorithms to manage military supply chains, radar deployments, and troop movements—techniques later adapted for corporate industries.",
    image: 'https://images.squarespace-cdn.com/content/v1/656f4639c770ec629203bdbe/8dfbb04b-5d2e-469d-aa79-04dc99a5f6cf/alan-turing-and-turing-machine.jpg'
  },
  {
    id: 9,
    period: "1950s - 1970s",
    title: "The Toyota Production System and Lean",
    event: "Taiichi Ohno and Shigeo Shingo pioneer TPS",
    country: "Japan",
    description: "Facing post-war resource scarcity, Toyota developed a system focused on eliminating waste (Muda) and continuous improvement (Kaizen). Shifting from Ford's \"Push\" system to a \"Pull\" system using Kanban, TPS became the gold standard for modern Lean Manufacturing worldwide.",
    image: 'https://yalindanisman.com/wp-content/uploads/taiichi-ohno-1-1024x717.jpg'
  },
  {
    id: 10,
    period: "1970s",
    title: "Industry 3.0: The Automation Age",
    event: "Programmable Logic Controllers (PLCs) and IT",
    country: "United States",
    description: "The integration of electronics, IT, and early computer systems brought about the third industrial revolution. PLCs allowed for the automation of complex machinery, drastically reducing the need for human intervention in repetitive physical tasks and increasing precision.",
    image: 'https://etwinningonline.eba.gov.tr/wp-content/uploads/2019/12/endustri-30-bilgisayarlasma.png'
  },
  {
    id: 11,
    period: "2011",
    title: "Industry 4.0: The Smart Factory",
    event: "Cyber-Physical Systems and IoT",
    country: "Germany",
    description: "The term \"Industry 4.0\" was introduced, marking the era of the Smart Factory. It represents the fusion of the physical and digital worlds through the Internet of Things (IoT), Cloud Computing, Big Data, and digital twins, allowing machines to communicate and optimize processes autonomously.",
    image: 'https://i0.web.de/image/608/32289608,pd=3/angela-merkel.jpg'
  },
  {
    id: 12,
    period: "2020s - Present",
    title: "Industry 5.0: The Human-Centric Future",
    event: "Synergizing Human Creativity with AI",
    country: "Japan, European Union, United States, China",
    description: "Moving beyond pure automation, Industry 5.0 places human well-being and environmental sustainability back at the center of the production process. It focuses on the collaboration between highly skilled workers and advanced collaborative robots (Cobots), leveraging AI to create resilient and personalized manufacturing systems.",
    image: 'https://stellarix.com/wp-content/uploads/2024/06/Industry-5.0-alternative-image-e1760080623332.jpg'
  }
];
