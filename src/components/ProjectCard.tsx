'use client';

import { useState } from 'react';
import type { Project } from '@/content';

type ProjectCardProps = Project;

export default function ProjectCard({ 
  title, 
  tagline, 
  outcome, 
  bullets, 
  stack, 
  links 
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {tagline}
        </p>
      </div>

      {/* Outcome - Always visible */}
      <div className="mb-4">
        <p className="text-gray-700 dark:text-gray-200 font-medium text-sm">
          {outcome}
        </p>
      </div>

      {/* Expandable Details */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {bullets.map((bullet, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {link.label}
            {link.external && (
              <span className="ml-1 text-xs">↗</span>
            )}
          </a>
        ))}
      </div>

      {/* Mobile Expand Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden mt-4 w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}
