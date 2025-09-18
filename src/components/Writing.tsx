'use client';

import { posts } from '@/content';
import Section from './Section';

export default function Writing() {
  return (
    <Section 
      id="writing" 
      heading="Writing & Insights" 
      subheading="Thoughts on development practices, automation, and building better user experiences."
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <a
            key={post.title}
            href={post.href}
            className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
              Read more
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
