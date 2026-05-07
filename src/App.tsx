import { SiteNavbar } from './components/SiteNavbar';
import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';

export default function App() {
  return (
    <>
      <SiteNavbar />
      <main className="min-h-screen overflow-x-clip bg-ink">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
    </>
  );
}
