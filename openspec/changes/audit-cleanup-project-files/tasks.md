## 1. Inventory And Classification

- [x] 1.1 Capture a repository inventory for tracked, untracked, ignored, generated, and top-level nested files.
- [x] 1.2 Classify each top-level area as runtime source, public asset, source-of-truth spec, active OpenSpec change, archived history, generated output, dependency cache, or local-only tooling.
- [x] 1.3 Review package scripts, config files, `index.html`, public metadata, and source imports for file and asset references.
- [x] 1.4 Identify duplicate-looking, stale, generated, or unnecessary files and record the reference evidence for each cleanup candidate.

## 2. Source And Asset Cleanup

- [x] 2.1 Remove generated output, OS metadata, stale cache files, and other ignored artifacts that are safe to regenerate or discard.
- [x] 2.2 Audit `src/` for unused files, exports, imports, CSS selectors, and inert branches, then remove only candidates with no active references.
- [x] 2.3 Audit `public/` and metadata files for unreferenced assets, then remove only assets not used by HTML, manifests, source, or deployment metadata.
- [x] 2.4 Update `.gitignore` only if the audit finds generated or local-only artifacts not already excluded.

## 3. OpenSpec Workflow Cleanup

- [x] 3.1 Check `openspec status` for all active changes and identify completed, superseded, duplicate, and still-pending change folders.
- [x] 3.2 Archive completed or superseded OpenSpec changes through the OpenSpec workflow where valid.
- [x] 3.3 Retain pending or ambiguous OpenSpec changes and record why they remain active.
- [x] 3.4 Consolidate duplicate cleanup planning so only one active cleanup source of truth remains.

## 4. Local Tooling Review

- [x] 4.1 Classify `.agents/`, `.claude/`, `.codex/`, and similar local workflow folders as local-only or project-owned.
- [x] 4.2 Verify local tooling folders remain ignored or intentionally retained, and do not delete them unless ownership review proves they are safe to remove.
- [x] 4.3 Prepare a cleanup summary listing removed files, archived changes, retained suspicious files, and unresolved ownership decisions.

## 5. Verification

- [x] 5.1 Run `npm run build` and confirm TypeScript and Vite pass.
- [x] 5.2 Run source searches for removed files, exports, selectors, assets, and config entries to confirm active code no longer references them.
- [x] 5.3 Run OpenSpec status checks to confirm remaining active changes are intentional.
- [x] 5.4 If runtime source or public assets changed, perform a quick desktop and mobile visual smoke check of the portfolio.
