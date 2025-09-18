'use client';

import { hero } from '@/content';
import Section from './Section';
import MetricChip from './MetricChip';
import LogoStrip from './LogoStrip';

export default function Hero() {
  return (
    <Section id="hero" compact className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            {hero.headline}
          </h1>

          {/* Subline */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {hero.subline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {hero.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  cta.label === 'View Projects'
                    ? 'bg-gradient-to-r from-blue-600 to-pink-500 text-white hover:opacity-90 hover:scale-105'
                    : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {cta.label}
                {cta.external && (
                  <span className="ml-2 text-sm">↗</span>
                )}
              </a>
            ))}
          </div>

          {/* Logo Strip */}
          <div>
            <LogoStrip items={hero.logos} />
          </div>

          {/* Metric Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {hero.metrics.map((metric) => (
              <MetricChip
                key={metric.label}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
