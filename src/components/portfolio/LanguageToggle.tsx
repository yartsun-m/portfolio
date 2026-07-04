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
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
      aria-label={`${t.common.language}: ${locale === 'en' ? t.common.german : t.common.english}`}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase font-medium">{locale}</span>
    </button>
  );
}
