import { SiteNavbar } from './components/SiteNavbar';
import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';
import { JourneyCardsSection } from './sections/JourneyCardsSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { StatsSection } from './sections/StatsSection';

export default function App() {
  return (
    <>
      <a
        href="#content"
        className="skip-link pointer-events-none fixed left-4 top-4 z-[100] rounded-full bg-frost px-5 py-3 font-sans text-xs font-bold uppercase leading-none text-ink opacity-0 outline-none transition focus:pointer-events-auto focus:opacity-100"
      >
        Перейти к содержанию
      </a>
      <SiteNavbar />
      <main id="content" className="site-background-surface min-h-screen overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <StatsSection />
        <section className="section-bridge-heading px-4 sm:px-6 md:px-10">
          <div className="section-bridge-heading__inner">
            <h2 id="services-heading" className="section-bridge-heading__title">
              Услуги
            </h2>
          </div>
        </section>
        <JourneyCardsSection />
        <ProjectsSection />
      </main>
    </>
  );
}
