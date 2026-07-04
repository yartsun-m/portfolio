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
      <dt className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">{label}</dt>
      <dd className="text-sm text-gray-400 leading-relaxed">{value}</dd>
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
      className={`group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] motion-reduce:transform-none ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">{accent}</p>
          <h3 className="text-2xl font-bold text-white">{content.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs text-gray-500">{project.date}</span>
          {content.role && (
            <span className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1">
              {content.role}
            </span>
          )}
        </div>

        <p className="text-gray-300 mb-4">{content.description}</p>

        {hasCaseStudy && (
          <dl className="space-y-3 mb-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
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
              className="bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="bg-transparent border-white/20 hover:bg-white/10 text-white"
            asChild
          >
            <Link to={`/projects/${project.id}`}>
              {t.projects.labels.viewDetails}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="bg-transparent border-white/20 hover:bg-white/10 text-white"
              >
                <Github className="w-4 h-4 mr-2" />
                {t.projects.labels.code}
              </Button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
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
