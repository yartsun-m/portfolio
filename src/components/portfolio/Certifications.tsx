import { Award, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { certifications } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="certifications-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="certifications-heading" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.certifications.title.split(' ')[0]}
            </span>{' '}
            {t.certifications.title.split(' ').slice(1).join(' ')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.certifications.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const content = t.certifications.items[cert.titleKey];
            const Icon = cert.type === 'certification' ? Award : BookOpen;

            return (
              <article
                key={cert.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 shrink-0">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <Badge className="mb-2 bg-indigo-500/10 text-indigo-300 border-indigo-500/20">
                      {t.certifications.types[cert.type]}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-1">{content.title}</h3>
                    <p className="text-blue-400 text-sm mb-1">{content.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 mt-2 inline-block"
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
