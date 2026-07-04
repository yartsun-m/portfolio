import { useEffect, useState } from 'react';
import { Github, Linkedin, FileDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Certifications from '@/components/portfolio/Certifications';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import BlueprintBackground from '@/components/portfolio/BlueprintBackground';
import LanguageToggle from '@/components/portfolio/LanguageToggle';
import { navSections, siteConfig } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Home() {
  const { t, locale } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navSections.map((s) => s.id);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = sectionIds.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a1628] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <BlueprintBackground />
      </div>

      <div key={locale} className="relative z-10 animate-in fade-in duration-200 motion-reduce:animate-none">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a1628]/95 backdrop-blur-sm border-b border-dashed border-cyan-500/20'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-bold text-cyan-400 font-mono tracking-tight hover:text-cyan-300 transition-colors"
            >
              {siteConfig.name}
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {navSections.map(({ id, labelKey }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`blueprint-nav-link ${
                    activeSection === id ? 'blueprint-nav-active' : 'blueprint-nav-idle'
                  }`}
                >
                  {t.nav[labelKey]}
                </button>
              ))}
              <Button variant="outline" size="sm" className="blueprint-btn-outline font-mono text-xs" asChild>
                <a href={siteConfig.resumeUrl} download="Mykhailo_Yartsun_Resume.pdf">
                  <FileDown className="w-4 h-4 mr-2" />
                  {t.nav.cv}
                </a>
              </Button>
              <LanguageToggle />
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block lg:hidden">
                <LanguageToggle />
              </div>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                className="lg:hidden text-slate-500 hover:text-cyan-400"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-2 border-t border-dashed border-cyan-500/20 mt-4 space-y-2">
              {navSections.map(({ id, labelKey }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left py-2 font-mono text-sm uppercase tracking-wide transition-colors ${
                    activeSection === id ? 'text-cyan-400' : 'text-slate-500 hover:text-cyan-300'
                  }`}
                >
                  {t.nav[labelKey]}
                </button>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download="Mykhailo_Yartsun_Resume.pdf"
                className="flex items-center gap-2 py-2 text-slate-500 hover:text-cyan-400 font-mono text-sm"
              >
                <FileDown className="w-4 h-4" />
                {t.nav.downloadCv}
              </a>
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10">
        <div id="home">
          <Hero onScrollToProjects={() => scrollToSection('projects')} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <footer className="relative z-10 border-t border-dashed border-cyan-500/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 font-mono text-sm">
          <p>
            © 2026 {siteConfig.name}. {t.footer.builtWith}
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}
