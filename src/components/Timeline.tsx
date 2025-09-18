'use client';

import type { Role } from '@/content';

interface TimelineProps {
  roles: Role[];
}

export default function Timeline({ roles }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-pink-500"></div>
      
      <div className="space-y-12">
        {roles.map((role) => (
          <div key={`${role.org}-${role.title}`} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-6 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10"></div>
            
            {/* Content */}
            <div className="ml-12 md:ml-20 flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {role.title}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {role.org}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                    {role.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {role.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                {role.tools && role.tools.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Tools & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {role.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
