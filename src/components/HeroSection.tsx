'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import content from '@/data/content.json';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 flex items-center">
      <div className="absolute top-0 inset-x-0 h-64 flex items-start">
        <div className="h-24 w-2/3 bg-gradient-to-br from-[#DF6D14] opacity-20 blur-2xl dark:from-[#DF6D14] dark:invisible dark:opacity-40">
        </div>
        <div className="h-20 w-3/5 bg-gradient-to-r from-[#9DC08B] opacity-40 blur-2xl dark:from-[#9DC08B] dark:opacity-40">
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-[#DF6D14] to-[#9DC08B] rounded-full opacity-50 blur-2xl">
      </div>
      
      <div className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
        <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300 inline-block mb-4 text-sm sm:text-base font-poppins">
          Welcome to my portfolio
        </span>
        <div className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide">
          <TypeAnimation
            sequence={[
              'I am AKIF Soufiane',
              1000,
              '|',
              500,
              'A Full Stack Developer',
              1000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            cursor={false}
            style={{ 
              whiteSpace: 'pre',
              display: 'inline-block',
            }}
            className="relative after:ml-1 after:animate-pulse after:text-[#DF6D14] dark:after:text-[#DF6D14] text-transparent bg-clip-text bg-gradient-to-r from-[#DF6D14] to-[#9DC08B] dark:text-white leading-tight"
          />
        </div>
        <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl text-sm sm:text-base md:text-lg font-poppins">
          {content.hero.description}
        </p>
        <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-[#DF6D14] text-white font-medium hover:bg-[#DF6D14]/90 transition-colors duration-200 font-poppins"
          >
            Contact Me
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:border-[#DF6D14] hover:text-[#DF6D14] dark:hover:border-[#9DC08B] dark:hover:text-[#9DC08B] transition-colors duration-200 font-poppins"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
