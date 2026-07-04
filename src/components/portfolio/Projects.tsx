import ProjectCard from './ProjectCard';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { projects } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          id="projects-heading"
          title={t.projects.title}
          highlight="Projects"
          subtitle={t.projects.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
