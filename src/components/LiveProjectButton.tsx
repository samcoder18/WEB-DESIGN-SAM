import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

type LiveProjectButtonProps = {
  className?: string;
};

const secondaryButtonVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -2,
    scale: 1.01,
    transition: {
      type: 'spring',
      stiffness: 460,
      damping: 31,
      mass: 0.7,
    },
  },
  tap: {
    y: 0,
    scale: 0.985,
    transition: {
      type: 'spring',
      stiffness: 560,
      damping: 34,
      mass: 0.7,
    },
  },
};

const secondaryIconVariants: Variants = {
  rest: { x: 0, y: 0, rotate: 0 },
  hover: {
    x: 2,
    y: -2,
    rotate: 6,
    transition: { type: 'spring', stiffness: 520, damping: 30 },
  },
};

export function LiveProjectButton({ className = '' }: LiveProjectButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      className={`premium-secondary-cta group inline-flex min-h-[2.875rem] items-center justify-center gap-2 rounded-full px-4 py-2.5 font-display text-[0.68rem] font-bold uppercase leading-none tracking-normal transition duration-300 ease-out will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost sm:min-h-12 sm:px-5 sm:text-xs md:min-h-[3.1rem] md:px-6 md:text-[0.82rem] ${className}`}
      variants={shouldReduceMotion ? undefined : secondaryButtonVariants}
      initial={shouldReduceMotion ? undefined : 'rest'}
      animate={shouldReduceMotion ? undefined : 'rest'}
      whileHover={shouldReduceMotion ? undefined : 'hover'}
      whileTap={shouldReduceMotion ? undefined : 'tap'}
    >
      <span className="relative z-10">Смотреть проект</span>
      <motion.span
        className="premium-secondary-cta__icon relative z-10"
        aria-hidden="true"
        variants={shouldReduceMotion ? undefined : secondaryIconVariants}
      >
        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.2} />
      </motion.span>
    </motion.button>
  );
}
