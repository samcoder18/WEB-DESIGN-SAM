import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { HorizontalCharacterReveal } from '../components/HorizontalCharacterReveal';

const manifestoText =
  'Я создаю визуальные идентичности, 3D-сцены и digital-опыт, которые раскрывают характер проекта, собирают внимание в нужных точках и превращают разрозненную идею в сильный, цельный и запоминающийся образ.';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const stageOpacity = useTransform(scrollYProgress, [0, 0.12, 0.24], [0, 0.74, 1]);
  const stageScale = useTransform(scrollYProgress, [0, 0.22], [0.985, 1]);
  const stageY = useTransform(scrollYProgress, [0, 0.22], [52, 0]);
  const textProgress = useTransform(scrollYProgress, [0.14, 0.98], [0, 1]);

  return (
    <section
      id="обо-мне"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative h-[200vh] bg-transparent px-4 text-frost sm:px-6 md:h-[228vh] md:px-10"
    >
      <div className="sr-only">
        <h2 id="about-heading">Обо мне</h2>
      </div>

      <div className="sticky top-0 flex min-h-screen items-center">
        <motion.div
          className="about-manifesto-stage relative mx-auto flex min-h-screen w-full max-w-[1880px] items-center overflow-hidden px-3 py-10 sm:px-5 md:px-8 lg:px-14"
          style={
            reducedMotion
              ? undefined
              : {
                  opacity: stageOpacity,
                  scale: stageScale,
                  y: stageY,
                }
          }
        >
          <div className="about-manifesto-grid absolute inset-0" aria-hidden="true" />
          <div className="about-manifesto-vignette absolute inset-0" aria-hidden="true" />

          <div className="relative z-[1] flex w-full items-center justify-center py-14 sm:py-16 md:py-20">
            <div className="w-full max-w-[1540px] text-center">
              {reducedMotion ? (
                <p className="about-manifesto-text about-manifesto-text--static">{manifestoText}</p>
              ) : (
                <HorizontalCharacterReveal
                  className="about-manifesto-text"
                  progress={textProgress}
                  text={manifestoText}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
