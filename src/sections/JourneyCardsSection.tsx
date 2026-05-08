import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

import { services } from '../data/portfolio';

type JourneyCard = {
  description: string;
  eyebrow: string;
  features: [string, string, string];
  tone: 'light' | 'red' | 'dark';
  title: string;
  visual: 'left' | 'middle' | 'right';
};

const serviceTitles = ['Иммерсивные\nлендинги', 'Сайты\nпод ключ', 'Брендинг\nи система'] as const;
const cardTones: JourneyCard['tone'][] = ['light', 'red', 'dark'];
const cardVisuals: JourneyCard['visual'][] = ['left', 'middle', 'right'];

const journeyCards: JourneyCard[] = services.map((service, index) => ({
  eyebrow: `${service.number} / ${service.signal}`,
  title: serviceTitles[index] ?? service.name,
  description: service.lead,
  features: service.scope,
  tone: cardTones[index] ?? 'light',
  visual: cardVisuals[index] ?? 'left',
}));

export function JourneyCardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);
  const [titleVisible, setTitleVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const titleY = useTransform(scrollYProgress, [0.18, 0.26], [24, 0]);
  const stageScale = useTransform(scrollYProgress, [0, 0.24], [1.12, 1]);
  const stageY = useTransform(scrollYProgress, [0, 0.24], [30, 0]);
  const stageGap = useTransform(scrollYProgress, [0.3, 0.46, 0.88], [0, 28, 42]);
  const stageGapPx = useMotionTemplate`${stageGap}px`;

  useEffect(() => {
    if (reducedMotion) {
      setTitleVisible(true);
      return;
    }

    setTitleVisible(scrollYProgress.get() >= 0.2);
  }, [reducedMotion, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!reducedMotion) {
      setTitleVisible(latest >= 0.2);
    }
  });

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
          className={`journey-cards-section__header${
            titleVisible ? ' journey-cards-section__header--visible' : ''
          }`}
          transition={{ duration: 0 }}
          style={
            reducedMotion
              ? undefined
              : {
                  y: titleY,
                }
          }
        >
          <p className="journey-cards-section__eyebrow">Что можно собрать</p>
          <h2 id="services-heading" className="journey-cards-section__title">
            Услуги
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
              className="journey-card"
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
                  <span className="journey-card__placeholder-ridge" />
                  <span className="journey-card__placeholder-orbit journey-card__placeholder-orbit--one" />
                  <span className="journey-card__placeholder-orbit journey-card__placeholder-orbit--two" />
                </div>
              </motion.div>

              <motion.div
                className={`journey-card__face journey-card__back journey-card__back--${card.tone}`}
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

                <div className="journey-card__divider" aria-hidden="true" />

                <ul
                  className="journey-card__features"
                  aria-label={`Что входит: ${card.title.replace('\n', ' ')}`}
                >
                  {card.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <p className="journey-card__description">{card.description}</p>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
