'use client';

import { useState } from 'react';
import { contact } from '@/content';
import Section from './Section';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <Section 
      id="contact" 
      heading="Get In Touch" 
      subheading="Let's discuss opportunities, collaborations, or just connect."
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Email */}
          <div className="mb-6">
            <button
              onClick={copyEmail}
              className="group inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span className="mr-2">{contact.email}</span>
              <span className="text-sm opacity-75">
                {copied ? '✓ Copied!' : '📋 Copy'}
              </span>
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {contact.note}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {link.label}
                <span className="ml-2 text-sm">↗</span>
              </a>
            ))}
          </div>

          {/* Alternative mailto link */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
            >
              Or send me an email directly →
            </a>
          </div>
        </div>

        {/* Screen reader announcement for copy action */}
        <div 
          role="status" 
          aria-live="polite" 
          className="sr-only"
        >
          {copied ? 'Email address copied to clipboard' : ''}
        </div>
      </div>
    </Section>
  );
}
