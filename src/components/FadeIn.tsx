import { type ElementType, type ReactNode, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type FadeInProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
};

export function FadeIn({
  as = 'div',
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) {
  const MotionElement = useMemo(() => motion.create(as), [as]);
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <MotionElement
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, x, y }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={shouldReduceMotion ? undefined : { once: true, margin: '50px', amount: 0 }}
      transition={shouldReduceMotion ? undefined : { delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionElement>
  );
}
