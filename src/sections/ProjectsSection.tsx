import { LiveProjectButton } from '../components/LiveProjectButton';
import { type Project, projects } from '../data/portfolio';

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

export function ProjectsSection() {
  return (
    <section
      id="проекты"
      className="projects-section relative z-10 px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36"
    >
      <div className="projects-section__inner">
        <h2 className="projects-heading mb-20 text-center sm:mb-24 md:mb-32">Работы</h2>

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
      </div>
    </section>
  );
}
