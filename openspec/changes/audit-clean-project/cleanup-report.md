## Summary

Audit and cleanup focused on removing generated output, stale local editor artifacts, unused source/demo files, unused public assets, obsolete active OpenSpec work, and dependencies that only supported deleted files.

## Inventory

### Generated and Temporary
- `dist/`: Vite build output; ignored by `.gitignore` and reproducible with `npm run build`.
- `tmp/`: ignored by `.gitignore`; no files found during audit.
- `.DS_Store`: ignored by `.gitignore`; no files found during audit.
- `node_modules/`: dependency install output; ignored by `.gitignore`, retained locally so existing npm scripts continue to run.

### Source and Assets
- Active entry points: `index.html`, `src/main.tsx`, `src/App.tsx`, `src/pages/HomePage.tsx`.
- Active home sections: hero, marquee, video about, services, projects, contact.
- Public assets retained because active files reference them: `about-blue-clover.png`, `about-flower.png`, `about-heart.png`, `favicon.svg`, `og-image.svg`, `robots.txt`, `site.webmanifest`.
- No exact duplicate content groups were found among active `src/` and `public/` files.

### OpenSpec
- `audit-clean-project`: retained as the active cleanup change.
- `audit-cleanup-project-files`: completed and superseded by this pass; archived through `openspec archive audit-cleanup-project-files --yes`.

### Local Tooling
- `.agents/`, `.claude/`, `.codex/`: classified as local-only workflow tooling and already ignored by `.gitignore`; retained.

## Removed Files

### Generated and Temporary
- `dist/`: removed as reproducible Vite build output.
- `src/sections/.FeatureCardsSection.tsx.swp`: removed as a tracked Vim swap/editor artifact.

### Unused Source
- `src/components/HorizontalCharacterReveal.tsx`: no active imports or runtime references.
- `src/sections/AboutSection.tsx`: replaced by `VideoAboutSection` in `HomePage`; no active imports.
- `src/sections/KeyFindingsSection.tsx`: no active imports.
- `src/sections/ServicesGridSection.tsx`: no active imports.
- `src/components/ui/bg-pattern-demo.tsx`: demo-only component with no active imports.
- `src/components/ui/demo.tsx`: demo-only component with no active imports.
- `src/components/ui/bento-product-features.tsx`: used only by deleted demo component.
- `src/components/ui/bg-pattern.tsx`: used only by deleted demo component.
- `src/components/ui/sparkles.tsx`: no active imports.
- `src/components/ui/card.tsx`: used only by deleted unused sections/demo components.
- `src/components/ui/badge.tsx`: no active imports.
- `src/components/ui/label.tsx`: no active imports.
- `src/components/ui/switch.tsx`: no active imports.

### Unused Public Assets
- `public/about-lightning.png`: no references from active source, HTML, public metadata, or package/config files.
- `public/about-star.png`: no references from active source, HTML, public metadata, or package/config files.
- `public/services-panorama.png`: no references from active source, HTML, public metadata, or package/config files.

### Dependencies
- `@radix-ui/react-label`: removed from `package.json`/`package-lock.json`; only supported deleted `label.tsx`.
- `@radix-ui/react-switch`: removed from `package.json`/`package-lock.json`; only supported deleted `switch.tsx`.

### OpenSpec
- `openspec/changes/audit-cleanup-project-files/`: moved to `openspec/changes/archive/2026-05-17-audit-cleanup-project-files/` by OpenSpec archive workflow.
- `openspec/specs/repository-audit-cleanup/spec.md`: created by the archive workflow from the completed prior change.

## Retained Files and Rationale

- `node_modules/`: ignored dependency output, retained locally for build/test speed.
- `.agents/`, `.claude/`, `.codex/`: ignored local workflow tooling, retained to avoid breaking current agent workflows.
- `public/robots.txt`: public-root deployment/SEO asset copied by Vite even though not source-imported.
- `public/favicon.svg`, `public/og-image.svg`, `public/site.webmanifest`: referenced by `index.html` and manifest metadata.
- `public/about-blue-clover.png`, `public/about-flower.png`, `public/about-heart.png`: referenced by `VideoAboutSection`.

## Follow-Up Candidates

- Consider whether `openspec/specs/repository-audit-cleanup/spec.md` should remain a separate capability or be consolidated with `project-hygiene-cleanup` after this change is archived.

## Verification

- Reference searches completed before removal:
  - `rg "HorizontalCharacterReveal|AboutSection|KeyFindingsSection|ServicesGridSection|about-lightning|about-star|services-panorama" -n src public index.html package.json`
  - `rg "about-blue-clover|about-flower|about-heart|favicon|og-image|robots|site\\.webmanifest" -n . --glob '!node_modules' --glob '!dist'`
- Post-removal reference search:
  - `rg "HorizontalCharacterReveal|KeyFindingsSection|ServicesGridSection|BentoGridShowcase|BGPattern|about-lightning|about-star|services-panorama|@radix-ui/react-label|@radix-ui/react-switch" -n src public index.html package.json package-lock.json`
  - Result: no matches.
- Build verification:
  - `npm run build`
  - Result: passed. Vite generated ignored `dist/` output successfully; `dist/` was removed again afterward to leave generated output out of the project tree.
- Final git status review:
  - `git status --short`
  - Result: changes are limited to intended cleanup deletions, dependency manifest updates, OpenSpec archive/spec updates, and this active change.
- Browser smoke check:
  - Opened `http://127.0.0.1:5174/` from `npm run dev`.
  - DOM confirmed navigation, hero (`HI, I'M SAM`), about section, services, projects, contact form, and CTA links/buttons are present.
