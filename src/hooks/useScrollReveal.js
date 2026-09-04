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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    // Check if element is already within viewport on initial load
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

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
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isVisible];
}
