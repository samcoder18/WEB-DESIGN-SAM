# premium-hero-screen Specification

## Purpose
TBD - created by archiving change upgrade-hero-premium-typography. Update Purpose after archive.
## Requirements
### Requirement: Premium Cyrillic Hero Typography
The system SHALL render the hero heading and hero navigation with a premium display font that supports Cyrillic text.

#### Scenario: Cyrillic display font is used in the hero
- **WHEN** the first screen renders
- **THEN** the hero heading "Привет, я Сэм" and hero navigation labels use the selected Cyrillic-capable display font.

#### Scenario: Russian content remains unchanged
- **WHEN** the hero typography is upgraded
- **THEN** the visible hero heading remains "Привет, я Сэм" and the navigation labels remain "Обо мне", "Цены", "Проекты", and "Контакты".

#### Scenario: Font fallback remains available
- **WHEN** the display font is unavailable or still loading
- **THEN** the hero falls back to the existing sans-serif stack without breaking layout or hiding text.

### Requirement: Reference-Inspired Hero Heading
The system SHALL style the hero heading to feel closer to the provided premium reference while preserving the site's dark gradient identity.

#### Scenario: Heading appears heavier and more premium
- **WHEN** the first screen is viewed on desktop
- **THEN** the hero heading appears bold, wide, uppercase, and visually closer to the reference than the current generic Manrope treatment.

#### Scenario: Heading keeps frosted gradient identity
- **WHEN** the hero heading is visible
- **THEN** it keeps a frosted gray-blue gradient treatment compatible with the existing dark portfolio visual system.

#### Scenario: Heading avoids clipping and overflow
- **WHEN** the hero is viewed at mobile, tablet, desktop, and ultra-wide widths
- **THEN** the hero heading stays readable, is not cut off at the screen edges, and does not create horizontal overflow.

### Requirement: Premium Hero Navbar
The system SHALL refine the hero navbar so it matches the upgraded typographic direction and feels more deliberate.

#### Scenario: Navbar rhythm is improved
- **WHEN** the hero navbar renders
- **THEN** the links are evenly distributed across the top of the viewport with refined spacing, weight, and uppercase styling.

#### Scenario: Navbar anchors continue to work
- **WHEN** a user activates a navbar link
- **THEN** the link continues to target the existing section anchor generated from its Russian label.

#### Scenario: Navbar remains readable on mobile
- **WHEN** the hero navbar is viewed on narrow screens
- **THEN** each label remains legible, does not overlap adjacent labels, and stays within the viewport.

### Requirement: Existing Hero Composition Preserved
The system SHALL preserve the existing hero content structure while improving typography.

#### Scenario: Portrait remains centered
- **WHEN** the hero screen renders after the typography upgrade
- **THEN** the portrait remains visually centered in the hero composition and is not pushed to one side by the heading or nav changes.

#### Scenario: Descriptor and CTA remain available
- **WHEN** the first screen is viewed
- **THEN** the supporting descriptor and contact CTA remain visible and retain their existing behavior.

#### Scenario: Other sections are not redesigned
- **WHEN** the typography upgrade is complete
- **THEN** `AboutSection`, `ServicesSection`, and `ProjectsSection` retain their current layout and behavior.

### Requirement: Hero Verification
The system SHALL verify the upgraded hero screen across responsive breakpoints and production build.

#### Scenario: Production build passes
- **WHEN** implementation is complete
- **THEN** the TypeScript and production Vite build complete successfully.

#### Scenario: Responsive visual checks pass
- **WHEN** the hero is inspected at mobile, tablet, desktop, and ultra-wide viewports
- **THEN** nav labels, hero heading, portrait, descriptor, and CTA do not overlap incoherently and do not create horizontal overflow.

