'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkillsSection } from '@/components/SkillsSection';
import { motion } from 'framer-motion';

export default function SkillsPage() {
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A comprehensive overview of my technical skills and experience
            </p>
          </motion.div>
        </div>
        <SkillsSection showHeader={false} />
      </motion.main>
      <Footer />
    </>
  );
}
