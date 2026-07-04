export const siteConfig = {
  name: 'Mykhailo Yartsun',
  title: 'Mykhailo Yartsun | Backend & AI Developer',
  description:
    'Information Engineering student at HAW Hamburg. Backend developer specializing in Python, FastAPI, PostgreSQL, Java, and AI/ML. Open to Werkstudent and internship roles in Hamburg, Germany.',
  email: 'yartsun.m@gmail.com',
  location: 'Hamburg, Germany',
  resumeUrl: '/resume.pdf',
  github: 'https://github.com/yartsun-m',
  linkedin: 'https://www.linkedin.com/in/mykhailo-yartsun-340679367/',
  siteUrl: 'https://yartsun.dev',
};

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

/** ATS-friendly skill groups — keywords recruiters and parsers look for */
export const skillGroups = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'TypeScript', 'JavaScript', 'C#', 'C++'],
  },
  {
    category: 'Backend & APIs',
    skills: ['FastAPI', 'REST APIs', 'JWT Authentication', 'SQLAlchemy', 'Pydantic', 'Java RMI'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'SQLite', 'MySQL', 'Database Design', 'ER Modeling', 'Normalization'],
  },
  {
    category: 'AI & Data',
    skills: [
      'Machine Learning',
      'scikit-learn',
      'XGBoost',
      'Gemini API',
      'LLM Integration',
      'RAG',
      'Pandas',
      'NumPy',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Plotly.js'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'pytest', 'Playwright', 'Linux'],
  },
];

export const experience = [
  {
    title: 'Backend Developer',
    organization: 'FinTrack — Team Project',
    period: '2025 — Present',
    type: 'Collaborative',
    description:
      'Primary backend contributor on a full-stack personal finance app. Built the FastAPI REST API with JWT auth, SQLAlchemy models, PostgreSQL analytics queries, budget tracking, CSV export, and Gemini-powered financial coaching endpoints.',
    highlights: [
      'Designed REST endpoints for transactions, budgets, and analytics',
      'Implemented raw SQL reporting queries and spending predictions',
      'Integrated multi-key Gemini API fallback for AI coach and reports',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Gemini API', 'JWT'],
    link: 'https://github.com/solomiia222/fintrack-frontend2',
  },
  {
    title: 'Full-Stack Developer',
    organization: 'AI Data Analyst App — Personal Project',
    period: '2025 — 2026',
    type: 'Personal',
    description:
      'Designed and shipped a production-style data platform: upload datasets, profile and clean data, run EDA and AutoML, chat with Gemini via RAG, and export reports. Deployed with Docker, CI, and live demos on Vercel and Render.',
    highlights: [
      'FastAPI backend with SQLite persistence, ML pipelines, and SSE streaming',
      'Next.js frontend with Plotly visualizations and Playwright E2E tests',
      'GitHub Actions CI, Prometheus metrics, and MLflow experiment tracking',
    ],
    tags: ['Python', 'FastAPI', 'Next.js', 'scikit-learn', 'Docker', 'Gemini'],
    link: 'https://github.com/yartsun-m/ai-data-analyst-app',
  },
  {
    title: 'Software Engineering Student',
    organization: 'HAW Hamburg — Academic Projects',
    period: '2023 — Present',
    type: 'Academic',
    description:
      'Delivered distributed systems and database projects including a Java/RMI robot control system, a normalized PostgreSQL schema for clinical workflows, and an AI-assisted SQL query tool for database exploration.',
    highlights: [
      'Java RMI client-server architecture with UML modeling',
      'PostgreSQL database design with ER diagrams and normalization',
      'Natural-language-to-SQL assistant for PostgreSQL databases',
    ],
    tags: ['Java', 'PostgreSQL', 'RMI', 'SQL', 'OOP'],
  },
];

export const projects = [
  {
    id: 'ai-data-analyst',
    title: 'AI Data Analyst App',
    description:
      'Production-style full-stack platform for end-to-end tabular data analysis with ML and LLM chat.',
    role: 'Sole developer — architecture, backend, frontend, deployment',
    problem:
      'Analysts and students need a single tool to upload messy CSVs, understand data quality, train models, and ask questions — without writing boilerplate code for each step.',
    challenge:
      'Orchestrating async ML jobs, keeping LLM context within token limits, and maintaining session state across a multi-step pipeline.',
    result:
      'Live deployed app with CI/CD, Docker, E2E tests, AutoML with SHAP explainability, Gemini chat with RAG, and HTML report export.',
    gradient: 'from-blue-600 via-indigo-600 to-purple-700',
    accent: 'Full-Stack · AI/ML',
    tags: ['Python', 'FastAPI', 'Next.js', 'scikit-learn', 'Gemini', 'Docker', 'CI/CD'],
    date: '2025 — 2026',
    github: 'https://github.com/yartsun-m/ai-data-analyst-app',
    demo: 'https://ai-data-analyst-app-sigma.vercel.app',
    featured: true,
  },
  {
    id: 'fintrack',
    title: 'FinTrack — Personal Finance App',
    description:
      'Team full-stack app for expense tracking, budgets, spending analytics, and AI-powered financial coaching.',
    role: 'Backend lead — API design, database layer, AI integration',
    problem:
      'Users struggle to track spending across categories, set realistic budgets, and get actionable insights from raw transaction data.',
    challenge:
      'Building secure multi-user auth, efficient SQL analytics queries, and reliable Gemini API integration with key rotation and fallbacks.',
    result:
      'REST API with JWT auth, category analytics, budget tracking, CSV export, spending predictions, and AI coach/report endpoints powering a live Vercel frontend.',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    accent: 'Backend Lead · Team Project',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'Gemini API', 'JWT'],
    date: '2025 — Present',
    github: 'https://github.com/solomiia222/fintrack-frontend2',
    demo: 'https://fintrack-ai-tawny.vercel.app',
    featured: true,
  },
  {
    id: 'ai-sql-assistant',
    title: 'AI SQL Assistant',
    description:
      'Natural-language interface for PostgreSQL that translates questions into SQL and returns formatted results.',
    role: 'Developer — schema integration, query generation, safety constraints',
    problem:
      'Non-technical users and developers exploring complex relational schemas need a faster way to query PostgreSQL without writing SQL manually.',
    challenge:
      'Generating correct SQL from ambiguous natural language while preventing destructive queries and handling schema context limits.',
    result:
      'Working assistant connected to a normalized clinical database schema, enabling safe read-only exploration via natural language prompts.',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-700',
    accent: 'Backend · AI + Databases',
    tags: ['Python', 'PostgreSQL', 'SQL', 'LLM', 'FastAPI', 'Database Design'],
    date: '2025',
    featured: true,
  },
  {
    id: 'vacuum-robot',
    title: 'Vacuum Cleaner Robot System',
    description:
      'Distributed robotic control system with Java RMI for client-server communication.',
    role: 'Developer — app-side control module, OOP design, UML modeling',
    problem:
      'A vacuum robot fleet needs centralized app-side control with reliable remote method invocation across distributed components.',
    challenge:
      'Designing serializable object models and resilient RMI communication between control app and robot services.',
    result:
      'Working client-server prototype with UML documentation and modular OOP architecture for robot command and status handling.',
    gradient: 'from-slate-600 via-gray-600 to-zinc-700',
    accent: 'Java · Distributed Systems',
    tags: ['Java', 'RMI', 'OOP', 'UML', 'Client-Server'],
    date: '04/2025 — 07/2025',
    github:
      'https://gitlab.com/se_group2025/se-development-lab/-/tree/main/JMS-robot-app-Mykhailo-Tomiwa?ref_type=heads',
  },
  {
    id: 'endoscopy-db',
    title: 'Endoscopy Department Database',
    description:
      'Relational PostgreSQL database for patient registration, scheduling, and procedure documentation.',
    role: 'Database designer — ER modeling, normalization, SQL queries',
    problem:
      'An endoscopy department needed structured data storage for patients, appointments, and procedures with reporting and access control.',
    challenge:
      'Modeling clinical workflows in 3NF, defining referential integrity, and writing SQL for scheduling conflicts and department reports.',
    result:
      'Fully normalized PostgreSQL schema with ER diagrams, sample data, and query sets for registration, scheduling, and reporting.',
    gradient: 'from-rose-600 via-red-600 to-orange-700',
    accent: 'PostgreSQL · Database Design',
    tags: ['PostgreSQL', 'SQL', 'ER Diagrams', 'Normalization'],
    date: '04/2025 — 06/2025',
  },
  {
    id: 'oop-graphical-app',
    title: 'OOP Graphical App',
    description:
      'Interactive Java simulation demonstrating object-oriented design with a graphical interface.',
    role: 'Developer — class design, GUI behavior, design patterns',
    problem:
      'Demonstrate OOP principles (encapsulation, inheritance, polymorphism) in an interactive visual simulation.',
    challenge:
      'Structuring modular classes with clean separation between model logic and visual representation.',
    result:
      'Playable Java GUI app with documented class hierarchy and reusable behavioral components.',
    gradient: 'from-amber-600 via-orange-600 to-yellow-700',
    accent: 'Java · OOP',
    tags: ['Java', 'OOP', 'GUI', 'Design Patterns'],
    date: '04/2024 — 07/2024',
    github: 'https://github.com/Crab1k/Squirrel/',
  },
];
