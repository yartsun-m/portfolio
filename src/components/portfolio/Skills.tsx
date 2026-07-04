import { Badge } from '@/components/ui/badge';
import { skillGroups } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Skills() {
  const { t } = useTranslation();
  const allSkills = skillGroups.flatMap((g) => g.skills);

  return (
    <section className="py-24 px-6 relative overflow-hidden" aria-labelledby="skills-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4">
            {t.skills.title.split(' ')[0]}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.skills.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.categoryKey}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {t.skills.categories[group.categoryKey]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="sr-only">Skills: {allSkills.join(', ')}</p>
      </div>
    </section>
  );
}
