export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export const stagger = { 
  visible: { transition: { staggerChildren: 0.06 } } 
};

export const hoverReveal = {
  initial: { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

// Utility to disable animations when user prefers reduced motion
export const respectsReducedMotion = <T>(variants: T): T | Record<string, never> => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {};
  }
  return variants;
};
