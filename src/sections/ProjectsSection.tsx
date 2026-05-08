import { useRef } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { type Project, projects } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
};

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const titleId = `project-${project.number}-title`;
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const transform = useMotionTemplate`scale(${scale})`;

  return (
    <div ref={wrapperRef} className="h-[85vh]">
      <motion.article
        aria-labelledby={titleId}
        className="sticky flex max-h-[calc(100vh-7rem)] min-h-[560px] flex-col overflow-hidden rounded-[40px] border-2 border-frost bg-ink p-4 text-frost [--project-top:6rem] sm:rounded-[50px] sm:p-6 md:max-h-[calc(100vh-9rem)] md:rounded-[60px] md:p-8 md:[--project-top:8rem]"
        style={{
          top: `calc(var(--project-top) + ${index * 28}px)`,
          transform,
          transformOrigin: 'top center',
          zIndex: index + 1,
        }}
      >
        <div className="flex flex-wrap items-start gap-4 md:flex-nowrap md:items-center md:gap-8">
          <span className="site-number site-number--dark">
            {project.number}
          </span>
          <div className="min-w-[150px] flex-1 pt-2 md:pt-0">
            <p className="site-kicker site-kicker--dark">
              {project.category}
            </p>
            <h3
              id={titleId}
              className="site-card-title site-card-title--project site-card-title--dark mt-2"
            >
              {project.name}
            </h3>
          </div>
          <LiveProjectButton projectName={project.name} />
        </div>

        <div className="mt-5 grid min-h-0 flex-1 grid-cols-[0.4fr_0.6fr] gap-3 sm:mt-6 md:mt-8">
          <div className="flex min-h-0 flex-col gap-3">
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
      </motion.article>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="проекты"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-transparent px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="site-display-heading site-display-heading--frost mb-16 sm:mb-20 md:mb-28">
          Проект
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
