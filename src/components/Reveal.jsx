import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Reusable Reveal component for smooth, subtle once-only scroll reveal animations.
 *
 * @param {React.ReactNode} children Child content
 * @param {number} delay Stagger delay index (1 to 6)
 * @param {string} className Additional CSS class names
 * @param {string|React.ElementType} as HTML tag or React component type (defaults to 'div')
 * @param {Object} style Inline style overrides
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  style = {},
  ...props
}) {
  const [ref, isVisible] = useScrollReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  const Component = as;

  return (
    <Component
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${delayClass} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}