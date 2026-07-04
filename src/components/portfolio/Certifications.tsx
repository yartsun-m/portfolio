import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { certifications } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative" aria-labelledby="certifications-heading">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          id="certifications-heading"
          title={t.certifications.title}
          highlight="Certifications"
          subtitle={t.certifications.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const content = t.certifications.items[cert.titleKey];

            return (
              <article key={cert.id} className="blueprint-panel">
                <span className="blueprint-badge mb-3 inline-block">
                  CERT · {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex items-start gap-3">
                  <div className="p-2 border border-dashed border-cyan-500/30 shrink-0">
                    <Award className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <Badge className="mb-2 bg-cyan-500/5 text-cyan-400 border border-dashed border-cyan-500/30 rounded-sm font-mono text-xs">
                      {t.certifications.types[cert.type]}
                    </Badge>
                    <h3 className="font-semibold text-base mb-1">{content.title}</h3>
                    <p className="text-cyan-400/70 text-sm font-mono mb-1">{content.issuer}</p>
                    <p className="text-xs text-slate-500 font-mono">{cert.date}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan-400 hover:text-cyan-300 mt-2 inline-block font-mono"
                      >
                        View credential →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
