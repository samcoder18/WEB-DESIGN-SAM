## Context

The app is a Vite, React, TypeScript, Tailwind CSS, and Framer Motion single-page portfolio. The active runtime surface is small (`src/App.tsx`, shared components, data, and five sections), but the workspace also contains several completed OpenSpec changes, local agent skill folders, generated `dist/` output, Chrome verification profiles/screenshots under `tmp/`, and `.DS_Store`.

The source audit found these concrete cleanup candidates:
- `src/components/AnimatedText.tsx` is not imported by active source files.
- `src/data/portfolio.ts` exports `navLinks`, but active source files no longer import it.
- `src/sections/HeroSection.tsx` defines `heroNavLinks` and renders a nav whose class is permanently hidden via `showHeroNav = false`.
- `src/components/ContactButton.tsx` keeps a legacy `gradient` variant and `Send` icon branch, while all current usages use the premium/default treatment.
- `src/index.css` includes some selector variants that are not used in current markup, such as `site-kicker--light`, and may include CSS that only supports legacy branches.
- `openspec/changes/*` contains multiple completed/superseded changes, including older hero/about/typography passes.
- `tmp/`, `dist/`, and `openspec/changes/.DS_Store` are local/generated artifacts; `.gitignore` already ignores `tmp/`, `dist/`, `.DS_Store`, and `*.tsbuildinfo`.
- `.agents/`, `.claude/`, and `.codex/` contain overlapping local automation/skill assets and are currently untracked.

## Goals / Non-Goals

**Goals:**
- Remove unused active-source symbols, files, imports, branches, and CSS selectors after confirming they have no source references.
- Archive or remove completed OpenSpec change folders so `openspec/changes/` reflects active work only.
- Clean local generated artifacts from the working tree without weakening `.gitignore`.
- Preserve the current landing page layout, visual system, copy, animations, and CTA behavior.
- Leave a clear verification trail for every cleanup category.

**Non-Goals:**
- Redesign the hero, about, services, projects, marquee, or button visuals.
- Change external image URLs, service/project data, dependencies, or build tooling.
- Delete local agent skill directories automatically if they are still used by the working environment.
- Remove `node_modules/` or other dependency cache folders.

## Decisions

1. **Classify cleanup candidates before deleting.**
   - Remove items only when `rg` confirms no active source references or when the item is generated/local and covered by `.gitignore`.
   - Alternative considered: delete all visually unused files immediately. That risks removing local tooling or future OpenSpec context that is not part of the app bundle.

2. **Treat OpenSpec changes as workflow artifacts, not app runtime code.**
   - Completed or superseded changes should be archived through the OpenSpec workflow where possible, or explicitly moved out of active `openspec/changes/`.
   - Alternative considered: delete change folders directly. That would clean the tree faster but loses spec history and bypasses OpenSpec metadata.

3. **Keep visual behavior stable.**
   - Source cleanup should not alter rendered markup except for inert/hidden elements such as the permanently hidden hero nav.
   - Alternative considered: simplify adjacent UI while cleaning. That would mix hygiene work with design changes and make regressions harder to review.

4. **Keep local skill tooling out of the app cleanup path unless the owner decides it is not project-owned.**
   - `.agents/`, `.claude/`, and `.codex/` may be necessary for the current workflow, but they are not app runtime files. The implementation should either add explicit ignore rules or document which of them are intentionally versioned.
   - Alternative considered: remove all local skill folders. That may break local agent workflows and is outside a safe app cleanup.

## Risks / Trade-offs

- Removing `AnimatedText` might conflict with older specs that still mention it -> Verify current source imports first and let archived specs preserve historical context.
- Removing hidden hero nav eliminates a dormant future toggle -> If navigation is needed later, reintroduce it intentionally from current `navLinks` requirements instead of keeping dead markup.
- Removing the legacy `ContactButton` gradient branch reduces flexibility -> Keep only if a current usage or near-term task needs it; otherwise premium/default is the current design direction.
- Archiving OpenSpec changes may expose incomplete or invalid historical specs -> Archive completed changes one at a time and validate after each archive.
- Cleaning local skill folders may remove user tooling -> Do not delete them during implementation without a specific decision; prefer ignore/documentation first.
