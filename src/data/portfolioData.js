// ============================================================
// All portfolio content lives here — edit data, not components.
// ============================================================

export const personalInfo = {
  name: 'Stan Wang',
  chineseName: '王家宏',
  tagline: "Master's Student · NTU",
  subtitle:
    'A passionate researcher focused on Artificial Intelligence and Cybersecurity, currently pursuing my Master\'s degree at National Taiwan University. I love solving real-world problems through technology.',
  email: 'l125879368@gmail.com',
  github: 'https://github.com/StanOWO',
  githubHandle: 'github.com/StanOWO',
  location: "Da'an District, Taipei",
};

export const aboutParagraphs = [
  'Hello! My name is Jia-Hong Wang, but most people call me Stan. I was born in 2003 and grew up in Taiwan with a deep curiosity for how things work, especially computers and mathematics. I graduated from the Department of Computer Science and Information Engineering at National Taiwan University of Science and Technology (NTUST), where I also completed a minor in Finance.',
  'Currently, I am pursuing a Master\'s degree in Information Security at the Department of Electrical Engineering, National Taiwan University (NTU). My primary research interests lie in Artificial Intelligence and Cybersecurity, while I also study Electronic Design Automation (EDA) as a secondary specialization. I enjoy exploring how AI techniques can be applied to solve security challenges, such as malware classification and automated penetration testing.',
  'Outside of research, I am an active member of the NTU AI Club, where I have served as an instructor teaching machine learning and deep learning to fellow students. In my free time, I enjoy participating in coding competitions and CTF (Capture the Flag) challenges. I believe that continuous learning and embracing new challenges are the keys to personal growth, and I look forward to contributing to the fields of AI and cybersecurity in the future.',
];

export const infoCards = [
  { label: 'Education', value: 'NTU — M.S.' },
  { label: 'GPA (B.S.)', value: '4.17 / 4.3' },
  { label: 'Dept. Rank', value: 'Top 6.12%' },
  { label: 'Focus', value: 'AI & Security' },
  { label: 'Language', value: 'TOEIC Blue' },
  { label: 'Location', value: 'Taipei, Taiwan' },
];

export const skills = [
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description:
      'Deep learning with PyTorch & TensorFlow. Experience in CNN, RNN, DQN, and few-shot incremental learning for malware classification.',
    tags: ['PyTorch', 'TensorFlow', 'CNN', 'RNN'],
  },
  {
    icon: '📝',
    title: 'NLP & Large Language Models',
    description:
      'Sentiment analysis with ABSA-BERT, text processing with spaCy & NLTK, and building RAG pipelines with LangChain and LlamaIndex.',
    tags: ['LangChain', 'LlamaIndex', 'RAG', 'BERT'],
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description:
      'Penetration testing, malware analysis with Cuckoo Sandbox, CTF competitions, and automated security testing with Multimodal PentestGPT.',
    tags: ['Pen Testing', 'Malware Analysis', 'CTF', 'Kali'],
  },
  {
    icon: '💻',
    title: 'Programming Languages',
    description:
      'Proficient in Python and C/C++ (with Qt). Also experienced in Java, C#, Scheme, and Prolog for various projects.',
    tags: ['Python', 'C++', 'C', 'Java'],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'Frontend with HTML, CSS, JavaScript, Vue.js, Bootstrap. Backend with PHP, Django. Database management with MySQL and SQLite.',
    tags: ['Vue.js', 'Node.js', 'Django', 'MySQL'],
  },
  {
    icon: '⚡',
    title: 'EDA & IC Design',
    description:
      'Coursework in computer-aided chip system design, EDA software development, digital system design, and FPGA programming.',
    tags: ['EDA', 'FPGA', 'Digital Design'],
  },
];

export const experiences = [
  {
    date: '2026 — 2028 (expected)',
    title: 'M.S. in Information Security',
    org: 'National Taiwan University — Dept. of Electrical Engineering',
    description:
      'Focusing on software testing, robot security inspection, and AI-driven security analysis. Researching EtherCAT protocol security under NSTC project.',
  },
  {
    date: '2025 — 2025',
    title: 'NSTC Research Assistant',
    org: 'Asia University — AI Engineer',
    description:
      'Performed NLP tasks and model evaluation. Conducted aspect-based sentiment analysis (ABSA) on cryptocurrency articles using DeBERTa, achieving over 70% accuracy.',
  },
  {
    date: '2022 — 2026',
    title: 'B.S. in Computer Science & Information Engineering',
    org: 'National Taiwan University of Science and Technology — Minor in Finance',
    description:
      'GPA 4.17/4.3, ranked top 6.12% in department. Active in AI and cybersecurity research at ISAI Lab. Received A+ in multiple security and AI courses.',
  },
  {
    date: '2023 — 2025',
    title: 'Technical Team Member',
    org: 'NTU AI Club',
    description:
      'Participated in ATCC business competition (2nd place). Organized study groups and taught machine learning and deep learning courses to club members.',
  },
];

export const projects = [
  {
    year: '2025 — 2026',
    title: 'Multimodal PentestGPT',
    description:
      'An automated penetration testing framework leveraging LLMs for digital forensics and steganography analysis. Integrates Kali MCP, Nmap, vector databases, and reasoning modules.',
    tags: ['LLM', 'Kali', 'Nmap', 'Security'],
  },
  {
    year: '2025',
    title: 'SiMPACIN',
    description:
      'A few-shot class-incremental learning framework for malware classification combining Siamese networks, prototype networks, and attention mechanisms. Prototype replay reduces degradation by ~10% vs iCaRL.',
    tags: ['Few-Shot', 'Siamese Net', 'Malware'],
  },
  {
    year: '2025',
    title: 'ABSA-BERT Sentiment Analysis',
    description:
      'Built an aspect-based sentiment analysis pipeline for cryptocurrency articles. Used spaCy for tokenization, LLM-based annotation, and fine-tuned DeBERTa-ABSA achieving 70%+ accuracy.',
    tags: ['NLP', 'BERT', 'Crypto'],
  },
  {
    year: '2024',
    title: 'AI CUP — Power Generation Prediction',
    description:
      'Predicted solar power generation using microclimate data with a four-layer XGBoost model. Achieved 35th place out of 934 teams in the national competition.',
    tags: ['XGBoost', 'ML', 'Competition'],
  },
  {
    year: '2023 — 2024',
    title: 'Gamified Marketing — FarEasTone',
    description:
      "Developed an interactive web project for FarEasTone's employer brand, including video quizzes, MBTI tests, and an RPG game. Earned 2nd place in ATCC semi-finals with 1160+ unique visits.",
    tags: ['Web Dev', 'Marketing', 'RPG'],
  },
  {
    year: '2021',
    title: 'Typing Hero — RPG English Game',
    description:
      'A PHP-based RPG typing game where players attack monsters by spelling English words correctly. Featured custom question banks and a review system. Won 1st place in school IT competition.',
    tags: ['PHP', 'Game Dev', 'Education'],
  },
];

export const awards = [
  { year: '2025', text: '30th National Information Service Innovation Competition — Honorable Mention (Cybersecurity Track)' },
  { year: '2024', text: 'AI CUP Winter Competition — 35th / 934 teams' },
  { year: '2024', text: 'E.SUN AI Open Challenge — 60th / 218 teams' },
  { year: '2024', text: 'Golden Shield Award — Finalist' },
  { year: '2024', text: 'ATCC Business Competition — 2nd Place (Semi-Finals)' },
  { year: '2021', text: '7th Taiwan Youth Hackathon — Honorable Mention' },
  { year: '2021', text: 'IMC International Math Competition — Silver Medal' },
  { year: '2017', text: '8th WMTC World Math Team Championship — Gold Medal' },
];

export const courses = {
  aiSecurity: {
    title: 'AI & Cybersecurity',
    items: [
      { name: 'Machine Learning (NTU)', grade: '2026' },
      { name: 'Generative AI Security (NTU)', grade: '2026' },
      { name: 'Network Attack & Defense (NTU)', grade: '2026' },
      { name: 'Cybersecurity & AI Analytics', grade: 'A+' },
      { name: 'Malicious Threat Analysis & Secure AI', grade: 'A+' },
      { name: 'Introduction to Data Science', grade: 'A+' },
      { name: 'Introduction to Cryptography', grade: 'A+' },
      { name: 'Algorithms', grade: 'A+' },
    ],
  },
  edaIc: {
    title: 'EDA & IC Design',
    items: [
      { name: 'Computer-Aided Chip System Design', grade: 'A+' },
      { name: 'EDA Software Development', grade: 'B+' },
      { name: 'Computer Organization', grade: 'A' },
      { name: 'Digital System Design', grade: 'A' },
      { name: 'Introduction to Digital Electronics', grade: 'A+' },
    ],
  },
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];
