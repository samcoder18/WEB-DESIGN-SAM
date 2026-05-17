import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ContactButton } from '../components/ContactButton';

const withBaseUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const floatingAssets = [
  {
    id: 'blueClover',
    src: withBaseUrl('about-blue-clover.png'),
    className: 'video-about-asset video-about-asset--blue-clover',
  },
  {
    id: 'heart',
    src: withBaseUrl('about-heart.png'),
    className: 'video-about-asset video-about-asset--heart',
  },
  {
    id: 'flower',
    src: withBaseUrl('about-flower.png'),
    className: 'video-about-asset video-about-asset--flower',
  },
] as const;

type TextMotion = {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
};

type AssetMotion = TextMotion & {
  x: MotionValue<number>;
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  filter: MotionValue<string>;
};

function useAssetMotion(
  progress: MotionValue<number>,
  input: number[],
  x: number[],
  y: number[],
  rotate: number[],
  scale: number[],
): AssetMotion {
  return {
    opacity: useTransform(progress, input, [0, 0.85, 1, 1]),
    x: useTransform(progress, input, x),
    y: useTransform(progress, input, y),
    rotate: useTransform(progress, input, rotate),
    scale: useTransform(progress, input, scale),
    filter: useTransform(progress, input, ['blur(10px)', 'blur(3px)', 'blur(0px)', 'blur(0px)']),
  };
}

export function VideoAboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 96%', 'end 12%'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [22, -52]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.14, 0.88, 1], [0.92, 1, 1, 0.94]);
  const headingY = useTransform(scrollYProgress, [0, 0.16], [42, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.12, 0.26], [0.22, 0.68, 1]);
  const headingColor = useTransform(
    scrollYProgress,
    [0, 0.16, 0.3],
    ['rgba(244, 248, 251, 0.18)', 'rgba(244, 248, 251, 0.52)', '#ffffff'],
  );
  const copyMotion: TextMotion = {
    opacity: useTransform(scrollYProgress, [0.18, 0.3], [0, 1]),
    y: useTransform(scrollYProgress, [0.18, 0.3], [30, 0]),
  };
  const buttonOpacity = useTransform(scrollYProgress, [0.26, 0.38], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.26, 0.38], [26, 0]);
  const buttonScale = useTransform(scrollYProgress, [0.26, 0.38], [0.96, 1]);
  const blueCloverMotion = useAssetMotion(
    scrollYProgress,
    [0.18, 0.3, 0.44, 1],
    [210, 92, 0, -24],
    [-92, -36, 0, -24],
    [22, 12, 6, 10],
    [0.68, 0.92, 1, 1.04],
  );
  const heartMotion = useAssetMotion(
    scrollYProgress,
    [0.3, 0.42, 0.56, 1],
    [-190, -78, 0, 22],
    [110, 44, 0, 16],
    [-24, -15, -7, -11],
    [0.68, 0.9, 1, 1.05],
  );
  const flowerMotion = useAssetMotion(
    scrollYProgress,
    [0.32, 0.44, 0.58, 1],
    [185, 76, 0, -20],
    [72, 30, 0, -18],
    [18, 10, 4, 8],
    [0.7, 0.93, 1, 1.06],
  );
  const assetMotionById: Record<(typeof floatingAssets)[number]['id'], AssetMotion> = {
    blueClover: blueCloverMotion,
    heart: heartMotion,
    flower: flowerMotion,
  };

  return (
    <section
      ref={sectionRef}
      id="обо-мне"
      aria-labelledby="video-about-heading"
      className="video-about-section relative overflow-hidden px-4 py-20 text-frost sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      <span id="video-about" className="absolute top-0" aria-hidden="true" />
      <div className="video-about-shell relative mx-auto flex min-h-[36rem] w-full max-w-[1880px] items-center justify-center overflow-hidden px-5 py-24 sm:min-h-[42rem] sm:px-8 sm:py-28 md:min-h-[48rem] md:px-12 md:py-32">
        <div className="video-about-noise absolute inset-0" aria-hidden="true" />
        {floatingAssets.map((asset) => (
          <motion.span
            key={asset.id}
            aria-hidden="true"
            className={asset.className}
            style={shouldReduceMotion ? undefined : assetMotionById[asset.id]}
          >
            <img
              src={asset.src}
              alt=""
              className="video-about-asset__image"
              loading="lazy"
              decoding="async"
            />
          </motion.span>
        ))}

        <motion.div
          className="relative z-10 mx-auto grid max-w-[56rem] justify-items-center text-center"
          style={shouldReduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <h2 id="video-about-heading" className="video-about-title" aria-label="Обо мне">
            <motion.span
              aria-hidden="true"
              className="video-about-title-line"
              style={
                shouldReduceMotion
                  ? undefined
                  : { y: headingY, opacity: headingOpacity, color: headingColor }
              }
            >
              ОБО МНЕ
            </motion.span>
          </h2>
          <motion.p
            className="video-about-copy"
            style={shouldReduceMotion ? undefined : copyMotion}
          >
            Проектирую веб-дизайн для брендов и продуктов, которым нужен не просто красивый сайт,
            а сильный digital-образ. От первого экрана до визуальной системы в целом помогаю собрать цельное впечатление,
            чтобы бренд воспринимался смело, собранно и дорого.
          </motion.p>
          <motion.div
            style={
              shouldReduceMotion
                ? undefined
                : { opacity: buttonOpacity, y: buttonY, scale: buttonScale }
            }
          >
            <ContactButton className="video-about-button" label="Связаться" showIcon={false} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
