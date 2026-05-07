## MODIFIED Requirements

### Requirement: Hero Section
The system SHALL render a full viewport-height hero with a compact site-level floating navbar containing exactly `Обо мне`, `Услуги`, and `Проекты`; a massive gradient heading "Привет, я Сэм"; a bottom creator tagline; a gradient "Связаться" contact button; and an absolutely centered magnetic portrait image from the provided Figma asset URL.

#### Scenario: Hero content is visible on first load
- **WHEN** the page opens at the top
- **THEN** the hero fills the viewport, the compact premium navbar is visible with the three requested links, the heading uses `.hero-heading`, the tagline reads "3D-креатор, создающий яркие и незабываемые проекты", the contact button reads "Связаться", and the portrait image is centered over the hero composition.

#### Scenario: Hero motion follows the requested timing
- **WHEN** the hero enters the viewport
- **THEN** the navbar and hero elements animate with restrained fade-in motion using their specified stagger delays and y/x offsets, while respecting reduced-motion preferences.

#### Scenario: Portrait magnet responds to pointer movement
- **WHEN** a pointer moves within the configured magnet padding around the portrait
- **THEN** the portrait translates toward the pointer using the configured strength and returns smoothly when inactive.
