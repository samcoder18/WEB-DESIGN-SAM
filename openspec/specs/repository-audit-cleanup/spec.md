# repository-audit-cleanup Specification

## Purpose
TBD - created by archiving change audit-cleanup-project-files. Update Purpose after archive.
## Requirements
### Requirement: Repository files are inventoried and classified
The system SHALL provide a cleanup process that inventories the repository and classifies files before removal, archival, or retention decisions are made.

#### Scenario: Top-level project areas are classified
- **WHEN** the cleanup begins
- **THEN** the implementation records the purpose of source files, public assets, OpenSpec artifacts, package/config files, generated output, dependency folders, and local-only tooling folders

#### Scenario: Suspicious duplicates are identified
- **WHEN** files or folders appear to duplicate existing source, specs, generated output, or tooling
- **THEN** the implementation marks them as cleanup candidates only after checking references and ownership

### Requirement: Cleanup deletes only proven-safe artifacts
The system SHALL remove files, folders, exports, selectors, or assets only after verifying they are generated, stale, duplicate, or unused by active project behavior.

#### Scenario: Generated artifacts are removed
- **WHEN** generated folders, cache files, or OS metadata are present and covered by ignore rules
- **THEN** the implementation removes them from the working tree or leaves them ignored with documented rationale

#### Scenario: Referenced files are retained
- **WHEN** a file, asset, export, selector, or config entry is referenced by active source, public metadata, package scripts, OpenSpec workflow, or local development setup
- **THEN** the implementation retains it and documents why it is not a safe deletion candidate

#### Scenario: Runtime behavior remains unchanged
- **WHEN** cleanup is complete
- **THEN** the portfolio keeps the same visible sections, copy, images, calls to action, motion behavior, routes, and build output semantics

### Requirement: OpenSpec workflow state is resolved safely
The system SHALL keep `openspec/changes/` focused on active work by resolving completed, superseded, or duplicate change folders without losing relevant history.

#### Scenario: Completed change is archived
- **WHEN** an OpenSpec change is complete and no longer pending implementation
- **THEN** the implementation archives it through the OpenSpec workflow or records why it must remain active

#### Scenario: Pending change is retained
- **WHEN** an OpenSpec change still represents work that has not been implemented or intentionally superseded
- **THEN** the implementation leaves it active and records its status in the cleanup summary

#### Scenario: Duplicate cleanup planning is consolidated
- **WHEN** multiple active changes describe the same cleanup outcome
- **THEN** the implementation keeps a single active source of truth or documents why each change remains necessary

### Requirement: Local tooling is protected from accidental deletion
The system SHALL classify local agent and automation folders separately from product files before any cleanup action is taken.

#### Scenario: Local-only tooling is ignored or retained
- **WHEN** `.agents/`, `.claude/`, `.codex/`, or similar local workflow folders are present
- **THEN** the implementation verifies ignore coverage and retains them unless explicit ownership review says they are safe to remove

#### Scenario: Project-owned tooling is preserved
- **WHEN** local tooling files are required by the repository workflow or active instructions
- **THEN** the implementation preserves those files and excludes them from duplicate-file deletion

### Requirement: Cleanup is verified and summarized
The system SHALL verify the repository after cleanup and summarize the outcome before the change is considered complete.

#### Scenario: Build verification passes
- **WHEN** cleanup implementation is complete
- **THEN** `npm run build` passes without TypeScript or Vite errors

#### Scenario: Removed references stay removed
- **WHEN** cleanup removes a source file, export, selector, asset, or config entry
- **THEN** source search confirms active code no longer references the removed item

#### Scenario: Final cleanup summary is produced
- **WHEN** verification is complete
- **THEN** the implementation summarizes removed files, archived OpenSpec changes, retained suspicious files, updated ignore rules, and any unresolved cleanup risks

