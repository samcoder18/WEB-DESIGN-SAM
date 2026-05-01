## Why

The portfolio already has a calm text-based about section, but it needs a second, more expressive storytelling block that uses graphic motion to show Sam's personality and creative process. The supplied interactive reference is strong visually, but it must be adapted to the current project instead of replacing the existing page structure.

## What Changes

- Add a new standalone about/story section that sits near the existing about content without changing the current `AboutSection`.
- Adapt the reference's orbiting image gallery, scroll-driven radius/size/rotation transforms, clipped reveal, and character-by-character heading animation to the current React/Vite/Tailwind codebase.
- Add reusable components for the new block, including an orbit gallery and local text reveal helpers matching the reference behavior.
- Add new content/data for the block: section heading, short about-me story copy, orbit media, small labels/metrics, and accessible image alt text.
- Preserve the existing dark portfolio identity while selectively using the reference's serif/script typography and bright masked motion moment where it supports the new story block.
- Keep the current about section, services, projects, and existing animation components behavior unchanged unless integration requires a new import in the app shell.

## Capabilities

### New Capabilities

- `animated-about-story-block`: Defines a standalone scroll-driven about/story block with orbiting graphics, animated text, responsive behavior, and integration rules for the current portfolio page.

### Modified Capabilities

- None.

## Impact

- Affected code will include `src/App.tsx`, new section/component files under `src/sections` and `src/components`, shared portfolio data, and targeted global CSS/font additions.
- The implementation will reuse the current React 18, Vite, TypeScript, Tailwind CSS v3, and `framer-motion` baseline; the reference's `motion/react` APIs will be translated to equivalent `framer-motion` imports where possible.
- New image or video assets may remain externally hosted initially, but the block must define stable dimensions and fallbacks so the layout does not collapse if media loads slowly.
- No backend, routing, CMS, form submission, or replacement of the existing about section is included.
