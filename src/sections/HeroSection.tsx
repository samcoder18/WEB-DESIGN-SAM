import { motion } from 'framer-motion';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { navLinks, portraitUrl } from '../data/portfolio';

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[620px] flex-col overflow-x-clip bg-ink">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-30 flex w-full items-center justify-between gap-3 px-6 pt-6 text-[0.7rem] font-medium uppercase text-frost transition sm:text-sm md:px-10 md:pt-8 md:text-base lg:text-xl"
        aria-label="Основная навигация"
      >
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="transition duration-200 hover:opacity-70">
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="relative z-0 mt-6 w-full overflow-hidden sm:mt-5 md:mt-3 lg:mt-0">
        <motion.h1
          className="hero-heading block w-full whitespace-nowrap text-center text-[2.35rem] font-black uppercase leading-none min-[420px]:text-[2.75rem] sm:text-[4.4rem] md:text-[5.6rem] lg:text-[8rem] xl:text-[10.6rem] 2xl:text-[13.5rem]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Привет, я Сэм
        </motion.h1>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3}>
          <img
            src={portraitUrl}
            alt="Сэм, 3D-креатор"
            className="pointer-events-none w-full select-none"
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-xs font-light uppercase leading-snug text-frost sm:max-w-[220px] sm:text-sm md:max-w-[260px] md:text-lg lg:text-xl">
            3D-креатор, создающий яркие и незабываемые проекты
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
