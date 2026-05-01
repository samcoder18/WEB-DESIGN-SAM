## Context

The site is a React, TypeScript, Vite, Tailwind CSS v3, and Framer Motion single-page portfolio. The latest hero work introduced a premium display direction with `Unbounded`, a frosted heading treatment, and a rebuilt `premium` variant in `ContactButton`. Outside the main screen, typography and buttons are still uneven: `ServicesSection` uses a plain black heading, `ProjectsSection` partly reuses `hero-heading`, `AboutSection` has a non-premium final CTA, and `LiveProjectButton` keeps a separate outlined style.

The change should use the current hero heading and premium button as the source of truth. It should not change the site structure, content, media, anchors, or the React/Tailwind/Framer stack.

## Goals / Non-Goals

**Goals:**

- Make section headings, numeric accents, eyebrow labels, body copy, and buttons feel like one visual system.
- Reuse the hero display language for major headings without creating clipping or horizontal overflow.
- Make all primary CTAs use the rebuilt premium button treatment unless a secondary style is clearly required.
- Bring project action buttons into the same button family while preserving their current purpose and label.
- Keep text readable at 320px and up, with mobile body text at accessible sizes and clear line heights.
- Preserve focus styles, reduced-motion behavior, and touch-friendly target sizes.
- Verify responsive layout on mobile, tablet, desktop, and wide viewports.

**Non-Goals:**

- Do not rewrite portfolio copy, translate labels, or change anchors.
- Do not replace project images, portrait assets, or section order.
- Do not add decorative background systems, unrelated sections, or marketing copy.
- Do not introduce new npm dependencies or migrate away from Tailwind utilities.
- Do not redesign card geometry or scrolling interactions beyond what is needed to prevent style conflicts.

## Decisions

1. **Promote shared typography classes instead of duplicating long Tailwind strings.**
   - Rationale: The same heading, eyebrow, number, and body patterns need to appear in multiple sections. Shared CSS classes in `src/index.css` reduce drift and make future tuning easier.
   - Alternative considered: Update each section with copied utility strings. This is quick but makes the style inconsistent again as soon as one section changes.

2. **Use `Unbounded` for display headings, section numbers, and compact uppercase labels, with Manrope retained for readable body copy.**
   - Rationale: The hero style already depends on `Unbounded`, and extending it to display moments creates visual unity. Manrope remains better for longer Russian text because it is calmer and more readable.
   - Alternative considered: Apply `Unbounded` globally. That would hurt paragraph readability and likely create overflow in service and project names.

3. **Keep one primary button system based on `ContactButton` premium styling.**
   - Rationale: The user specifically called out the rebuilt button as the new direction. Section CTAs should use the premium treatment by default, and `LiveProjectButton` should either reuse the same styling foundation or expose a secondary variant that inherits the same proportions, icon treatment, focus ring, and motion rules.
   - Alternative considered: Keep the old gradient and outlined buttons as separate variants. That preserves legacy styling but weakens the requested site-wide consistency.

4. **Introduce a secondary project button only as a reduced-emphasis member of the same family.**
   - Rationale: Project cards may need a darker/outlined button against dark cards, but it should still share the premium button shape, typography, icon placement, minimum height, focus style, and hover motion.
   - Alternative considered: Convert every button to the exact white premium CTA. That could over-emphasize repeated project actions and reduce hierarchy inside project cards.

5. **Use responsive clamps and max-width constraints for display text.**
   - Rationale: Wide uppercase display text can overflow, especially with Cyrillic labels and long project names. Clamps, `max-width`, balanced wrapping, and stable line heights keep the design polished across viewport widths.
   - Alternative considered: Use fixed breakpoint sizes only. This is more brittle around intermediate viewport sizes.

## Risks / Trade-offs

- Wide display font causes heading or project-name overflow -> use section-specific max widths, balanced wrapping, and verify 320px, 375px, tablet, desktop, and wide viewports.
- Reusing the premium button everywhere makes repeated actions too visually loud -> keep one shared family but allow primary and secondary emphasis levels.
- Shared CSS classes can conflict with the existing `.hero-heading` name -> keep the existing hero class stable and add clearly named site-level classes where the semantics differ.
- Button animation can feel excessive on dense repeated project cards -> preserve `prefers-reduced-motion` and use lighter hover movement for secondary buttons.
- Services uses a white background while hero/projects use dark backgrounds -> define text/button variants that preserve contrast on both surfaces instead of forcing one color treatment.

## Migration Plan

1. Audit all headings, labels, body copy, numeric accents, and buttons in `HeroSection`, `AboutSection`, `ServicesSection`, `ProjectsSection`, `ContactButton`, and `LiveProjectButton`.
2. Add shared typography classes for section display headings, labels, numeric accents, and body copy while preserving the existing `.hero-heading` treatment.
3. Update section components to use the shared typography system and remove one-off heading/button utility drift.
4. Update `ContactButton` defaults so non-hero CTAs can opt into the premium treatment without duplicating styles.
5. Update `LiveProjectButton` to match the premium button family as a secondary/action variant.
6. Run TypeScript and production build checks.
7. Browser-check mobile, tablet, desktop, and wide viewports for readable text, touch targets, focus states, clipping, and horizontal overflow.

Rollback is straightforward: revert the shared typography classes and component class changes while keeping the already completed hero work intact.

## Open Questions

- None for implementation. The requested direction is to treat the updated hero heading and rebuilt button as the source style and apply it across the rest of the site.
