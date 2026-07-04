import type { Translations } from '@/types/portfolio';

export type { Translations };

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    downloadCv: 'Download CV',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    badge: 'Open to Werkstudent & internship opportunities',
    titleLine1: 'Software Developer',
    titleLine2: 'Backend & AI',
    intro:
      "Hi, I'm {name}. Information Engineering student at HAW Hamburg, building production-style APIs, databases, and AI-powered applications.",
    viewProjects: 'View My Projects',
    downloadCv: 'Download CV',
    getInTouch: 'Get In Touch',
    scrollToProjects: 'Scroll to projects',
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
    email: 'Send email',
  },
  about: {
    title: 'About Me',
    subtitle:
      "I'm a software developer studying Information Engineering at HAW Hamburg (5th semester). I build backend APIs, PostgreSQL systems, and AI-powered tools — from a production-style data analyst platform to team finance apps and natural-language SQL assistants.",
    education: 'Education',
    degree1: 'Information Engineering (B.Sc.)',
    school1: 'HAW Hamburg',
    period1: '2023 — Present · 5th Semester',
    spec1: 'Specialization: Software and Information Technology',
    degree2: 'Software Engineering (B.Sc.)',
    school2: 'Kyiv Polytechnic Institute',
    period2: '2021 — 2022',
    languagesTitle: 'Languages & Availability',
    languages: 'Languages',
    langUk: 'Ukrainian & Russian',
    langEn: 'English',
    langDe: 'German',
    native: 'Native',
    fluent: 'Fluent',
    intermediate: 'Intermediate (B1)',
    availability:
      'Open to Werkstudent and part-time software engineering roles in Hamburg. Available up to 20 hours/week during the semester. Strong teamwork and communication in international environments.',
  },
  skills: {
    title: 'Technical Skills',
    subtitle:
      'Technologies I use in projects — backend APIs, databases, AI/ML, and modern web development.',
    categories: {
      languages: 'Languages',
      backend: 'Backend & APIs',
      databases: 'Databases',
      aiData: 'AI & Data',
      frontend: 'Frontend',
      devops: 'DevOps & Tools',
    },
  },
  experience: {
    title: 'Experience',
    subtitle:
      'Backend development, AI integration, and academic systems work — from personal products to team projects.',
    viewProject: 'View project',
    types: {
      collaborative: 'Collaborative',
      personal: 'Personal',
      academic: 'Academic',
    },
    items: {
      fintrack: {
        title: 'Backend Developer',
        organization: 'FinTrack — Team Project',
        description:
          'Primary backend contributor on a full-stack personal finance app. Built the FastAPI REST API with JWT auth, SQLAlchemy models, PostgreSQL analytics queries, budget tracking, CSV export, and Gemini-powered financial coaching endpoints.',
        highlights: [
          'Designed REST endpoints for transactions, budgets, and analytics',
          'Implemented raw SQL reporting queries and spending predictions',
          'Integrated multi-key Gemini API fallback for AI coach and reports',
        ],
      },
      aiDataAnalyst: {
        title: 'Full-Stack Developer',
        organization: 'AI Data Analyst App — Personal Project',
        description:
          'Designed and shipped a production-style data platform: upload datasets, profile and clean data, run EDA and AutoML, chat with Gemini via RAG, and export reports. Deployed with Docker, CI, and live demos on Vercel and Render.',
        highlights: [
          'FastAPI backend with SQLite persistence, ML pipelines, and SSE streaming',
          'Next.js frontend with Plotly visualizations and Playwright E2E tests',
          'GitHub Actions CI, Prometheus metrics, and MLflow experiment tracking',
        ],
      },
      hawProjects: {
        title: 'Software Engineering Student',
        organization: 'HAW Hamburg — Academic Projects',
        description:
          'Delivered distributed systems and database projects including a Java/RMI robot control system, a normalized PostgreSQL schema for clinical workflows, and an AI-assisted SQL query tool for database exploration.',
        highlights: [
          'Java RMI client-server architecture with UML modeling',
          'PostgreSQL database design with ER diagrams and normalization',
          'Natural-language-to-SQL assistant for PostgreSQL databases',
        ],
      },
    },
  },
  certifications: {
    title: 'Certifications & Training',
    subtitle: 'Verified credentials in data analytics, Python, and business intelligence.',
    types: {
      certification: 'Certification',
      coursework: 'Coursework',
    },
    items: {
      powerBi: {
        title: 'Introduction to Power BI',
        issuer: 'DataCamp',
      },
      pandas: {
        title: 'Data Manipulation with pandas',
        issuer: 'DataCamp',
      },
      python101: {
        title: 'Python 101 for Data Science',
        issuer: 'Cognitive Class',
      },
    },
  },
  projects: {
    title: 'My Projects',
    subtitle:
      'Full-stack and backend projects — from AI-powered data platforms to distributed systems and database design.',
    accents: {
      fullStackAi: 'Full-Stack · AI/ML',
      backendLead: 'Backend Lead · Team Project',
      backendAiDb: 'Backend · AI + Databases',
      javaDistributed: 'Java · Distributed Systems',
      postgresDesign: 'PostgreSQL · Database Design',
      javaOop: 'Java · OOP',
    },
    labels: {
      problem: 'Problem',
      challenge: 'Challenge',
      result: 'Result',
      code: 'Code',
      demo: 'Live Demo',
      viewDetails: 'View Details',
      architecture: 'Architecture',
      components: 'Key Components',
    },
    architecture: {
      aiDataAnalyst:
        'Next.js frontend communicates with a FastAPI backend via REST and SSE. ML pipelines persist models to disk; Gemini receives aggregated stats only.',
      fintrack:
        'React SPA calls a FastAPI backend with JWT auth. PostgreSQL stores users, transactions, and budgets; Gemini powers AI coach endpoints.',
      aiSqlAssistant:
        'FastAPI receives natural language queries, LLM generates read-only SQL against a PostgreSQL schema, results formatted for the user.',
    },
    items: {
      'ai-data-analyst': {
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
      },
      fintrack: {
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
      },
      'ai-sql-assistant': {
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
      },
      'vacuum-robot': {
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
      },
      'endoscopy-db': {
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
      },
      'oop-graphical-app': {
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
      },
    },
  },
  contact: {
    title: "Let's Connect",
    subtitle:
      'Open to Werkstudent and internship opportunities in backend, full-stack, or data engineering.',
    getInTouch: 'Get in touch',
    intro:
      'Send a message through the form — it delivers directly to my inbox. I typically respond within 1–2 business days.',
    email: 'Email',
    copyEmail: 'Copy email',
    copied: 'Copied',
    linkedin: 'LinkedIn',
    connectLinkedin: 'Connect on LinkedIn',
    location: 'Location',
    availability: 'Availability',
    availabilityText:
      '5th semester at HAW Hamburg. Available for part-time roles up to 20 hours/week during the semester.',
    name: 'Name',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about the opportunity...',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    openEmailApp: 'Open in Email App',
    sentApi: 'Message sent — thank you! I will get back to you soon.',
    sentMailto:
      'Your email app should open with a pre-filled message. Send it from there to reach me.',
    errorPrefix: 'Something went wrong.',
    errorSuffix: 'Please email me directly at',
    formspreeHint:
      'Formspree not configured — add VITE_FORMSPREE_FORM_ID to .env for direct delivery.',
  },
  footer: {
    builtWith: 'Built with React & Tailwind CSS',
  },
  projectDetail: {
    backToProjects: 'Back to Projects',
    notFound: 'Project not found',
    notFoundDesc: 'The project you are looking for does not exist.',
    goHome: 'Go to homepage',
  },
  common: {
    language: 'Language',
    english: 'English',
    german: 'Deutsch',
  },
};
