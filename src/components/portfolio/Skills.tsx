import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { skillGroups } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Skills() {
  const { t } = useTranslation();
  const allSkills = skillGroups.flatMap((g) => g.skills);

  return (
    <section className="py-24 px-6 relative" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          id="skills-heading"
          title={t.skills.title}
          highlight="Skills"
          subtitle={t.skills.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div key={group.categoryKey} className="blueprint-panel">
              <span className="text-[10px] font-mono text-cyan-400/40 block mb-3">
                SYS · {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-bold mb-4 text-cyan-400 font-mono uppercase tracking-wide">
                {t.skills.categories[group.categoryKey]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-500/5 text-slate-300 border border-dashed border-cyan-500/25 font-mono text-xs rounded-sm"
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
