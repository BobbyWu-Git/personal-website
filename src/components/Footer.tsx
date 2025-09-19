'use client';

import { motion } from 'framer-motion';
// import { site } from '@/content';
import ResumeDownload from './ResumeDownload';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Bobby Wu
          </h3>
          <p className="text-gray-400 mb-6">
            Front-End & QA Automation Engineer
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
            <ResumeDownload className="text-gray-400 hover:text-white transition-colors duration-200">
              Download Résumé (PDF)
            </ResumeDownload>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} Bobby Wu. Built with WindsurfNext.js 15 + Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
