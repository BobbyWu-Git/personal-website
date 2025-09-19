'use client';

interface LogoStripProps {
  items: string[];
}

export default function LogoStrip({ items }: LogoStripProps) {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        Trusted by
      </div>
      <div className="flex items-center gap-6">
        {items.map((logo, index) => (
          <div
            key={logo}
            className="text-gray-600 dark:text-gray-300 font-medium text-sm opacity-70 hover:opacity-100 transition-opacity"
          >
            {logo}
            {index < items.length - 1 && (
              <span className="ml-6 text-gray-400 dark:text-gray-600">•</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
