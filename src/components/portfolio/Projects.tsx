import ProjectCard from './ProjectCard';
import { projects } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4">
            {t.projects.title.split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.projects.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
