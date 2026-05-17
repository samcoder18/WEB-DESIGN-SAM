import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ContactButtonProps = {
  className?: string;
  label?: string;
  showIcon?: boolean;
  to?: string;
};

const MotionLink = motion.create(Link);

const premiumButtonVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -3,
    scale: 1.015,
    transition: {
      type: 'spring',
      stiffness: 460,
      damping: 30,
      mass: 0.65,
      staggerChildren: 0.035,
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

const premiumTextVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: -2,
    transition: { type: 'spring', stiffness: 520, damping: 32 },
  },
};

const premiumIconVariants: Variants = {
  rest: { x: 0, scale: 1, rotate: 0 },
  hover: {
    x: 4,
    scale: 1.05,
    rotate: 6,
    transition: { type: 'spring', stiffness: 520, damping: 30 },
  },
};

const premiumArrowVariants: Variants = {
  rest: { x: 0, y: 0 },
  hover: {
    x: 1.5,
    y: -1.5,
    transition: { type: 'spring', stiffness: 620, damping: 28 },
  },
};

const premiumAuraVariants: Variants = {
  rest: { opacity: 0, scale: 0.92 },
  hover: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
};

const premiumSheenVariants: Variants = {
  rest: { opacity: 0, x: '-95%' },
  hover: {
    opacity: [0, 0.68, 0],
    x: ['-95%', '210%', '210%'],
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ContactButton({
  className = '',
  label = 'Связаться',
  showIcon = true,
  to = '/contact',
}: ContactButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const baseClasses =
    'group relative inline-flex items-center justify-center gap-2 rounded-full uppercase leading-none transition duration-300 ease-out will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost';
  const variantClasses =
    'premium-site-cta min-h-[3.25rem] gap-3 px-6 py-3.5 font-sans text-[0.72rem] font-bold tracking-normal sm:min-h-14 sm:px-8 sm:text-xs md:min-h-[3.6rem] md:px-9 md:text-sm';

  return (
    <MotionLink
      to={to}
      className={`${baseClasses} ${variantClasses} ${className}`}
      variants={shouldReduceMotion ? undefined : premiumButtonVariants}
      initial={shouldReduceMotion ? undefined : 'rest'}
      animate={shouldReduceMotion ? undefined : 'rest'}
      whileHover={shouldReduceMotion ? undefined : 'hover'}
      whileTap={shouldReduceMotion ? undefined : 'tap'}
      aria-label={label}
    >
      {!shouldReduceMotion && (
        <>
          <motion.span
            aria-hidden="true"
            className="premium-site-cta__aura"
            variants={premiumAuraVariants}
          />
          <motion.span
            aria-hidden="true"
            className="premium-site-cta__sheen"
            variants={premiumSheenVariants}
          />
        </>
      )}
      <motion.span
        className="relative z-10"
        variants={shouldReduceMotion ? undefined : premiumTextVariants}
      >
        {label}
      </motion.span>
      {showIcon && (
        <motion.span
          className="premium-site-cta__icon relative z-10"
          aria-hidden="true"
          variants={shouldReduceMotion ? undefined : premiumIconVariants}
        >
          <motion.span variants={shouldReduceMotion ? undefined : premiumArrowVariants}>
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
          </motion.span>
        </motion.span>
      )}
    </MotionLink>
  );
}
