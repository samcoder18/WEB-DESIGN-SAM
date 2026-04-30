import { useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
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

  useEffect(() => {
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
  }, [rowOneX, rowTwoX]);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-ink pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <motion.div className="flex gap-3" style={{ x: rowOneX, willChange: 'transform' }}>
          {rowOne.map((src, index) => (
            <img
              key={`${src}-row-one-${index}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
        <motion.div className="flex gap-3" style={{ x: rowTwoX, willChange: 'transform' }}>
          {rowTwo.map((src, index) => (
            <img
              key={`${src}-row-two-${index}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
