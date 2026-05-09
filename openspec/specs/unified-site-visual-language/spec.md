# unified-site-visual-language Specification

## Purpose
TBD - created by archiving change unify-site-typography-buttons. Update Purpose after archive.
## Requirements
### Requirement: Site-wide display typography follows the updated hero style
The site SHALL apply a unified display typography system to major section headings, numeric accents, and compact uppercase labels based on the updated hero heading direction.

#### Scenario: Section headings share the display language
- **WHEN** a user views the about, services, projects, and contact/CTA areas
- **THEN** each major section heading uses a consistent display-font treatment, uppercase rhythm, weight, and responsive scale derived from the updated hero heading

#### Scenario: Text remains responsive
- **WHEN** the site is viewed at 320px, 375px, tablet, desktop, and wide desktop widths
- **THEN** display text remains readable without clipping, incoherent overlap, or horizontal overflow

### Requirement: Supporting text hierarchy is consistent and readable
The site SHALL use consistent styles for eyebrows, labels, body copy, project metadata, service descriptions, and supporting text while preserving readable body typography.

#### Scenario: Supporting copy follows one hierarchy
- **WHEN** a user scans services, project cards, and about-story stages
- **THEN** comparable text roles use consistent font family, size scale, line height, weight, opacity, letter spacing, and casing

#### Scenario: Body copy remains legible
- **WHEN** longer Russian body text appears in service descriptions and about-stage copy
- **THEN** it remains readable with a body-oriented font, sufficient contrast, and mobile text sizes that do not drop below accessible reading thresholds

### Requirement: Buttons use one premium interaction family
The site SHALL align all primary and secondary buttons with the rebuilt premium button language from the hero screen.

#### Scenario: Primary CTAs match the rebuilt button
- **WHEN** a user sees a main contact CTA in any section
- **THEN** the button uses the premium rounded shape, uppercase label treatment, icon behavior when applicable, focus state, and motion behavior established by the updated hero button

#### Scenario: Project action buttons remain visually related
- **WHEN** a user sees a project action button inside a project card
- **THEN** the button appears as a secondary member of the same premium family rather than a disconnected legacy outline style

#### Scenario: Buttons remain usable
- **WHEN** buttons are focused, hovered, tapped, or viewed with reduced-motion preferences
- **THEN** they provide visible focus indication, maintain touch-friendly dimensions, and avoid motion that conflicts with reduced-motion settings

### Requirement: Existing content and navigation behavior is preserved
The site SHALL preserve existing content, section order, anchors, assets, and button intent while applying the unified visual style.

#### Scenario: Style update does not alter content semantics
- **WHEN** the unified style is implemented
- **THEN** existing visible text, media assets, section IDs, navigation targets, and CTA purposes remain unchanged unless separately requested

#### Scenario: Existing layout interactions remain intact
- **WHEN** a user scrolls through the animated about section and stacked project cards
- **THEN** existing Framer Motion behavior remains functional while the updated typography and buttons fit within their containers

### Requirement: Services Block Has A Signature Premium Treatment
The site SHALL allow the services block to become a distinct authored moment while staying aligned with the existing display typography, readable body hierarchy, and premium interaction family.

#### Scenario: Services typography remains aligned
- **WHEN** a user views the upgraded services block
- **THEN** its heading, indexes, labels, service names, descriptions, and metadata use the existing Manrope/Unbounded system with zero letter-spacing, responsive sizing, and sufficient contrast on the light surface

#### Scenario: Services visual detail is purposeful
- **WHEN** the services block introduces new lines, rails, panels, badges, or accent treatments
- **THEN** each detail supports scanability, hierarchy, or feedback rather than acting as unrelated decoration

#### Scenario: Services interactions match the site
- **WHEN** service items are hovered, focused, tapped, or viewed with reduced-motion preferences
- **THEN** interaction states feel related to the existing premium controls and do not conflict with the site's focus visibility, touch target, or reduced-motion conventions

#### Scenario: Site identity remains cohesive
- **WHEN** the user scrolls from the dark about/value section through services into projects
- **THEN** the upgraded services section feels like part of the same portfolio identity and does not introduce a one-off palette, unrelated font, generic card-grid aesthetic, or decorative WebGL effect

### Requirement: Navbar Follows The Premium Visual Language
The site SHALL treat the navbar as part of the same premium visual system as the updated typography and button components.

#### Scenario: Navbar typography aligns with the site
- **WHEN** the navbar is rendered
- **THEN** its labels use the existing font system, small readable sizing, zero letter-spacing, and a restrained weight that does not compete with section headings or CTAs

#### Scenario: Navbar interactions feel consistent
- **WHEN** a navbar link is hovered, focused, or tapped
- **THEN** its transition timing, focus visibility, and color treatment feel consistent with the site's premium controls while avoiding layout shift

#### Scenario: Navbar does not disturb section compositions
- **WHEN** the user scrolls through the hero, animated about section, services section, and project cards
- **THEN** the navbar remains visually lightweight and does not hide important text, media, buttons, or sticky-card content

