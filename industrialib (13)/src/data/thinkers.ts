export interface Thinker {
  id: string;
  name: string;
  portraitImage: string;
  primaryField: string;
  category: 'Foundations of Industrial Engineering' | 'Production & Lean Systems' | 'Operations Research & Systems' | 'Quality & Management';
  biography: string;
  contribution: string;
  majorWorks: string[];
  quotes: string[];
}

export const thinkers: Thinker[] = [
  {
    id: 'frederick-winslow-taylor',
    name: 'Frederick Winslow Taylor',
    portraitImage: 'https://www.lifeder.com/wp-content/uploads/2021/12/Frederick-Taylor-retrato-879x1024.jpg',
    primaryField: 'Scientific Management',
    category: 'Foundations of Industrial Engineering',
    biography: 'An American mechanical engineer who sought to improve industrial efficiency. He was one of the first management consultants and a leader of the Efficiency Movement.',
    contribution: 'Pioneered time studies and the systematic analysis of work processes. His principles shifted management from a rule-of-thumb approach to a scientific discipline, laying the groundwork for modern industrial engineering.',
    majorWorks: [
      'The Principles of Scientific Management (1911)',
      'Shop Management (1903)'
    ],
    quotes: [
      'In the past the man has been first; in the future the system must be first.',
      'Hardly a competent workman can be found who does not devote a considerable amount of time to studying just how slowly he can work and still convince his employer that he is going at a good pace.',
      'To work according to scientific laws, the management must take over and perform much of the work which is now left to the men.'
    ]
  },
  {
    id: 'taiichi-ohno',
    name: 'Taiichi Ohno',
    portraitImage: 'https://yalindanisman.com/wp-content/uploads/taiichi_ohno1.jpg',
    primaryField: 'Lean Manufacturing',
    category: 'Production & Lean Systems',
    biography: 'A Japanese industrial engineer and businessman. He is considered to be the father of the Toyota Production System, which inspired Lean Manufacturing in the U.S.',
    contribution: 'Developed the concepts of Just-In-Time (JIT) production, Kanban, and the identification of the Seven Wastes (Muda). His relentless pursuit of efficiency transformed global manufacturing paradigms.',
    majorWorks: [
      'Toyota Production System: Beyond Large-Scale Production (1988)',
      'Workplace Management (1988)'
    ],
    quotes: [
      'Where there is no standard there can be no Kaizen.',
      'Costs do not exist to be calculated. Costs exist to be reduced.',
      'Progress cannot be generated when we are satisfied with existing situations.'
    ]
  },
  {
    id: 'w-edwards-deming',
    name: 'W. Edwards Deming',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/7/73/W._Edwards_Deming.jpg',
    primaryField: 'Quality Management',
    category: 'Quality & Management',
    biography: 'An American engineer, statistician, professor, author, lecturer, and management consultant. He is widely credited with improving production in the United States during the Cold War and deeply influencing Japanese post-war economic recovery.',
    contribution: 'Championed Statistical Process Control (SPC) and the PDCA (Plan-Do-Check-Act) cycle. His 14 Points for Management provided a holistic framework for transforming organizational culture towards continuous quality improvement.',
    majorWorks: [
      'Out of the Crisis (1986)',
      'The New Economics for Industry, Government, Education (1993)'
    ],
    quotes: [
      'In God we trust; all others must bring data.',
      'It is not enough to do your best; you must know what to do, and then do your best.',
      'Without data you\'re just another person with an opinion.',
      'A bad system will beat a good person every time.'
    ]
  },
  {
    id: 'lillian-moller-gilbreth',
    name: 'Lillian Moller Gilbreth',
    portraitImage: 'https://shethoughtit.ilcml.com/wp-content/uploads/2017/01/lilian-gilbreth-e1567959493903.jpg',
    primaryField: 'Ergonomics & Human Factors',
    category: 'Foundations of Industrial Engineering',
    biography: 'An American psychologist, industrial engineer, consultant, and educator who was an early pioneer in applying psychology to time-and-motion studies.',
    contribution: 'Integrated psychological insights into industrial engineering, focusing on the human element of work. She and her husband Frank developed micromotion study to reduce fatigue and improve worker well-being alongside efficiency.',
    majorWorks: [
      'The Psychology of Management (1914)',
      'Applied Motion Study (1917)'
    ],
    quotes: [
      'We consider that the work of the engineer is to be the making of the world a better place to live in.',
      'Motion study is the science of eliminating wastefulness resulting from using unnecessary, ill-directed, and inefficient motions.'
    ]
  },
  {
    id: 'george-dantzig',
    name: 'George Dantzig',
    portraitImage: 'https://news.stanford.edu/__data/assets/image/0026/82493/Dantzig_featured.jpeg',
    primaryField: 'Operations Research',
    category: 'Operations Research & Systems',
    biography: 'An American mathematical scientist who made contributions to industrial engineering, operations research, computer science, economics, and statistics.',
    contribution: 'Invented the simplex algorithm, a foundational method for solving linear programming problems. His work enabled the optimization of complex logistical and industrial systems, forming the bedrock of modern Operations Research.',
    majorWorks: [
      'Linear Programming and Extensions (1963)'
    ],
    quotes: [
      'The final test of a theory is its capacity to solve the problems which originated it.',
      'Linear programming is viewed as a revolutionary development giving man the ability to state general objectives and to find, by means of the simplex method, optimal policy decisions for a broad class of complex decision problems.'
    ]
  },
  {
    id: 'eliyahu-m-goldratt',
    name: 'Eliyahu M. Goldratt',
    portraitImage: 'https://lw-sgp-prod.sgp1.cdn.digitaloceanspaces.com/author/medium/4391561023511.jpg',
    primaryField: 'Systems Management',
    category: 'Production & Lean Systems',
    biography: 'An Israeli business management guru and creator of the Optimized Production Technique, the Theory of Constraints (TOC), the Thinking Processes, Drum-Buffer-Rope, and Critical Chain Project Management.',
    contribution: 'Introduced the Theory of Constraints, shifting focus from local optimization to identifying and managing system bottlenecks to improve overall throughput.',
    majorWorks: [
      'The Goal (1984)',
      'Critical Chain (1997)'
    ],
    quotes: [
      'Tell me how you measure me, and I will tell you how I will behave.',
      'An hour saved at the non-bottleneck is a mirage.',
      'Good luck is when opportunity meets preparation, while bad luck is when lack of preparation meets reality.'
    ]
  },
  {
    id: 'henry-ford',
    name: 'Henry Ford',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Henry_ford_1919.jpg',
    primaryField: 'Mass Production Systems',
    category: 'Production & Lean Systems',
    biography: 'An American industrialist and business magnate, founder of the Ford Motor Company, and chief developer of the assembly line technique of mass production.',
    contribution: 'Revolutionized manufacturing by introducing the moving assembly line, drastically reducing production time and costs, and making automobiles affordable for the masses.',
    majorWorks: [
      'My Life and Work (1922)',
      'Today and Tomorrow (1926)'
    ],
    quotes: [
      'Quality means doing it right when no one is looking.',
      'Coming together is a beginning; keeping together is progress; working together is success.',
      'If you always do what you’ve always done, you’ll always get what you’ve always got.'
    ]
  },
  {
    id: 'frank-bunker-gilbreth',
    name: 'Frank Bunker Gilbreth',
    portraitImage: 'https://www.qad.com/blog/wp-content/uploads/2018/07/07.12.2018_crop-min.jpg',
    primaryField: 'Motion Study & Ergonomics',
    category: 'Foundations of Industrial Engineering',
    biography: 'An American engineer, consultant, and author known as an early advocate of scientific management and a pioneer of motion study.',
    contribution: 'Developed the method of micromotion study to analyze human motion, aiming to eliminate unnecessary movements, reduce fatigue, and increase efficiency.',
    majorWorks: [
      'Motion Study (1911)',
      'Applied Motion Study (1917)'
    ],
    quotes: [
      'I will always choose a lazy person to do a difficult job because a lazy person will find an easy way to do it.',
      'The greatest waste in the world is the waste of needless, ill-directed, and ineffective motions.'
    ]
  },
  {
    id: 'alfred-p-sloan',
    name: 'Alfred P. Sloan',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Alfred_P_Sloan_Bachrach_portrait_%28cropped%29%282%29.png/250px-Alfred_P_Sloan_Bachrach_portrait_%28cropped%29%282%29.png',
    primaryField: 'Organizational Management',
    category: 'Foundations of Industrial Engineering',
    biography: 'An American business executive in the automotive industry. He was a long-time president, chief executive, and chairman of General Motors.',
    contribution: 'Pioneered the decentralized organizational structure with centralized financial control, establishing modern corporate management practices.',
    majorWorks: [
      'My Years with General Motors (1964)'
    ],
    quotes: [
      'There is no resting place for an enterprise in a competitive economy.',
      'A car for every purse and purpose.',
      'If we are all in agreement on the decision - then I propose we postpone further discussion of this matter until our next meeting to give ourselves time to develop disagreement.'
    ]
  },
  {
    id: 'shigeo-shingo',
    name: 'Shigeo Shingo',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Shigeo_Shingo_-_Portrait_from_the_Shingo_Institute_official_website.jpg/250px-Shigeo_Shingo_-_Portrait_from_the_Shingo_Institute_official_website.jpg',
    primaryField: 'Lean Manufacturing',
    category: 'Production & Lean Systems',
    biography: 'A Japanese industrial engineer who was considered as the world’s leading expert on manufacturing practices and the Toyota Production System.',
    contribution: 'Developed the concepts of Poka-Yoke (mistake-proofing) and SMED (Single-Minute Exchange of Die), drastically reducing setup times and defects.',
    majorWorks: [
      'A Study of the Toyota Production System (1981)',
      'Zero Quality Control: Source Inspection and the Poka-Yoke System (1986)'
    ],
    quotes: [
      'Improvement usually means doing something that we have never done before.',
      'The most dangerous kind of waste is the waste we do not recognize.',
      'A relentless barrage of "why\'s" is the best way to prepare your mind to pierce the clouded veil of thinking caused by the status quo.'
    ]
  },
  {
    id: 'eiji-toyoda',
    name: 'Eiji Toyoda',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Eiji_toyoda.jpg',
    primaryField: 'Automotive Manufacturing',
    category: 'Production & Lean Systems',
    biography: 'A Japanese industrialist who was largely responsible for bringing Toyota Motor Corporation to profitability and worldwide prominence.',
    contribution: 'Spearheaded the development of the Toyota Production System alongside Taiichi Ohno, transforming Toyota into a global leader in quality and efficiency.',
    majorWorks: [
      'Toyota: Fifty Years in Motion (1987)'
    ],
    quotes: [
      'Employees offer a very important part of their lives to us. If we don\'t use their abilities effectively, we are wasting their lives.',
      'Society and the company are linked together.'
    ]
  },
  {
    id: 'russell-ackoff',
    name: 'Russell Ackoff',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Russel_Lincoln_Ackoff.jpg/250px-Russel_Lincoln_Ackoff.jpg',
    primaryField: 'Systems Thinking',
    category: 'Operations Research & Systems',
    biography: 'An American organizational theorist, consultant, and pioneer in the field of operations research, systems thinking and management science.',
    contribution: 'Advocated for systems thinking in management, emphasizing that a system is more than the sum of its parts and must be managed holistically.',
    majorWorks: [
      'Creating the Corporate Future (1981)',
      'Management in Small Doses (1986)'
    ],
    quotes: [
      'A system is never the sum of its parts; it\'s the product of their interaction.',
      'The only thing harder than starting something new, is stopping something old.',
      'We fail more often because we solve the wrong problem than because we get the wrong solution to the right problem.'
    ]
  },
  {
    id: 'herbert-a-simon',
    name: 'Herbert A. Simon',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Herbert_Simon%2C_RIT_NandE_Vol13Num11_1981_Mar19_Complete.jpg',
    primaryField: 'Decision Science',
    category: 'Operations Research & Systems',
    biography: 'An American political scientist, economist, sociologist, psychologist, and computer scientist whose research ranged across the fields of cognitive psychology, cognitive science, computer science, public administration, economics, management, philosophy of science, sociology, and political science.',
    contribution: 'Introduced the concepts of bounded rationality and satisficing, fundamentally changing how organizational decision-making is understood.',
    majorWorks: [
      'Administrative Behavior (1947)',
      'The Sciences of the Artificial (1969)'
    ],
    quotes: [
      'A wealth of information creates a poverty of attention.',
      'Engineering, medicine, business, architecture and painting are concerned not with the necessary but with the contingent - not with how things are but with how they might be.',
      'Optimization is the science of doing things optimally.'
    ]
  },
  {
    id: 'joseph-m-juran',
    name: 'Joseph M. Juran',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/J._M._Juran%2C_RIT_NandE_Vol19Num1_1987_Sep11_Complete.jpg/250px-J._M._Juran%2C_RIT_NandE_Vol19Num1_1987_Sep11_Complete.jpg',
    primaryField: 'Quality Management',
    category: 'Quality & Management',
    biography: 'Joseph Moses Juran was an American engineer and management consultant. He authored several books on quality and quality management and became a leading advocate of quality improvement worldwide. He was the brother of Academy Award winning director Nathan Juran. In 1981, he was awarded the Order of the Sacred Treasure by Emperor Hirohito of Japan.',
    contribution: 'Developed the Juran Trilogy (quality planning, quality control, and quality improvement) and applied the Pareto principle to quality issues.',
    majorWorks: [
      'Juran\'s Quality Control Handbook (1951)',
      'Managerial Breakthrough (1964)'
    ],
    quotes: [
      'Quality does not happen by accident.',
      'Without a standard there is no logical basis for making a decision or taking action.',
      'It is most important that top management be quality-minded. In the absence of sincere manifestation of interest at the top, little will happen below.'
    ]
  },
  {
    id: 'kaoru-ishikawa',
    name: 'Kaoru Ishikawa',
    portraitImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlj0E8lxIGzCY7IFSoaxrEGAZi605VDyl3pXBezI0jNwdFixkA_TzZ0RJqUqedGdp33lZhclUm4GPQ7V6oWnDUTqzbGaDW7jczM4-HqiU&s=10',
    primaryField: 'Quality Management',
    category: 'Quality & Management',
    biography: 'A Japanese organizational theorist and Professor at the Faculty of Engineering at The University of Tokyo, noted for his quality management innovations.',
    contribution: 'Invented the Ishikawa (fishbone) diagram for root cause analysis and championed the concept of Quality Circles.',
    majorWorks: [
      'Guide to Quality Control (1976)',
      'What Is Total Quality Control? The Japanese Way (1985)'
    ],
    quotes: [
      'Quality control starts with education and ends with education.',
      'Failure is the seed of success.',
      'The first step in quality is to know the requirements of the customer.'
    ]
  },
  {
    id: 'james-p-womack',
    name: 'James P. Womack',
    portraitImage: 'https://www.lean.org/wp-content/uploads/2020/06/bio_Jim-womack.jpg',
    primaryField: 'Lean Management',
    category: 'Production & Lean Systems',
    biography: 'An American management expert, author, and founder of the Lean Enterprise Institute.',
    contribution: 'Co-authored "The Machine That Changed the World," coining the term "Lean Production" and popularizing Toyota\'s methods globally.',
    majorWorks: [
      'The Machine That Changed the World (1990)',
      'Lean Thinking (1996)'
    ],
    quotes: [
      'There is nothing so useless as doing efficiently that which should not be done at all.',
      'Lean is not about working harder, it is about working smarter.',
      'Managers must learn to see the flow of value.'
    ]
  },
  {
    id: 'peter-f-drucker',
    name: 'Peter F. Drucker',
    portraitImage: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Drucker5789.jpg',
    primaryField: 'Management Theory',
    category: 'Foundations of Industrial Engineering',
    biography: 'An Austrian-American management consultant, educator, and author, whose writings contributed to the philosophical and practical foundations of the modern business corporation.',
    contribution: 'Invented the concept of Management by Objectives (MBO) and coined the term "knowledge worker," shaping modern corporate management.',
    majorWorks: [
      'The Practice of Management (1954)',
      'The Effective Executive (1966)'
    ],
    quotes: [
      'What gets measured gets managed.',
      'Management is doing things right; leadership is doing the right things.',
      'The best way to predict the future is to create it.'
    ]
  }
];
