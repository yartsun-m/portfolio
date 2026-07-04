import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/types/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

interface CaseStudyFieldProps {
  label: string;
  value?: string;
}

function CaseStudyField({ label, value }: CaseStudyFieldProps) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">{label}</dt>
      <dd className="text-sm text-slate-400 leading-relaxed">{value}</dd>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const content = t.projects.items[project.id];
  const accent = t.projects.accents[project.accentKey];
  const hasCaseStudy = content?.problem || content?.challenge || content?.result;

  if (!content) return null;

  return (
    <article
      className={`group relative overflow-hidden border border-dashed border-cyan-500/30 bg-[#0d1f3c]/40 hover:border-cyan-400/50 transition-colors ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="blueprint-hatch relative h-44 overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <p className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-[0.2em] mb-1">
            {accent}
          </p>
          <h3 className="text-2xl font-bold text-white">{content.title}</h3>
        </div>
        <span className="absolute top-3 right-3 blueprint-badge text-[9px]">
          REV · {project.date}
        </span>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs text-slate-500 font-mono">{project.date}</span>
          {content.role && (
            <span className="text-xs text-cyan-300/80 border border-dashed border-cyan-500/30 px-2 py-0.5 font-mono">
              {content.role}
            </span>
          )}
        </div>

        <p className="text-slate-300 mb-4">{content.description}</p>

        {hasCaseStudy && (
          <dl className="space-y-3 mb-4 p-4 border border-dashed border-cyan-500/15 bg-cyan-500/[0.02]">
            <CaseStudyField label={t.projects.labels.problem} value={content.problem} />
            <CaseStudyField label={t.projects.labels.challenge} value={content.challenge} />
            <CaseStudyField label={t.projects.labels.result} value={content.result} />
          </dl>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-cyan-500/5 text-cyan-300/80 border border-dashed border-cyan-500/25 rounded-sm font-mono text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="blueprint-btn-outline" asChild>
            <Link to={`/projects/${project.id}`}>
              {t.projects.labels.viewDetails}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="blueprint-btn-outline">
                <Github className="w-4 h-4 mr-2" />
                {t.projects.labels.code}
              </Button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button className="blueprint-btn-primary">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.projects.labels.demo}
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
