## Why

The project needs a focused, high-impact landing page for "Сэм" that presents a 3D creator portfolio with strong visual motion, clear service positioning, and project showcases. Creating this as a dedicated React experience establishes the visual direction, responsive behavior, and implementation contract before coding begins.

## What Changes

- Build a dark themed React, TypeScript, and Tailwind CSS landing page titled "Сэм -- 3D-креатор".
- Add a full-screen hero with Russian navigation, gradient heading text, magnetic portrait interaction, creator tagline, and contact call to action.
- Add scroll-reactive marquee rows using the provided GIF portfolio preview assets.
- Add an about section with decorative 3D imagery, scroll-revealed character animation, and contact call to action.
- Add a white services section with five numbered service descriptions.
- Add a dark projects section with three sticky stacking project cards and provided image assets.
- Add reusable animation and button components for fade-in, magnetic hover, contact CTA, live project CTA, and animated text reveal.
- Add required dependencies for motion, icons, styling, and Vite-based React development if they are not already present.

## Capabilities

### New Capabilities

- `sam-3d-creator-portfolio-page`: Defines the responsive 3D creator portfolio landing page, its section order, visual styling, animation behavior, and required content/assets.

### Modified Capabilities

- None.

## Impact

- Affected code will include the React app entry point, Tailwind/global CSS, landing page sections, reusable UI/animation components, and project configuration for dependencies.
- The page depends on externally hosted portrait, decorative, marquee GIF, and project image assets.
- Runtime dependencies include `react`, `react-dom`, `framer-motion`, `lucide-react`, `tailwindcss`, `vite`, and `typescript`.
