'use client';

import Image from 'next/image';

interface LogoStripProps {
  items: string[];
}

// Map company names to their logo files
const LogoFiles = {
  "University of Waterloo": {
    src: "/UniversityOfWaterloo_logo_vert_rev_rgb.png",
    alt: "University of Waterloo logo"
  },
  "Ansys": {
    src: "/32px-Ansys_logo_(2019).svg.png",
    alt: "Ansys logo"
  },
  "Manulife": {
    src: "/32px-Manulife_logo_(2018).svg.png", 
    alt: "Manulife logo"
  }
};

export default function LogoStrip({ items }: LogoStripProps) {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        Trusted by
      </div>
      <div className="flex items-center gap-8">
        {items.map((logo) => {
          const logoInfo = LogoFiles[logo as keyof typeof LogoFiles];
          
          return (
            <div
              key={logo}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              {logoInfo ? (
                <Image
                  src={logoInfo.src}
                  alt={logoInfo.alt}
                  width={64}
                  height={32}
                  className="h-8 w-auto object-contain filter dark:invert dark:brightness-0 dark:contrast-100"
                />
              ) : (
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {logo}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
