import { GraduationCap } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.title.split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.about.title.split(' ').slice(1).join(' ') || t.about.title}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">{t.about.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              {t.about.education}
            </h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold text-lg">{t.about.degree1}</div>
                <div className="text-blue-400">{t.about.school1}</div>
                <div className="text-sm text-gray-400">{t.about.period1}</div>
                <div className="text-sm text-gray-400 mt-1">{t.about.spec1}</div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="font-semibold">{t.about.degree2}</div>
                <div className="text-purple-400">{t.about.school2}</div>
                <div className="text-sm text-gray-400">{t.about.period2}</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">{t.about.languagesTitle}</h3>
            <div className="space-y-4">
              <div>
                <div className="font-semibold mb-2">{t.about.languages}</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t.about.langUk}</span>
                    <span className="text-blue-400">{t.about.native}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t.about.langEn}</span>
                    <span className="text-blue-400">{t.about.fluent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t.about.langDe}</span>
                    <span className="text-blue-400">{t.about.intermediate}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm text-gray-400 leading-relaxed">{t.about.availability}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
