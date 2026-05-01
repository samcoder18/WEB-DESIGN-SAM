## Context

The portfolio is a React, TypeScript, Vite, Tailwind CSS v3, and Framer Motion single-page site. The current hero already contains the required elements: navbar, large greeting heading, centered portrait, supporting descriptor, and contact CTA. The visual issue is not missing content, but the typographic quality and composition of the first impression compared with the user's reference.

The reference direction uses a heavier, wider, more premium uppercase display style for both nav and hero heading. The implementation must support Cyrillic because the actual hero content and navigation are Russian.

## Goals / Non-Goals

**Goals:**

- Upgrade the first-screen hero typography so it feels closer to the second reference: heavier, wider, more premium, and less generic.
- Use a display font with Cyrillic support for the hero heading and navbar.
- Keep Manrope available as the base/fallback font for the rest of the site and for non-hero copy.
- Improve navbar rhythm, sizing, weight, and spacing while keeping the existing Russian labels and anchors.
- Preserve the current hero content, portrait, CTA, dark background, gradient text treatment, and section order.
- Verify the hero on mobile, tablet, desktop, and ultra-wide viewports.

**Non-Goals:**

- Do not translate nav labels or the heading into English unless separately requested.
- Do not replace the portrait asset.
- Do not redesign the about/value section, services, projects, CTA component behavior, or page routing.
- Do not add npm dependencies or migrate Tailwind.
- Do not use a paid, local-only, or browser-unsupported font.

## Decisions

1. **Use `Unbounded` as the hero display font.**
   - Rationale: It is a wide, geometric display family with strong uppercase presence and Cyrillic support, making it a practical match for the premium reference without requiring a paid font.
   - Alternative considered: Keep Manrope and only adjust weight/spacing. This would improve scale but would not change the generic feel the user called out.
   - Alternative considered: Use a commercial condensed/wide display font similar to the reference. This risks licensing and availability issues.

2. **Scope the display font to the hero heading and navbar first.**
   - Rationale: The user specifically compared the main screen. A scoped change avoids disrupting the recently rebuilt about section and other site typography.
   - Alternative considered: Replace the global base font. This could create layout changes across services/projects/about and require broader QA.

3. **Keep the existing Russian nav labels and route anchors.**
   - Rationale: The reference shows English labels, but the user asked for the same elements and explicitly requires Cyrillic support. The portfolio currently targets Russian content.
   - Alternative considered: Switch nav labels to English. This changes content semantics and should be a separate content decision.

4. **Refine sizing through responsive clamps and stable constraints.**
   - Rationale: The hero heading must feel large and premium on desktop but cannot clip on mobile or create horizontal overflow.
   - Alternative considered: Use fixed breakpoint-only font sizes. This is more brittle across in-between viewport widths.

5. **Keep the current gradient text direction but tune it only if needed.**
   - Rationale: The frosted gradient already matches the site's dark 3D visual language. The main requested difference is typographic character, nav styling, and composition.
   - Alternative considered: Replace the gradient entirely. This is higher-risk and may break visual continuity with other headings.

## Risks / Trade-offs

- Wide Cyrillic display letters can overflow on small screens -> Use responsive `clamp()`, `max-width`, `whitespace-nowrap` only where it remains safe, and browser-check 320px and 375px widths.
- A display font can make nav labels too heavy on mobile -> Use breakpoint-specific sizing and restrained tracking.
- Importing another Google Font increases font payload -> Limit weights to the needed hero/nav weights and keep `font-display: swap`.
- Changing `.hero-heading` globally could affect about/projects headings -> Prefer a hero-specific class or Tailwind font family usage unless a shared heading update is intentionally verified.
- Font loading can briefly show fallback metrics -> Use compatible fallback stack and verify no severe layout shift.

## Migration Plan

1. Add the chosen Cyrillic-capable display font import and Tailwind font family extension.
2. Apply the display font to the hero navbar and hero heading only.
3. Tune nav layout, weight, tracking, and responsive spacing to match the premium reference more closely.
4. Tune hero heading size/letterform presentation while keeping "Привет, я Сэм" visible and unclipped.
5. Verify the portrait remains centered after typographic changes.
6. Run the TypeScript and production Vite build.
7. Browser-check mobile, tablet, desktop, and ultra-wide hero layouts for overflow, clipping, nav readability, and visual match.

Rollback is straightforward: remove the display font import/family and restore the prior `HeroSection` classes.

## Open Questions

- None for implementation. The content stays Russian, and the typography direction is clear from the supplied reference.
