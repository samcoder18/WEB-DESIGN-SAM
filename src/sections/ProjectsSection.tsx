import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';

import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { type Project, projects } from '../data/portfolio';

type ProjectCardProps = {
  isMobile: boolean;
  progress: MotionValue<number>;
  project: Project;
  index: number;
  total: number;
  stageInsetTop: number;
  stackStep: number;
};

const MOBILE_MEDIA_QUERY = '(max-width: 767px)';

function ProjectCardBody({ project, titleId }: { project: Project; titleId: string }) {
  return (
    <>
      <div className="flex flex-wrap items-start gap-5 md:flex-nowrap md:items-center md:gap-10">
        <span className="site-number site-number--dark">{project.number}</span>
        <div className="min-w-[150px] flex-1 pt-3 md:pt-0">
          <p className="site-kicker site-kicker--dark">{project.category}</p>
          <h3 id={titleId} className="site-card-title site-card-title--project site-card-title--dark mt-3">
            {project.name}
          </h3>
        </div>
        <LiveProjectButton projectName={project.name} />
      </div>

      <div className="mt-7 grid min-h-0 flex-1 grid-cols-[0.4fr_0.6fr] gap-4 sm:mt-8 sm:gap-5 md:mt-10 md:gap-6">
        <div className="flex min-h-0 flex-col gap-4 sm:gap-5 md:gap-6">
          <img
            src={project.images[0]}
            alt={`${project.name}, изображение 1`}
            decoding="async"
            loading="lazy"
            className="h-[120px] w-full rounded-[28px] object-cover sm:h-[150px] sm:rounded-[38px] md:h-[210px] md:rounded-[50px] lg:rounded-[60px]"
          />
          <img
            src={project.images[1]}
            alt={`${project.name}, изображение 2`}
            decoding="async"
            loading="lazy"
            className="min-h-0 flex-1 rounded-[28px] object-cover sm:rounded-[38px] md:rounded-[50px] lg:rounded-[60px]"
          />
        </div>
        <img
          src={project.images[2]}
          alt={`${project.name}, главное изображение`}
          decoding="async"
          loading="lazy"
          className="h-full min-h-[260px] w-full rounded-[28px] object-cover sm:min-h-[330px] sm:rounded-[38px] md:min-h-0 md:rounded-[50px] lg:rounded-[60px]"
        />
      </div>
    </>
  );
}

function getCardProgressRange(index: number, total: number) {
  if (index === 0) {
    return { start: 0, end: 0 };
  }

  const availableRangeStart = 0.24;
  const availableRangeEnd = 0.94;
  const segment = (availableRangeEnd - availableRangeStart) / Math.max(total - 1, 1);
  const start = availableRangeStart + (index - 1) * segment;
  const end = start + segment * 0.9;

  return { start, end };
}

function ProjectCard({
  project,
  index,
  total,
  progress,
  isMobile,
  stageInsetTop,
  stackStep,
}: ProjectCardProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const titleId = `project-${project.number}-title`;
  const offscreenY = isMobile ? 560 : 720;
  const { start, end } = getCardProgressRange(index, total);
  const parkedTop = stageInsetTop + stackStep * index;

  const y = useTransform(
    progress,
    [0, start, end, 1],
    index === 0
      ? [0, 0, 0, 0]
      : [offscreenY, offscreenY, 0, 0],
  );

  return (
    <motion.article
      aria-labelledby={titleId}
      className="absolute left-0 right-0 flex min-h-[480px] flex-col overflow-hidden rounded-[40px] border-2 border-frost bg-ink p-5 text-frost shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:min-h-[560px] sm:rounded-[50px] sm:p-7 md:rounded-[60px] md:p-10"
      style={{
        top: parkedTop,
        height: `calc(100% - ${parkedTop}px)`,
        y: shouldReduceMotion ? 0 : y,
        transformOrigin: 'top center',
        zIndex: index + 1,
      }}
    >
      <ProjectCardBody project={project} titleId={titleId} />
    </motion.article>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const stackTop = isMobile ? 124 : 156;
  const sceneInsetTop = 0;
  const stackStep = isMobile ? 58 : 86;
  const stickyHeight = isMobile ? 'calc(100svh - 9.5rem)' : 'calc(100svh - 11.5rem)';
  const sectionHeight = shouldReduceMotion
    ? 'auto'
    : `${145 + (projects.length - 1) * (isMobile ? 108 : 132)}svh`;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const syncViewportState = (event?: MediaQueryListEvent) => {
      setIsMobile(event ? event.matches : mediaQuery.matches);
    };

    syncViewportState();
    mediaQuery.addEventListener('change', syncViewportState);

    return () => mediaQuery.removeEventListener('change', syncViewportState);
  }, []);

  return (
    <section
      id="проекты"
      className="projects-section relative z-10 px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
    >
      <div className="projects-section__inner">
        <FadeIn y={40}>
          <h2 className="projects-heading mb-20 text-center sm:mb-24 md:mb-32">Работы</h2>
        </FadeIn>

        {shouldReduceMotion ? (
          <div className="mx-auto max-w-7xl space-y-6">
            {projects.map((project) => (
              <article
                key={project.name}
                aria-labelledby={`project-${project.number}-title`}
                className="flex min-h-[480px] flex-col overflow-hidden rounded-[40px] border-2 border-frost bg-ink p-5 text-frost shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:min-h-[560px] sm:rounded-[50px] sm:p-7 md:rounded-[60px] md:p-10"
              >
                <ProjectCardBody project={project} titleId={`project-${project.number}-title`} />
              </article>
            ))}
          </div>
        ) : (
          <div ref={sectionRef} className="relative mx-auto max-w-7xl" style={{ height: sectionHeight }}>
            <div className="sticky overflow-hidden" style={{ top: stackTop, height: stickyHeight }}>
              <div className="relative h-full overflow-hidden">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.name}
                    isMobile={isMobile}
                    progress={scrollYProgress}
                    project={project}
                    index={index}
                    total={projects.length}
                    stageInsetTop={sceneInsetTop}
                    stackStep={stackStep}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
