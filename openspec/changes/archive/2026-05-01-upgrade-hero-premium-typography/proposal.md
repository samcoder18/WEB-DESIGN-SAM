## Why

The current hero screen uses a clean but generic typographic system, so the first impression feels flatter than the provided premium reference. The hero should keep the same core elements while making the heading and navbar feel heavier, more deliberate, and better suited to a high-end 3D creator portfolio.

## What Changes

- Upgrade the first-screen hero typography to a premium display direction with Cyrillic support.
- Use a bold, wide, uppercase hero heading treatment closer to the reference while preserving the existing Russian content: "Привет, я Сэм".
- Refine the hero navbar so it feels more intentional: tighter uppercase styling, better horizontal rhythm, stronger weight, and clean responsive spacing.
- Keep the existing hero elements: navigation links, portrait, short descriptor, and contact CTA.
- Preserve the dark background, frosted gradient text direction, centered portrait placement, and existing section flow.
- Avoid paid or unsupported fonts; the chosen font must support Cyrillic in browser-rendered text.

## Capabilities

### New Capabilities

- `premium-hero-screen`: Defines the upgraded hero typography, navbar presentation, Cyrillic font requirement, responsive behavior, and visual verification expectations.

### Modified Capabilities

- None.

## Impact

- Affected code will include `src/sections/HeroSection.tsx`, `src/index.css`, and `tailwind.config.ts`.
- The change may adjust font imports and Tailwind font families but should not add npm dependencies.
- Existing `AboutSection`, `ServicesSection`, `ProjectsSection`, portrait asset, CTA behavior, routing anchors, and section order should remain intact.
