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
import ParticleBackground from '@/components/portfolio/ParticleBackground';
import LanguageToggle from '@/components/portfolio/LanguageToggle';
import { navSections, siteConfig } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

export default function Home() {
  const { t } = useTranslation();
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
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="fixed inset-0 opacity-[0.18] pointer-events-none">
        <ParticleBackground />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              {siteConfig.name}
            </button>

            <div className="hidden lg:flex items-center gap-6">
              {navSections.map(({ id, labelKey }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors ${
                    activeSection === id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t.nav[labelKey]}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white/20 hover:bg-white/10 text-white"
                asChild
              >
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
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                className="lg:hidden text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-2 border-t border-white/10 mt-4 space-y-2">
              {navSections.map(({ id, labelKey }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`block w-full text-left py-2 transition-colors ${
                    activeSection === id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t.nav[labelKey]}
                </button>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download="Mykhailo_Yartsun_Resume.pdf"
                className="flex items-center gap-2 py-2 text-gray-400 hover:text-white"
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

      <main>
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

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>
            © 2026 {siteConfig.name}. {t.footer.builtWith}
          </p>
        </div>
      </footer>
    </div>
  );
}
