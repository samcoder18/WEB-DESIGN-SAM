import { motion, useReducedMotion } from 'framer-motion';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { portraitUrl } from '../data/portfolio';

export function HeroSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative flex h-screen min-h-[620px] flex-col overflow-x-clip bg-transparent">
      <div className="relative z-0 mt-20 w-full overflow-hidden sm:mt-20 md:mt-20 lg:mt-[4.5rem]">
        <div className="hero-heading-shell">
          <motion.h1
            className="hero-heading font-display relative z-10 block w-full whitespace-nowrap text-center text-[15.5vw] font-black uppercase leading-none tracking-tight min-[360px]:text-[16vw] sm:text-[17vw] md:text-[16vw] lg:text-[15vw] xl:text-[14vw]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            HI, I'M SAM
          </motion.h1>
        </div>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[300px] sm:bottom-0 sm:top-auto sm:w-[385px] md:w-[470px] lg:w-[555px]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 sm:translate-y-0">
          <Magnet padding={150} strength={3}>
            <img
              src={portraitUrl}
              alt="Сэм, 3D-креатор"
              decoding="async"
              className="pointer-events-none w-full origin-center -rotate-[3deg] select-none"
            />
          </Magnet>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.72}
        y={16}
        className="absolute bottom-10 left-6 z-20 sm:bottom-14 md:left-10 md:bottom-16"
      >
        <motion.a
          href="#обо-мне"
          aria-label="Листать вниз"
          className="group inline-flex items-end gap-4 text-white/52 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost"
          animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 2.4, repeat: Infinity, ease: [0.45, 0, 0.2, 1] }
          }
        >
          <span className="origin-bottom-left -rotate-90 translate-y-1 text-[0.62rem] font-extrabold uppercase tracking-[0.22em] text-white/40 transition group-hover:text-white/72">
            Scroll
          </span>
          <svg
            width="22"
            height="74"
            viewBox="0 0 22 74"
            fill="none"
            aria-hidden="true"
            className="overflow-visible"
          >
            <motion.path
              d="M11 1.5V67.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="opacity-30"
              pathLength={1}
              initial={shouldReduceMotion ? false : { pathLength: 0.42, pathOffset: 0 }}
              animate={shouldReduceMotion ? undefined : { pathOffset: [0, 0.58, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 2.4, repeat: Infinity, ease: [0.45, 0, 0.2, 1] }
              }
            />
            <path
              d="M4.75 61.25L11 68.25L17.25 61.25"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70 transition group-hover:opacity-100"
            />
          </svg>
          <span className="sr-only">Перейти к следующему экрану</span>
        </motion.a>
      </FadeIn>

      <div className="relative z-20 mt-auto flex w-screen max-w-[100vw] items-end justify-end px-6 pb-10 sm:pb-14 md:px-10 md:pb-16">
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
