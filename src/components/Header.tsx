'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import content from '@/data/content.json';
import { useTheme } from '@/context/ThemeProvider';

export const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setOpenNavbar(openNavbar => !openNavbar);
  };

  return (
    <header className={`fixed left-0 top-0 w-full flex items-center h-24 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg border-b border-[#DF6D14]/10' : ''
    }`}>
      <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
        <div className="flex items-center min-w-max">
          <Link href="/" className="font-semibold flex items-center gap-x-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg text-[#DF6D14] dark:text-[#9DC08B] font-bebas tracking-wide">{content.header.name}</span>
          </Link>
        </div>

        <div className={`
          absolute top-full left-0 bg-white dark:bg-gray-950 lg:!bg-transparent border-b border-gray-200 dark:border-gray-800 
          py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none lg:w-max lg:space-x-16 lg:top-0 lg:relative lg:flex 
          duration-300 lg:transition-none ease-linear
          ${openNavbar ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
        `}>
          <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
            {content.header.navigation.map((item, index) => (
              <li key={index}>
                <Link 
                  key={index}
                  href={item.path} 
                  className="text-gray-700 dark:text-gray-300 hover:text-[#DF6D14] dark:hover:text-[#DF6D14] transition-colors font-poppins"
                  onClick={() => setOpenNavbar(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-purple-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
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
        </div>

        <div className="flex items-center lg:hidden">
          <button 
            onClick={toggleNavbar} 
            aria-label="Toggle navbar" 
            className="outline-none border-l border-l-gray-100 dark:border-l-gray-800 pl-3 relative py-3 children:flex"
          >
            <span aria-hidden="true" className={`
              h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""}
            `} />
            <span aria-hidden="true" className={`
              mt-2 h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
              ${openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""}
            `} />
          </button>
        </div>
      </nav>
    </header>
  );
};
