import { AboutSection } from '../sections/AboutSection';
import { HeroSection } from '../sections/HeroSection';
import { MarqueeSection } from '../sections/MarqueeSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { StatsSection } from '../sections/StatsSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <ProjectsSection />
    </>
  );
}
