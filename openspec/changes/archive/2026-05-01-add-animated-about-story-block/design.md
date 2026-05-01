## Context

The current app is an existing React 18, TypeScript, Vite, Tailwind CSS v3 portfolio for "Сэм -- 3D-креатор". It already renders `HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, and `ProjectsSection`, with reusable `AnimatedText`, `FadeIn`, button components, Manrope typography, dark `#0C0C0C` background, and externally hosted visual assets.

The requested reference is a separate immersive scroll page using `motion/react`, Tailwind v4, serif/script fonts, a sticky 600vh section, clipped white reveal, orbiting image paths, and timed character animation. The goal is to adapt its motion language into this portfolio as a new about/story block while leaving the current about section unchanged.

## Goals / Non-Goals

**Goals:**

- Add a new `AnimatedAboutStorySection` as a separate section, placed after the existing `AboutSection` and before `ServicesSection`.
- Preserve the current `AboutSection` implementation and its visible behavior.
- Translate the reference's `OrbitImages` path math and scroll transform arrays into the current `framer-motion` stack.
- Add an `AnimatedHeading` implementation that matches the supplied per-character delayed reveal behavior, including multi-line text and preserved spaces.
- Add a simple timed fade wrapper for this section without changing the existing shared `FadeIn` component.
- Use project-appropriate content and imagery for Sam's skills, process, and visual identity instead of copying the reference's unrelated Shamoni branding and kitten video.
- Keep the section responsive, accessible, and stable across mobile, tablet, desktop, and ultra-wide widths.

**Non-Goals:**

- Do not replace, remove, or restyle the existing about section.
- Do not migrate the whole project from Tailwind v3 to Tailwind v4 just for this block.
- Do not add routing, CMS, backend behavior, contact form submission, analytics, or a new standalone landing page.
- Do not import the reference's unrelated brand labels, commerce buttons, collection copy, or background video as final portfolio content.

## Decisions

1. **Integrate as a new section after `AboutSection`.**
   - Rationale: The user's current about block remains intact, while the new block can extend the personal story with a richer visual moment before the services section.
   - Alternative considered: Replace `AboutSection`. This directly conflicts with the request not to touch the existing about block.

2. **Use `framer-motion` instead of adding the separate `motion` package.**
   - Rationale: The project already uses Framer Motion v12, which provides the required `motion`, `useScroll`, `useTransform`, `useMotionValue`, `useAnimationFrame`, `animate`, and motion-template primitives. Adding `motion/react` would duplicate animation dependencies for equivalent behavior.
   - Alternative considered: Install `motion` and rewrite imports exactly as the reference. This creates needless dependency churn and a mixed animation surface.

3. **Keep Tailwind v3 and add only targeted CSS/font support.**
   - Rationale: The existing app is already built and themed on Tailwind v3. The new section can add the serif/script Google font imports and component CSS without a project-wide Tailwind v4 migration.
   - Alternative considered: Migrate to Tailwind v4 and `@tailwindcss/vite`. This is larger than the requested block and risks unrelated regressions.

4. **Port the orbit component as a reusable, section-scoped component.**
   - Rationale: The orbit path generation, `offsetPath`, responsive scaling, and scroll-controlled `radiusX`, `radiusY`, item size, rotation, translateX, and focus strength are complex enough to isolate behind a component API.
   - Alternative considered: Inline all orbit logic inside the section. This would make the section hard to tune and test.

5. **Keep the reference scroll math, but adapt composition and content.**
   - Rationale: The strongest part of the reference is the orchestrated motion timeline, especially the clipped reveal and orbit focus. The weakest fit is the unrelated brand/content. The implementation should preserve the motion arrays where they define the intended feel, then use Sam-specific text and assets.
   - Alternative considered: Copy the full reference page exactly. This would produce a disconnected commercial-style block and clash with the current portfolio identity.

6. **Add a local timed fade wrapper rather than modifying existing `FadeIn`.**
   - Rationale: The supplied `FadeIn` is a timeout-based opacity helper, while the project shared `FadeIn` is a viewport Framer Motion entrance helper. Keeping a local helper avoids changing existing sections.
   - Alternative considered: Change `src/components/FadeIn.tsx` globally. This could alter current hero/about/services/project animations.

7. **Use existing portfolio and 3D assets first, with a clean data structure for future personal media.**
   - Rationale: The user has not provided final personal orbit images yet. Reusing `portraitUrl`, decorative imagery, and selected project visuals keeps the first implementation coherent while allowing easy replacement through data.
   - Alternative considered: Use the Cloudinary URLs from the reference prompt as final assets. Their subject matter and branding do not match the portfolio.

## Risks / Trade-offs

- Long sticky scroll sections can feel heavy in a compact portfolio -> Limit the new section to the shortest height that still supports the reveal timeline, and test the handoff into `ServicesSection`.
- CSS `offset-path` behavior can vary across browsers -> Keep a non-critical decorative role for orbit images, provide stable center content, and verify Chrome/Safari behavior during implementation.
- Large orbit images can overlap text on small screens -> Use breakpoint-specific item sizes, hide or reduce secondary labels on narrow screens, and keep text above motion layers when needed.
- External media can load slowly or fail -> Use stable dimensions, lazy image loading for orbit items, accessible alt text, and current project assets as fallbacks.
- Adding serif/script fonts changes the visual system -> Scope serif/script usage to the new block and keep Manrope as the page base font.
- Scroll-linked animation can be expensive -> Animate transforms/opacity only, avoid React state in animation frames, and respect `prefers-reduced-motion` with a simplified static composition.

## Migration Plan

1. Add new data constants for the animated about story block.
2. Add `AnimatedHeading`, a local timed fade helper, `OrbitImages`, and orbit CSS.
3. Add `AnimatedAboutStorySection` with sticky scroll container, clipped reveal, orbit transforms, center story copy, and responsive controls.
4. Import the new section into `App.tsx` after `AboutSection`.
5. Add scoped font imports/global utility support needed by the new block.
6. Run TypeScript/build verification and inspect desktop/mobile viewports for overlap, scroll pacing, and reduced-motion behavior.
7. Rollback is limited to removing the new section import, new section/component files, new data constants, and scoped CSS/font additions.

## Open Questions

- Final personal orbit imagery has not been provided; the first implementation will use project-appropriate existing assets and keep them easy to replace.
- Final copy tone for the new about/story block is not fixed; the first implementation will use concise Russian copy aligned with the current portfolio.
