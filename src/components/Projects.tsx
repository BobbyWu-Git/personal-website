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

      {/* Work In Progress Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-center">
          <button
            onClick={() => setShowLab(!showLab)}
            className="group relative flex items-center gap-3 px-6 py-3 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg mb-6"
          >
            <span className="text-sm font-medium">🚧 Work In Progress (Coming Soon!) 🚧</span>
            <span className={`transform transition-all duration-300 group-hover:scale-110 ${showLab ? 'rotate-180' : ''}`}>
              ▼
            </span>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-ping opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>
        
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
