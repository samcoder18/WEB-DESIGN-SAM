## Why

The portfolio already has strong premium section work, but it lacks a minimal navigation layer that lets visitors jump between the main content areas without interrupting the hero composition. A compact translucent navbar will make the page easier to scan while reinforcing the expensive, restrained visual direction.

## What Changes

- Add a premium minimalist floating navbar sized to its content rather than spanning the full viewport.
- Show exactly three navigation links: `Обо мне`, `Услуги`, and `Проекты`.
- Style the navbar as a thin, semi-transparent frosted element with small typography, subtle border/shadow treatment, and polished hover/focus states.
- Wire the links to the corresponding page sections and align the services section target with the visible `Услуги` label.
- Ensure the navbar remains readable and non-overlapping on mobile, tablet, desktop, and wide desktop viewports.
- Preserve the existing section order, motion-heavy hero, about storytelling, services content, and project card behavior.

## Capabilities

### New Capabilities
- `premium-site-navigation`: Covers the global minimalist navbar, its three section links, premium translucent styling, responsive behavior, and accessible interaction states.

### Modified Capabilities
- `sam-3d-creator-portfolio-page`: Replace the older hero-level navigation requirement with a compact three-link site navigation contract using `Обо мне`, `Услуги`, and `Проекты`.
- `unified-site-visual-language`: Extend the existing premium typography and button language to include a restrained frosted-glass navigation component.

## Impact

- Affected code: `src/App.tsx`, a new or existing navbar component under `src/components/`, `src/index.css`, and section anchor IDs where needed.
- No API changes.
- No new runtime dependencies expected; implementation should use the existing React, TypeScript, Tailwind CSS, and Framer Motion stack.
