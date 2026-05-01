## Why

The hero screen now has a stronger premium heading style and a rebuilt contact button, but the rest of the site still mixes older text and button treatments. Extending the same visual language across section headings, supporting copy, and interactive buttons will make the portfolio feel intentional instead of assembled from separate style passes.

## What Changes

- Unify non-hero headings with the upgraded display direction already introduced on the main screen.
- Align body, label, eyebrow, and supporting copy treatments so typography hierarchy is consistent across hero, about, services, projects, and final CTA areas.
- Extend the rebuilt premium button language to all primary and secondary site buttons, including section CTAs and project action buttons.
- Preserve existing Russian content, anchors, section order, portrait/media assets, and interaction intent.
- Keep the design responsive, readable, and free of text/button overflow on mobile and desktop.
- Avoid new npm dependencies unless an existing implementation constraint makes reuse impossible.

## Capabilities

### New Capabilities

- `unified-site-visual-language`: Covers site-wide typography hierarchy and button styling consistency based on the updated hero heading and button direction.

### Modified Capabilities

- None.

## Impact

- Affected code is expected to include `src/index.css`, `src/components/ContactButton.tsx`, `src/components/LiveProjectButton.tsx`, and section files under `src/sections/`.
- Tailwind utility usage and shared CSS classes may be adjusted, but content, routing anchors, assets, and the existing React/Vite/Tailwind stack should remain intact.
- Verification should include TypeScript/build checks and viewport review for mobile, tablet, desktop, and wide layouts.
