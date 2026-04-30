## ADDED Requirements

### Requirement: Portfolio App Shell And Global Theme
The system SHALL render a single-page React, TypeScript, and Tailwind CSS landing page titled "Сэм -- 3D-креатор" with the Manrope font, a `#0C0C0C` global background, a global reset, overflow clipping on the main wrapper, and a reusable `.hero-heading` gradient text class using `linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`.

#### Scenario: Global page styling is applied
- **WHEN** the landing page loads
- **THEN** `html`, `body`, `#root`, and the main wrapper use `#0C0C0C`, Manrope is the active font family, default margins and padding are reset, and gradient headings render with clipped gradient text.

#### Scenario: Sections render in the required order
- **WHEN** a user scrolls from the top of the page
- **THEN** the visible content order is `HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, and `ProjectsSection`.

### Requirement: Hero Section
The system SHALL render a full viewport-height hero with a horizontal uppercase nav containing "Обо мне", "Цены", "Проекты", and "Контакты"; a massive gradient heading "Привет, я Сэм"; a bottom creator tagline; a gradient "Связаться" contact button; and an absolutely centered magnetic portrait image from the provided Figma asset URL.

#### Scenario: Hero content is visible on first load
- **WHEN** the page opens at the top
- **THEN** the hero fills the viewport, the nav links are evenly spaced, the heading uses `.hero-heading`, the tagline reads "3D-креатор, создающий яркие и незабываемые проекты", the contact button reads "Связаться", and the portrait image is centered over the hero composition.

#### Scenario: Hero motion follows the requested timing
- **WHEN** the hero enters the viewport
- **THEN** the nav, heading, tagline, contact button, and portrait animate with fade-in motion using their specified stagger delays and y/x offsets.

#### Scenario: Portrait magnet responds to pointer movement
- **WHEN** a pointer moves within the configured magnet padding around the portrait
- **THEN** the portrait translates toward the pointer using the configured strength and returns smoothly when inactive.

### Requirement: Scroll-Reactive Marquee Section
The system SHALL render two rows of portfolio GIF tiles on the dark background using the 21 provided `motionsites.ai` URLs, with the first 11 images in row 1 and the remaining 10 images in row 2, each row tripled for seamless scrolling.

#### Scenario: Marquee rows transform on scroll
- **WHEN** the user scrolls through the marquee section
- **THEN** row 1 moves right with `translateX(offset - 200)` and row 2 moves left with `translateX(-(offset - 200))`, where `offset` is `(window.scrollY - sectionTop + window.innerHeight) * 0.3`.

#### Scenario: Marquee image tiles stay visually stable
- **WHEN** marquee images render
- **THEN** each tile is 420px by 270px, rounded, object-covered, lazy loaded, separated by a 12px gap, and moved using transform with `will-change`.

### Requirement: About Section
The system SHALL render a centered full-height about section with the heading "Обо мне", four absolutely positioned decorative 3D images from the provided Figma asset URLs, a scroll-revealed animated paragraph, and a "Связаться" contact button.

#### Scenario: About section content and imagery render
- **WHEN** the about section enters the viewport
- **THEN** the heading, four corner decorative images, paragraph text, and contact button are visible with the requested responsive sizing and fade-in direction.

#### Scenario: About paragraph reveals by character
- **WHEN** the user scrolls through the paragraph
- **THEN** each character animates opacity from 0.2 to 1 according to scroll progress using offsets `start 0.8` and `end 0.2`.

### Requirement: Services Section
The system SHALL render a white services section with rounded top corners, the heading "Услуги", and five numbered service rows for `3D-моделирование`, `Рендеринг`, `Моушн-дизайн`, `Брендинг`, and `Веб-дизайн` with the supplied Russian descriptions.

#### Scenario: Services list matches the requested content
- **WHEN** the services section is viewed
- **THEN** it shows rows numbered `01` through `05` in order, each row includes the required service name and description, and rows are separated by subtle 1px borders.

#### Scenario: Services section uses the light visual treatment
- **WHEN** the services section appears after the about section
- **THEN** the background is `#FFFFFF`, text is `#0C0C0C`, top corners are rounded responsively, and service rows animate in with staggered fade-in delays.

### Requirement: Sticky Projects Section
The system SHALL render a dark projects section with rounded top corners, the gradient heading "Проект", and three sticky project cards for "Nextlevel Studio", "Aura Brand Identity", and "Solaris Digital" using the provided category labels and CloudFront image URLs.

#### Scenario: Project cards stack while scrolling
- **WHEN** the user scrolls through the projects section
- **THEN** each project card is sticky near the top of the viewport, vertically offset by its index, and scales toward `1 - (totalCards - 1 - index) * 0.03` as later cards stack over it.

#### Scenario: Project card layout matches the requested structure
- **WHEN** a project card is visible
- **THEN** it shows a huge project number, category label, project name, a "Смотреть проект" ghost button, two stacked images in the left column, and one tall image in the right column with large rounded corners and a `#D7E2EA` border around the card.

### Requirement: Reusable Components And Animations
The system SHALL provide reusable `ContactButton`, `LiveProjectButton`, `FadeIn`, `Magnet`, and `AnimatedText` components that implement the requested labels, styling, transition behavior, and Framer Motion integration.

#### Scenario: Buttons match the visual contract
- **WHEN** CTA components render
- **THEN** `ContactButton` is a rounded gradient pill labeled "Связаться" with the requested outline and inset shadow, and `LiveProjectButton` is a rounded ghost pill labeled "Смотреть проект" with a `#D7E2EA` border and hover background.

#### Scenario: FadeIn handles dynamic element animation
- **WHEN** a section passes the viewport threshold
- **THEN** `FadeIn` animates once with configurable delay, duration, x, and y values using easing `[0.25, 0.1, 0.25, 1]`.

### Requirement: Responsive Behavior And Dependency Baseline
The system SHALL use Tailwind default breakpoints with mobile-first responsive sizing, fluid `clamp()` typography where specified, stable dimensions for fixed-format elements, and the requested dependencies: React, React DOM, Framer Motion, Lucide React, Tailwind CSS, Vite, and TypeScript.

#### Scenario: Layout adapts across breakpoints
- **WHEN** the page is viewed at mobile, tablet, desktop, and ultra-wide widths
- **THEN** typography, portrait size, section padding, image dimensions, sticky card spacing, and button sizing follow the requested responsive classes without incoherent overlap.

#### Scenario: Required dependencies are available
- **WHEN** the application is installed and built
- **THEN** the package configuration includes the requested libraries at compatible versions and the app builds as a TypeScript React Vite project.
