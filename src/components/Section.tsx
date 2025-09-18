'use client';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
  compact?: boolean;
  className?: string;
}

export default function Section({ 
  id, 
  children, 
  heading, 
  subheading, 
  compact = false,
  className = ""
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`${compact ? 'py-12' : 'py-20'} px-4 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(heading || subheading) && (
          <div className="text-center mb-16">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
