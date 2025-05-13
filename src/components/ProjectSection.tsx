'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import content from '@/data/content.json';
import { useLanguage } from '@/context/LanguageContext';

export const ProjectSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'eng' ? 'Featured Projects' : 'Projets en Vedette'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {language === 'eng' ? 'Some of my recent work and contributions' : 'Quelques-uns de mes travaux et contributions récents'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.projects.slice(0, 3).map((project, index) => (

            <motion.div
              key={`${project.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 w-full">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized={project.logo.endsWith('.gif')}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm sm:text-base">
                  {project[`description-${language}`]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="px-2 py-1 text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project['link-github'] && (
                    <Link
                      href={project['link-github']}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
                    >
                      {language === 'eng' ? 'View Code' : 'Voir Code'}
                      <svg className="h-4 w-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  )}
                  {project['link-demo'] && (
                    <Link
                      href={project['link-demo']}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors shadow-sm hover:shadow-md"
                    >
                      {language === 'eng' ? 'View Demo' : 'Voir Demo'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {language === 'eng' ? 'View All Projects' : 'Voir Tous les Projets'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
