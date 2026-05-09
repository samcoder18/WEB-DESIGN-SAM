## Why

Текущий блок услуг слишком утилитарный: он перечисляет офферы аккуратно, но не создает ощущения сильной студийной подачи и не помогает быстро понять ценность работы Сэма. Сейчас есть возможность сделать секцию самостоятельным премиальным моментом между dark storytelling и проектами, сохранив ясность, скорость и профессиональный тон.

## What Changes

- Переработать `ServicesSection` из простой белой таблицы в выразительный, стильный и профессиональный блок услуг.
- Сохранить текущий якорь `#услуги`, порядок секций и смысл трех текущих услуг: иммерсивные лендинги, комплексные сайты под ключ, брендинг и визуальная система.
- Добавить более сильную композицию: редакционный intro, крупные номера, ясные deliverables/outcomes, уверенную сетку и один запоминающийся signature detail.
- Рассмотреть несколько визуальных направлений и реализовать рекомендуемый вариант по умолчанию: премиальная editorial/matrix секция на светлой поверхности с тонкими интерактивными акцентами.
- Улучшить responsive-поведение, состояния hover/focus, reduced-motion и читаемость длинного русского текста.
- Не менять hero, marquee, about, projects, navbar, данные проектов или глобальную архитектуру приложения без необходимости.

## Capabilities

### New Capabilities

- `premium-services-section`: Covers the upgraded services block presentation, content hierarchy, interaction behavior, responsive rules, and implementation constraints.

### Modified Capabilities

- `sam-3d-creator-portfolio-page`: Update the services section contract from a plain numbered list toward a premium expressive services block while preserving the portfolio page order and services anchor.
- `unified-site-visual-language`: Extend the shared visual-language contract so the services block feels authored and premium without breaking existing typography, contrast, or button conventions.

## Impact

- Affected code: `src/sections/ServicesSection.tsx`, `src/data/portfolio.ts`, and section-local/global supporting styles in `src/index.css`.
- Affected behavior: services section layout, copy hierarchy, service row/card interactions, animation timing, responsive composition, and accessibility semantics.
- Dependencies: no new runtime dependency is expected; continue using React, TypeScript, Tailwind CSS, Framer Motion, and existing font tokens.
- Verification: run the production build and visually inspect the services section across mobile, tablet, desktop, and wide desktop sizes.
