import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for smooth, once-only scroll reveal using Intersection Observer.
 * - Triggers animation ONCE when element enters viewport and unobserves immediately.
 * - Respects prefers-reduced-motion OS preference (instant visibility).
 * - Fallback: default to visible if IntersectionObserver is unsupported (no blank flash).
 *
 * @param {Object} options IntersectionObserver options
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  // Check reduced-motion preference or absence of IntersectionObserver
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    if (!('IntersectionObserver' in window)) return true;
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isVisible) return;

    // Double-check reduced motion preference
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.08,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
        ...options,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, options]);

  return [ref, isVisible];
}
