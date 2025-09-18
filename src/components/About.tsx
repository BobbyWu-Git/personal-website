'use client';

import { about } from '@/content';
import Section from './Section';

export default function About() {
  return (
    <Section 
      id="about" 
      heading="About / Now" 
      subheading="What I'm currently working on and what drives me."
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            {about.now.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
