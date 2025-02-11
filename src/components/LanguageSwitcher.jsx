'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors"
    >
      {language === 'eng' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
