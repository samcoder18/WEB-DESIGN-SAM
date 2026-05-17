## Context

This is a Vite/React project with generated output (`dist/`), local temporary files (`tmp/`), active OpenSpec changes, local agent tooling folders, and application source under `src/` and `public/`. The cleanup must reduce project noise without changing the visible site or deleting local workflow assets that are still needed.

The existing `project-hygiene-cleanup` specification already defines safe cleanup behavior. This change extends it with an explicit audit/report step, duplicate detection, and stronger verification before removal.

## Goals / Non-Goals

**Goals:**
- Build an inventory of cleanup candidates across source, assets, generated output, OpenSpec changes, and local tooling.
- Classify each candidate before removing or retaining it.
- Remove only files proven safe by reference checks, duplicate checks, ignore policy, or generated-artifact status.
- Record cleanup results in a report that can be reviewed after implementation.
- Preserve runtime behavior and verify with `npm run build`.

**Non-Goals:**
- Redesigning the site, changing copy, changing animations, or altering visible layout.
- Reorganizing project architecture beyond cleanup of confirmed unused or duplicate files.
- Deleting local agent/tooling folders unless they are explicitly classified as disposable project artifacts.
- Adding new dependencies for cleanup automation.

## Decisions

1. Use an audit-first cleanup flow.

   Candidate files will be discovered with repository inspection commands such as `find`, `rg`, `git status`, duplicate-name/content checks, and targeted source reference searches. This is safer than immediately deleting obvious-looking folders because local tooling and OpenSpec artifacts may be intentionally present.

2. Treat generated artifacts separately from source artifacts.

   `dist/`, cache folders, `.DS_Store`, and temporary verification output can be removed or ignored when they are reproducible. Source files and public assets require reference checks from active entry points before removal.

3. Preserve local workflow tooling by default.

   `.agents/`, `.claude/`, and `.codex/` are not app runtime folders, but they may contain installed local skills or workflow configuration. They will be documented and ignored or retained unless a specific duplicate is proven disposable.

4. Produce a cleanup report as an implementation artifact.

   The report will list removed files, retained candidates, reasoning, and verification commands. This creates a reviewable trail for cleanup decisions and prevents ambiguous deletions from becoming invisible.

## Risks / Trade-offs

- Accidental deletion of a file referenced dynamically -> Mitigation: combine static source searches with build verification and keep uncertain candidates in the report instead of deleting them.
- Removing generated output may surprise workflows that expect it locally -> Mitigation: confirm generated folders are covered by `.gitignore` and reproducible through existing npm scripts.
- Duplicate files may have similar names but different runtime purposes -> Mitigation: classify duplicates by content and references, not name alone.
- OpenSpec cleanup can remove useful planning history -> Mitigation: archive completed/superseded changes through the OpenSpec workflow or document why an active change remains.
