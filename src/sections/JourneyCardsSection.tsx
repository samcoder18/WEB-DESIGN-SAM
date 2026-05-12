import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

import { type Service, services } from '../data/portfolio';

type JourneyCard = {
  assetSrc: string;
  title: string;
  variant: Service['variant'];
  visual: 'left' | 'middle' | 'right';
};

const serviceTitles = ['Иммерсивные лендинги', 'Сайты под ключ', 'Брендинг и система'] as const;
const cardVisuals: JourneyCard['visual'][] = ['left', 'middle', 'right'];
const serviceCardAssetUrls: Record<Service['variant'], string> = {
  immersive: '/services-card-silver.png',
  system: '/services-card-red.png',
  identity: '/services-card-black.png',
};

const journeyCards: JourneyCard[] = services.map((service, index) => ({
  assetSrc: serviceCardAssetUrls[service.variant],
  title: serviceTitles[index] ?? service.name,
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

  const stageScale = useTransform(scrollYProgress, [0, 0.24], [1.24, 1]);
  const stageY = useTransform(scrollYProgress, [0, 0.24], [44, 0]);

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

  const leftX = useTransform(scrollYProgress, [0.18, 0.34, 0.72, 0.9], [0, -10, 10, 54]);
  const middleX = useTransform(scrollYProgress, [0.18, 0.34], [0, 0]);
  const rightX = useTransform(scrollYProgress, [0.18, 0.34, 0.72, 0.9], [0, 10, -10, -54]);

  const leftY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 20, 52]);
  const middleY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, -6, -14]);
  const rightY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 18, 48]);

  const leftRotateZ = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, -10, -14]);
  const middleRotateZ = useTransform(scrollYProgress, [0.58, 0.76], [0, 0]);
  const rightRotateZ = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 9, 13]);

  const leftRotateY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, 1, 0]);
  const middleRotateY = useTransform(scrollYProgress, [0.58, 0.76], [0, 0]);
  const rightRotateY = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [0, -1, 0]);

  const leftScale = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [1, 1.09, 1.22]);
  const middleScale = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [1, 1.14, 1.28]);
  const rightScale = useTransform(scrollYProgress, [0.58, 0.76, 0.9], [1, 1.09, 1.22]);

  const xValues = [leftX, middleX, rightX];
  const yValues = [leftY, middleY, rightY];
  const rotateZValues = [leftRotateZ, middleRotateZ, rightRotateZ];
  const rotateYValues = [leftRotateY, middleRotateY, rightRotateY];
  const scaleValues = [leftScale, middleScale, rightScale];

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
          className={`journey-cards-stage${
            reducedMotion ? ' journey-cards-stage--reduced' : ''
          }`}
          transition={{ duration: 0 }}
          style={
            reducedMotion
              ? undefined
              : {
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
                      scale: scaleValues[index],
                      x: xValues[index],
                      y: yValues[index],
                      zIndex: index === 1 ? 4 : 2,
                    }
              }
            >
              <div className="journey-card__shell">
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
                    <span className="journey-card__surface" aria-hidden="true" />
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
                  <div className="journey-card__screen">
                    <span id={`journey-card-${index + 1}-title`} className="sr-only">
                      {card.title}
                    </span>
                    <img
                      alt=""
                      aria-hidden="true"
                      className={`journey-card__asset journey-card__asset--${card.variant}`}
                      decoding="async"
                      draggable="false"
                      src={card.assetSrc}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
