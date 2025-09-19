'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
// import type { QA } from '@/aboutContent';
import { aboutQA } from '@/aboutContent';

const topics = [
  { key: 'badminton', label: 'Badminton', emoji: '🏸' },
  { key: 'climbing', label: 'Climbing', emoji: '🧗‍♂️' },
  { key: 'tft', label: 'TFT', emoji: '🎲' },
  { key: 'work', label: 'Work', emoji: '💻' },
  { key: 'school', label: 'School', emoji: '🎓' },
  { key: 'church', label: 'Church', emoji: '⛪' },
  { key: 'random', label: 'Random', emoji: '✨' }
] as const;

export default function AboutChat() {
  const [mode, setMode] = useState<'fun' | 'serious'>('fun');
  const [activeTopic, setActiveTopic] = useState<string>('badminton');

  const filteredQAs = useMemo(() => {
    return aboutQA.filter(qa => qa.topic === activeTopic);
  }, [activeTopic]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with mode toggle */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Let&apos;s chat! 💬
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Ask me anything—I&apos;ve got both fun and serious answers
          </p>
        </div>
        <button
          onClick={() => setMode(m => (m === 'fun' ? 'serious' : 'fun'))}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            mode === 'fun'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
          }`}
          aria-pressed={mode === 'serious'}
        >
          {mode === 'fun' ? '😄 Fun Mode' : '🧠 Serious Mode'}
        </button>
      </div>

      {/* Topic filter chips */}
      <div className="flex flex-wrap gap-3 mb-8">
        {topics.filter(topic => topic.key !== 'random').map(topic => (
          <FilterChip
            key={topic.key}
            selected={activeTopic === topic.key}
            onClick={() => setActiveTopic(topic.key)}
          >
            <span className="mr-1">{topic.emoji}</span>
            {topic.label}
          </FilterChip>
        ))}
      </div>

      {/* Chat bubbles */}
      <div className="space-y-6">
        {filteredQAs.map((qa, index) => (
          <motion.div
            key={qa.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-3"
          >
            {/* Question bubble - always on left (visitor) */}
            <div className="flex justify-start">
              <div className="max-w-[85%] md:max-w-[70%] mr-8">
                <div className="p-4 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-sm">
                  <p className="font-medium text-sm opacity-90 mb-1">
                    Visitor
                  </p>
                  <p className="leading-relaxed">{qa.q}</p>
                </div>
              </div>
            </div>

            {/* Answer bubble - always on right (Bobby) */}
            <div className="flex justify-end">
              <div className="max-w-[85%] md:max-w-[70%] ml-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-sm">
                  <p className="font-medium text-sm opacity-90 mb-1">
                    Bobby
                  </p>
                  <p className="leading-relaxed">{qa.a[mode]}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fun footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Want to continue the conversation?
        </p>
        <a
          href="mailto:Bobbywu042@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Send me an email
          <span className="ml-2">📧</span>
        </a>
      </motion.div>
    </div>
  );
}

function FilterChip({
  selected,
  onClick,
  children
}: {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        selected
          ? 'bg-blue-600 text-white shadow-md'
          : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50 border border-gray-300 dark:border-gray-600'
      }`}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}
