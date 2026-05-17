import { FadeIn } from '../components/FadeIn';
import { services } from '../data/portfolio';

export function ServicesSection() {
  return (
    <section id="услуги" aria-labelledby="services-heading" className="services-section">
      <div className="services-section__inner">
        <div className="services-header">
          <FadeIn y={34}>
            <h2 id="services-heading" className="services-heading">
              УСЛУГИ
            </h2>
          </FadeIn>
        </div>

        <div className="services-list" role="list">
          {services.map((service, index) => (
            <FadeIn key={service.number} delay={0.12 + index * 0.07} y={30}>
              <article
                role="listitem"
                aria-labelledby={`service-${service.number}-title`}
                className="services-row"
              >
                <span className="services-row__number" aria-hidden="true">
                  {service.number}
                </span>

                <div className="services-row__main">
                  <h3 id={`service-${service.number}-title`} className="services-row__title">
                    {service.name}
                  </h3>
                  <p className="services-row__lead">{service.lead}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
