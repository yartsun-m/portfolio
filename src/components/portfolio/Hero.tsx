import { ArrowDown, Github, Linkedin, Mail, FileDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataPipelineVisual from '@/components/portfolio/DataPipelineVisual';
import { siteConfig, heroTechStack } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="inline-block mb-2">
            <span className="blueprint-badge">{t.hero.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="text-cyan-400">{t.hero.titleLine1}</span>
            <br />
            <span className="text-white">{t.hero.titleLine2}</span>
          </h1>

          <p className="text-lg md:text-xl text-cyan-300/80 max-w-2xl mx-auto font-medium font-mono">
            {t.hero.tagline}
          </p>

          <DataPipelineVisual />

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.hero.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={onScrollToProjects}
              size="lg"
              className="blueprint-btn-primary px-8 py-6 text-base font-mono uppercase tracking-wide"
            >
              {t.hero.viewProjects}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="blueprint-btn-outline px-8 py-6 text-base font-mono uppercase tracking-wide hover:bg-cyan-500/10"
              asChild
            >
              <a href={siteConfig.resumeUrl} download="Mykhailo_Yartsun_Resume.pdf">
                <FileDown className="w-5 h-5 mr-2" />
                {t.hero.downloadCv}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="blueprint-btn-outline px-8 py-6 text-base font-mono uppercase tracking-wide"
              onClick={() => {
                window.location.href = `mailto:${siteConfig.email}`;
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.hero.getInTouch}
            </Button>
          </div>

          <ul className="flex flex-wrap gap-2.5 justify-center pt-6 max-w-2xl mx-auto" aria-label="Core tech stack">
            {heroTechStack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-cyan-500/40 bg-cyan-500/5 text-cyan-300 text-xs font-mono uppercase tracking-wide"
              >
                <Check className="w-3.5 h-3.5 text-cyan-400" strokeWidth={3} />
                {tech}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.github}
              className="p-3 border border-dashed border-cyan-500/30 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.linkedin}
              className="p-3 border border-dashed border-cyan-500/30 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={t.hero.email}
              className="p-3 border border-dashed border-cyan-500/30 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={onScrollToProjects}
        aria-label={t.hero.scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none text-cyan-500/50"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
