import { Globe } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

export default function LanguageToggle() {
  const { locale, setLocale, t } = useTranslation();

  const toggle = () => {
    setLocale(locale === 'en' ? 'de' : 'en');
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono uppercase tracking-wide text-slate-500 hover:text-cyan-400 border border-dashed border-cyan-500/30 hover:border-cyan-400/50 transition-colors"
      aria-label={`${t.common.language}: ${locale === 'en' ? t.common.german : t.common.english}`}
    >
      <Globe className="w-4 h-4" />
      <span>{locale}</span>
    </button>
  );
}
