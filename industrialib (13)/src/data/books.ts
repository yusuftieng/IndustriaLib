export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  category: 'Student' | 'Academic' | 'Industry / Professional';
  tags: string[];
  abstractPreview: string;
  fullAbstract: string;
  keyTakeaways: string[];
  subfields: string[];
  readerLevel: string;
}

export const books: Book[] = [
  {
    id: 'the-goal',
    title: 'The Goal: A Process of Ongoing Improvement',
    author: 'Eliyahu M. Goldratt',
    coverImage: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000193970-1.jpg',
    category: 'Industry / Professional',
    tags: ['Lean Manufacturing', 'Operations Research', 'Leadership'],
    abstractPreview: 'A gripping business novel that introduces the Theory of Constraints and transforms how organizations view bottlenecks.',
    fullAbstract: 'Written in a fast-paced thriller style, The Goal is the gripping novel which is transforming management thinking throughout the Western world. It introduces the Theory of Constraints and demonstrates how focusing on bottlenecks is the key to improving overall system throughput rather than optimizing individual local efficiencies. The story follows plant manager Alex Rogo as he struggles to save his failing manufacturing plant and his marriage. Through a series of Socratic dialogues with his former physics professor, Jonah, Alex learns to identify the true goal of his business—making money—and discovers that traditional cost accounting metrics often lead to counterproductive decisions. The book fundamentally shifts the focus from local optimization to global system throughput, emphasizing that an hour lost at a bottleneck is an hour lost for the entire system.',
    keyTakeaways: [
      'The goal of a manufacturing organization is to make money; everything else is a means to that end.',
      'Identify the system\'s bottleneck(s) and subordinate everything else to it.',
      'Local efficiencies do not guarantee global efficiency.',
      'Continuous improvement is a never-ending process of identifying and breaking constraints.'
    ],
    subfields: ['Operations Management', 'Systems Thinking', 'Production Planning'],
    readerLevel: 'Accessible to all levels; essential for managers and engineers.'
  },
  {
    id: 'toyota-production-system',
    title: 'Toyota Production System: Beyond Large-Scale Production',
    author: 'Taiichi Ohno',
    coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11252477/wi:800/wh:d9cae4937',
    category: 'Student',
    tags: ['Lean Manufacturing', 'Quality Management'],
    abstractPreview: 'The foundational text on Lean Manufacturing, written by the architect of the Toyota Production System.',
    fullAbstract: 'In this classic text, Taiichi Ohno—inventor of the Toyota Production System and Lean manufacturing—shares the genius that sets him apart as one of the most disciplined and visionary business leaders of our time. He explains the concepts of Just-In-Time (JIT) and Jidoka (autonomation), which form the pillars of TPS. Ohno details the historical context and the philosophical underpinnings of the system, tracing its origins from the need to catch up with American automotive productivity post-WWII. He elaborates on the relentless pursuit of eliminating the seven wastes (Muda) and the importance of leveling production (Heijunka). The book is not just a technical manual but a profound reflection on management, human motivation, and the necessity of challenging established common sense to achieve continuous improvement (Kaizen).',
    keyTakeaways: [
      'Elimination of waste (Muda) is the most effective way to increase profitability.',
      'Just-In-Time production ensures that only what is needed, when it is needed, and in the amount needed is produced.',
      'Jidoka empowers workers to stop the line when a defect is detected, building quality into the process.',
      'Respect for humanity is central to continuous improvement (Kaizen).'
    ],
    subfields: ['Lean Manufacturing', 'Process Engineering', 'Quality Control'],
    readerLevel: 'Advanced students and industry professionals.'
  },
  {
    id: 'principles-of-scientific-management',
    title: 'The Principles of Scientific Management',
    author: 'Frederick Winslow Taylor',
    coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:7404090/wi:500/wh:dd2f9b1fe',
    category: 'Student',
    tags: ['Scientific Management', 'Leadership'],
    abstractPreview: 'The seminal work that laid the foundation for modern industrial engineering and management science.',
    fullAbstract: 'Published in 1911, this monograph by Frederick Winslow Taylor laid out the principles of scientific management, which revolutionized industrial production. Taylor argued that the objective of management should be to secure the maximum prosperity for the employer, coupled with the maximum prosperity for each employee, achieved through scientific study of work methods. He criticized the traditional "rule of thumb" approaches and advocated for the systematic observation, measurement, and analysis of tasks to determine the "one best way" to perform them. The book details his famous pig-iron handling and shoveling experiments, demonstrating how scientifically selecting workers, providing detailed instructions, and implementing piece-rate incentive systems could drastically increase productivity. Taylor\'s work laid the foundational philosophy for modern industrial engineering, operations management, and organizational efficiency.',
    keyTakeaways: [
      'Replace rule-of-thumb work methods with methods based on a scientific study of the tasks.',
      'Scientifically select, train, and develop each employee rather than passively leaving them to train themselves.',
      'Provide detailed instruction and supervision of each worker in the performance of that worker\'s discrete task.',
      'Divide work nearly equally between managers and workers, so that the managers apply scientific management principles to planning the work and the workers actually perform the tasks.'
    ],
    subfields: ['Work Design', 'Ergonomics', 'Management Theory'],
    readerLevel: 'Foundational reading for all Industrial Engineering students.'
  },
  {
    id: 'out-of-the-crisis',
    title: 'Out of the Crisis',
    author: 'W. Edwards Deming',
    coverImage: 'https://m.media-amazon.com/images/I/71T3U7WNeRL._AC_UF894,1000_QL80_.jpg',
    category: 'Industry / Professional',
    tags: ['Quality Management', 'Leadership'],
    abstractPreview: 'Deming\'s 14 points for management that transformed Japanese industry and later Western manufacturing.',
    fullAbstract: 'In Out of the Crisis, W. Edwards Deming offers a theory of management based on his famous 14 Points for Management. Management\'s failure to plan for the future, he claims, brings about loss of market, which brings about loss of jobs. Management must be judged not only by the quarterly dividend, but by innovative plans to stay in business, protect investment, ensure future dividends, and provide more jobs through improved product and service. Deming heavily criticizes short-term thinking, performance appraisals, and management by objectives, arguing that these practices destroy teamwork and intrinsic motivation. He emphasizes the profound knowledge required to understand systems, variation, psychology, and the theory of knowledge. The book serves as a comprehensive guide to transforming organizational culture from one of fear and inspection to one of continuous improvement, collaboration, and built-in quality.',
    keyTakeaways: [
      'Create constancy of purpose toward improvement of product and service.',
      'Cease dependence on inspection to achieve quality; build quality into the product in the first place.',
      'End the practice of awarding business on the basis of price tag; minimize total cost.',
      'Drive out fear, so that everyone may work effectively for the company.'
    ],
    subfields: ['Total Quality Management', 'Statistical Process Control', 'Organizational Behavior'],
    readerLevel: 'Professionals and academics focusing on quality and systems.'
  },
  {
    id: 'introduction-to-operations-research',
    title: 'Introduction to Operations Research',
    author: 'Frederick S. Hillier, Gerald J. Lieberman',
    coverImage: 'https://www.nobelyayin.com/images/urunler/default/nobelyayin_com_15518.jpg',
    category: 'Academic',
    tags: ['Operations Research', 'Supply Chain'],
    abstractPreview: 'The definitive textbook on Operations Research, covering linear programming, network analysis, and queuing theory.',
    fullAbstract: 'For over four decades, Introduction to Operations Research has been the classic text on operations research. This edition provides comprehensive coverage of fundamentals while incorporating the latest developments in the field. It features clear and well-structured explanations of mathematical models, algorithms, and their practical applications in solving complex decision-making problems. The book covers a wide array of topics including linear programming, the simplex method, network analysis, integer programming, nonlinear programming, queuing theory, and simulation. It bridges the gap between theoretical mathematics and practical industrial applications, providing students and practitioners with the analytical tools necessary to optimize complex systems, allocate scarce resources efficiently, and make data-driven decisions in uncertain environments.',
    keyTakeaways: [
      'Mathematical modeling is a powerful tool for optimizing complex systems.',
      'Linear programming provides a systematic method for resource allocation.',
      'Network models are essential for project management and supply chain optimization.',
      'Queuing theory helps in designing efficient service systems.'
    ],
    subfields: ['Mathematical Modeling', 'Optimization', 'Decision Analysis'],
    readerLevel: 'Undergraduate and graduate students in engineering and mathematics.'
  },
  {
    id: 'the-machine-that-changed-the-world',
    title: 'The Machine That Changed the World',
    author: 'James P. Womack, Daniel T. Jones, Daniel Roos',
    coverImage: 'https://m.media-amazon.com/images/I/51K0gkP+rvL._AC_UF894,1000_QL80_.jpg',
    category: 'Industry / Professional',
    tags: ['Lean Manufacturing', 'Innovation'],
    abstractPreview: 'The book that coined the term "Lean Production" and documented the shift from mass production to lean systems.',
    fullAbstract: 'Based on MIT\'s five-year, five-million-dollar International Motor Vehicle Program, this book is the most comprehensive and authoritative account of the global transition from mass production to lean production. It details how Toyota\'s lean system combines the advantages of craft and mass production, avoiding the high cost of the former and the rigidity of the latter. The authors contrast the mass production system pioneered by Henry Ford with the lean production system developed by Eiji Toyoda and Taiichi Ohno. They explore how lean principles apply not just to the factory floor, but to product development, supply chain coordination, customer relations, and overall enterprise management. The book provides compelling evidence that lean production is a superior paradigm that dramatically reduces defects, inventories, and time-to-market while offering a wider variety of products and more fulfilling work for employees.',
    keyTakeaways: [
      'Lean production uses half the human effort, half the manufacturing space, and half the investment in tools compared to mass production.',
      'It requires keeping far less than half the needed inventory on site.',
      'Lean production results in fewer defects and produces a greater and ever-growing variety of products.',
      'The principles of lean production can be applied to any industry across the globe.'
    ],
    subfields: ['Manufacturing Strategy', 'Automotive Industry', 'Process Improvement'],
    readerLevel: 'Industry professionals and students of manufacturing systems.'
  },
  {
    id: 'shop-management',
    title: 'Shop Management',
    author: 'Frederick Winslow Taylor',
    coverImage: 'https://m.media-amazon.com/images/I/61eaIUmpPtL._AC_UF894,1000_QL80_.jpg',
    category: 'Academic',
    tags: ['Scientific Management'],
    abstractPreview: 'An early and influential work detailing the practical application of scientific management principles on the factory floor.',
    fullAbstract: 'Published in 1903, Shop Management is one of Frederick Winslow Taylor\'s first major works. It details his early experiments and the practical application of his theories on time studies, standardization of tools, and the piece-rate system to increase industrial efficiency and worker productivity. Taylor outlines the necessity of separating the planning of work from its execution, advocating for a functional foremanship where specialized supervisors guide workers. He emphasizes the importance of accurate time study to establish fair daily tasks and the use of differential piece rates to reward high performers. The book provides a granular look at the mechanics of early scientific management, illustrating how systematic organization and precise measurement could transform chaotic machine shops into highly efficient production engines.',
    keyTakeaways: [
      'Standardization of tools and work processes is essential for efficiency.',
      'Workers should be paid based on their output (piece-rate system) to incentivize productivity.',
      'Management must take an active role in planning and organizing work.',
      'Time studies are necessary to determine the optimal way to perform a task.'
    ],
    subfields: ['Work Design', 'Production Planning', 'Industrial History'],
    readerLevel: 'Academics and students of industrial history.'
  },
  {
    id: 'motion-study',
    title: 'Motion Study',
    author: 'Frank Bunker Gilbreth',
    coverImage: 'https://m.media-amazon.com/images/I/61UUBn+9HwL._AC_UF1000,1000_QL80_.jpg',
    category: 'Academic',
    tags: ['Scientific Management', 'Ergonomics'],
    abstractPreview: 'A foundational text on the analysis of human motion to improve efficiency and reduce fatigue.',
    fullAbstract: 'In Motion Study (1911), Frank Bunker Gilbreth outlines his method for analyzing the motions of workers to find the "one best way" to perform a task. By breaking down actions into fundamental elements (therbligs) and eliminating unnecessary movements, Gilbreth demonstrated how to significantly increase productivity while reducing worker fatigue. The book details his famous bricklaying experiments, where he reduced the number of motions required to lay a brick from eighteen to five, vastly increasing output without increasing the physical strain on the worker. Gilbreth\'s work shifted the focus from merely timing tasks (as Taylor did) to optimizing the physical movements themselves, laying the groundwork for modern ergonomics, workplace design, and human factors engineering.',
    keyTakeaways: [
      'Every task can be broken down into fundamental motions.',
      'Eliminating unnecessary motions increases speed and reduces fatigue.',
      'The work environment should be designed to minimize physical strain.',
      'Efficiency benefits both the employer and the employee.'
    ],
    subfields: ['Ergonomics', 'Work Measurement', 'Human Factors'],
    readerLevel: 'Students and professionals interested in ergonomics and work design.'
  },
  {
    id: 'applied-motion-study',
    title: 'Applied Motion Study',
    author: 'Frank Bunker Gilbreth',
    coverImage: 'https://pictures.abebooks.com/isbn/9781331970033-us.jpg',
    category: 'Academic',
    tags: ['Scientific Management', 'Ergonomics'],
    abstractPreview: 'Further applications of motion study techniques to various industries and tasks.',
    fullAbstract: 'A continuation of his earlier work, Applied Motion Study (1917) provides practical examples and case studies of how motion study principles can be applied across different industries. It emphasizes the use of micromotion study and the cyclegraph to capture and analyze rapid human movements. Gilbreth introduces advanced techniques such as using motion picture cameras and timing devices to study work processes at a granular level. The book explores the application of these methods not only in manufacturing but also in office work, surgery, and sports. It highlights the importance of standardizing the "best way" and training workers to adopt efficient motion patterns, demonstrating that motion study is a universal tool for improving human performance and reducing unnecessary effort in any field of endeavor.',
    keyTakeaways: [
      'Advanced techniques like micromotion study provide deeper insights into work processes.',
      'Motion study can be applied to almost any physical task.',
      'Standardization of the "best way" is crucial for consistent performance.',
      'Continuous observation and refinement lead to ongoing improvements.'
    ],
    subfields: ['Ergonomics', 'Process Optimization', 'Industrial Engineering'],
    readerLevel: 'Advanced students and researchers in human factors.'
  },
  {
    id: 'the-psychology-of-management',
    title: 'The Psychology of Management',
    author: 'Lillian Moller Gilbreth',
    coverImage: 'https://m.media-amazon.com/images/I/51MCSfCwBRL._AC_UF1000,1000_QL80_.jpg',
    category: 'Academic',
    tags: ['Scientific Management', 'Leadership'],
    abstractPreview: 'A pioneering work that integrated psychological principles into the practice of scientific management.',
    fullAbstract: 'Published in 1914, The Psychology of Management by Lillian Moller Gilbreth was one of the first books to emphasize the human element in industrial engineering. It argued that scientific management must consider the psychological well-being of workers, advocating for better training, motivation, and a focus on the individual rather than just the task. Gilbreth explores how the principles of scientific management—such as functionalization, standardization, and measurement—affect the worker\'s mind. She emphasizes the importance of individuality, arguing that workers should be treated as unique individuals rather than interchangeable parts. The book advocates for teaching, cooperation, and the development of the worker\'s full potential, bridging the gap between engineering efficiency and humanistic psychology, and laying the foundation for modern organizational behavior and human resource management.',
    keyTakeaways: [
      'Workers are individuals with psychological needs, not just cogs in a machine.',
      'Proper training and motivation are essential for high performance.',
      'Management should foster a cooperative and supportive work environment.',
      'Scientific management must balance efficiency with human welfare.'
    ],
    subfields: ['Organizational Psychology', 'Human Resources', 'Management Theory'],
    readerLevel: 'Academics and professionals interested in the human side of management.'
  },
  {
    id: 'my-life-and-work',
    title: 'My Life and Work',
    author: 'Henry Ford',
    coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11995916/wi:500/wh:77342b94d',
    category: 'Industry / Professional',
    tags: ['Mass Production', 'Leadership'],
    abstractPreview: 'The autobiography of Henry Ford, detailing his philosophy on business, manufacturing, and society.',
    fullAbstract: 'In his autobiography, Henry Ford shares the principles that guided the creation of the Ford Motor Company and the development of the assembly line. He discusses his views on mass production, pricing, wages, and the role of industry in serving society, offering a fascinating look into the mind of a manufacturing pioneer. Ford details the evolution of the Model T and the relentless drive to reduce costs and improve manufacturing processes. He articulates his philosophy that business is a service to the public, and that high wages and low prices are the keys to widespread prosperity. The book provides profound insights into the mechanics of mass production, the importance of continuous flow, the elimination of waste, and the transformative power of industrial innovation on global society.',
    keyTakeaways: [
      'Mass production requires standardization and the continuous flow of materials.',
      'Products should be made affordable for the masses.',
      'Paying workers high wages enables them to buy the products they make.',
      'Business should focus on service to the public rather than just profits.'
    ],
    subfields: ['Manufacturing Strategy', 'Business History', 'Industrial Economics'],
    readerLevel: 'Business leaders, historians, and engineering professionals.'
  },
  {
    id: 'today-and-tomorrow',
    title: 'Today and Tomorrow',
    author: 'Henry Ford',
    coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:12077380/wh:9334b2bdc/miw:200/mih:200',
    category: 'Industry / Professional',
    tags: ['Mass Production', 'Innovation'],
    abstractPreview: 'Ford\'s vision for the future of industry and society, expanding on his principles of mass production.',
    fullAbstract: 'Published in 1926, Today and Tomorrow expands on Ford\'s earlier writings, exploring the broader implications of mass production for society. He discusses topics such as waste reduction, vertical integration, and the potential for industry to solve social problems, providing a visionary perspective on the future of manufacturing. Ford delves into the concept of "flow" not just within the factory, but across the entire supply chain, from raw materials to the finished product. He discusses the importance of continuous innovation, the utilization of by-products to eliminate waste, and the role of industry in raising the global standard of living. The book is remarkably prescient, anticipating many concepts of modern lean manufacturing and sustainable industrial practices decades before they became mainstream.',
    keyTakeaways: [
      'Elimination of waste is the key to industrial progress.',
      'Vertical integration can improve efficiency and control over the supply chain.',
      'Industry has a responsibility to improve the standard of living for all.',
      'Continuous innovation is necessary to stay ahead in business.'
    ],
    subfields: ['Supply Chain Management', 'Industrial Strategy', 'Innovation Management'],
    readerLevel: 'Professionals interested in the evolution of manufacturing systems.'
  },
  {
    id: 'my-years-with-general-motors',
    title: 'My Years with General Motors',
    author: 'Alfred P. Sloan',
    coverImage: 'https://m.media-amazon.com/images/I/81bc52O26SL._UF350,350_QL50_.jpg',
    category: 'Industry / Professional',
    tags: ['Leadership', 'Organizational Management'],
    abstractPreview: 'A classic memoir detailing the management strategies that built General Motors into a corporate giant.',
    fullAbstract: 'Alfred P. Sloan\'s memoir provides a detailed account of his time leading General Motors. He explains his concept of decentralized organization with centralized financial control, his strategy of offering "a car for every purse and purpose," and his approach to corporate governance, which became the model for modern corporations. Sloan details how he transformed GM from a chaotic collection of independent companies into a structured, data-driven enterprise capable of overtaking Ford as the dominant automaker. He discusses the development of the modern multidivisional corporate structure, the importance of objective financial metrics, and the strategic use of planned obsolescence and market segmentation. The book is a masterclass in executive leadership, organizational design, and the professionalization of management in large-scale enterprises.',
    keyTakeaways: [
      'Decentralized operations combined with centralized policy control is an effective organizational structure.',
      'Market segmentation allows a company to target different consumer needs.',
      'Data-driven decision making is crucial for corporate success.',
      'Professional management is distinct from entrepreneurship.'
    ],
    subfields: ['Corporate Strategy', 'Organizational Design', 'Business Management'],
    readerLevel: 'Executives, managers, and students of corporate strategy.'
  },
  {
    id: 'workplace-management',
    title: 'Workplace Management',
    author: 'Taiichi Ohno',
    coverImage: 'https://m.media-amazon.com/images/I/71pxY7j8qfL._AC_UF894,1000_QL80_.jpg',
    category: 'Industry / Professional',
    tags: ['Lean Manufacturing', 'Leadership'],
    abstractPreview: 'Insights and reflections from the creator of the Toyota Production System on managing the workplace.',
    fullAbstract: 'In Workplace Management, Taiichi Ohno shares his personal philosophy and practical advice on managing a manufacturing environment. He emphasizes the importance of going to the Gemba (the actual workplace), challenging the status quo, and empowering workers to identify and solve problems. Ohno provides candid reflections on the development of the Toyota Production System, offering anecdotes and insights that go beyond technical descriptions. He discusses the psychological barriers to improvement, the necessity of a "pull" system over a "push" system, and the critical role of supervisors in fostering a culture of continuous improvement. The book serves as a practical guide for leaders seeking to implement lean principles, highlighting that true transformation requires a fundamental shift in mindset and a deep respect for the people doing the work.',
    keyTakeaways: [
      'Managers must go to the Gemba to truly understand the work and the problems.',
      'Do not accept things as they are; always look for ways to improve.',
      'Data is important, but facts found at the workplace are more important.',
      'Respect for people means challenging them to think and improve.'
    ],
    subfields: ['Gemba Walk', 'Continuous Improvement', 'Operations Management'],
    readerLevel: 'Managers and practitioners of Lean manufacturing.'
  },
  {
    id: 'a-study-of-the-toyota-production-system',
    title: 'A Study of the Toyota Production System',
    author: 'Shigeo Shingo',
    coverImage: 'https://m.media-amazon.com/images/I/81RRCtTjgwL._AC_UF1000,1000_QL80_.jpg',
    category: 'Academic',
    tags: ['Lean Manufacturing', 'Operations Research'],
    abstractPreview: 'An in-depth technical analysis of the mechanisms and principles behind the Toyota Production System.',
    fullAbstract: 'Shigeo Shingo provides a detailed, engineering-focused analysis of the Toyota Production System. He explains the mechanics of Just-In-Time production, the Kanban system, and the critical importance of reducing setup times (SMED) to enable small-batch production and flow. Shingo dissects the manufacturing process into a network of operations and processes, clarifying the distinction between the two. He provides a rigorous technical breakdown of how to eliminate the wastes of overproduction, waiting, and defective products. The book is essential for understanding the precise engineering mechanisms that make TPS work, offering concrete methodologies for implementing single-minute exchange of die, non-stock production, and robust quality control systems on the factory floor.',
    keyTakeaways: [
      'Reducing setup times (SMED) is essential for achieving flow and reducing inventory.',
      'Non-value-adding activities must be systematically identified and eliminated.',
      'The Kanban system is a tool for managing flow, not the goal itself.',
      'Production must be viewed as a network of processes and operations.'
    ],
    subfields: ['Process Engineering', 'Production Control', 'SMED'],
    readerLevel: 'Industrial engineers and advanced students of manufacturing systems.'
  },
  {
    id: 'zero-quality-control',
    title: 'Zero Quality Control: Source Inspection and the Poka-Yoke System',
    author: 'Shigeo Shingo',
    coverImage: 'https://m.media-amazon.com/images/I/91nNLZi-U0L._AC_UF350,350_QL50_.jpg',
    category: 'Industry / Professional',
    tags: ['Quality Management', 'Lean Manufacturing'],
    abstractPreview: 'A practical guide to achieving zero defects through mistake-proofing and source inspection.',
    fullAbstract: 'In this book, Shigeo Shingo argues that statistical quality control is insufficient because it only catches defects after they occur. He proposes the concept of Zero Quality Control, which relies on source inspection to catch errors before they become defects, and Poka-Yoke (mistake-proofing) devices to prevent errors from happening in the first place. Shingo challenges the traditional acceptance of an "acceptable quality level" (AQL), arguing that the only acceptable goal is zero defects. He provides numerous practical examples of simple, inexpensive Poka-Yoke devices that physically prevent workers from making mistakes or immediately alert them when an error occurs. The book shifts the paradigm of quality management from defect detection to defect prevention, empowering frontline workers to build perfect quality into every step of the process.',
    keyTakeaways: [
      'Errors are inevitable, but defects can be prevented.',
      'Source inspection is more effective than judgment inspection.',
      'Poka-Yoke devices should be simple, inexpensive, and reliable.',
      'The goal is zero defects, not just an acceptable level of defects.'
    ],
    subfields: ['Quality Assurance', 'Mistake-Proofing', 'Process Design'],
    readerLevel: 'Quality engineers and manufacturing professionals.'
  },
  {
    id: 'linear-programming-and-extensions',
    title: 'Linear Programming and Extensions',
    author: 'George Dantzig',
    coverImage: 'https://m.media-amazon.com/images/I/61B6dTzeBKL._AC_UF1000,1000_QL80_.jpg',
    category: 'Academic',
    tags: ['Operations Research'],
    abstractPreview: 'The foundational text on linear programming by the inventor of the simplex algorithm.',
    fullAbstract: 'Written by George Dantzig, the "father of linear programming," this comprehensive book covers the theory, algorithms, and applications of linear programming. It details the simplex method and explores its extensions to network flows, integer programming, and decision-making under uncertainty. Dantzig provides a rigorous mathematical foundation for operations research, demonstrating how complex real-world problems can be formulated as mathematical models and solved efficiently. The book covers the historical development of the field, the geometry of linear programs, duality theory, and practical applications in areas such as transportation, scheduling, and resource allocation. It remains a seminal text for understanding the mathematical optimization techniques that drive modern industrial engineering and systems analysis.',
    keyTakeaways: [
      'Linear programming is a powerful mathematical tool for optimizing resource allocation.',
      'The simplex algorithm provides an efficient method for solving complex linear models.',
      'Mathematical models can be used to solve a wide range of industrial and economic problems.',
      'Understanding the underlying mathematics is crucial for effective application.'
    ],
    subfields: ['Mathematical Optimization', 'Algorithm Design', 'Systems Analysis'],
    readerLevel: 'Graduate students and researchers in operations research and mathematics.'
  },
  {
    id: 'redesigning-the-future',
    title: 'Idealized Design: How to Dissolve Tomorrows Crisis',
    author: 'Russell Ackoff',
    coverImage: 'https://m.media-amazon.com/images/I/51I3vTD7+FL._AC_UF1000,1000_QL80_.jpg',
    category: 'Academic',
    tags: ['Systems Thinking', 'Operations Research'],
    abstractPreview: 'A systems approach to solving complex societal and organizational problems.',
    fullAbstract: 'Russell Ackoff argues that traditional analytical methods are insufficient for dealing with the complex, interconnected problems (or "messes") of the modern world. He advocates for a systems approach, emphasizing synthesis over analysis, and interactive planning to redesign organizations and society for a better future. In Idealized Design, Ackoff presents a methodology for organizational transformation that begins by imagining the ideal system that stakeholders would create right now if they could replace the existing system completely. This approach frees planners from the constraints of current realities and incremental thinking. The book details how to formulate the mess, design the ideal system, and then work backward to implement the necessary changes, providing a powerful framework for radical innovation and systemic problem-solving in corporate and public sectors.',
    keyTakeaways: [
      'Complex problems are "messes" that require a systems approach to solve.',
      'Synthesis (understanding the whole) is as important as analysis (understanding the parts).',
      'Planning should be interactive and continuous, involving all stakeholders.',
      'The goal is to design a desirable future and invent ways to bring it about.'
    ],
    subfields: ['Systems Theory', 'Strategic Planning', 'Problem Solving'],
    readerLevel: 'Academics and professionals interested in systems thinking.'
  },
  {
    id: 're-creating-the-corporation',
    title: 'Re-Creating the Corporation',
    author: 'Russell Ackoff',
    coverImage: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1386924497i/60852.jpg',
    category: 'Industry / Professional',
    tags: ['Systems Thinking', 'Leadership'],
    abstractPreview: 'A practical guide to applying systems thinking to organizational design and management.',
    fullAbstract: 'In this book, Ackoff applies his systems thinking principles specifically to the corporation. He outlines a framework for designing organizations that are adaptable, learning-oriented, and capable of thriving in a rapidly changing environment, challenging traditional hierarchical structures. Ackoff argues that corporations must be viewed as purposeful systems embedded within larger purposeful systems (society) and composed of purposeful parts (employees). He proposes a democratic, circular organizational design that facilitates interactive planning, continuous learning, and rapid adaptation. The book provides a comprehensive critique of conventional management practices and offers a visionary blueprint for creating corporations that are not only more effective and efficient but also more humane and socially responsible.',
    keyTakeaways: [
      'Corporations must be viewed as purposeful systems within larger purposeful systems.',
      'Traditional hierarchies inhibit learning and adaptation.',
      'Organizations should be designed as democratic, interactive networks.',
      'Management\'s role is to facilitate the interactions between the parts of the system.'
    ],
    subfields: ['Organizational Design', 'Change Management', 'Corporate Strategy'],
    readerLevel: 'Executives and organizational development professionals.'
  },
  {
    id: 'administrative-behavior',
    title: 'Administrative Behavior',
    author: 'Herbert A. Simon',
    coverImage: 'https://d28hgpri8am2if.cloudfront.net/book_images/cvr9780684835822_9780684835822.jpg',
    category: 'Academic',
    tags: ['Decision Science', 'Leadership'],
    abstractPreview: 'A groundbreaking study of decision-making processes within administrative organizations.',
    fullAbstract: 'Herbert A. Simon\'s Administrative Behavior revolutionized the study of organizations by focusing on the decision-making process. He introduced the concept of "bounded rationality," arguing that human beings cannot be perfectly rational due to cognitive limits, and instead "satisfice" by choosing the first acceptable option. Simon analyzes how organizational structures, communication channels, and authority systems influence the premises upon which individuals make decisions. He argues that the primary function of an organization is to simplify the decision-making environment for its members, providing them with the necessary information, goals, and standard operating procedures. The book bridges the gap between economics, psychology, and management, providing a profound theoretical foundation for understanding how complex organizations actually function and how administrative efficiency can be improved.',
    keyTakeaways: [
      'Decision-making is the heart of administration.',
      'Human rationality is bounded by cognitive limits and incomplete information.',
      'Individuals "satisfice" rather than optimize when making decisions.',
      'Organizations provide the environment and structure that shape individual decisions.'
    ],
    subfields: ['Organizational Theory', 'Behavioral Economics', 'Public Administration'],
    readerLevel: 'Academics and students of organizational behavior and management.'
  },
  {
    id: 'the-sciences-of-the-artificial',
    title: 'The Sciences of the Artificial',
    author: 'Herbert A. Simon',
    coverImage: 'https://m.media-amazon.com/images/I/81DE9FLl0UL.jpg',
    category: 'Academic',
    tags: ['Systems Thinking', 'Innovation'],
    abstractPreview: 'An exploration of the design and understanding of complex artificial systems.',
    fullAbstract: 'In this influential book, Simon explores the nature of artificial systems—things created by humans, from organizations to computers. He discusses the principles of design, the architecture of complexity, and how we can understand and manage systems that are too complex to be fully comprehended by the human mind. Simon argues that artificial systems can be studied scientifically by examining how they adapt to their environments to achieve specific goals. He introduces the concept of nearly decomposable systems, explaining how complex hierarchies evolve and function. The book touches on cognitive psychology, economics, computer science, and engineering design, offering a unifying framework for understanding the "artificial" world we have created and providing profound insights into the nature of problem-solving, design thinking, and the limits of human cognition.',
    keyTakeaways: [
      'Artificial systems are designed to adapt to their environment to achieve goals.',
      'Complex systems are often hierarchical, composed of interrelated subsystems.',
      'Design is the core activity of all professions concerned with the artificial.',
      'Simulation is a powerful tool for understanding complex systems.'
    ],
    subfields: ['Design Theory', 'Cognitive Science', 'Complex Systems'],
    readerLevel: 'Researchers and students interested in design and complex systems.'
  },
  {
    id: 'the-new-economics',
    title: 'The New Economics for Industry, Government, Education',
    author: 'W. Edwards Deming',
    coverImage: 'https://m.media-amazon.com/images/I/71YxaoUzNTL.jpg',
    category: 'Industry / Professional',
    tags: ['Quality Management', 'Leadership'],
    abstractPreview: 'Deming\'s final book, introducing his System of Profound Knowledge.',
    fullAbstract: 'In The New Economics, W. Edwards Deming presents his "System of Profound Knowledge," a holistic framework for management and leadership. It consists of four interrelated parts: appreciation for a system, knowledge about variation, theory of knowledge, and psychology. He argues that understanding these elements is essential for transforming organizations. Deming expands on his earlier work, providing a deeper philosophical and theoretical basis for his management principles. He explains how traditional management practices, such as ranking employees and managing by results, destroy intrinsic motivation and optimize the parts at the expense of the whole system. The book is a passionate call for a fundamental transformation in the prevailing style of management, urging leaders to adopt a systemic perspective, understand statistical variation, and foster a culture of joy in work and continuous learning.',
    keyTakeaways: [
      'Management must understand the organization as a system.',
      'Understanding variation is crucial for making sound decisions.',
      'Knowledge is built on theory; without theory, experience has no meaning.',
      'Intrinsic motivation is more powerful than extrinsic rewards.'
    ],
    subfields: ['Systems Thinking', 'Statistical Variation', 'Organizational Psychology'],
    readerLevel: 'Leaders and managers seeking a deeper understanding of quality and systems.'
  },
  {
    id: 'jurans-quality-control-handbook',
    title: 'Juran\'s Quality Control Handbook',
    author: 'Joseph M. Juran',
    coverImage: 'https://m.media-amazon.com/images/I/813Xe+S6cmL._AC_UF894,1000_QL80_.jpg',
    category: 'Academic',
    tags: ['Quality Management'],
    abstractPreview: 'The comprehensive reference guide for quality management professionals.',
    fullAbstract: 'First published in 1951, Juran\'s Quality Control Handbook is the definitive reference for quality management. It covers the entire spectrum of quality, from planning and control to improvement, providing practical tools, methodologies, and case studies for achieving excellence in products and services. Juran defines quality as "fitness for use" and outlines his famous Quality Trilogy: quality planning, quality control, and quality improvement. The handbook provides exhaustive detail on statistical methods, reliability engineering, supplier quality, and the human aspects of quality management. It serves as an indispensable resource for quality engineers and managers, offering a structured, data-driven approach to identifying customer needs, translating them into product specifications, and ensuring consistent, defect-free production across all organizational functions.',
    keyTakeaways: [
      'Quality must be planned; it does not happen by accident.',
      'Quality control involves measuring performance against goals and taking action on the difference.',
      'Quality improvement is a continuous process of achieving unprecedented levels of performance.',
      'The Pareto principle (80/20 rule) is a vital tool for prioritizing quality efforts.'
    ],
    subfields: ['Quality Assurance', 'Process Control', 'Continuous Improvement'],
    readerLevel: 'Quality professionals, engineers, and academics.'
  },
  {
    id: 'managerial-breakthrough',
    title: 'Managerial Breakthrough',
    author: 'Joseph M. Juran',
    coverImage: 'https://m.media-amazon.com/images/I/71Dtvj2DSVL._AC_UF1000,1000_QL80_.jpg',
    category: 'Industry / Professional',
    tags: ['Quality Management', 'Leadership'],
    abstractPreview: 'A guide to achieving unprecedented levels of performance through systematic breakthrough improvement.',
    fullAbstract: 'In Managerial Breakthrough, Juran distinguishes between "control" (maintaining the status quo) and "breakthrough" (achieving new, higher levels of performance). He outlines a systematic process for achieving breakthroughs, involving changes in attitude, organization, and problem-solving methodologies. Juran argues that while control is necessary to prevent deterioration, breakthrough is essential for competitive survival and growth. He details a universal sequence for breakthrough, which includes proving the need, identifying the vital few projects (using the Pareto principle), organizing for breakthrough, conducting diagnostic journeys to find root causes, and implementing remedial journeys to establish new controls. The book provides a practical, structured roadmap for managers seeking to drive significant, sustainable improvements in organizational performance and quality.',
    keyTakeaways: [
      'Breakthrough requires a deliberate and systematic approach.',
      'Management must distinguish between chronic problems (requiring breakthrough) and sporadic problems (requiring control).',
      'A steering arm and a diagnostic arm are needed to guide the breakthrough process.',
      'Resistance to change is a natural part of the breakthrough process and must be managed.'
    ],
    subfields: ['Change Management', 'Strategic Planning', 'Performance Improvement'],
    readerLevel: 'Managers and executives focused on organizational improvement.'
  },
  {
    id: 'guide-to-quality-control',
    title: 'Guide to Quality Control',
    author: 'Kaoru Ishikawa',
    coverImage: 'https://m.media-amazon.com/images/I/418kxpW9qiL._AC_UF894,1000_QL80_.jpg',
    category: 'Student',
    tags: ['Quality Management'],
    abstractPreview: 'A practical introduction to the basic tools of quality control, intended for frontline workers and supervisors.',
    fullAbstract: 'Kaoru Ishikawa\'s Guide to Quality Control is a foundational text that democratized quality tools. It provides clear, practical instructions on how to use the "Seven Basic Tools of Quality" (such as Pareto charts, cause-and-effect diagrams, and control charts) to solve problems on the shop floor. Ishikawa believed that 95% of a company\'s problems could be solved using these simple statistical tools. The book is designed to be accessible to frontline workers and supervisors, empowering them to collect data, analyze variations, and identify root causes without needing advanced statistical training. By making quality control tools understandable and usable by everyone, Ishikawa laid the groundwork for the Quality Circle movement and the widespread adoption of continuous improvement practices at all levels of the organization.',
    keyTakeaways: [
      'Quality control tools should be simple enough for everyone to use.',
      'Data collection and analysis are essential for problem-solving.',
      'The cause-and-effect (Ishikawa) diagram helps identify the root causes of problems.',
      'Quality is everyone\'s responsibility, not just the quality department\'s.'
    ],
    subfields: ['Statistical Quality Control', 'Problem Solving', 'Shop Floor Management'],
    readerLevel: 'Students, frontline workers, and supervisors.'
  },
  {
    id: 'what-is-total-quality-control',
    title: 'What Is Total Quality Control? The Japanese Way',
    author: 'Kaoru Ishikawa',
    coverImage: 'https://m.media-amazon.com/images/I/51s0b6-OByL._AC_UF1000,1000_QL80_.jpg',
    category: 'Industry / Professional',
    tags: ['Quality Management'],
    abstractPreview: 'An explanation of the Japanese approach to Total Quality Control (TQC) and its emphasis on company-wide participation.',
    fullAbstract: 'In this book, Ishikawa explains the philosophy and practice of Total Quality Control (TQC) as developed in Japan. He emphasizes that TQC is a company-wide effort that involves all employees, from top management to frontline workers, and focuses on continuous improvement and customer satisfaction. Ishikawa contrasts the Japanese approach to quality, which integrates quality into every aspect of the business, with the Western approach, which often relegated quality to a specialized department. He discusses the importance of cross-functional management, policy deployment (Hoshin Kanri), and the concept that "the next process is your customer." The book provides a comprehensive overview of how to build a culture of quality, emphasizing education, respect for humanity, and the relentless pursuit of excellence throughout the entire value chain.',
    keyTakeaways: [
      'TQC requires the commitment and participation of all employees.',
      'Quality begins with education and ends with education.',
      'The next process is your customer.',
      'Cross-functional management is necessary to achieve company-wide quality goals.'
    ],
    subfields: ['Total Quality Management', 'Organizational Culture', 'Customer Focus'],
    readerLevel: 'Managers and professionals implementing quality systems.'
  },
  {
    id: 'its-not-luck',
    title: 'It\'s Not Luck',
    author: 'Eliyahu M. Goldratt',
    coverImage: 'https://m.media-amazon.com/images/I/71fR2rP-zIL._AC_UF350,350_QL50_.jpg',
    category: 'Industry / Professional',
    tags: ['Operations Research', 'Leadership'],
    abstractPreview: 'The sequel to The Goal, introducing the Thinking Processes of the Theory of Constraints.',
    fullAbstract: 'In It\'s Not Luck, Goldratt continues the story of Alex Rogo, this time applying the Theory of Constraints to marketing, sales, and conflict resolution. The book introduces the "Thinking Processes"—a set of logical tools (like the Evaporating Cloud and Current Reality Tree) used to identify core problems and develop breakthrough solutions. As Alex faces the potential sell-off of his division, he must use these tools to uncover the hidden assumptions that create conflicts and limit market demand. The book demonstrates how to construct unrefusable offers ("Mafia Offers") by understanding and resolving the customer\'s core constraints. It provides a powerful framework for strategic thinking, showing how logical analysis can be used to systematically dismantle complex business problems, align organizational goals, and create sustainable competitive advantage without relying on luck.',
    keyTakeaways: [
      'Logical thinking tools can be used to solve complex business problems and resolve conflicts.',
      'A core conflict is usually the root cause of many undesirable effects.',
      'Creating a "win-win" solution is possible by challenging the assumptions underlying a conflict.',
      'Marketing should focus on solving the customer\'s core problem.'
    ],
    subfields: ['Strategic Planning', 'Conflict Resolution', 'Marketing Strategy'],
    readerLevel: 'Business leaders and managers seeking advanced problem-solving tools.'
  },
  {
    id: 'critical-chain',
    title: 'Critical Chain',
    author: 'Eliyahu M. Goldratt',
    coverImage: 'https://m.media-amazon.com/images/I/51712MtKNuL.jpg',
    category: 'Industry / Professional',
    tags: ['Operations Research', 'Project Management'],
    abstractPreview: 'A business novel that applies the Theory of Constraints to project management.',
    fullAbstract: 'Critical Chain applies Goldratt\'s Theory of Constraints to the field of project management. It challenges traditional project management practices, arguing that focusing on task deadlines leads to padded estimates and wasted time. Instead, it proposes managing the "critical chain" of resources and using project buffers to ensure timely completion. The novel illustrates how behaviors such as the "Student Syndrome" (delaying start times) and Parkinson\'s Law (work expanding to fill the time allotted) sabotage project schedules. By shifting the focus from individual task completion to overall project flow, and by aggregating safety time into strategic buffers, Critical Chain offers a revolutionary approach to completing projects faster, within budget, and without compromising scope or quality. It is a paradigm-shifting read for anyone involved in managing complex, multi-resource projects.',
    keyTakeaways: [
      'Traditional project management encourages multitasking and padded estimates, which delay projects.',
      'The critical chain is the longest sequence of dependent tasks and resource constraints.',
      'Protect the project completion date with a project buffer, rather than padding individual tasks.',
      'Avoid multitasking to improve focus and speed up task completion.'
    ],
    subfields: ['Project Management', 'Resource Allocation', 'Operations Management'],
    readerLevel: 'Project managers and operations professionals.'
  },
  {
    id: 'lean-thinking',
    title: 'Lean Thinking: Banish Waste and Create Wealth in Your Corporation',
    author: 'James P. Womack, Daniel T. Jones',
    coverImage: 'https://m.media-amazon.com/images/I/614R6LguHLL._AC_UF1000,1000_QL80_.jpg',
    category: 'Industry / Professional',
    tags: ['Lean Manufacturing'],
    abstractPreview: 'A practical guide to implementing lean principles across various industries.',
    fullAbstract: 'Following the success of The Machine That Changed the World, Lean Thinking provides a step-by-step guide for implementing lean principles in any organization. It outlines the five core principles of lean: value, value stream, flow, pull, and perfection, illustrated through numerous case studies of companies that successfully transformed their operations. Womack and Jones detail how to define value from the customer\'s perspective, map the entire value stream to identify non-value-adding activities, and redesign processes to create continuous, uninterrupted flow. They explain the mechanics of pull systems and the cultural shift required to pursue perfection through relentless continuous improvement. The book serves as a definitive action plan for managers and executives seeking to banish waste, increase agility, and create lasting wealth in their corporations by adopting the lean paradigm.',
    keyTakeaways: [
      'Specify value from the standpoint of the end customer.',
      'Identify all the steps in the value stream and eliminate those that do not create value.',
      'Make the value-creating steps occur in tight sequence so the product flows smoothly.',
      'Let customers pull value from the next upstream activity.',
      'Pursue perfection through continuous improvement.'
    ],
    subfields: ['Value Stream Mapping', 'Process Improvement', 'Change Management'],
    readerLevel: 'Managers and executives leading lean transformations.'
  },
  {
    id: 'the-practice-of-management',
    title: 'The Practice of Management',
    author: 'Peter F. Drucker',
    coverImage: 'https://img.kitapyurdu.com/v1/getImage/fn:11522401/wi:500/wh:f9cd92f69',
    category: 'Industry / Professional',
    tags: ['Leadership', 'Organizational Management'],
    abstractPreview: 'A foundational text that established management as a distinct profession and discipline.',
    fullAbstract: 'Published in 1954, The Practice of Management is considered one of the most important management books ever written. Drucker defines the role of the manager, introduces the concept of Management by Objectives (MBO), and explores the responsibilities of management to the business, the workers, and society. Drucker argues that management is a distinct, professional discipline that is the dynamic, life-giving element in every business. He explores the fundamental questions of "What is our business?" and "What should it be?", emphasizing the importance of marketing and innovation. The book provides a comprehensive framework for managing a business, managing managers, and managing workers and work, establishing the foundational principles that have guided corporate leadership and organizational design for over half a century.',
    keyTakeaways: [
      'Management is a distinct function with specific responsibilities and practices.',
      'The primary purpose of a business is to create a customer.',
      'Management by Objectives (MBO) aligns individual goals with organizational goals.',
      'Managers must balance short-term results with long-term sustainability.'
    ],
    subfields: ['Management Theory', 'Business Strategy', 'Human Resources'],
    readerLevel: 'Managers, executives, and business students.'
  },
  {
    id: 'management-tasks-responsibilities-practices',
    title: 'Management: Tasks, Responsibilities, Practices',
    author: 'Peter F. Drucker',
    coverImage: 'https://m.media-amazon.com/images/I/71udPK9HM8L.jpg',
    category: 'Academic',
    tags: ['Leadership', 'Organizational Management'],
    abstractPreview: 'A comprehensive and encyclopedic overview of the discipline of management.',
    fullAbstract: 'This monumental work by Peter Drucker provides a comprehensive overview of management theory and practice. It covers a wide range of topics, including business performance, performance in the service institution, productive work and achieving worker, social impacts and social responsibilities, and the manager\'s work and jobs. Drucker synthesizes decades of observation and consulting experience into a definitive guide that addresses the complexities of modern organizations. He discusses the rise of the knowledge worker, the challenges of managing large, multidivisional corporations, and the critical importance of strategic planning and decision-making. The book serves as an encyclopedic reference for executives, offering profound insights into the tasks and responsibilities of management in a rapidly changing, knowledge-based economy, and emphasizing that management is ultimately about human beings and their capacity for joint performance.',
    keyTakeaways: [
      'Management is the organ of society specifically charged with making resources productive.',
      'Knowledge workers require different management approaches than manual workers.',
      'Organizations must be designed for performance and adaptability.',
      'Management has a social responsibility beyond maximizing profits.'
    ],
    subfields: ['Corporate Governance', 'Social Responsibility', 'Knowledge Management'],
    readerLevel: 'Advanced students, researchers, and senior executives.'
  },
  {
    id: 'the-fifth-discipline',
    title: 'The Fifth Discipline: The Art & Practice of The Learning Organization',
    author: 'Peter Senge',
    coverImage: 'https://www.yapikrediyayinlari.com.tr/dosyalar/2017/03/cbdc9bd1-bbca-4a44-a01e-f3d5478f6942.jpg',
    category: 'Industry / Professional',
    tags: ['Systems Thinking', 'Leadership', 'Organizational Management'],
    abstractPreview: 'A seminal book on creating "learning organizations" through systems thinking, personal mastery, mental models, shared vision, and team learning.',
    fullAbstract: 'In The Fifth Discipline, Peter Senge introduces the concept of the "learning organization"—an organization where people continually expand their capacity to create the results they truly desire, where new and expansive patterns of thinking are nurtured, where collective aspiration is set free, and where people are continually learning to see the whole together. Senge identifies five disciplines essential for building such an organization: Personal Mastery, Mental Models, Building Shared Vision, Team Learning, and the cornerstone "Fifth Discipline," Systems Thinking. He argues that traditional, hierarchical organizations are ill-equipped to handle the complexities of the modern world and that sustainable competitive advantage depends on the ability to learn faster than the competition. The book provides a powerful framework for transforming organizational culture, overcoming learning disabilities, and fostering a systemic perspective that enables profound and lasting change.',
    keyTakeaways: [
      'Systems thinking is the conceptual cornerstone that integrates the other four disciplines.',
      'Organizations must overcome "learning disabilities" such as "I am my position" and "the illusion of taking charge".',
      'Personal mastery involves continually clarifying and deepening our personal vision.',
      'Team learning is vital because teams, not individuals, are the fundamental learning unit in modern organizations.'
    ],
    subfields: ['Organizational Learning', 'Change Management', 'Systems Theory'],
    readerLevel: 'Managers, executives, and organizational development professionals.'
  }
];
