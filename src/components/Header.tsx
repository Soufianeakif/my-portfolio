'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import content from '@/data/content.json';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeProvider';
import { useLanguage } from '@/context/LanguageContext';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : ''
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <span className="text-lg text-[#DF6D14] dark:text-[#9DC08B] font-bebas tracking-wide">
              {content.header.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {content.header.navigation.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`font-poppins text-sm transition-colors ${
                  pathname === item.path
                    ? 'text-[#DF6D14] dark:text-[#9DC08B]'
                    : 'text-gray-600 dark:text-gray-400 hover:text-[#DF6D14] dark:hover:text-[#9DC08B]'
                }`}
              >
                {item[`title-${language}`]}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#DF6D14] dark:hover:text-[#9DC08B] border border-gray-200 dark:border-gray-700 transition-colors"
              aria-label={`Switch to ${language === 'eng' ? 'French' : 'English'}`}
            >
              <div className="relative w-5 h-5 rounded-full overflow-hidden">
                <Image
                  src={`/images/flags/${language === 'eng' ? 'fr' : 'uk'}.svg`}
                  alt={language === 'eng' ? 'French flag' : 'UK flag'}
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium">{language === 'eng' ? 'Français' : 'English'}</span>
            </button>

            {/* Theme Toggle - Desktop Only */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#DF6D14] dark:hover:text-[#9DC08B] border border-gray-200 dark:border-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#DF6D14] dark:hover:text-[#9DC08B] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-b-lg border-t border-gray-200 dark:border-gray-800`}
        >
          <div className="py-3 space-y-1">
            {content.header.navigation.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#DF6D14] dark:hover:text-[#9DC08B] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item[`title-${language}`]}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="md:hidden w-full flex items-center gap-3 px-4 py-2 rounded-lg font-poppins text-sm text-gray-600 dark:text-gray-400 hover:text-[#DF6D14] dark:hover:text-[#9DC08B] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${language === 'eng' ? 'French' : 'English'}`}
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={`/images/flags/${language === 'eng' ? 'fr' : 'uk'}.svg`}
                  alt={language === 'eng' ? 'French flag' : 'UK flag'}
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
              <span>{language === 'eng' ? 'Français' : 'English'}</span>
            </button>

            {/* Theme Toggle - Mobile Only */}
            <button
              onClick={toggleTheme}
              className="md:hidden w-full flex items-center px-4 py-2 rounded-lg font-poppins text-sm text-gray-600 dark:text-gray-400 hover:text-[#DF6D14] dark:hover:text-[#9DC08B] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              <span className="flex items-center">
                {theme === 'dark' ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
