import { ArrowDown, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DataPipelineVisual from '@/components/portfolio/DataPipelineVisual';
import { siteConfig } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

interface HeroProps {
  onScrollToProjects: () => void;
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000 motion-reduce:animate-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.hero.titleLine1}
            </span>
            <br />
            <span className="text-white">{t.hero.titleLine2}</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-300/90 max-w-2xl mx-auto font-medium">
            {t.hero.tagline}
          </p>

          <DataPipelineVisual />

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.hero.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={onScrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-xl"
            >
              {t.hero.viewProjects}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-xl"
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
              className="bg-transparent border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg rounded-xl"
              onClick={() => {
                window.location.href = `mailto:${siteConfig.email}`;
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.hero.getInTouch}
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.github}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.linkedin}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={t.hero.email}
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={onScrollToProjects}
        aria-label={t.hero.scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
}
