'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import content from '@/data/content.json';

interface SkillsSectionProps {
  showHeader?: boolean;
}

interface SkillCategory {
  name: string;
  level: string;
  icon: string;
  yearsOfExperience: number;
}

interface SkillsContent {
  "Frontend Development": SkillCategory[];
  "Backend Development": SkillCategory[];
  "DevOps & Tools": SkillCategory[];
  "Design & Modeling": SkillCategory[];
  Methodologies: SkillCategory[];
}

const skillsContent = content.skills as SkillsContent;

export const SkillsSection = ({ showHeader = true }: SkillsSectionProps) => {
  const categories = Object.keys(skillsContent);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors" id={showHeader ? "skills" : undefined}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here are the technologies I work with
            </p>
          </motion.div>
        )}

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {skillsContent[category as keyof SkillsContent].map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col items-center p-4">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={64}
                        height={64}
                        className="mb-4"
                      />
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.level}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
