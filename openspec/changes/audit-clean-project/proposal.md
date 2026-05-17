## Why

Project folders contain generated output, local verification artifacts, and likely duplicate or obsolete files that make the active codebase harder to inspect and maintain. A structured cleanup is needed so only verified active source, required project configuration, and intentional local tooling remain.

## What Changes

- Audit the project tree for generated artifacts, duplicate files, stale temporary outputs, unused source modules, orphaned assets, and obsolete OpenSpec changes.
- Classify every cleanup candidate before removal as generated, duplicate, unused source, local-only tooling, or intentionally retained project material.
- Remove or ignore confirmed generated and temporary artifacts such as build output, cache files, local verification folders, and OS metadata.
- Remove duplicate or unused source/assets only after reference checks prove they are not part of the active Vite/React runtime.
- Produce a cleanup report that records what was removed, what was retained, and any follow-up candidates that require user confirmation.
- Verify the resulting project state with source-search checks and `npm run build`.

## Capabilities

### New Capabilities
- None.

### Modified Capabilities
- `project-hygiene-cleanup`: Adds explicit audit/reporting expectations and tightens cleanup verification before files are deleted.

## Impact

- Affected areas: repository root, `src/`, `public/`, `dist/`, `tmp/`, local agent/tooling folders, `.gitignore`, and `openspec/changes/`.
- Runtime behavior should remain unchanged; visible site content, routing, animations, and assets must be preserved unless a file is proven unused.
- No new production dependencies are expected.
