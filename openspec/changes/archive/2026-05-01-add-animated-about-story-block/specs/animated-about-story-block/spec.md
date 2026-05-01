## ADDED Requirements

### Requirement: Standalone Animated About Story Section
The system SHALL add a new standalone animated about/story section for Sam without replacing, removing, or visually changing the existing `AboutSection`.

#### Scenario: Existing about section remains intact
- **WHEN** the portfolio page renders after this change
- **THEN** the current `AboutSection` with heading "Обо мне", decorative corner imagery, animated paragraph, and "Связаться" button remains present with its existing behavior.

#### Scenario: New section is placed after the existing about section
- **WHEN** a user scrolls through the page
- **THEN** the visible section order is `HeroSection`, `MarqueeSection`, existing `AboutSection`, new animated about/story section, `ServicesSection`, and `ProjectsSection`.

#### Scenario: New section tells an about-me story
- **WHEN** the new section is visible
- **THEN** it presents Sam-specific copy about creative process, 3D/motion/design direction, and personal visual approach rather than unrelated reference commerce copy.

### Requirement: Animated Heading And Timed Fade Helpers
The system SHALL provide a heading animation for the new block that splits text into characters and reveals each character with the supplied delayed transition behavior, plus a timed opacity fade helper scoped to this block.

#### Scenario: Animated heading reveals characters in order
- **WHEN** `AnimatedHeading` starts after its configured `delay`
- **THEN** each character is rendered as an inline-block `span` transitioning over 500ms from `opacity: 0` and `translateX(-18px)` to `opacity: 1` and `translateX(0)`.

#### Scenario: Animated heading supports multiline text
- **WHEN** `AnimatedHeading` receives text containing `\n`
- **THEN** it splits the text into lines, wraps each line in a centered flex row with wrapping enabled, and preserves spaces with `\u00A0`.

#### Scenario: Character delay follows the reference formula
- **WHEN** a character is rendered at `lineIndex` and `charIndex`
- **THEN** its transition delay is `lineIndex * line.length * charDelay + charIndex * charDelay` milliseconds.

#### Scenario: Timed fade does not alter existing FadeIn behavior
- **WHEN** the new timed fade wrapper is used in the animated about/story section
- **THEN** it toggles opacity from 0 to 1 after its configured delay with an 800ms default transition duration without changing `src/components/FadeIn.tsx`.

### Requirement: Orbiting Graphic Gallery
The system SHALL render an orbiting visual gallery in the new section using SVG path math, CSS `offset-path`, and Framer Motion motion values adapted from the reference.

#### Scenario: Orbit items are positioned on a generated path
- **WHEN** orbit images render
- **THEN** each item uses an SVG path string generated from the configured shape and maps onto it with `offsetPath`, `offsetDistance`, `offsetAnchor: center center`, and `offsetRotate: 0deg`.

#### Scenario: Orbit gallery supports scroll overrides
- **WHEN** the parent section passes motion values for progress, `radiusX`, `radiusY`, item size, rotation, translateX, and focus strength
- **THEN** the orbit component uses those overrides instead of its internal animation values.

#### Scenario: Orbit items counter-rotate and scale by focus
- **WHEN** the orbit wrapper rotates or an item nears the focal point
- **THEN** item contents counter-rotate by the negative wrapper rotation, and item scale interpolates between the reduced background scale and focused scale according to focus strength.

#### Scenario: Orbit imagery uses portfolio-appropriate assets
- **WHEN** the first implementation renders the orbit gallery
- **THEN** the images come from Sam's existing portrait, 3D decorative assets, project imagery, or new user-provided personal assets with descriptive alt text, not from the unrelated reference branding.

### Requirement: Scroll-Driven Reveal Timeline
The system SHALL implement the new block as a sticky scroll-driven composition that preserves the reference's key Framer Motion timeline values while adapting layout to the current portfolio.

#### Scenario: Section uses clipped reveal
- **WHEN** the user enters the new section
- **THEN** a sticky viewport-height composition reveals its bright/orbit layer through an ellipse clip path whose radii transform from `["0%", "55%", "55%"]` over scroll progress `[0, 0.08, 1]`.

#### Scenario: Text overlay follows the reference opacity and blur timing
- **WHEN** the section scroll progress changes
- **THEN** the primary overlay text opacity maps `[0.03, 0.08, 0.15, 0.22, 0.90, 0.98, 1]` to `[0, 1, 1, 0, 0, 1, 1]`, blur maps the same stops to `[15, 0, 0, 15, 15, 0, 0]`, and y offset maps the same stops to `[20, 0, 0, 20, 20, 0, 0]`.

#### Scenario: Orbit transforms follow the reference timing
- **WHEN** the section scroll progress changes
- **THEN** item size maps `[0.15, 0.25, 0.85, 0.95, 1]` to `[80, 520, 520, 80, 80]`, `radiusX` maps to `[330, 650, 650, 330, 330]`, `radiusY` maps to `[140, 650, 650, 140, 140]`, rotation maps to `[-15, 0, 0, -15, -15]`, translateX maps to `[0, -650, -650, 0, 0]`, and focus strength maps to `[0, 1, 1, 0, 0]`.

#### Scenario: Orbit progress reacts to scrolling and idle time
- **WHEN** scroll progress is between `0.15` and `0.85`
- **THEN** orbit progress advances by `scrollDelta * 200` per animation frame; otherwise it advances by `(delta / 1000) * 2.5`.

### Requirement: Visual Adaptation To Current Portfolio
The system SHALL adapt the reference's graphic style to the current dark portfolio identity and avoid importing unrelated final-page content.

#### Scenario: Reference branding is not copied
- **WHEN** the new block renders
- **THEN** it does not display "Shamoni", collection labels, sailor/community copy, buy buttons, or other unrelated ecommerce content from the reference.

#### Scenario: Typography is scoped
- **WHEN** serif or script typography from the reference is used
- **THEN** it is scoped to the new animated about/story block while Manrope remains the base font for the site.

#### Scenario: Current page identity remains coherent
- **WHEN** the new block is viewed between the about and services sections
- **THEN** its colors, spacing, and copy feel connected to the existing dark portfolio, gradient headings, 3D visuals, and Russian language content.

### Requirement: Responsive, Accessible, And Performant Behavior
The system SHALL keep the new animated about/story block usable across supported viewports and motion preferences.

#### Scenario: Layout adapts without overlap
- **WHEN** the page is viewed at mobile, tablet, desktop, and ultra-wide widths
- **THEN** the orbit imagery, heading, labels, copy, and call-to-action areas maintain stable dimensions and do not incoherently overlap or force horizontal scrolling.

#### Scenario: Reduced motion users get a simplified experience
- **WHEN** the user prefers reduced motion
- **THEN** the section presents the same content in a simplified static or low-motion composition without requiring the scroll-driven orbit to understand the about story.

#### Scenario: Decorative motion does not block interaction
- **WHEN** orbit imagery or overlay layers are present
- **THEN** decorative layers do not trap pointer or keyboard interaction, and meaningful controls remain reachable and labeled.

#### Scenario: Build verification passes
- **WHEN** the implementation is complete
- **THEN** TypeScript and the production Vite build complete successfully.
