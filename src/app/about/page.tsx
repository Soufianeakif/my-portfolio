'use client';

import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import content from '@/data/content.json';

export default function About() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
                <Image
                  src={content.about.image}
                  alt="Profile"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                  priority
                  className="object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-bebas text-gray-900 dark:text-white mb-6 tracking-wide">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8 font-poppins">
                {content.about.description}
              </p>
              
              {/* Details */}
              <ul className="space-y-4 mb-8">
                {content.about.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-400 font-poppins"
                  >
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={content.footer.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#DF6D14] hover:text-[#DF6D14] dark:hover:border-[#9DC08B] dark:hover:text-[#9DC08B] transition-colors font-poppins"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={content.footer.socialLinks[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#DF6D14] hover:text-[#DF6D14] dark:hover:border-[#9DC08B] dark:hover:text-[#9DC08B] transition-colors font-poppins"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
