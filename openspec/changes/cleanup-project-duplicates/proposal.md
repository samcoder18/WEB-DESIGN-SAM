## Why

The project has accumulated several layers of implementation leftovers: unused UI helpers, hidden navigation code, older OpenSpec change folders, local browser verification artifacts, and duplicate agent-skill folders. Cleaning these up now will make future visual changes safer because the active app surface will be easier to inspect and less likely to inherit stale assumptions.

## What Changes

- Remove or archive unused source code that is no longer referenced by the current app, including `AnimatedText`, `navLinks`, hidden hero navigation, and unused `ContactButton` branches.
- Remove stale CSS selectors and variants that have no active markup usage, while preserving the current premium typography and button system.
- Archive completed or superseded OpenSpec changes so only active work remains in `openspec/changes/`.
- Remove local/generated workspace artifacts such as `.DS_Store`, `dist/`, and `tmp/` contents from the working tree when safe, while keeping ignore rules intact.
- Audit duplicated local agent-skill directories under `.agents/`, `.claude/`, and `.codex/` and decide which are project-owned versus local tooling.
- Keep the visible portfolio behavior unchanged unless a removed element is proven to be unused or inert.

## Capabilities

### New Capabilities
- `project-hygiene-cleanup`: Defines how the project identifies, removes, and verifies duplicate, generated, stale, or unused files and UI elements without changing the intended portfolio experience.

### Modified Capabilities

## Impact

- Affected source files are expected to include `src/sections/HeroSection.tsx`, `src/data/portfolio.ts`, `src/components/AnimatedText.tsx`, `src/components/ContactButton.tsx`, and `src/index.css`.
- Affected project artifacts include `openspec/changes/*`, `openspec/changes/.DS_Store`, `tmp/`, `dist/`, and potentially local skill directories.
- No production dependencies or public APIs are expected to change.
- Verification should include `npm run build`, source search for removed symbols, and a quick visual smoke check of the landing page.
