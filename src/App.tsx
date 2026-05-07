import { SiteNavbar } from './components/SiteNavbar';
import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';

export default function App() {
  return (
    <>
      <a
        href="#content"
        className="skip-link pointer-events-none fixed left-4 top-4 z-[100] rounded-full bg-frost px-5 py-3 font-display text-xs font-bold uppercase leading-none text-ink opacity-0 outline-none transition focus:pointer-events-auto focus:opacity-100"
      >
        Перейти к содержанию
      </a>
      <SiteNavbar />
      <main id="content" className="min-h-screen overflow-x-clip bg-ink">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
    </>
  );
}
