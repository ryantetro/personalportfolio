// Feature detection utilities
export const supportsViewTransitions = typeof document !== 'undefined' && 'startViewTransition' in document;
export const supportsScrollTimeline = typeof document !== 'undefined' && CSS.supports('animation-timeline: scroll()');

// View transition helper
export const startViewTransition = (callback: () => void) => {
  if (supportsViewTransitions) {
    return document.startViewTransition(callback);
  } else {
    callback();
  }
};

// Smooth scroll polyfill check
export const needsSmoothScrollPolyfill = typeof document !== 'undefined' && 
  !CSS.supports('scroll-behavior', 'smooth');
