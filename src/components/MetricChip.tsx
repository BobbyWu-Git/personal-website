'use client';

import { useRef, useEffect, useState } from 'react';

interface MetricChipProps {
  label: string;
  value: string;
}

export default function MetricChip({ label, value }: MetricChipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract number from value for animation
  const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0;
  const suffix = value.replace(/[\d,]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    // Skip animation if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    let startTime: number;
    const duration = 1000; // 1 second

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(numericValue * easeOut);
      
      setDisplayValue(currentValue.toLocaleString() + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue, suffix, value]);

  return (
    <div
      ref={ref}
      className={`bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 dark:border-gray-700/50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
        {displayValue}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}
