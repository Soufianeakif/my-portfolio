'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import content from '@/data/content.json';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h1>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {content.about.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {content.about.details.map((detail, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={content.footer.socialLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-[#DF6D14] dark:border-[#9DC08B] text-base font-medium rounded-md text-[#DF6D14] dark:text-[#9DC08B] hover:bg-[#DF6D14] dark:hover:bg-[#9DC08B] hover:text-white dark:hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={content.footer.socialLinks[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-[#DF6D14] dark:border-[#9DC08B] text-base font-medium rounded-md text-[#DF6D14] dark:text-[#9DC08B] hover:bg-[#DF6D14] dark:hover:bg-[#9DC08B] hover:text-white dark:hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto relative">
                <Image
                  src={content.about.image}
                  alt="Profile"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
