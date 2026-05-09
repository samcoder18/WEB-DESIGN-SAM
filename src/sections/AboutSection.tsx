import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

const manifestoText =
  'Я создаю визуальные идентичности, 3D-сцены и digital-опыт, которые раскрывают характер проекта, собирают внимание в нужных точках и превращают разрозненную идею в сильный, цельный и запоминающийся образ.';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const cardOpacity = useTransform(scrollYProgress, [0, 0.12, 0.24], [0, 0.72, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 0.22], [0.96, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.22], [48, 0]);

  const revealOpacity = useTransform(scrollYProgress, [0.08, 0.2, 0.84], [0, 1, 1]);
  const revealY = useTransform(scrollYProgress, [0.08, 0.22], [28, 0]);
  const revealBlur = useTransform(scrollYProgress, [0.08, 0.22], [16, 0]);
  const revealBottomInset = useTransform(scrollYProgress, [0.12, 0.74], ['100%', '0%']);
  const revealClipPath = useMotionTemplate`inset(0 0 ${revealBottomInset} 0)`;
  const revealFilter = useMotionTemplate`blur(${revealBlur}px)`;

  const eyebrowOpacity = useTransform(scrollYProgress, [0.04, 0.16], [0, 1]);
  return (
    <section
      id="обо-мне"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative h-[190vh] bg-transparent px-4 text-frost sm:px-6 md:h-[220vh] md:px-10"
    >
      <div className="sr-only">
        <h2 id="about-heading">Обо мне</h2>
        <p>{manifestoText}</p>
      </div>

      <div className="sticky top-0 flex min-h-screen items-center py-8">
        <motion.div
          className="about-manifesto-card relative mx-auto flex min-h-[78vh] w-full max-w-[1760px] items-center overflow-hidden rounded-[30px] px-5 py-6 sm:min-h-[82vh] sm:px-7 sm:py-7 md:rounded-[42px] md:px-12 md:py-10 lg:px-16 xl:px-20"
          style={
            reducedMotion
              ? undefined
              : {
                  opacity: cardOpacity,
                  scale: cardScale,
                  y: cardY,
                }
          }
        >
          <div className="about-manifesto-grid absolute inset-0" aria-hidden="true" />
          <div className="about-manifesto-vignette absolute inset-0" aria-hidden="true" />

          <div className="relative z-[1] flex h-full w-full flex-col">
            <motion.p
              className="site-kicker about-manifesto-kicker"
              style={reducedMotion ? undefined : { opacity: eyebrowOpacity }}
            >
              Обо мне
            </motion.p>

            <div className="flex flex-1 items-center justify-center py-10 sm:py-12 md:py-16">
              <div className="relative w-full max-w-[1540px] text-center">
                <p className="about-manifesto-text about-manifesto-text--base">
                  {manifestoText}
                </p>

                <motion.p
                  aria-hidden="true"
                  className="about-manifesto-text about-manifesto-text--reveal absolute inset-0"
                  style={
                    reducedMotion
                      ? undefined
                      : {
                          clipPath: revealClipPath,
                          filter: revealFilter,
                          opacity: revealOpacity,
                          y: revealY,
                        }
                  }
                >
                  {manifestoText}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
