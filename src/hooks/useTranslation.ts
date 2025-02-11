'use client';

import { useLanguage } from '@/context/LanguageContext';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string) => {
    if (key.endsWith(`-${language}`)) {
      return key;
    }
    return `${key}-${language}`;
  };

  return { t };
};
