import { ContactSection } from '../sections/ContactSection';
import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ServicesSection } from '../sections/ServicesSection';
import { VideoAboutSection } from '../sections/VideoAboutSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <VideoAboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
