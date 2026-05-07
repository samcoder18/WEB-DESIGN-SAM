## 1. Component Structure

- [x] 1.1 Create `src/components/SiteNavbar.tsx` with a static three-link model for `Обо мне`, `Услуги`, and `Проекты`.
- [x] 1.2 Render semantic `<nav aria-label="Основная навигация">` markup with anchors that target the matching page sections.
- [x] 1.3 Mount `SiteNavbar` once in `src/App.tsx` above the existing section order without changing section content.
- [x] 1.4 Update the services section anchor to match `Услуги`, preserving local compatibility for the old `цены` anchor only if needed.

## 2. Premium Styling And Interaction

- [x] 2.1 Style the navbar as a fixed top-center, content-width, semi-transparent frosted pill with no full-width header treatment.
- [x] 2.2 Use small readable typography, zero letter-spacing, restrained weight, and existing Manrope/Unbounded font tokens where appropriate.
- [x] 2.3 Add hover, tap, and focus-visible states that improve clarity without scale-based layout shift.
- [x] 2.4 Respect reduced-motion preferences for any navbar entrance or interaction animation.

## 3. Responsive Layout

- [x] 3.1 Constrain navbar width so it fits at 320px and 375px without horizontal scrolling.
- [x] 3.2 Verify the fixed navbar does not hide important hero, about, services, or project-card content at 375px, 768px, 1024px, and 1440px.
- [x] 3.3 Adjust spacing, top offset, or hit area if the thin visual treatment harms usability on touch devices.

## 4. Verification

- [x] 4.1 Run the project build to verify TypeScript and Vite output.
- [x] 4.2 Check browser behavior for link clicks, smooth section scrolling, hover/focus states, and the exact three visible labels.
- [x] 4.3 Perform a visual pass over dark and light sections to confirm the navbar remains premium, readable, and unobtrusive.
