## Context

The current portfolio is a React 18, TypeScript, Vite, Tailwind CSS v3, and Framer Motion single-page site for "Сэм -- 3D-креатор". It currently renders `HeroSection`, `MarqueeSection`, the original decorative `AboutSection`, the newer `AnimatedAboutStorySection`, `ServicesSection`, and `ProjectsSection`.

The requested change is not another additive section. The target is one native, dark, premium about/value section that bridges the marquee and services. It must keep only the scroll-driven sticky storytelling concept and remove the current decorative/light/orbit direction entirely.

## Goals / Non-Goals

**Goals:**

- Rebuild `AboutSection` into a single dark typographic manifesto section.
- Render exactly one about/value section between `MarqueeSection` and `ServicesSection`.
- Use `h-[220vh]` on mobile and `md:h-[280vh]` on desktop with an inner `sticky top-0 h-screen overflow-hidden` viewport.
- Implement five absolute centered Framer Motion stages driven by `useScroll` and `useTransform`.
- Use only Manrope, `#0C0C0C`, `#D7E2EA`, and the existing `.hero-heading` gradient.
- Keep the final CTA clickable and visible only on stage 5 using the existing `ContactButton`.
- Remove or stop rendering current about visuals: images, icons, orbit gallery, pills/tags, decorative 3D objects, beige/light background, serif/script font usage, and "Sam / Собираю смысл..." content.

**Non-Goals:**

- Do not change `HeroSection`, `MarqueeSection`, `ServicesSection`, `ProjectsSection`, `ContactButton`, `LiveProjectButton`, `FadeIn`, or `Magnet`.
- Do not add dependencies, install `motion/react`, migrate Tailwind, or introduce additional fonts.
- Do not add images, icons, particles, noise, animated shapes, cards, or decorative graphics.
- Do not create a second about section.

## Decisions

1. **Rebuild `AboutSection` instead of adding a new section.**
   - Rationale: The user explicitly asked to replace the current about block entirely and avoid a second about section.
   - Alternative considered: Keep the original `AboutSection` and restyle `AnimatedAboutStorySection`. This would still leave two about experiences in the page flow.

2. **Remove `AnimatedAboutStorySection` from `App.tsx`.**
   - Rationale: The rebuilt `AboutSection` becomes the storytelling bridge between marquee and services.
   - Alternative considered: Rename `AnimatedAboutStorySection` and render it alone. This is possible, but rebuilding `AboutSection` keeps the existing nav anchor `#обо-мне` stable.

3. **Use local stage data inside `AboutSection` or a small typed constant.**
   - Rationale: The five stages are fixed content and closely tied to the section's animation timing.
   - Alternative considered: Put the stages into global portfolio data. This is acceptable if preferred during implementation, but not required unless reuse emerges.

4. **Use a reusable internal `StoryStage` component.**
   - Rationale: Each stage has identical layout and animation mechanics with different text and ranges.
   - Alternative considered: Copy five motion blocks manually. That increases risk of inconsistent timing and responsive classes.

5. **Map each stage with explicit `useTransform` ranges.**
   - Rationale: The requested timing ranges are precise and easy to audit when each stage owns opacity, y, scale, and blur mappings.
   - Alternative considered: Use a single state machine or animation variants. That makes the scroll timing less transparent.

6. **Use a subtle radial background only.**
   - Rationale: The prompt permits a restrained radial glow and forbids decorative media/objects. A static radial gradient supports focus without becoming a visual asset.
   - Alternative considered: Add animated ambient shapes. This conflicts with the "no unnecessary decorations" rule.

## Risks / Trade-offs

- Large uppercase headings can overflow on Russian copy -> Use `clamp(3.2rem, 10vw, 150px)`, `max-w`, mobile padding, centered line breaks, and viewport checks.
- Final CTA can become unclickable if wrapped in a pointer-disabled layer -> Keep inactive stages `pointer-events-none` and enable pointer events only for the final CTA container.
- Stage overlap can feel chaotic -> Use the specified overlapping ranges with restrained y/scale/blur values and no spring/bounce transitions.
- Removing previous about-motion files may leave unused imports/data -> Clean up imports and only delete files when no longer referenced.
- Rebuilding `AboutSection` changes a major visible page section -> Verify section order, nav anchor, build, and responsive screenshots before marking done.

## Migration Plan

1. Replace `src/sections/AboutSection.tsx` with the new sticky typographic stage section.
2. Remove `AnimatedAboutStorySection` from `src/App.tsx` so only `AboutSection` renders between marquee and services.
3. Remove or leave unreferenced prior about-motion helpers/data only after confirming they are unused.
4. Run TypeScript and production build checks.
5. Inspect mobile and desktop viewports for text overflow, CTA tap target, stage readability, and dark visual continuity.
6. Rollback by restoring the prior `AboutSection` and `App.tsx` section order if needed.

## Open Questions

- None. The requested copy, timing ranges, visual constraints, and integration position are specific enough to implement without further clarification.
