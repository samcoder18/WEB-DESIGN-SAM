## Context

The project is a Vite React/TypeScript portfolio for "Сэм -- 3D-креатор" using Tailwind CSS, Framer Motion, Manrope/Unbounded typography, and the existing `ink`/`frost` visual system. The app shell renders `HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, and `ProjectsSection`; the services block currently sits after a dark typographic about/value section and before dark sticky project cards.

The current `ServicesSection` is structurally clean but visually too simple: a white rounded section, one heading, and numbered service rows. The content has already shifted from old five-service positioning to three higher-value offers, so the section should behave less like a price list and more like a premium service menu that explains outcomes and process.

## Goals / Non-Goals

**Goals:**

- Make the services block expressive, stylish, and professional without turning it into a decorative landing-page card grid.
- Present three service offers with clearer hierarchy: service name, concise value promise, deliverables/outcomes, and a confident index system.
- Preserve the anchor `#услуги`, section order, current portfolio identity, dark-to-light transition, and existing data-driven structure.
- Provide design options while making one default implementation decision so `/opsx:apply` can proceed.
- Keep motion restrained, accessible, and based on transform/opacity with reduced-motion support.
- Avoid new runtime dependencies, new fonts, heavy media, WebGL, or layout-thrashing animation.

**Non-Goals:**

- Redesign `HeroSection`, `MarqueeSection`, `AboutSection`, `ProjectsSection`, `SiteNavbar`, or shared CTA behavior.
- Add pricing tables, testimonials, fake client logos, checkout flows, or CMS behavior.
- Replace the overall black/frost/white portfolio visual language with a new palette.
- Add a separate route or modal for service details.

## Decisions

1. Recommended visual direction: "Editorial Service Matrix".
   - Concept: a premium studio service menu, where each offer feels like a strategic productized engagement rather than a plain list item.
   - Visual direction: keep the light `#FFFFFF` services surface, but add a disciplined editorial composition: compact eyebrow, strong display heading, short intro, large index column, bordered service panels, and one signature detail such as a thin "scope / outcome / signal" rail.
   - Rationale: this matches the current portfolio language, keeps contrast high after the dark about section, and improves professionalism without adding artificial decoration.
   - Alternative A considered: "Dark immersive services". This would make services feel cinematic, but it weakens the current dark-to-light rhythm and may make projects less distinct.
   - Alternative B considered: "Interactive horizontal cards". This can feel modern, but it risks becoming a generic card grid and is harder to make ergonomic on mobile.
   - Alternative C considered: "Process timeline". This is useful if the business goal is explaining workflow, but the user's request is about making the services block more expressive and stylish, not replacing service positioning with process.

2. Keep the implementation section-local.
   - Update `src/sections/ServicesSection.tsx` for structure and Framer Motion states.
   - Extend `src/data/portfolio.ts` only if the design needs typed metadata such as `summary`, `outcomes`, or `accent`.
   - Add only reusable CSS helpers that clearly belong to the existing visual language in `src/index.css`.
   - Rationale: the change is visually meaningful but should not create a broad design-system refactor.
   - Alternative considered: create multiple new components. That would be useful if services become reusable elsewhere, but the current app has one services section and a compact component tree.

3. Use three service panels with richer metadata instead of restoring the old five-service list.
   - The current code already contains three higher-value offers: `Иммерсивные лендинги`, `Комплексные сайты под ключ`, and `Брендинг и визуальная система`.
   - Each service should gain a concise lead sentence and two to four short deliverable/outcome chips or lines.
   - Rationale: three strong offers are easier to scan and feel more premium than five generic categories.
   - Alternative considered: add more services. This may make the section look fuller, but it dilutes the current positioning.

4. Motion stays supportive and restrained.
   - Use existing `FadeIn` or small `motion` wrappers for reveal and hover states.
   - Animate opacity, y, scale, and optional line progress only; avoid scroll-jacking, sticky complexity, and animated layout dimensions.
   - Respect reduced motion through existing global reduced-motion CSS and Framer Motion fallbacks where needed.
   - Rationale: the section should feel more alive but remain fast, readable, and less dramatic than hero/about.

5. Responsive layout uses stable grid behavior.
   - Mobile: single-column stack with large but contained heading, service panels, and readable metadata.
   - Tablet/desktop: intro and service matrix can split into a two-column or asymmetric grid, with fixed index/metadata zones to avoid layout shift.
   - Wide desktop: constrain content width and prevent the white section from reading as an empty oversized list.
   - Rationale: the current long Russian copy needs deliberate line lengths and overflow protection.

## Risks / Trade-offs

- Richer metadata could make the section too dense -> Keep service descriptions concise and use short outcome labels instead of long chip text.
- A more expressive white section can fight the dark project section -> Preserve strong top/bottom spacing and use ink/frost accents rather than introducing a new palette.
- Hover interactions may not translate to touch devices -> Ensure all service content is visible by default and hover only enhances emphasis.
- Large display typography can overflow in Russian -> Use responsive `clamp()`, `text-wrap: balance`, `overflow-wrap`, and viewport checks at 320px, 375px, 768px, 1024px, and 1440px.
- Extra Framer Motion wrappers can add complexity -> Prefer existing `FadeIn` and minimal `motion.article` usage where interaction benefits are clear.
- Existing active OpenSpec changes also touch navigation/visual language -> Preserve the `#услуги` anchor and existing shared class names unless a local class extension is required.

## Migration Plan

1. Update the service data shape only if the selected layout needs richer metadata; keep service names and existing core descriptions recognizable.
2. Rebuild `ServicesSection` with the recommended editorial matrix layout.
3. Add section-local CSS helpers or Tailwind utility composition for the premium service surface, panels, index treatment, and detail rail.
4. Verify responsive layout and focus/reduced-motion behavior.
5. Run the production build.

Rollback is straightforward: revert the `ServicesSection`, service data metadata, and supporting CSS changes from this change.

## Open Questions

- The implementation will default to "Editorial Service Matrix". If a different direction is preferred before implementation, choose one of: dark immersive services, interactive horizontal cards, or process timeline.
- Exact final Russian microcopy can be tightened during implementation, but it should remain specific to premium web/3D/brand work and avoid vague SaaS language.
