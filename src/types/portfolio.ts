export type Locale = 'en' | 'de';

export interface SiteConfig {
  name: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  email: string;
  location: Record<Locale, string>;
  resumeUrl: string;
  github: string;
  linkedin: string;
  siteUrl: string;
}

export interface NavSection {
  id: string;
  labelKey: string;
}

export interface SkillGroup {
  categoryKey: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  contentKey: string;
  period: string;
  typeKey: string;
  tags: string[];
  link?: string;
}

export interface Certification {
  id: string;
  titleKey: string;
  issuerKey: string;
  date: string;
  type: 'certification' | 'coursework';
  url?: string;
}

export interface ProjectArchitecture {
  summaryKey: string;
  diagram: string;
  components: string[];
}

export interface Project {
  id: string;
  gradient: string;
  accentKey: string;
  tags: string[];
  date: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  architecture?: ProjectArchitecture;
}

export interface ProjectContent {
  title: string;
  description: string;
  role?: string;
  problem?: string;
  challenge?: string;
  result?: string;
}

export interface Translations {
  nav: Record<string, string>;
  hero: Record<string, string>;
  about: Record<string, string>;
  skills: {
    title: string;
    subtitle: string;
    categories: Record<string, string>;
  };
  experience: {
    title: string;
    subtitle: string;
    types: Record<string, string>;
    viewProject: string;
    items: Record<string, { title: string; organization: string; description: string; highlights: string[] }>;
  };
  certifications: {
    title: string;
    subtitle: string;
    types: Record<string, string>;
    items: Record<string, { title: string; issuer: string }>;
  };
  projects: {
    title: string;
    subtitle: string;
    accents: Record<string, string>;
    labels: Record<string, string>;
    architecture: Record<string, string>;
    items: Record<string, ProjectContent>;
  };
  contact: Record<string, string>;
  footer: Record<string, string>;
  projectDetail: Record<string, string>;
  common: Record<string, string>;
}
