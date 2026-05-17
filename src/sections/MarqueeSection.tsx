import { useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion } from 'framer-motion';
import { marqueeImages } from '../data/portfolio';

function triple(items: readonly string[]) {
  return [...items, ...items, ...items];
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rowOneX = useMotionValue(-200);
  const rowTwoX = useMotionValue(200);
  const rowOne = useMemo(() => triple(marqueeImages.slice(0, 11)), []);
  const rowTwo = useMemo(() => triple(marqueeImages.slice(11)), []);
  const shouldReduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    if (shouldReduceMotion) {
      rowOneX.set(0);
      rowTwoX.set(0);

      return;
    }

    const update = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      rowOneX.set(offset - 200);
      rowTwoX.set(-(offset - 200));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [rowOneX, rowTwoX, shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="overflow-hidden bg-transparent pb-16 pt-28 sm:pb-20 sm:pt-36 md:pb-24 md:pt-44"
    >
      <div className="flex flex-col gap-3">
        <motion.div
          className="flex gap-3"
          style={{ x: rowOneX, willChange: shouldReduceMotion ? 'auto' : 'transform' }}
        >
          {rowOne.map((src, index) => (
            <img
              key={`${src}-row-one-${index}`}
              src={src}
              alt=""
              decoding="async"
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
        <motion.div
          className="flex gap-3"
          style={{ x: rowTwoX, willChange: shouldReduceMotion ? 'auto' : 'transform' }}
        >
          {rowTwo.map((src, index) => (
            <img
              key={`${src}-row-two-${index}`}
              src={src}
              alt=""
              decoding="async"
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
