import { GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { useTranslation } from '@/i18n/useTranslation';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          id="about-heading"
          title={t.about.title}
          highlight="Me"
          subtitle={t.about.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="blueprint-panel">
            <span className="blueprint-badge mb-4 inline-block">EDU · 01</span>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
              {t.about.education}
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-lg">{t.about.degree1}</div>
                <div className="text-cyan-400/80 font-mono text-sm">{t.about.school1}</div>
                <div className="text-sm text-slate-500 font-mono">{t.about.period1}</div>
                <div className="text-sm text-slate-400 mt-1">{t.about.spec1}</div>
              </div>
              <div className="pt-4 border-t border-dashed border-cyan-500/20">
                <div className="font-semibold">{t.about.degree2}</div>
                <div className="text-cyan-400/80 font-mono text-sm">{t.about.school2}</div>
                <div className="text-sm text-slate-500 font-mono">{t.about.period2}</div>
              </div>
            </div>
          </div>

          <div className="blueprint-panel">
            <span className="blueprint-badge mb-4 inline-block">SPEC · 02</span>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">{t.about.languagesTitle}</h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-2 font-mono text-sm uppercase tracking-wide text-slate-400">
                  {t.about.languages}
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between border-b border-dashed border-cyan-500/10 pb-1">
                    <span className="text-slate-400">{t.about.langEn}</span>
                    <span className="text-cyan-400">{t.about.fluent}</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-cyan-500/10 pb-1">
                    <span className="text-slate-400">{t.about.langDe}</span>
                    <span className="text-cyan-400">{t.about.intermediate}</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-cyan-500/10 pb-1">
                    <span className="text-slate-400">{t.about.langUk}</span>
                    <span className="text-cyan-400">{t.about.native}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-dashed border-cyan-500/20">
                <div className="text-sm text-slate-400 leading-relaxed">{t.about.availability}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
