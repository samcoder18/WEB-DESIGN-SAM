import { FadeIn } from '../components/FadeIn';
import { services } from '../data/portfolio';

export function ServicesSection() {
  return (
    <section
      id="услуги"
      aria-labelledby="services-heading"
      className="services-section mt-20 rounded-t-[40px] bg-white px-5 py-20 text-ink sm:mt-24 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:mt-28 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="services-section__inner mx-auto max-w-[1180px]">
        <div className="services-header">
          <FadeIn className="min-w-0" y={40}>
            <p className="services-eyebrow">Услуги</p>
            <h2
              id="services-heading"
              className="services-heading site-display-heading site-display-heading--ink"
            >
              Услуги
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} y={32}>
            <div className="services-intro">
              <p>
                Три формата для брендов и продуктов, которым нужен сильный
                визуальный образ, понятная структура и аккуратная реализация.
              </p>
              <dl className="services-summary" aria-label="Формат услуг">
                <div>
                  <dt>Формат</dt>
                  <dd>стратегия + визуал + сборка</dd>
                </div>
                <div>
                  <dt>Фокус</dt>
                  <dd>премиальная подача и ясная структура</dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>

        <div className="services-list mt-12 sm:mt-14 lg:mt-20">
          {services.map((service, index) => (
            <FadeIn key={service.number} delay={0.12 + index * 0.08} y={34}>
              <article
                aria-labelledby={`service-${service.number}-title`}
                aria-describedby={`service-${service.number}-description`}
                className="services-row"
              >
                <div className="services-row__index" aria-hidden="true">
                  <span>{service.number}</span>
                </div>

                <div className="services-row__main">
                  <h3
                    id={`service-${service.number}-title`}
                    className="services-row__title site-card-title site-card-title--light"
                  >
                    {service.name}
                  </h3>

                  <p className="services-row__lead">{service.lead}</p>

                  <p
                    id={`service-${service.number}-description`}
                    className="services-row__description site-body site-body--light"
                  >
                    {service.description}
                  </p>
                </div>

                <div className="services-row__details">
                  <p className="services-row__signal">
                    <span>Фокус</span>
                    {service.signal}
                  </p>
                  <ul
                    className="services-row__scope"
                    aria-label={`Состав услуги: ${service.name}`}
                  >
                    {service.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
