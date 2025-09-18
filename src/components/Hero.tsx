'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I&apos;m Bobby Wu
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer & AI Enthusiast
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            I build exceptional digital experiences with a focus on clean code, 
            intuitive design, and innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a 
              href="#links" 
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Connect With Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
