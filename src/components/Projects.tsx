'use client';

import { projects } from '@/content';
import Section from './Section';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Section 
      id="projects" 
      heading="Featured Projects" 
      subheading="A selection of projects showcasing my technical skills and problem-solving approach."
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`${index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Section>
  );
}
