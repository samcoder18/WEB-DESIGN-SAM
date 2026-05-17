## Why

The project has already been through several visual iterations and a partial cleanup pass, but active OpenSpec changes, generated build output, local workflow folders, and historical specs still make it harder to tell which files are part of the current product. A full repository audit will reduce future implementation risk by separating runtime code, active planning artifacts, generated files, and local-only tooling.

## What Changes

- Audit the full repository tree, including source, public assets, OpenSpec artifacts, build output, local tooling folders, and configuration files.
- Classify files as runtime-required, source-of-truth documentation, active OpenSpec work, archived history, generated output, local-only tooling, or safe deletion candidates.
- Remove duplicate, generated, stale, or unnecessary files only after confirming they are not referenced by the active app, active OpenSpec workflow, package scripts, or local development setup.
- Resolve superseded or completed OpenSpec change folders so `openspec/changes/` contains only active work that still needs implementation.
- Preserve current portfolio visuals, copy, motion, routes, build behavior, and dependency versions unless a file is proven inert or generated.
- Document intentionally retained files or folders that look redundant but are required for tooling, workflow history, or future implementation.

## Capabilities

### New Capabilities
- `repository-audit-cleanup`: Defines how the project audits, classifies, removes, archives, and verifies duplicate, generated, stale, or unnecessary files across the full repository without changing the intended portfolio experience.

### Modified Capabilities

## Impact

- Affected areas include `src/`, `public/`, `openspec/changes/`, `openspec/specs/`, config files, generated `dist/` output, and ignored local workflow folders such as `.agents/`, `.claude/`, and `.codex/`.
- No public API, dependency, route, content, or visual-design change is expected.
- Verification should include repository-wide source searches, OpenSpec status checks, `npm run build`, and a brief retained/removed artifact summary.
