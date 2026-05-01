# premium-about-value-section Specification

## Purpose
TBD - created by archiving change rebuild-about-motion-storytelling-section. Update Purpose after archive.
## Requirements
### Requirement: Single Dark About Value Section
The system SHALL replace the current about experience with exactly one premium dark typographic about/value section between the marquee and services sections.

#### Scenario: Section order contains one about/value block
- **WHEN** the portfolio page renders
- **THEN** the visible section order is `HeroSection`, `MarqueeSection`, the rebuilt `AboutSection`, `ServicesSection`, and `ProjectsSection` with no additional about/story section between them.

#### Scenario: Section replaces prior visual direction
- **WHEN** the rebuilt about/value section is visible
- **THEN** it does not display beige/light backgrounds, images, icons, orbit imagery, decorative 3D objects, pills, tags, floating graphics, serif typography, script typography, or the previous "Sam / Собираю смысл..." direction.

#### Scenario: Existing page identity is preserved
- **WHEN** the section is viewed after the marquee
- **THEN** it uses `#0C0C0C` background, `#D7E2EA` body text, Manrope-only typography, and the existing `.hero-heading` gradient so it feels native to the dark 3D creator portfolio.

### Requirement: Five Scroll-Driven Story Stages
The system SHALL present five scroll-driven typographic stages that explain Sam's value through large centered statements.

#### Scenario: Stage 1 content renders
- **WHEN** stage 1 is active
- **THEN** the eyebrow reads "ОБО МНЕ", the main heading reads "Я делаю проекты\nвизуально сильнее", and supporting text reads "Создаю 3D, брендинг и веб-дизайн, которые помогают продукту выглядеть дороже, увереннее и заметнее."

#### Scenario: Stage 2 content renders
- **WHEN** stage 2 is active
- **THEN** the eyebrow reads "НЕ ПРОСТО КАРТИНКА", the main heading reads "Визуал должен\nработать", and supporting text reads "Хороший дизайн не просто украшает. Он удерживает внимание, объясняет ценность и формирует первое впечатление о бренде."

#### Scenario: Stage 3 content renders
- **WHEN** stage 3 is active
- **THEN** the eyebrow reads "3D / BRANDING / WEB", the main heading reads "Собираю стиль\nв единую систему", and supporting text reads "Объединяю форму, цвет, композицию, движение и интерфейс так, чтобы проект ощущался цельным, современным и запоминающимся."

#### Scenario: Stage 4 content renders
- **WHEN** stage 4 is active
- **THEN** the eyebrow reads "ДЕТАЛИ РЕШАЮТ", the main heading reads "Каждый экран\nдолжен убеждать", and supporting text reads "Я работаю не только над вау-эффектом, но и над структурой, читаемостью, ритмом, акцентами и доверием к продукту."

#### Scenario: Stage 5 content renders
- **WHEN** stage 5 is active
- **THEN** the eyebrow reads "РЕЗУЛЬТАТ", the main heading reads "Идея превращается\nв сильный образ", supporting text reads "От первого визуального направления до финальной посадочной страницы — я собираю проект так, чтобы он выглядел профессионально и оставался в памяти.", and the CTA button label reads "СВЯЗАТЬСЯ".

### Requirement: Sticky Scroll Layout
The system SHALL implement the rebuilt section as a sticky scroll-driven storytelling block with controlled height and centered composition.

#### Scenario: Section height follows viewport rules
- **WHEN** the page is viewed on mobile
- **THEN** the rebuilt about/value section uses `h-[220vh]`.

#### Scenario: Desktop section height follows viewport rules
- **WHEN** the page is viewed at desktop breakpoint or wider
- **THEN** the rebuilt about/value section uses `md:h-[280vh]`.

#### Scenario: Sticky viewport contains stages
- **WHEN** the user scrolls through the rebuilt section
- **THEN** its inner container is `sticky top-0 h-screen overflow-hidden`, and each stage is absolutely centered within the sticky viewport.

#### Scenario: Text remains the only visual focus
- **WHEN** a stage is active
- **THEN** the centered eyebrow, main heading, supporting text, and final-stage CTA are the only meaningful visual elements, with strong negative space around them.

### Requirement: Stage Animation Timing
The system SHALL drive all five stages from section scroll progress using `useRef`, `useScroll`, and `useTransform` from `framer-motion`.

#### Scenario: Stage 1 timing is applied
- **WHEN** scroll progress moves from `0.00` to `0.20`
- **THEN** stage 1 fades in from `0.00` to `0.06`, stays from `0.06` to `0.14`, and fades out from `0.14` to `0.20`.

#### Scenario: Stage 2 timing is applied
- **WHEN** scroll progress moves from `0.16` to `0.38`
- **THEN** stage 2 fades in from `0.16` to `0.22`, stays from `0.22` to `0.30`, and fades out from `0.30` to `0.38`.

#### Scenario: Stage 3 timing is applied
- **WHEN** scroll progress moves from `0.34` to `0.56`
- **THEN** stage 3 fades in from `0.34` to `0.40`, stays from `0.40` to `0.48`, and fades out from `0.48` to `0.56`.

#### Scenario: Stage 4 timing is applied
- **WHEN** scroll progress moves from `0.52` to `0.74`
- **THEN** stage 4 fades in from `0.52` to `0.58`, stays from `0.58` to `0.66`, and fades out from `0.66` to `0.74`.

#### Scenario: Stage 5 timing is applied
- **WHEN** scroll progress moves from `0.70` to `1.00`
- **THEN** stage 5 fades in from `0.70` to `0.80` and stays visible from `0.80` to `1.00`.

#### Scenario: Stage motion is restrained
- **WHEN** any non-final stage animates through its active range
- **THEN** opacity maps `0 -> 1 -> 1 -> 0`, y maps `40 -> 0 -> 0 -> -40`, scale maps `1.06 -> 1 -> 1 -> 0.96`, and blur maps `10px -> 0px -> 0px -> 10px`.

#### Scenario: Final stage remains visible
- **WHEN** stage 5 reaches the end of the section
- **THEN** opacity remains `1`, y remains `0`, scale remains `1`, and blur remains `0px`.

### Requirement: Typography And CTA
The system SHALL use the requested typographic hierarchy and show the contact CTA only in the final stage.

#### Scenario: Eyebrow typography matches contract
- **WHEN** any stage renders
- **THEN** its eyebrow is uppercase, `tracking-[0.3em]`, `font-medium`, `#D7E2EA`, opacity `0.65`, and sized `text-xs sm:text-sm md:text-base`.

#### Scenario: Main heading typography matches contract
- **WHEN** any stage renders
- **THEN** its main heading is centered, uppercase, `font-black`, `leading-[0.9]`, `tracking-tight`, uses `.hero-heading`, and uses `clamp(3.2rem, 10vw, 150px)` with mobile constraints that prevent edge clipping.

#### Scenario: Supporting text typography matches contract
- **WHEN** any stage renders
- **THEN** its supporting text is centered, `#D7E2EA`, opacity `0.82`, `font-light` or `font-normal`, `leading-relaxed`, max-width `720px` on desktop, max-width `320px` on mobile, and sized `clamp(1rem, 1.8vw, 1.35rem)`.

#### Scenario: CTA appears only in final stage
- **WHEN** stages 1 through 4 are active
- **THEN** no CTA button is visible.

#### Scenario: Final CTA is clickable
- **WHEN** stage 5 is active
- **THEN** the existing `ContactButton` is visible, labeled "СВЯЗАТЬСЯ", and remains reachable by pointer or tap on mobile.

### Requirement: Implementation Constraints And Verification
The system SHALL keep the change scoped to the current stack and verify visual quality across responsive breakpoints.

#### Scenario: No dependency or font migration occurs
- **WHEN** the implementation is complete
- **THEN** the project still uses React, TypeScript, Tailwind CSS v3.4.1, and `framer-motion` without adding `motion/react`, Tailwind v4, or extra fonts.

#### Scenario: Other sections and shared components are not changed
- **WHEN** the implementation is complete
- **THEN** `HeroSection`, `MarqueeSection`, `ServicesSection`, `ProjectsSection`, `ContactButton`, `LiveProjectButton`, `FadeIn`, and `Magnet` retain their existing behavior.

#### Scenario: Responsive layouts avoid overflow
- **WHEN** the page is inspected on mobile, tablet, desktop, and ultra-wide viewports
- **THEN** headings, support text, and CTA stay readable, are not cut off at screen edges, and do not create horizontal overflow.

#### Scenario: Production build passes
- **WHEN** the implementation is complete
- **THEN** TypeScript and the production Vite build complete successfully.

