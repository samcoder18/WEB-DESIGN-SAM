import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { aboutText, decorativeImages } from '../data/portfolio';

export function AboutSection() {
  return (
    <section
      id="обо-мне"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-5 py-20 sm:px-8 md:px-10"
    >
      {decorativeImages.map((image) => (
        <FadeIn
          key={image.src}
          delay={image.delay}
          duration={0.9}
          x={image.x}
          y={0}
          className={`pointer-events-none absolute z-0 select-none ${image.className}`}
        >
          <img src={image.src} alt={image.alt} loading="lazy" className="w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-[3rem] font-black uppercase leading-none sm:text-[5.5rem] md:text-[7.5rem] lg:text-[10rem]">
            Обо мне
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={aboutText}
            className="max-w-[560px] text-center text-base font-medium leading-relaxed text-frost sm:text-lg md:text-xl"
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
