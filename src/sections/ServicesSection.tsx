import { FadeIn } from '../components/FadeIn';
import { services } from '../data/portfolio';

export function ServicesSection() {
  return (
    <section
      id="цены"
      className="rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="mb-16 text-center text-[3rem] font-black uppercase leading-none sm:mb-20 sm:text-[5.5rem] md:mb-28 md:text-[7.5rem] lg:text-[10rem]">
          Услуги
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={28}>
            <article className="grid grid-cols-[0.36fr_1fr] gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-8 sm:py-10 md:grid-cols-[0.32fr_1fr] md:py-12">
              <span className="text-[3rem] font-black leading-none sm:text-[5rem] md:text-[7rem] lg:text-[8.75rem]">
                {service.number}
              </span>
              <div className="min-w-0 pt-1 sm:pt-3 md:pt-5">
                <h3 className="text-base font-medium uppercase leading-tight sm:text-xl md:text-3xl">
                  {service.name}
                </h3>
                <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed opacity-60 sm:text-base md:text-xl">
                  {service.description}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
