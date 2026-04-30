import { useRef } from 'react';
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
};

type AnimatedCharacterProps = {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function AnimatedCharacter({ char, index, total, progress }: AnimatedCharacterProps) {
  const start = total <= 1 ? 0 : index / total;
  const end = Math.min(start + 0.16, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  const value = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{value}</span>
      <motion.span aria-hidden="true" className="absolute left-0 top-0" style={{ opacity }}>
        {value}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const chars = Array.from(text);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((char, index) => (
        <AnimatedCharacter
          key={`${char}-${index}`}
          char={char}
          index={index}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
