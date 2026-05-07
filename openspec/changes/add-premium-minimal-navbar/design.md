## Context

The site is a Vite React/TypeScript portfolio using Tailwind CSS, Framer Motion, Manrope/Unbounded fonts, and the existing `ink`/`frost` color tokens. The current app shell renders `HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, and `ProjectsSection` inside `src/App.tsx`. The relevant section anchors already exist for about and projects, while the services section currently uses an older price-oriented anchor.

The navbar needs to feel premium and minimal without competing with the full-screen hero, animated about storytelling, or stacked project cards. It should be visually thin and content-sized, but still accessible enough for pointer, touch, and keyboard use.

## Goals / Non-Goals

**Goals:**
- Add a compact floating navbar that contains exactly `Обо мне`, `Услуги`, and `Проекты`.
- Make the navbar semi-transparent, frosted, restrained, and visually aligned with the existing premium typography/button language.
- Keep text small but readable, with stable hover/focus states and no layout shift.
- Ensure the fixed navigation does not hide important hero, about, services, or project content.
- Make the links scroll to the correct sections on mobile and desktop.

**Non-Goals:**
- Do not redesign the hero, about sequence, services list, project cards, or CTA buttons.
- Do not add new routes, a drawer menu, a contact link, scrollspy state, or new dependencies.
- Do not introduce a full-width header bar or marketing-style nav treatment.

## Decisions

1. Use a dedicated `SiteNavbar` component mounted once in `src/App.tsx`.
   - Rationale: the navbar is a global page affordance, not hero content. Keeping it separate avoids coupling the navigation to hero animation and makes future section changes safer.
   - Alternative considered: embed the nav inside `HeroSection`. This would match the older spec wording but would make the nav disappear from the component boundary where it should remain global.

2. Render semantic navigation with a small static link model.
   - Rationale: a `<nav aria-label="Основная навигация">` with three anchors is enough for the requested behavior and avoids unnecessary state.
   - Alternative considered: active-section scrollspy. It adds observers, state, and visual complexity that the request did not ask for.

3. Use fixed top-center positioning with a content-width frosted pill.
   - Rationale: `position: fixed`, `left: 50%`, and `translateX(-50%)` keeps the navbar stable while `max-width: calc(100vw - spacing)` prevents mobile overflow. A high z-index keeps it above section transitions and sticky project cards.
   - Alternative considered: sticky placement in the document flow. It would consume hero space and interact poorly with the full-viewport opening composition.

4. Keep the visual language thin, premium, and restrained.
   - Rationale: use a dark translucent background, backdrop blur, a subtle frost border, low shadow, small Manrope text, and opacity/background transitions. Avoid scale transforms so hover states do not shift the layout.
   - Alternative considered: a larger glossy CTA-like pill. It would compete with the existing contact button and feel less minimal.

5. Align the services link with the visible label `Услуги`.
   - Rationale: the navbar should link to a section target that matches what the visitor sees. The implementation should update the services anchor to `услуги`; if any local references to the old `цены` anchor remain, preserve compatibility with a lightweight alias rather than changing visible content.

## Risks / Trade-offs

- Fixed navbar overlaps hero text on small screens -> keep the navbar compact, top-offset it consistently, and verify at 320px/375px and desktop widths.
- Frosted glass can lose contrast over light and dark sections -> use a dark translucent base, frost border, and text color with sufficient opacity instead of relying only on blur.
- Cyrillic anchors may be mistyped or mismatched -> centralize link hrefs in the navbar component and verify each target exists.
- A very thin visual element can become hard to tap -> keep the visual treatment slim while preserving practical hit targets and visible keyboard focus.
