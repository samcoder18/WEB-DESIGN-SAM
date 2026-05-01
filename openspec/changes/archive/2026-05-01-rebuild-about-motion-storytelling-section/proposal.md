## Why

The current about area has become visually split between the original decorative about section and the newer motion block, which makes the portfolio feel less controlled and less premium. Rebuilding it as one dark typographic storytelling section will make the transition from the marquee into services clearer and better explain why Sam's work creates business value, not just attractive visuals.

## What Changes

- Replace the current about experience with a single scroll-driven dark typographic storytelling section between `MarqueeSection` and `ServicesSection`.
- Remove the current light/beige motion block visual direction entirely, including orbit imagery, icons, 3D decorative objects, pills, tags, floating graphics, serif/script typography, and the "Sam / Собираю смысл..." direction.
- Remove the older decorative about section presentation so the page does not render a second about block.
- Add five centered scroll-driven text stages that fade, move upward, scale, and subtly blur in a restrained cinematic rhythm.
- Use only the existing stack: React, TypeScript, Tailwind CSS v3.4.1, and `framer-motion`; do not add `motion/react`, migrate Tailwind, install fonts, or use images/icons.
- Keep Manrope as the only font and reuse the existing `.hero-heading` gradient for massive uppercase stage headings.
- Show the existing `ContactButton` only in the final stage.

## Capabilities

### New Capabilities

- `premium-about-value-section`: Defines the single dark scroll-driven about/value section, its five storytelling stages, visual constraints, animation ranges, responsive behavior, and integration position.

### Modified Capabilities

- None.

## Impact

- Affected code will include `src/sections/AboutSection.tsx`, `src/App.tsx`, and any now-unused about-motion helper/data files that can be removed safely.
- Existing `HeroSection`, `MarqueeSection`, `ServicesSection`, `ProjectsSection`, `ContactButton`, `LiveProjectButton`, `FadeIn`, `Magnet`, and global styling should remain unchanged unless a minimal section-local adjustment is required.
- The final page should render one about/value block between the marquee and services, preserving the dark `#0C0C0C` visual system and avoiding horizontal overflow on mobile and desktop.
