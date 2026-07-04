import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { experience } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          id="experience-heading"
          title={t.experience.title}
          highlight={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="space-y-6">
          {experience.map((item, index) => {
            const content = t.experience.items[item.contentKey];
            if (!content) return null;

            return (
              <article key={item.id} className="blueprint-panel">
                <span className="blueprint-badge mb-4 inline-block">
                  EXP · {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold">{content.title}</h3>
                      <Badge className="bg-cyan-500/10 text-cyan-400 border border-dashed border-cyan-500/30 rounded-sm font-mono text-xs">
                        {t.experience.types[item.typeKey]}
                      </Badge>
                    </div>
                    <p className="text-cyan-400/80 font-mono text-sm">{content.organization}</p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono whitespace-nowrap">{item.period}</span>
                </div>

                <p className="text-slate-400 mb-4 leading-relaxed">{content.description}</p>

                <ul className="space-y-2 mb-4">
                  {content.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-slate-400 flex gap-2 font-mono">
                      <span className="text-cyan-500 shrink-0">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-cyan-500/5 text-cyan-300/80 border border-dashed border-cyan-500/20 rounded-sm font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 ml-auto font-mono"
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
