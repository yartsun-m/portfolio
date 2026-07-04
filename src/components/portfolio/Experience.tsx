import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="experience-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.experience.title}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.experience.subtitle}</p>
        </div>

        <div className="space-y-6">
          {experience.map((item) => {
            const content = t.experience.items[item.contentKey];
            if (!content) return null;

            return (
              <article
                key={item.id}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold">{content.title}</h3>
                      <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {t.experience.types[item.typeKey]}
                      </Badge>
                    </div>
                    <p className="text-blue-400 font-medium">{content.organization}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{item.period}</span>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">{content.description}</p>

                <ul className="space-y-2 mb-4">
                  {content.highlights.map((highlight) => (
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
                      {t.experience.viewProject}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
