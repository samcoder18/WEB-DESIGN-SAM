## Context

The workspace is currently empty aside from the OpenSpec change scaffold, so implementation can establish a Vite React application without migration from an existing UI. The requested product is a single portfolio landing page for "Сэм" with a dark visual system, Russian copy, large typography, scroll-linked motion, magnetic hover interaction, and externally hosted imagery.

The implementation must use React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Global styling must set `#0C0C0C` on `html`, `body`, `#root`, and the main wrapper, load Manrope from Google Fonts at weights 300-800, apply a reset for box sizing/margins/padding, and expose the `.hero-heading` gradient text utility.

## Goals / Non-Goals

**Goals:**

- Deliver a production-ready responsive landing page matching the requested section order: `HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, `ProjectsSection`.
- Keep the page content-driven and easy to update through typed arrays for nav links, marquee media, services, and projects.
- Implement reusable UI primitives for `ContactButton`, `LiveProjectButton`, `FadeIn`, `Magnet`, and `AnimatedText`.
- Use Framer Motion for viewport entrance, scroll reveal, marquee transform, and sticky project card scaling.
- Preserve performance basics: lazy image loading where appropriate, passive scroll listeners where manual listeners are used, stable media dimensions, and `will-change` only on animated transforms.

**Non-Goals:**

- No backend, CMS, contact form submission, analytics, project detail pages, routing, or authentication.
- No local image optimization pipeline; provided external URLs remain the source assets for the first implementation.
- No custom 3D renderer is required. The page uses supplied 3D imagery and motion interactions rather than a Three.js scene.

## Decisions

1. **Use a single-page Vite React app with section components.**
   - Rationale: The requested experience is one landing page with no routing or data fetching requirements.
   - Alternative considered: Add a router and page shell. This adds structure without user-facing value for a single route.

2. **Centralize content in typed constants.**
   - Rationale: The image URL lists, services, projects, and nav labels are large enough that keeping them outside JSX flow reduces component noise and makes validation easier.
   - Alternative considered: Inline all arrays inside section components. This makes the first build faster but increases maintenance cost and duplicate layout risk.

3. **Use Tailwind utilities for layout and CSS variables/global classes for shared visual rules.**
   - Rationale: Tailwind is explicitly requested and maps cleanly to the breakpoint-heavy prompt. The gradient text and global reset belong in CSS because they apply across sections.
   - Alternative considered: CSS modules for every section. This would make exact responsive classes less visible and split styling patterns unnecessarily.

4. **Use Framer Motion for entrance, scroll, text reveal, and project stacking effects.**
   - Rationale: Framer Motion is requested and provides stable primitives for `whileInView`, `useScroll`, and `useTransform`.
   - Alternative considered: Manual IntersectionObserver and scroll math for every animation. This would duplicate library behavior and increase edge case handling.

5. **Keep marquee scroll transform manual or motion-value driven with a passive listener.**
   - Rationale: The requested offset formula is explicit: `(window.scrollY - sectionTop + window.innerHeight) * 0.3`. A section ref plus passive scroll/resize handling can reproduce it exactly.
   - Alternative considered: Pure CSS marquee animation. It would not respond to page scroll as specified.

6. **Implement sticky project cards as independent motion components.**
   - Rationale: Each card needs its own scroll progress and target scale while preserving sticky placement and visual stacking.
   - Alternative considered: One parent scroll transform for all cards. This is simpler but makes per-card scale timing and offsets harder to tune.

## Risks / Trade-offs

- External assets may be unavailable or slow to load -> Use explicit dimensions, `object-cover`, lazy loading for non-critical images, and meaningful `alt` text so layout remains stable.
- GIF-heavy marquee can be expensive on low-end devices -> Limit tile dimensions, duplicate only the required rows, use transform-only movement, and avoid per-frame React state where possible.
- Huge hero text can overflow on narrow screens -> Keep `whitespace-nowrap` as specified but wrap it in an overflow-hidden container and use viewport-based font sizes from the prompt.
- Sticky card layouts are sensitive on mobile heights -> Use fixed sticky top values, stable card padding/radii, and an `h-[85vh]` container per card as the contract requires.
- Magnetic hover is pointer-specific -> Gracefully no-op on touch/pointerless interaction while preserving the static image.

## Migration Plan

1. Scaffold or update the Vite React/TypeScript/Tailwind project files.
2. Add dependencies and global CSS.
3. Implement reusable components, then sections in page order.
4. Verify build output and inspect the page across mobile and desktop viewports.
5. Rollback is limited to reverting the new app files and dependency changes because there is no existing application state to migrate.

## Open Questions

- The contact button has no destination in the prompt; the first implementation will render it as a button-style CTA without submitting data unless a contact target is later provided.
- The project ghost buttons have no URLs in the prompt; the first implementation will render them as inert CTA buttons or safe anchors with placeholders until destinations are provided.
