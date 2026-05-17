import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

import { FadeIn } from '../components/FadeIn';

const stats = [
  {
    value: '7+',
    title: 'Лет опыта в дизайне',
    description:
      'За эти годы я выстроила рабочий подход, в котором визуальная идея не существует отдельно от задачи бизнеса. Каждый проект собирается как цельная система: от первого впечатления и типографики до композиции, ритма, подачи и общего ощущения бренда на сайте, чтобы результат выглядел убедительно и работал на доверие с первых секунд.',
  },
  {
    value: '35+',
    title: 'Проектов реализовано',
    description:
      'В портфолио входят лендинги, многостраничные сайты, айдентика, презентации и digital-материалы для разных задач и форматов. Такой объём практики помогает быстрее находить точное визуальное решение, собирать проект без визуального шума и доводить его до состояния, в котором он выглядит убедительно не только в макете, но и в реальной коммуникации.',
  },
  {
    value: '15+',
    title: 'Ниш и направлений',
    description:
      'От личных брендов и экспертных продуктов до студий, сервисов и коммерческих запусков. Работа с таким диапазоном ниш даёт возможность не повторяться визуально, а подбирать язык, который действительно соответствует характеру, масштабу, аудитории и задаче конкретного проекта, а не выглядит как универсальный шаблон.',
  },
  {
    value: '24',
    title: 'Часа до запуска',
    description:
      'Если у проекта есть чёткая задача и быстрый дедлайн, я могу собрать сильный стартовый результат в сжатые сроки. Это не про потоковый шаблонный дизайн, а про собранный и управляемый процесс, в котором идея быстро превращается в аккуратное, цельное и готовое к запуску решение.',
  },
] as const;

function CountUpValue({ value }: { value: string }) {
  const numericValue = useMemo(() => Number.parseInt(value, 10), [value]);
  const suffix = value.replace(String(numericValue), '');
  const reducedMotion = Boolean(useReducedMotion());
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [displayValue, setDisplayValue] = useState(reducedMotion ? numericValue : 0);

  useEffect(() => {
    if (!Number.isFinite(numericValue)) {
      return;
    }

    if (reducedMotion) {
      setDisplayValue(numericValue);
      return;
    }

    if (!isInView) {
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress) * (1 - progress);

      setDisplayValue(Math.round(numericValue * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, numericValue, reducedMotion]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="stats-section px-4 text-frost sm:px-6 md:px-10"
    >
      <div className="stats-section__inner">
        <div className="sr-only">
          <h2 id="stats-heading">Опыт и результаты</h2>
        </div>

        {stats.map((item, index) => (
          <FadeIn
            key={item.title}
            as="article"
            delay={index * 0.08}
            y={36}
            className="stats-row"
          >
            <div className="stats-row__value" aria-hidden="true">
              <CountUpValue value={item.value} />
            </div>
            <div className="stats-row__content">
              <h3 className="stats-row__title">{item.title}</h3>
              <p className="stats-row__description">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
