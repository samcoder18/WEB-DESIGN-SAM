## 1. Project Setup

- [x] 1.1 Scaffold or update the Vite React TypeScript application structure.
- [x] 1.2 Install and configure React, React DOM, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.
- [x] 1.3 Configure Tailwind content paths and base app entry files.
- [x] 1.4 Add global CSS reset, Manrope Google Font import, `#0C0C0C` root backgrounds, main wrapper overflow clipping, and `.hero-heading` gradient text utility.

## 2. Shared Content And Components

- [x] 2.1 Create typed constants for nav links, marquee GIF URLs, decorative image URLs, service rows, and project card image data.
- [x] 2.2 Implement `ContactButton` with the required gradient, outline, inset shadow, sizing, typography, and "Связаться" label.
- [x] 2.3 Implement `LiveProjectButton` with the required ghost pill styling, hover state, sizing, typography, and "Смотреть проект" label.
- [x] 2.4 Implement `FadeIn` with Framer Motion viewport animation, configurable delay/duration/x/y, one-time reveal, and the required easing.
- [x] 2.5 Implement `Magnet` with pointer tracking, padding activation, strength-based translate3d transform, active/inactive transitions, and touch-safe fallback.
- [x] 2.6 Implement `AnimatedText` with character-level scroll opacity animation using Framer Motion `useScroll` offsets `start 0.8` and `end 0.2`.

## 3. Section Implementation

- [x] 3.1 Implement `HeroSection` with full-screen layout, responsive navbar, massive gradient heading, bottom tagline, contact CTA, magnetic portrait, and staggered fade-in timings.
- [x] 3.2 Implement `MarqueeSection` with two tripled GIF rows, the specified image split, tile dimensions, passive scroll offset calculation, and opposing translate directions.
- [x] 3.3 Implement `AboutSection` with full-height centered layout, four decorative corner images, gradient heading, animated Russian paragraph, contact CTA, and requested responsive spacing.
- [x] 3.4 Implement `ServicesSection` with white rounded-top treatment, "Услуги" heading, five numbered service rows, borders, descriptions, and staggered reveal.
- [x] 3.5 Implement `ProjectsSection` with dark rounded-top treatment, "Проект" heading, three sticky stacking project cards, scaling transforms, ghost CTAs, and the required image grid.

## 4. Assembly And Verification

- [x] 4.1 Compose the app in the required order: `HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, `ProjectsSection`.
- [x] 4.2 Verify TypeScript and production build complete successfully.
- [x] 4.3 Run the app locally and inspect mobile, tablet, and desktop viewports for section order, responsive sizing, image rendering, sticky card behavior, and text overlap.
- [x] 4.4 Check that marquee movement, portrait magnet behavior, fade-in animations, animated text reveal, and project card scaling are functional.
