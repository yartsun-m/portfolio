import { useEffect, useState, type ReactNode } from 'react';
import type { Locale } from '@/types/portfolio';
import { en } from './en';
import { de } from './de';
import { LanguageContext, type LanguageContextValue } from './languageContext';

const STORAGE_KEY = 'portfolio-locale';

const translations = { en, de };

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'de') return stored;
  return navigator.language.startsWith('de') ? 'de' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    t: translations[locale],
    setLocale,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
