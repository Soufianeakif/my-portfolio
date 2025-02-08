'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import content from '@/data/content.json';
import { TypeAnimation } from 'react-type-animation';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0 first:lg:pl-0 first:lg:pr-6 last:lg:pr-0 last:lg:pl-6">
    <div className="w-10">
      <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
        {icon}
      </span>
    </div>
    <div className="flex-1 space-y-1">
      <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        {description}
      </p>
    </div>
  </div>
);

const MonitorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
  </svg>
);

const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

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
