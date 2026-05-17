## 1. Inventory and Classification

- [x] 1.1 Inventory top-level project folders and generated artifacts, including `dist/`, `tmp/`, cache folders, `.DS_Store`, and dependency/tool outputs.
- [x] 1.2 Inventory active source and asset candidates under `src/` and `public/`, including files with duplicate names or no obvious imports.
- [x] 1.3 Inventory OpenSpec changes under `openspec/changes/` and classify each as active, completed, superseded, or uncertain.
- [x] 1.4 Inventory local workflow folders such as `.agents/`, `.claude/`, and `.codex/`, and classify them as project-owned, local-only, duplicate, or unknown.
- [x] 1.5 Create `openspec/changes/audit-clean-project/cleanup-report.md` with initial sections for removed files, retained files, follow-up candidates, and verification.

## 2. Safe Cleanup

- [x] 2.1 Remove or ignore generated and temporary artifacts that are reproducible and covered by project ignore policy.
- [x] 2.2 Remove `.DS_Store` and other OS metadata files, and update `.gitignore` if future metadata is not already excluded.
- [x] 2.3 Remove exact duplicate files only when one canonical path is retained and active references prove the duplicate path is unused.
- [x] 2.4 Remove unused source files, exports, branches, CSS selectors, or public assets only after targeted reference checks prove they are inactive.
- [x] 2.5 Archive or document completed and superseded OpenSpec changes without deleting active or uncertain change history.
- [x] 2.6 Retain local agent/tooling folders unless they are confidently classified as disposable project artifacts.

## 3. Documentation

- [x] 3.1 Update `cleanup-report.md` with every removed file, the reason for removal, and the verification used.
- [x] 3.2 Update `cleanup-report.md` with retained candidates and rationale for anything not removed.
- [x] 3.3 Update `cleanup-report.md` with follow-up items that require user confirmation or broader refactoring decisions.

## 4. Verification

- [x] 4.1 Run targeted source searches for removed identifiers and paths to confirm they are absent from active runtime code.
- [x] 4.2 Run `npm run build` and record the result in `cleanup-report.md`.
- [x] 4.3 Review `git status --short` to confirm only intended cleanup, report, and OpenSpec files changed.
- [x] 4.4 Confirm the site behavior scope remains unchanged: hero, marquee, about, services, projects, animations, and CTA behavior are preserved.
