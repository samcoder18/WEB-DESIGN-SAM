import { motion } from 'framer-motion';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { portraitUrl } from '../data/portfolio';

export function HeroSection() {
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

      <div className="relative z-20 mt-auto flex w-screen max-w-[100vw] items-end justify-end px-6 pb-10 sm:pb-14 md:px-10 md:pb-16">
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
