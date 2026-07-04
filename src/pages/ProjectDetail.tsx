import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProjectById } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';
import ObservabilityBackground from '@/components/portfolio/ObservabilityBackground';
import LanguageToggle from '@/components/portfolio/LanguageToggle';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { t } = useTranslation();
  const project = getProjectById(projectId);
  const content = project ? t.projects.items[project.id] : null;

  if (!project || !content) {
    return (
      <div className="relative min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6">
        <div className="fixed inset-0 pointer-events-none">
          <ObservabilityBackground />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-bold mb-4">{t.projectDetail.notFound}</h1>
          <p className="text-gray-400 mb-8">{t.projectDetail.notFoundDesc}</p>
          <Button asChild>
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
    <div className="relative min-h-screen bg-[#0A0A0A] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <ObservabilityBackground />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" className="text-gray-400 hover:text-white" asChild>
            <Link to="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.projectDetail.backToProjects}
            </Link>
          </Button>
          <LanguageToggle />
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        <div className={`rounded-2xl bg-gradient-to-br ${project.gradient} p-8 mb-10`}>
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-2">{accent}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{content.title}</h1>
          <p className="text-white/80 text-lg max-w-3xl">{content.description}</p>
          <p className="text-white/50 text-sm mt-4">{project.date}</p>
        </div>

        {content.role && (
          <p className="text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 inline-block text-sm mb-8">
            {content.role}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { label: t.projects.labels.problem, value: content.problem },
            { label: t.projects.labels.challenge, value: content.challenge },
            { label: t.projects.labels.result, value: content.result },
          ].map(
            (field) =>
              field.value && (
                <div
                  key={field.label}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
                    {field.label}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{field.value}</p>
                </div>
              )
          )}
        </div>

        {project.architecture && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{t.projects.labels.architecture}</h2>
            {architectureSummary && (
              <p className="text-gray-400 mb-6 leading-relaxed">{architectureSummary}</p>
            )}
            <pre className="p-6 rounded-2xl bg-black/40 border border-white/10 text-xs md:text-sm text-blue-300/90 overflow-x-auto font-mono leading-relaxed">
              {project.architecture.diagram}
            </pre>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">
                {t.projects.labels.components}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.architecture.components.map((comp) => (
                  <Badge
                    key={comp}
                    className="bg-blue-500/10 text-blue-400 border-blue-500/20"
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
            <Badge key={tag} className="bg-white/5 text-gray-300 border-white/10">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <Button variant="outline" className="border-white/20" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {t.projects.labels.code}
              </a>
            </Button>
          )}
          {project.demo && (
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t.projects.labels.demo}
              </a>
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}
