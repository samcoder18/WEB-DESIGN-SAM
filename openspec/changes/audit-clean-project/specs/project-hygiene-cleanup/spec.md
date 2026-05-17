## MODIFIED Requirements

### Requirement: Unused source elements are removed safely
The system SHALL allow unused source files, exports, imports, branches, CSS selectors, and public assets to be removed only after they are proven to have no active runtime references and are recorded in the cleanup audit.

#### Scenario: Unused symbol is removed
- **WHEN** an exported source symbol has no references from active files under `src/`
- **THEN** the implementation removes that symbol or file and verifies the removed identifier no longer appears in active source code

#### Scenario: Hidden inert UI is removed
- **WHEN** a UI element is permanently hidden by a constant or branch and has no current user-facing behavior
- **THEN** the implementation removes the hidden element and its supporting constants without changing the visible page

#### Scenario: Unused public asset is removed
- **WHEN** a file under `public/` or another asset folder has no references from active source, HTML, CSS, configuration, or documented runtime paths
- **THEN** the implementation removes the asset and records the reference checks used to prove it was unused

#### Scenario: Current visual behavior remains stable
- **WHEN** source cleanup is complete
- **THEN** the hero, marquee, about, services, and projects sections retain their current visible structure, copy, animations, and CTA behavior

### Requirement: Generated and local artifacts are excluded from active project state
The system SHALL keep generated build output, browser verification artifacts, OS metadata, TypeScript cache files, dependency caches, and temporary local outputs out of active project state.

#### Scenario: Generated folders are cleaned
- **WHEN** generated folders such as `dist/` or local verification folders under `tmp/` are present
- **THEN** the implementation removes them from the working tree or leaves them ignored, and confirms `.gitignore` continues to exclude them

#### Scenario: OS metadata is cleaned
- **WHEN** `.DS_Store` files are present in project folders
- **THEN** the implementation removes those files and confirms `.gitignore` excludes future `.DS_Store` files

#### Scenario: Dependency and cache artifacts are retained only when policy allows
- **WHEN** dependency folders, tool caches, or package-manager generated files appear in the project tree
- **THEN** the implementation keeps required lockfiles, ignores reproducible dependency/cache folders, and records any local-only retained folders in the cleanup report

### Requirement: Duplicate files are classified before removal
The system SHALL identify duplicate or near-duplicate files by content, name, and references before deleting any duplicate candidate.

#### Scenario: Exact duplicate is removed
- **WHEN** two or more files have identical content and only one path is referenced by active runtime or workflow files
- **THEN** the implementation removes the unreferenced duplicate and records the retained canonical path

#### Scenario: Near duplicate requires retention decision
- **WHEN** files have similar names or overlapping content but different references, behavior, or ownership
- **THEN** the implementation retains the files or records them as follow-up candidates instead of deleting them automatically

### Requirement: OpenSpec changes reflect active work
The system SHALL keep `openspec/changes/` focused on active changes by archiving, resolving, or documenting completed and superseded changes.

#### Scenario: Completed change is archived
- **WHEN** an OpenSpec change is already implemented and no longer active
- **THEN** the implementation archives it through the OpenSpec workflow or records why it must remain active

#### Scenario: Superseded change is resolved
- **WHEN** an older OpenSpec change is superseded by a newer implementation pass
- **THEN** the implementation archives or removes the superseded active change from `openspec/changes/` while preserving relevant history

#### Scenario: Active change is retained with rationale
- **WHEN** an OpenSpec change is still in progress or cannot be safely archived during cleanup
- **THEN** the implementation leaves it in place and records the reason in the cleanup report

### Requirement: Local agent tooling is classified before cleanup
The system SHALL classify local agent skill folders as project-owned, local-only, duplicate, or unknown before deleting, moving, or ignoring them.

#### Scenario: Local-only tooling remains available
- **WHEN** `.agents/`, `.claude/`, or `.codex/` contain local skill files required by the current workflow
- **THEN** the implementation does not delete them and instead documents or ignores them according to the chosen project policy

#### Scenario: Duplicate tooling is not project-owned
- **WHEN** duplicate skill folders are confirmed to be local tooling rather than app deliverables
- **THEN** the implementation excludes them from app cleanup scope and prevents accidental versioning

#### Scenario: Unknown tooling is not deleted
- **WHEN** a local tooling folder cannot be confidently classified
- **THEN** the implementation retains it and records the uncertainty for user review

### Requirement: Cleanup is verified and documented
The system SHALL verify cleanup with build, source-search, and report checks before the change is considered complete.

#### Scenario: Build verification passes
- **WHEN** cleanup implementation is complete
- **THEN** `npm run build` passes without TypeScript or Vite errors

#### Scenario: Removed identifiers stay removed
- **WHEN** cleanup implementation removes a source element
- **THEN** source search confirms the removed identifiers are absent from active runtime code

#### Scenario: Cleanup report is created
- **WHEN** cleanup implementation is complete
- **THEN** the change includes a cleanup report listing removed files, retained candidates, follow-up items, and verification commands

#### Scenario: No critical cleanup candidate is unclassified
- **WHEN** the audit identifies generated artifacts, duplicates, unused source, obsolete OpenSpec changes, or local tooling candidates
- **THEN** each candidate is either removed, retained with rationale, or listed as requiring user confirmation
