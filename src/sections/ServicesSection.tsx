import { FadeIn } from '../components/FadeIn';
import { services } from '../data/portfolio';

export function ServicesSection() {
  return (
    <section
      id="услуги"
      className="mt-20 rounded-t-[40px] bg-white px-5 py-20 text-ink sm:mt-24 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:mt-28 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="site-display-heading site-display-heading--ink mb-16 sm:mb-20 md:mb-28">
          Услуги
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={28}>
            <article
              aria-labelledby={`service-${service.number}-title`}
              className="grid grid-cols-[0.36fr_1fr] gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-8 sm:py-10 md:grid-cols-[0.32fr_1fr] md:py-12"
            >
              <span className="site-number site-number--light">
                {service.number}
              </span>
              <div className="min-w-0 pt-1 sm:pt-3 md:pt-5">
                <h3
                  id={`service-${service.number}-title`}
                  className="site-card-title site-card-title--light"
                >
                  {service.name}
                </h3>
                <p className="site-body site-body--light mt-4 max-w-2xl">
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
