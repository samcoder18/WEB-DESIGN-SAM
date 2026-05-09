## 1. Direction And Audit

- [x] 1.1 Review the current `ServicesSection`, service data, shared typography helpers, and active OpenSpec changes that touch navigation or visual language.
- [x] 1.2 Use the "Editorial Service Matrix" direction from `design.md` as the default implementation direction unless the user chooses another option before apply.
- [x] 1.3 Confirm the implementation scope stays limited to `ServicesSection`, service data metadata, and supporting section-local/global CSS helpers.

## 2. Service Content Model

- [x] 2.1 Extend the `Service` type only as needed for concise premium metadata such as lead copy, outcome labels, scope labels, or accent text.
- [x] 2.2 Tighten the three service entries so each keeps its existing meaning while adding readable value, deliverable, or outcome details.
- [x] 2.3 Verify service names remain `Иммерсивные лендинги`, `Комплексные сайты под ключ`, and `Брендинг и визуальная система` in order with numbers `01` through `03`.

## 3. Services Section Structure

- [x] 3.1 Rebuild the section intro with a compact eyebrow, premium display heading, and short positioning copy.
- [x] 3.2 Replace the plain row list with a structured editorial service matrix that works as a single column on mobile and a constrained asymmetric grid on larger screens.
- [x] 3.3 Add one restrained signature detail, such as a scope/outcome rail, calibrated index treatment, or animated divider, that improves scanability.
- [x] 3.4 Preserve the `id="услуги"` target, section order, semantic heading structure, and accessible service item names.

## 4. Styling, Motion, And Responsive Behavior

- [x] 4.1 Add or adjust CSS/Tailwind classes for the premium light surface, service panels, indexes, metadata labels, and detail rail using the existing ink/frost visual language.
- [x] 4.2 Implement restrained reveal and interaction states with transform, opacity, contrast, or line-progress effects only.
- [x] 4.3 Ensure hover and focus states enhance emphasis without hiding content, changing layout dimensions, or relying on pointer-only access.
- [x] 4.4 Respect reduced-motion preferences and keep all service content visible without animation.
- [x] 4.5 Check that text, panels, indexes, and metadata do not overflow or overlap at 320px, 375px, 768px, 1024px, and 1440px.

## 5. Verification

- [x] 5.1 Run the smallest relevant build check, expected to be `npm run build`.
- [x] 5.2 Visually inspect the services section in the running app across mobile, tablet, desktop, and wide desktop viewports.
- [x] 5.3 Confirm the navbar `Услуги` link scrolls to the upgraded section without important content being hidden.
- [x] 5.4 Confirm hero, marquee, about, projects, navbar, and CTA components are not behaviorally redesigned by this change.
