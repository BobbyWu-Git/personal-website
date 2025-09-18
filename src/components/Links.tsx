'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFileText } from 'react-icons/fi';

type LinkItem = {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
};

const links: LinkItem[] = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <FiGithub className="w-6 h-6" />,
    color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900',
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: <FiLinkedin className="w-6 h-6" />,
    color: 'hover:bg-blue-600',
  },
  {
    id: 3,
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: <FiTwitter className="w-6 h-6" />,
    color: 'hover:bg-blue-400',
  },
  {
    id: 4,
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: <FiMail className="w-6 h-6" />,
    color: 'hover:bg-pink-500',
  },
  {
    id: 5,
    name: 'Resume',
    url: '/resume.pdf', // Update this path to your resume
    icon: <FiFileText className="w-6 h-6" />,
    color: 'hover:bg-purple-500',
  },
];

export default function Links() {
  return (
    <section id="links" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello! I&apos;m always open to new opportunities and conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 ${link.color} group`}
            >
              <span className="text-2xl mb-2 group-hover:text-white transition-colors duration-300">
                {link.icon}
              </span>
              <span className="font-medium group-hover:text-white transition-colors duration-300">
                {link.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
