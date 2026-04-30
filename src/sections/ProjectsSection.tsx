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
        className="sticky flex max-h-[calc(100vh-7rem)] min-h-[560px] flex-col overflow-hidden rounded-[40px] border-2 border-frost bg-ink p-4 text-frost [--project-top:6rem] sm:rounded-[50px] sm:p-6 md:max-h-[calc(100vh-9rem)] md:rounded-[60px] md:p-8 md:[--project-top:8rem]"
        style={{
          top: `calc(var(--project-top) + ${index * 28}px)`,
          transform,
          transformOrigin: 'top center',
          zIndex: index + 1,
        }}
      >
        <div className="flex flex-wrap items-start gap-4 md:flex-nowrap md:items-center md:gap-8">
          <span className="text-[3rem] font-black leading-none sm:text-[5rem] md:text-[7rem] lg:text-[8.75rem]">
            {project.number}
          </span>
          <div className="min-w-[150px] flex-1 pt-2 md:pt-0">
            <p className="text-xs font-medium uppercase text-frost/70 sm:text-sm md:text-base">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-medium uppercase leading-tight sm:text-3xl md:text-5xl">
              {project.name}
            </h3>
          </div>
          <LiveProjectButton className="px-5 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm" />
        </div>

        <div className="mt-5 grid min-h-0 flex-1 grid-cols-[0.4fr_0.6fr] gap-3 sm:mt-6 md:mt-8">
          <div className="flex min-h-0 flex-col gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name}, изображение 1`}
              loading="lazy"
              className="h-[120px] w-full rounded-[28px] object-cover sm:h-[150px] sm:rounded-[38px] md:h-[210px] md:rounded-[50px] lg:rounded-[60px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name}, изображение 2`}
              loading="lazy"
              className="min-h-0 flex-1 rounded-[28px] object-cover sm:rounded-[38px] md:rounded-[50px] lg:rounded-[60px]"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name}, главное изображение`}
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
      className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading mb-16 text-center text-[3rem] font-black uppercase leading-none sm:mb-20 sm:text-[5.5rem] md:mb-28 md:text-[7.5rem] lg:text-[10rem]">
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
