import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Backend development, AI integration, and academic systems work — from personal products to team projects.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={item.title + item.organization}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-blue-400 font-medium">{item.organization}</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">{item.period}</span>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>

              <ul className="space-y-2 mb-4">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-gray-400 flex gap-2">
                    <span className="text-blue-400 shrink-0">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-2">
                {item.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-purple-500/10 text-purple-300 border-purple-500/20"
                  >
                    {tag}
                  </Badge>
                ))}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 ml-auto"
                  >
                    View project
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
