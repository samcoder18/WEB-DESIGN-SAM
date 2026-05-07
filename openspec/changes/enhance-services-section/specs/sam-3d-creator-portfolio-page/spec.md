## MODIFIED Requirements

### Requirement: Services Section
The system SHALL render a premium services section with rounded top corners, the heading "Услуги", the existing `#услуги` anchor, and three expressive service offers for `Иммерсивные лендинги`, `Комплексные сайты под ключ`, and `Брендинг и визуальная система`.

#### Scenario: Services list matches the current offer set
- **WHEN** the services section is viewed
- **THEN** it shows services numbered `01` through `03` in order, each service includes the required service name, readable Russian description, and concise supporting metadata that clarifies scope, deliverables, or outcomes

#### Scenario: Services section uses a premium light treatment
- **WHEN** the services section appears after the about section
- **THEN** the background remains a light surface, text uses the portfolio ink system, top corners are rounded responsively, and the section includes a more authored editorial composition than a plain bordered list

#### Scenario: Services section remains reachable from navigation
- **WHEN** a user activates the navbar link labeled `Услуги`
- **THEN** the page scrolls to the services section target without changing routes and without important services content being hidden behind the fixed navigation

#### Scenario: Services section motion stays restrained
- **WHEN** service content enters the viewport or a service item is hovered or focused
- **THEN** the section uses transform, opacity, contrast, or line-progress effects that support hierarchy without causing layout shift, scroll-jacking, or inaccessible hidden content
