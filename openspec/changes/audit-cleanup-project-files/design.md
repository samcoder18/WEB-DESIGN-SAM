## Context

The app is a compact Vite, React, TypeScript, Tailwind CSS, and Framer Motion portfolio. The current runtime surface is small, but the workspace contains multiple layers of project state: active source files, public assets, generated `dist/` output, OpenSpec specs and change folders, archived historical changes, package/config files, and local-only agent tooling folders that are already ignored by `.gitignore`.

A previous cleanup pass appears to have removed several known unused runtime symbols, but `openspec/changes/` still contains active change folders that may be complete, superseded, or still pending. The implementation needs to audit the repository as a whole without treating every non-runtime file as disposable, because some files are source-of-truth specs or local workflow inputs.

## Goals / Non-Goals

**Goals:**
- Produce a repository-wide inventory of files and classify them by purpose before deleting or moving anything.
- Remove generated output, OS metadata, stale caches, duplicate artifacts, and unused files only when references and workflow ownership have been checked.
- Resolve completed or superseded OpenSpec change folders so active planning state is easier to understand.
- Keep `.gitignore` aligned with the cleanup policy for generated and local-only artifacts.
- Preserve current app behavior, visuals, copy, routes, motion, and dependency versions.
- Leave a concise implementation summary covering removed, archived, and intentionally retained artifacts.

**Non-Goals:**
- Redesign the portfolio or change visible UI behavior.
- Change package dependencies, build tooling, TypeScript configuration, or Tailwind setup unless an entry is proven unused and safe to remove.
- Delete `node_modules/`, package lockfiles, current source specs, or local agent tooling without a clear ownership decision.
- Rewrite existing OpenSpec requirements beyond what is needed to archive or resolve cleanup-related workflow state.

## Decisions

1. **Classify files before cleanup.**
   - Use repository listing, `git status`, ignore rules, source search, package scripts, and OpenSpec status to classify files as runtime, source-of-truth, active workflow, archived history, generated, local-only, or deletion candidate.
   - Alternative considered: remove every ignored or visually redundant folder immediately. That is faster but risks deleting local tooling or history that explains current project decisions.

2. **Use reference checks as the deletion gate.**
   - A file, export, selector, asset, or config entry is removed only when source search and relevant config/package references show it is unused.
   - Alternative considered: rely on visual inspection only. That misses non-visual references such as metadata files, manifest links, and build config.

3. **Treat OpenSpec change folders as workflow state.**
   - Active changes should be checked with `openspec status`; completed or superseded changes should be archived through OpenSpec where possible, while genuinely pending changes should remain active.
   - Alternative considered: manually delete old change folders. That can orphan spec history and bypass archive behavior.

4. **Keep local agent tooling separate from product cleanup.**
   - `.agents/`, `.claude/`, and `.codex/` are ignored and may be required by the local Codex workflow. They should be retained or documented unless the user explicitly decides they are no longer needed.
   - Alternative considered: remove all local tool folders because they are not app runtime. That could break the current working environment.

5. **Verify with the smallest meaningful checks.**
   - Run `npm run build`, source searches for removed identifiers/files, and OpenSpec status checks after cleanup.
   - Alternative considered: skip build because cleanup is mostly file removal. That would miss broken imports, missing public assets, and TypeScript regressions.

## Risks / Trade-offs

- Removing a public asset that is referenced only from HTML or metadata -> Check `index.html`, manifest files, and source imports before removal.
- Archiving a change that is still intended for implementation -> Compare active change status and task state before archiving; retain unclear changes and document why.
- Deleting ignored local workflow files that are useful to the developer -> Keep local tooling unless ownership is explicit.
- Leaving some duplicate-looking files in place -> Prefer documented retention over destructive cleanup when the file is part of source-of-truth specs, lockfiles, or local workflow.
- Build output reappearing after verification -> Keep `dist/` ignored and note that successful builds regenerate it.

## Migration Plan

1. Inventory the repository and classify every top-level folder and relevant nested artifact category.
2. Identify concrete cleanup candidates with reference checks and OpenSpec status.
3. Remove safe generated or stale files; archive completed/superseded OpenSpec changes through the workflow where applicable.
4. Update ignore rules only if the audit finds generated or local-only artifacts not already covered.
5. Run verification and record removed, archived, and retained items.

Rollback is straightforward for tracked files through git history. Ignored generated output can be regenerated with `npm run build`; local-only tooling should not be removed unless explicitly approved.

## Open Questions

- Whether any currently active OpenSpec change besides this one is intentionally still pending despite appearing complete.
- Whether local `.agents/`, `.claude/`, and `.codex/` folders are purely personal workflow state or should remain documented as project-local agent configuration.
