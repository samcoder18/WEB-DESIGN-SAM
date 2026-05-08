import { useRef } from 'react';
import {
  motion,
  type MotionValue,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

type StageRange = {
  input: [number, number, number, number];
  final?: boolean;
};

type StageOutput = [number, number, number, number];

type AboutStage = {
  eyebrow: string;
  heading: string;
  body: string;
  range: StageRange;
};

const aboutStages: AboutStage[] = [
  {
    eyebrow: 'НЕ ПРОСТО КАРТИНКА',
    heading: 'Визуал должен\nработать',
    body:
      'Хороший дизайн не просто украшает. Он удерживает внимание, объясняет ценность и формирует первое впечатление о бренде.',
    range: { input: [0, 0.08, 0.18, 0.28] },
  },
  {
    eyebrow: '3D / BRANDING / WEB',
    heading: 'Собираю стиль\nв единую систему',
    body:
      'Объединяю форму, цвет, композицию, движение и интерфейс так, чтобы проект ощущался цельным, современным и запоминающимся.',
    range: { input: [0.24, 0.34, 0.44, 0.54] },
  },
  {
    eyebrow: 'ДЕТАЛИ РЕШАЮТ',
    heading: 'Каждый экран\nдолжен убеждать',
    body:
      'Я работаю не только над вау-эффектом, но и над структурой, читаемостью, ритмом, акцентами и доверием к продукту.',
    range: { input: [0.5, 0.6, 0.7, 0.8] },
  },
  {
    eyebrow: 'РЕЗУЛЬТАТ',
    heading: 'Идея превращается\nв сильный образ',
    body:
      'От первого визуального направления до финальной посадочной страницы — я собираю проект так, чтобы он выглядел профессионально и оставался в памяти.',
    range: { input: [0.76, 0.84, 0.92, 1], final: true },
  },
];

function mapStageValue(value: number, input: StageRange['input'], output: StageOutput) {
  if (value <= input[0]) {
    return output[0];
  }

  for (let index = 1; index < input.length; index += 1) {
    if (value <= input[index]) {
      const previousInput = input[index - 1];
      const nextInput = input[index];
      const segmentProgress = (value - previousInput) / (nextInput - previousInput);

      return output[index - 1] + (output[index] - output[index - 1]) * segmentProgress;
    }
  }

  return output[output.length - 1];
}

type StoryStageProps = {
  stage: AboutStage;
  index: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
};

function StoryStage({ stage, index, progress, reducedMotion }: StoryStageProps) {
  const opacityOutput: StageOutput = stage.range.final ? [0, 1, 1, 0] : [0, 1, 1, 0];
  const yOutput: StageOutput = stage.range.final ? [40, 0, 0, -30] : [40, 0, 0, -40];
  const scaleOutput: StageOutput = stage.range.final ? [1.06, 1, 1, 0.98] : [1.06, 1, 1, 0.96];
  const blurOutput: StageOutput = stage.range.final ? [10, 0, 0, 8] : [10, 0, 0, 10];

  const opacity = useTransform(progress, (value) =>
    mapStageValue(value, stage.range.input, opacityOutput),
  );
  const y = useTransform(progress, (value) => mapStageValue(value, stage.range.input, yOutput));
  const scale = useTransform(progress, (value) =>
    mapStageValue(value, stage.range.input, scaleOutput),
  );
  const blur = useTransform(progress, (value) =>
    mapStageValue(value, stage.range.input, blurOutput),
  );
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center px-5 text-center sm:px-8 md:px-10 ${
        stage.range.final ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{
        opacity: reducedMotion ? (stage.range.final ? 1 : 0) : opacity,
        y: reducedMotion ? 0 : y,
        scale: reducedMotion ? 1 : scale,
        filter: reducedMotion ? 'blur(0px)' : filter,
      }}
      aria-hidden={!stage.range.final}
      data-about-stage={index + 1}
    >
      <div className="flex w-full flex-col items-center">
        <p className="site-kicker site-kicker--dark">
          {stage.eyebrow}
        </p>

        <h2 className="hero-heading site-display-heading site-display-heading--story mt-7 whitespace-pre-line sm:mt-8">
          {stage.heading}
        </h2>

        <p className="site-body site-body--large site-body--dark mt-7 max-w-[320px] text-center sm:mt-8 md:max-w-[720px]">
          {stage.body}
        </p>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="обо-мне"
      ref={containerRef}
      aria-labelledby="about-heading"
      className="relative h-[220vh] bg-transparent px-5 text-frost sm:px-8 md:h-[280vh] md:px-10"
    >
      <div className="sr-only">
        <h2 id="about-heading">Обо мне</h2>
        {aboutStages.map((stage) => (
          <div key={stage.eyebrow}>
            <h3>{stage.heading.replace('\n', ' ')}</h3>
            <p>{stage.body}</p>
          </div>
        ))}
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="site-background-veil absolute inset-0" />

        <div className="relative h-full">
          {aboutStages.map((stage, index) => (
            <StoryStage
              key={stage.eyebrow}
              stage={stage}
              index={index}
              progress={scrollYProgress}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
