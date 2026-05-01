## 1. Audit Current Visual Surface

- [x] 1.1 Review `src/index.css` typography/button classes and identify reusable hero-derived styles.
- [x] 1.2 Review `ContactButton` and `LiveProjectButton` variants for shared button-family opportunities.
- [x] 1.3 Review `AboutSection`, `ServicesSection`, and `ProjectsSection` for one-off heading, label, number, body, and button utility strings.

## 2. Shared Typography System

- [x] 2.1 Add shared CSS classes for section display headings, compact labels/eyebrows, numeric accents, and readable body copy.
- [x] 2.2 Preserve the existing hero heading treatment while making non-hero display classes visually aligned with it.
- [x] 2.3 Add responsive clamps, wrapping constraints, and max-width rules needed to prevent display-text clipping and horizontal overflow.
- [x] 2.4 Keep Manrope-based body copy styles readable on dark and light section backgrounds.

## 3. Section Typography Updates

- [x] 3.1 Update `AboutSection` stage eyebrow, heading, body, and final CTA typography to use the unified system.
- [x] 3.2 Update `ServicesSection` heading, service numbers, service names, and descriptions to use the unified system on the white background.
- [x] 3.3 Update `ProjectsSection` heading, card numbers, category labels, project names, and project button placement to use the unified system.
- [x] 3.4 Confirm visible text, section IDs, anchor targets, assets, and section order are unchanged.

## 4. Button System Updates

- [x] 4.1 Update `ContactButton` so primary CTAs across the site can use the premium button treatment consistently.
- [x] 4.2 Update about/final CTA usage to opt into the premium button style without losing the existing label intent.
- [x] 4.3 Update `LiveProjectButton` to become a secondary member of the premium button family, including typography, icon treatment, focus ring, dimensions, and hover behavior.
- [x] 4.4 Preserve reduced-motion behavior and touch-friendly button targets for all button variants.

## 5. Verification

- [x] 5.1 Run the project TypeScript/build verification command.
- [x] 5.2 Browser-check 320px, 375px, tablet, desktop, and wide desktop viewports for text clipping, horizontal overflow, and incoherent overlap.
- [x] 5.3 Verify focus states and hover/tap states for primary CTAs and project buttons.
- [x] 5.4 Verify the animated about section and stacked project cards still behave correctly after typography and button updates.
