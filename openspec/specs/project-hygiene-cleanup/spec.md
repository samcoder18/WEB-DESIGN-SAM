# project-hygiene-cleanup Specification

## Purpose
TBD - created by archiving change cleanup-project-duplicates. Update Purpose after archive.
## Requirements
### Requirement: Unused source elements are removed safely
The system SHALL allow unused source files, exports, imports, branches, and CSS selectors to be removed only after they are proven to have no active runtime references.

#### Scenario: Unused symbol is removed
- **WHEN** an exported source symbol has no references from active files under `src/`
- **THEN** the implementation removes that symbol or file and verifies the removed identifier no longer appears in active source code

#### Scenario: Hidden inert UI is removed
- **WHEN** a UI element is permanently hidden by a constant or branch and has no current user-facing behavior
- **THEN** the implementation removes the hidden element and its supporting constants without changing the visible page

#### Scenario: Current visual behavior remains stable
- **WHEN** source cleanup is complete
- **THEN** the hero, marquee, about, services, and projects sections retain their current visible structure, copy, animations, and CTA behavior

### Requirement: Generated and local artifacts are excluded from active project state
The system SHALL keep generated build output, browser verification artifacts, OS metadata, and TypeScript cache files out of active project state.

#### Scenario: Generated folders are cleaned
- **WHEN** generated folders such as `dist/` or local verification folders under `tmp/` are present
- **THEN** the implementation removes them from the working tree or leaves them ignored, and confirms `.gitignore` continues to exclude them

#### Scenario: OS metadata is cleaned
- **WHEN** `.DS_Store` files are present in project folders
- **THEN** the implementation removes those files and confirms `.gitignore` excludes future `.DS_Store` files

### Requirement: OpenSpec changes reflect active work
The system SHALL keep `openspec/changes/` focused on active changes by archiving or otherwise resolving completed and superseded changes.

#### Scenario: Completed change is archived
- **WHEN** an OpenSpec change is already implemented and no longer active
- **THEN** the implementation archives it through the OpenSpec workflow or records why it must remain active

#### Scenario: Superseded change is resolved
- **WHEN** an older OpenSpec change is superseded by a newer implementation pass
- **THEN** the implementation archives or removes the superseded active change from `openspec/changes/` while preserving relevant history

### Requirement: Local agent tooling is classified before cleanup
The system SHALL classify local agent skill folders as project-owned or local-only before deleting, moving, or ignoring them.

#### Scenario: Local-only tooling remains available
- **WHEN** `.agents/`, `.claude/`, or `.codex/` contain local skill files required by the current workflow
- **THEN** the implementation does not delete them and instead documents or ignores them according to the chosen project policy

#### Scenario: Duplicate tooling is not project-owned
- **WHEN** duplicate skill folders are confirmed to be local tooling rather than app deliverables
- **THEN** the implementation excludes them from app cleanup scope and prevents accidental versioning

### Requirement: Cleanup is verified
The system SHALL verify cleanup with build and source-search checks before the change is considered complete.

#### Scenario: Build verification passes
- **WHEN** cleanup implementation is complete
- **THEN** `npm run build` passes without TypeScript or Vite errors

#### Scenario: Removed identifiers stay removed
- **WHEN** cleanup implementation removes a source element
- **THEN** source search confirms the removed identifiers are absent from active runtime code

