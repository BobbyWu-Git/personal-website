'use client';

import { skills } from '@/content';
import Section from './Section';

export default function Skills() {
  const skillCategories = [
    skills.frontend,
    skills.qa,
    skills.ai,
    skills.id
  ];

  return (
    <Section 
      id="skills" 
      heading="Technical Skills" 
      subheading="Core competencies across front-end development, QA automation, and emerging technologies."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-md font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              {category.proof}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
