## 1. Section Replacement Setup

- [x] 1.1 Replace the existing decorative `AboutSection` implementation with the new premium dark storytelling section.
- [x] 1.2 Remove `AnimatedAboutStorySection` from the `App.tsx` render order so only one about/value section appears between marquee and services.
- [x] 1.3 Confirm `HeroSection`, `MarqueeSection`, `ServicesSection`, `ProjectsSection`, `ContactButton`, `LiveProjectButton`, `FadeIn`, and `Magnet` are not behaviorally changed.
- [x] 1.4 Remove or stop importing obsolete about-motion assets/data/helpers when they are no longer referenced.

## 2. Story Content And Layout

- [x] 2.1 Define the five fixed story stages with the exact eyebrow, heading, supporting text, and final CTA label from the spec.
- [x] 2.2 Implement the rebuilt section with `id="обо-мне"`, background `#0C0C0C`, `text-frost`, `h-[220vh]`, `md:h-[280vh]`, and `px-5 sm:px-8 md:px-10`.
- [x] 2.3 Add the inner `sticky top-0 h-screen overflow-hidden` container.
- [x] 2.4 Render each stage as an absolutely centered composition with eyebrow above heading and supporting text below heading.
- [x] 2.5 Add only the optional subtle radial gradient background behind the active text, without images, icons, particles, noise, shapes, tags, or decorative objects.

## 3. Typography And CTA

- [x] 3.1 Use Manrope only and remove serif/script/editorial font usage from the about/value section.
- [x] 3.2 Style eyebrows as uppercase, `tracking-[0.3em]`, `font-medium`, `#D7E2EA`, opacity `0.65`, and `text-xs sm:text-sm md:text-base`.
- [x] 3.3 Style headings as centered uppercase `font-black`, `leading-[0.9]`, `tracking-tight`, `.hero-heading`, and `clamp(3.2rem, 10vw, 150px)` with mobile-safe width constraints.
- [x] 3.4 Style supporting text as centered `#D7E2EA`, opacity `0.82`, light or normal weight, relaxed leading, max-width `320px` mobile and `720px` desktop, with `clamp(1rem, 1.8vw, 1.35rem)`.
- [x] 3.5 Render the existing `ContactButton` only in stage 5 and keep it clickable/tappable.

## 4. Scroll Animation

- [x] 4.1 Use `useRef`, `useScroll`, and `useTransform` from `framer-motion` with target container and offset `["start start", "end end"]`.
- [x] 4.2 Implement stage 1 timing: active `0.00-0.20`, fade in `0.00-0.06`, stay `0.06-0.14`, fade out `0.14-0.20`.
- [x] 4.3 Implement stage 2 timing: active `0.16-0.38`, fade in `0.16-0.22`, stay `0.22-0.30`, fade out `0.30-0.38`.
- [x] 4.4 Implement stage 3 timing: active `0.34-0.56`, fade in `0.34-0.40`, stay `0.40-0.48`, fade out `0.48-0.56`.
- [x] 4.5 Implement stage 4 timing: active `0.52-0.74`, fade in `0.52-0.58`, stay `0.58-0.66`, fade out `0.66-0.74`.
- [x] 4.6 Implement stage 5 timing: active `0.70-1.00`, fade in `0.70-0.80`, stay `0.80-1.00`.
- [x] 4.7 For stages 1-4, map opacity `0 -> 1 -> 1 -> 0`, y `40 -> 0 -> 0 -> -40`, scale `1.06 -> 1 -> 1 -> 0.96`, and blur `10px -> 0px -> 0px -> 10px`.
- [x] 4.8 For stage 5, keep opacity `1`, y `0`, scale `1`, and blur `0px` through the end of the section.
- [x] 4.9 Ensure inactive stages use pointer-events behavior that cannot block the final CTA.

## 5. Cleanup And Verification

- [x] 5.1 Confirm the rebuilt about/value section contains no images, icons, orbit gallery, 3D decorative objects, pills, tags, floating graphics, beige/light background, serif/script typography, or "Sam / Собираю смысл..." content.
- [x] 5.2 Confirm no dependency additions, `motion/react`, Tailwind v4 migration, or extra font imports were introduced.
- [x] 5.3 Run the TypeScript and production Vite build check.
- [x] 5.4 Inspect mobile, tablet, desktop, and ultra-wide viewports for text clipping, horizontal overflow, readability, stage rhythm, and final CTA tap target.
- [x] 5.5 Verify the page visually flows from `MarqueeSection` into the rebuilt about/value section and then into `ServicesSection`.
