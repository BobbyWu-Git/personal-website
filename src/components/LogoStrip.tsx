'use client';

interface LogoStripProps {
  items: string[];
}

// Simple SVG logos with consistent height
const LogoSVGs = {
  "University of Waterloo": (
    <svg className="h-8 w-auto" viewBox="0 0 120 32" fill="currentColor" aria-hidden="true">
      <rect x="0" y="12" width="8" height="8" />
      <rect x="12" y="8" width="8" height="16" />
      <rect x="24" y="4" width="8" height="24" />
      <rect x="36" y="8" width="8" height="16" />
      <rect x="48" y="12" width="8" height="8" />
      <text x="64" y="20" fontSize="12" fontFamily="monospace">UW</text>
    </svg>
  ),
  "Ansys": (
    <svg className="h-8 w-auto" viewBox="0 0 80 32" fill="currentColor" aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 16 L16 8 L24 16 L16 24 Z" />
      <text x="32" y="20" fontSize="12" fontFamily="monospace">ANSYS</text>
    </svg>
  ),
  "Manulife": (
    <svg className="h-8 w-auto" viewBox="0 0 100 32" fill="currentColor" aria-hidden="true">
      <path d="M4 8 L12 24 L20 8 L28 24 L36 8" stroke="currentColor" strokeWidth="2" fill="none" />
      <text x="44" y="20" fontSize="12" fontFamily="monospace">MANULIFE</text>
    </svg>
  )
};

export default function LogoStrip({ items }: LogoStripProps) {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        Trusted by
      </div>
      <div className="flex items-center gap-8">
        {items.map((logo) => (
          <div
            key={logo}
            className="text-gray-600 dark:text-gray-300 opacity-70 hover:opacity-100 transition-opacity"
            title={logo}
          >
            {LogoSVGs[logo as keyof typeof LogoSVGs] || (
              <span className="text-sm font-medium">{logo}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
