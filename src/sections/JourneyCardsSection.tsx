import { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

import { type Service, services } from '../data/portfolio';

type JourneyCard = {
  eyebrow: string;
  features: [string, string, string];
  summary: string;
  title: string;
  variant: Service['variant'];
  visual: 'left' | 'middle' | 'right';
};

const serviceTitles = ['Иммерсивные\nлендинги', 'Сайты\nпод ключ', 'Брендинг\nи система'] as const;
const cardVisuals: JourneyCard['visual'][] = ['left', 'middle', 'right'];
const servicesPanoramaImageUrl = '/services-panorama.png';

const journeyCards: JourneyCard[] = services.map((service, index) => ({
  eyebrow: `${service.number} / ${service.signal}`,
  title: serviceTitles[index] ?? service.name,
  summary: service.summary,
  features: service.scope,
  variant: service.variant,
  visual: cardVisuals[index] ?? 'left',
}));

export function JourneyCardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const titleY = useTransform(scrollYProgress, [0.12, 0.24], [148, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.12, 0.18, 0.24], [0, 0.14, 1]);
  const titleScale = useTransform(scrollYProgress, [0.12, 0.24], [0.92, 1]);
  const titleBlur = useTransform(scrollYProgress, [0.12, 0.24], [12, 0]);
  const titleFilter = useMotionTemplate`blur(${titleBlur}px)`;
  const stageScale = useTransform(scrollYProgress, [0, 0.24], [1.24, 1]);
  const stageY = useTransform(scrollYProgress, [0, 0.24], [44, 0]);
  const stageGap = useTransform(scrollYProgress, [0.3, 0.46, 0.88], [0, 36, 56]);
  const stageGapPx = useMotionTemplate`${stageGap}px`;

  const frontRotateY = useTransform(scrollYProgress, [0.52, 0.68], [0, -180]);
  const frontOpacity = useTransform(scrollYProgress, (value) => {
    if (value <= 0.56) {
      return 1;
    }

    if (value >= 0.68) {
      return 0;
    }

    return 1 - (value - 0.56) / 0.12;
  });
  const backRotateY = useTransform(scrollYProgress, [0.52, 0.68], [180, 0]);
  const backOpacity = useTransform(scrollYProgress, (value) => {
    if (value <= 0.58) {
      return 0;
    }

    if (value >= 0.68) {
      return 1;
    }

    return (value - 0.58) / 0.1;
  });

  const leftX = useTransform(scrollYProgress, [0.18, 0.34, 0.72, 0.9], [0, -24, -96, 0]);
  const middleX = useTransform(scrollYProgress, [0.18, 0.34], [0, 0]);
  const rightX = useTransform(scrollYProgress, [0.18, 0.34, 0.72, 0.9], [0, 24, 96, 0]);

  const leftY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 18, 0]);
  const middleY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, -4, 0]);
  const rightY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 16, 0]);

  const leftRotateZ = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, -10, 0]);
  const middleRotateZ = useTransform(scrollYProgress, [0.58, 0.76], [0, 0]);
  const rightRotateZ = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 9, 0]);

  const leftRotateY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 15, 0]);
  const middleRotateY = useTransform(scrollYProgress, [0.58, 0.76], [0, 0]);
  const rightRotateY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, -17, 0]);

  const xValues = [leftX, middleX, rightX];
  const yValues = [leftY, middleY, rightY];
  const rotateZValues = [leftRotateZ, middleRotateZ, rightRotateZ];
  const rotateYValues = [leftRotateY, middleRotateY, rightRotateY];

  return (
    <section
      ref={sectionRef}
      id="услуги"
      aria-labelledby="services-heading"
      className="journey-cards-section"
    >
      <div className="journey-cards-section__sticky">
        <div className="journey-cards-section__ambient" aria-hidden="true" />

        <motion.div
          className="journey-cards-section__header"
          transition={{ duration: 0 }}
          style={
            reducedMotion
              ? undefined
              : {
                  filter: titleFilter,
                  opacity: titleOpacity,
                  scale: titleScale,
                  y: titleY,
                }
          }
        >
          <h2 id="services-heading" className="journey-cards-section__title">
            Что собрать вокруг вашей идеи?
          </h2>
        </motion.div>

        <motion.div
          className={`journey-cards-stage${
            reducedMotion ? ' journey-cards-stage--reduced' : ''
          }`}
          transition={{ duration: 0 }}
          style={
            reducedMotion
              ? undefined
              : {
                  gap: stageGapPx,
                  scale: stageScale,
                  y: stageY,
                }
          }
        >
          {journeyCards.map((card, index) => (
            <motion.article
              key={card.title}
              aria-labelledby={`journey-card-${index + 1}-title`}
              className={`journey-card journey-card--${card.variant}`}
              transition={{ duration: 0 }}
              style={
                reducedMotion
                  ? undefined
                  : {
                      rotateY: rotateYValues[index],
                      rotateZ: rotateZValues[index],
                      x: xValues[index],
                      y: yValues[index],
                      zIndex: index === 1 ? 3 : 2,
                    }
              }
            >
              <motion.div
                className={`journey-card__face journey-card__front journey-card__front--${card.visual}`}
                transition={{ duration: 0 }}
                style={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: frontOpacity,
                        rotateY: frontRotateY,
                      }
                }
              >
                <div className="journey-card__placeholder" aria-hidden="true">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="journey-card__placeholder-image"
                    decoding="async"
                    draggable="false"
                    src={servicesPanoramaImageUrl}
                  />
                </div>
              </motion.div>

              <motion.div
                className={`journey-card__face journey-card__back journey-card__back--${card.variant}`}
                transition={{ duration: 0 }}
                style={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: backOpacity,
                        rotateY: backRotateY,
                      }
                }
              >
                <div className="journey-card__head">
                  <p className="journey-card__eyebrow">{card.eyebrow}</p>
                  <h3 id={`journey-card-${index + 1}-title`} className="journey-card__title">
                    {card.title}
                  </h3>
                </div>

                <div className="journey-card__body">
                  <div className="journey-card__divider" aria-hidden="true" />

                  <ul
                    className="journey-card__features"
                    aria-label={`Что входит: ${card.title.replace('\n', ' ')}`}
                  >
                    {card.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="journey-card__dock">
                  <p className="journey-card__description">{card.summary}</p>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
