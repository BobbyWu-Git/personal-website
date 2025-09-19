'use client';

import { useState } from 'react';
import { projects, labProjects } from '@/content';
import Section from './Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [showLab, setShowLab] = useState(false);

  return (
    <Section 
      id="projects" 
      heading="Featured Projects" 
      subheading="A selection of projects showcasing my technical skills and problem-solving approach."
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Lab Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setShowLab(!showLab)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-6"
        >
          <span className="text-sm font-medium">Lab (Experimental Projects)</span>
          <span className={`transform transition-transform ${showLab ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {showLab && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {labProjects.map((project) => (
              <div key={project.title}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
