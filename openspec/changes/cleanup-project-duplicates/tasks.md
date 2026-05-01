## 1. Confirm Cleanup Scope

- [x] 1.1 Run a source-reference search for `AnimatedText`, `navLinks`, `heroNavLinks`, `showHeroNav`, `gradient`, `Send`, and unused CSS selectors.
- [x] 1.2 Confirm which OpenSpec changes are completed, superseded, or still active before archiving anything.
- [x] 1.3 Decide whether `.agents/`, `.claude/`, and `.codex/` are project-owned artifacts or local-only tooling.

## 2. Clean Active Source

- [x] 2.1 Remove the unused `AnimatedText` component if no active source imports it.
- [x] 2.2 Remove unused `navLinks` data if no active source imports it.
- [x] 2.3 Remove hidden hero navigation constants and markup controlled by `showHeroNav = false`.
- [x] 2.4 Remove unused `ContactButton` legacy gradient branch and unused `Send` icon import if no active usage needs it.
- [x] 2.5 Remove CSS selectors that only support deleted or unused source paths.

## 3. Clean Workflow And Generated Artifacts

- [x] 3.1 Remove `.DS_Store` files from project folders.
- [x] 3.2 Remove generated `dist/` output and local browser verification contents under `tmp/` when no longer needed.
- [x] 3.3 Preserve or update `.gitignore` so generated folders and OS metadata remain excluded.
- [x] 3.4 Archive completed or superseded OpenSpec changes through the OpenSpec workflow where valid.
- [x] 3.5 Document or ignore local agent tooling folders according to the decision from task 1.3.

## 4. Verify

- [x] 4.1 Run `npm run build` and confirm TypeScript/Vite pass.
- [x] 4.2 Search active source for removed identifiers and confirm they are absent.
- [x] 4.3 Perform a quick visual smoke check of the landing page at desktop and mobile widths.
- [x] 4.4 Summarize removed files, archived changes, and any intentionally retained items.
