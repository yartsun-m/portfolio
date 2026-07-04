import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

function CaseStudyField({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">{label}</dt>
      <dd className="text-sm text-gray-400 leading-relaxed">{value}</dd>
    </div>
  );
}

export default function ProjectCard({ project }) {
  const hasCaseStudy = project.problem || project.challenge || project.result;

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
          <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
            {project.accent}
          </p>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs text-gray-500">{project.date}</span>
          {project.role && (
            <span className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1">
              {project.role}
            </span>
          )}
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        {hasCaseStudy && (
          <dl className="space-y-3 mb-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <CaseStudyField label="Problem" value={project.problem} />
            <CaseStudyField label="Challenge" value={project.challenge} />
            <CaseStudyField label="Result" value={project.result} />
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

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full bg-transparent border-white/20 hover:bg-white/10 text-white"
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
