## 1. Font Setup

- [x] 1.1 Add `Unbounded` font loading with the needed weights and `font-display: swap`, while preserving the existing Manrope import.
- [x] 1.2 Extend Tailwind font families with a hero/display stack using `Unbounded`, `Manrope`, and `sans-serif`.
- [x] 1.3 Confirm the chosen font renders Cyrillic hero text and nav labels.
- [x] 1.4 Confirm no npm dependency additions or Tailwind migration are introduced.

## 2. Hero Typography

- [x] 2.1 Apply the display font to the hero heading without changing the visible text "Привет, я Сэм".
- [x] 2.2 Tune hero heading weight, size, line height, and tracking to feel closer to the premium reference.
- [x] 2.3 Preserve the frosted gray-blue gradient identity for the hero heading.
- [x] 2.4 Ensure the heading remains readable and unclipped at 320px, 375px, tablet, desktop, and ultra-wide widths.

## 3. Hero Navbar

- [x] 3.1 Apply the display font to the hero navbar labels while preserving the Russian labels.
- [x] 3.2 Refine navbar spacing, weight, tracking, and responsive sizing to match the premium direction.
- [x] 3.3 Verify navbar links still target the existing generated anchors.
- [x] 3.4 Ensure nav labels do not overlap or overflow on narrow screens.

## 4. Composition Preservation

- [x] 4.1 Confirm the centered portrait remains visually centered after typography changes.
- [x] 4.2 Confirm the hero descriptor remains visible and does not collide with the portrait or heading.
- [x] 4.3 Confirm the contact CTA remains visible, tappable, and behaviorally unchanged.
- [x] 4.4 Confirm `AboutSection`, `ServicesSection`, and `ProjectsSection` are not redesigned by this change.

## 5. Verification

- [x] 5.1 Run the TypeScript and production Vite build check.
- [x] 5.2 Inspect the hero at mobile, tablet, desktop, and ultra-wide viewport widths.
- [x] 5.3 Verify there is no horizontal overflow, text clipping, or incoherent overlap in the first viewport.
- [x] 5.4 Compare the updated hero against the provided reference for premium typographic feel and navbar rhythm.
