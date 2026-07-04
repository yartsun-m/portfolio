import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProjectById } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';
import BlueprintBackground from '@/components/portfolio/BlueprintBackground';
import LanguageToggle from '@/components/portfolio/LanguageToggle';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { t, locale } = useTranslation();
  const project = getProjectById(projectId);
  const content = project ? t.projects.items[project.id] : null;

  if (!project || !content) {
    return (
      <div className="relative min-h-screen bg-[#0a1628] text-white flex items-center justify-center px-6">
        <div className="fixed inset-0 pointer-events-none">
          <BlueprintBackground />
        </div>
        <div className="relative z-10 text-center blueprint-panel max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-cyan-400">{t.projectDetail.notFound}</h1>
          <p className="text-slate-400 mb-8">{t.projectDetail.notFoundDesc}</p>
          <Button className="blueprint-btn-primary" asChild>
            <Link to="/">{t.projectDetail.goHome}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const accent = t.projects.accents[project.accentKey];
  const architectureSummary = project.architecture
    ? t.projects.architecture[project.architecture.summaryKey]
    : null;

  return (
    <div className="relative min-h-screen bg-[#0a1628] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <BlueprintBackground />
      </div>

      <div key={locale} className="relative z-10 animate-in fade-in duration-200 motion-reduce:animate-none">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-b border-dashed border-cyan-500/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" className="text-slate-400 hover:text-cyan-400 font-mono text-sm" asChild>
            <Link to="/" state={{ scrollTo: 'projects' }}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.projectDetail.backToProjects}
            </Link>
          </Button>
          <LanguageToggle />
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className="blueprint-hatch p-8 mb-8 border border-dashed border-cyan-500/30">
          <span className="blueprint-badge mb-3 inline-block">{accent}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{content.title}</h1>
          <p className="text-slate-300 text-lg max-w-3xl">{content.description}</p>
          <p className="text-slate-500 text-sm font-mono mt-4">REV · {project.date}</p>
        </div>

        {content.role && (
          <p className="blueprint-badge mb-8 inline-block">{content.role}</p>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { label: t.projects.labels.problem, value: content.problem },
            { label: t.projects.labels.challenge, value: content.challenge },
            { label: t.projects.labels.result, value: content.result },
          ].map(
            (field) =>
              field.value && (
                <div key={field.label} className="blueprint-panel">
                  <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    {field.label}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{field.value}</p>
                </div>
              )
          )}
        </div>

        {project.architecture && (
          <section className="mb-10 blueprint-panel">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">{t.projects.labels.architecture}</h2>
            {architectureSummary && (
              <p className="text-slate-400 mb-6 leading-relaxed">{architectureSummary}</p>
            )}
            <pre className="p-6 border border-dashed border-cyan-500/20 bg-[#060f1f] text-xs md:text-sm text-cyan-300/80 overflow-x-auto font-mono leading-relaxed">
              {project.architecture.diagram}
            </pre>
            <div className="mt-6">
              <h3 className="text-sm font-mono uppercase tracking-wide text-slate-500 mb-3">
                {t.projects.labels.components}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.architecture.components.map((comp) => (
                  <Badge
                    key={comp}
                    className="bg-cyan-500/5 text-cyan-400 border border-dashed border-cyan-500/30 rounded-sm font-mono text-xs"
                  >
                    {comp}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              className="bg-cyan-500/5 text-slate-300 border border-dashed border-cyan-500/20 rounded-sm font-mono text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <Button variant="outline" className="blueprint-btn-outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {t.projects.labels.code}
              </a>
            </Button>
          )}
          {project.demo && (
            <Button className="blueprint-btn-primary" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.projects.labels.demo}
              </a>
            </Button>
          )}
        </div>
      </main>
      </div>
    </div>
  );
}
