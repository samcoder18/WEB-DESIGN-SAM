## 1. Content And Styling Setup

- [x] 1.1 Add typed data for the animated about/story block, including heading lines, story copy, labels/metrics, orbit image sources, and accessible alt text.
- [x] 1.2 Add scoped font support for the new block's serif/script typography while preserving Manrope as the site base font.
- [x] 1.3 Add `OrbitImages.css` with the required orbit container, scaling wrapper, rotation wrapper, SVG path, item, center-content, and image styles.
- [x] 1.4 Confirm no Tailwind v4 migration or global `FadeIn` behavior change is introduced.

## 2. Animation Components

- [x] 2.1 Implement `AnimatedHeading` with multiline splitting, inline-block character spans, preserved spaces, 500ms transitions, and the specified per-character delay formula.
- [x] 2.2 Implement a section-scoped timed fade wrapper that toggles opacity from 0 to 1 after delay with an 800ms default transition duration.
- [x] 2.3 Implement the adapted `OrbitImages` component using `framer-motion` imports and SVG path generators for orbit positioning.
- [x] 2.4 Support orbit motion-value overrides for progress, radiusX, radiusY, item size, rotation, translateX, and focus strength.
- [x] 2.5 Add reduced-motion handling so the new components can render a simplified static or low-motion composition.

## 3. Section Implementation

- [x] 3.1 Create `AnimatedAboutStorySection` as a standalone section with a sticky viewport composition and tall scroll runway.
- [x] 3.2 Implement the clipped bright/orbit layer using ellipse radii mapped from `[0, 0.08, 1]` to `["0%", "55%", "55%"]`.
- [x] 3.3 Implement overlay text opacity, blur, and y transforms using the specified `[0.03, 0.08, 0.15, 0.22, 0.90, 0.98, 1]` timing arrays.
- [x] 3.4 Implement orbit item size, radius, rotation, translateX, and focus strength transforms using the specified `[0.15, 0.25, 0.85, 0.95, 1]` timing arrays.
- [x] 3.5 Implement animation-frame orbit progress so scroll advances the orbit between progress `0.15` and `0.85`, with idle drift outside that range.
- [x] 3.6 Replace reference commerce/brand copy with Sam-specific about-me storytelling and project-appropriate imagery.

## 4. Page Integration

- [x] 4.1 Import `AnimatedAboutStorySection` in `src/App.tsx`.
- [x] 4.2 Render the new section after the existing `AboutSection` and before `ServicesSection`.
- [x] 4.3 Verify the existing `AboutSection` code and visible behavior remain unchanged.
- [x] 4.4 Ensure decorative orbit layers do not block meaningful pointer or keyboard interaction.

## 5. Verification

- [x] 5.1 Run the TypeScript and production build check.
- [x] 5.2 Inspect mobile, tablet, desktop, and ultra-wide layouts for text/media overlap and horizontal overflow.
- [x] 5.3 Verify the scroll-driven reveal, orbit focus, character heading reveal, timed fade, and reduced-motion fallback.
- [x] 5.4 Confirm the page no longer displays any unrelated reference labels such as "Shamoni", collection copy, buy buttons, or unrelated video content.
