'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import AboutChat from './AboutChat';

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Cover letters are ALSO boring—here&apos;s the interactive version
        </p>
      </motion.div>

      <AboutChat />
    </Section>
  );
}
