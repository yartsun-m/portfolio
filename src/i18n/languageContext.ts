import { createContext } from 'react';
import type { Locale, Translations } from '@/types/portfolio';

export interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
