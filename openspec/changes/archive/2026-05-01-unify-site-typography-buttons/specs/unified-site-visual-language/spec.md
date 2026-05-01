## ADDED Requirements

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
