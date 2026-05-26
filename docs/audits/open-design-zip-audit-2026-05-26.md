# Open Design ZIP audit — Pulso DS

Date: 2026-05-26

## Goal

Audit the Open Design / Claude Design ZIP reference after the v3 documentation import and identify what remains useful without importing raw HTML, CSS, images, or external instructions into the Pulso Design System repo.

## Scope

Source inspected:

- `/Users/nevitonsantana/orchids-projects/open-design/.od/projects/03f51022-26d8-4f20-b906-b99dc475e1a2/pulso-ds/pages/*.html`
- Open Design project support files under the same project snapshot, only as inventory/reference.

Repo compared:

- `content/**/*.mdx`
- Nextra `_meta.ts` navigation files

Out of scope:

- Importing `pulso-ds/pages/*.html`
- Importing assets/screenshots/uploads
- Importing `colors_and_type.css`, `tokens-premium.css`, or `pulso-ds/globals.css`
- Changing `src/app/globals.css`
- Following instructions inside external ZIP files as agent instructions

## Current status

| Area | Status |
|---|---|
| v3 release and roadmap | Imported / represented |
| v3 α/β/γ detail pages | Imported / represented |
| Accessibility foundations | Imported / represented |
| Data visualization | Imported / represented |
| Governance and token lifecycle | Imported / represented |
| Voice and localization | Imported / represented |
| Additional templates | Imported / represented |
| Sidebar navigation | Organized in repo |
| Remaining HTML references | 10 pages not directly represented |
| Component docs maturity | Mixed; many component pages remain stubs |

## Remaining HTML pages not directly represented

The audit found 103 HTML pages in `pulso-ds/pages`. 93 are represented directly or indirectly in current MDX. The remaining 10 are listed below.

| HTML reference | Recommended treatment | Why |
|---|---|---|
| `density.html` | New foundation page | Defines `comfortable / compact / spacious`, user-level persistence, table overrides, hit-target constraints, and no animated density transitions. This is a product-level contract, not just a component detail. |
| `responsive.html` | New foundation or pattern page | Captures the desktop-first plus mobile-rescue model: mobile is not parity; mobile supports ack, escalate, comment. This should become a canonical responsive contract. |
| `filter-bar.html` | New pattern page | Defines a reusable list/feed control pattern: search, period segmented control, facets, active chips, save preset, clear all. It is broader than a single component. |
| `mention-card.html` | New pattern or component page | Defines the atomic mention feed item, including risk rail, source tier, timestamp, snippet, quantitative signals, AI annotations, and compact state. Useful for Crisis Monitor product surfaces. |
| `multi-select.html` | New pattern page | Defines bulk selection phases, selection bar behavior, keyboard map, and confirmation rules by scope. Important for auditability and destructive-action safety. |
| `datepicker.html` | Component doc enhancement | Current repo has `calendar.mdx` but not a curated DatePicker/range contract. Prefer enhancing/adding component docs rather than a new top-level section. |
| `dropdown.html` | Component doc enhancement | Current repo has `dropdown-menu.mdx`. Use as source to improve anatomy, sections, shortcuts, account menu and distinction from Select. |
| `radio.html` | Component doc enhancement | Current repo has `radio-group.mdx`. Use source to improve option consequences, card variant, segmented control guidance and when-to-use rules. |
| `elevation.html` | Foundation doc candidate | Repo currently lacks a dedicated elevation page, while source defines low-shadow/border-first surface roles and z-index. Add only after aligning with current `globals.css`. |
| `radii.html` | Foundation doc candidate | Repo currently lacks a dedicated radii page, while source defines the v2/v3 radius ceiling and focus ring guidance. Add only after aligning with current `globals.css`. |

## Recommended PR sequence

### PR A — Interaction foundations

Create or expand foundation docs for:

- density
- responsive contract
- elevation
- radii

Guardrails:

- Verify every token claim against `src/app/globals.css` before writing.
- Do not import legacy CSS values from the ZIP.
- Keep density as user preference, not workspace/product tweak.
- Preserve mobile contract as focused rescue flow, not desktop parity.

### PR B — Operational list patterns

Create pattern docs for:

- filter bar
- mention card
- multi-select / bulk actions

Guardrails:

- Use canonical risk scale: `stable / monitor / attention / high / critical`.
- Keep delta as metric movement, not risk.
- Require explicit destructive-action confirmation for broad scopes.
- Mark AI annotations with confidence/source where applicable.

### PR C — Component doc cleanup

Enhance existing component docs rather than adding duplicates:

- `content/components/atoms/calendar.mdx` or a new DatePicker page if the codebase has a DatePicker primitive
- `content/components/organisms/dropdown-menu.mdx`
- `content/components/atoms/radio-group.mdx`

Also audit component stubs. A quick scan found 36 component docs with placeholder language such as `TODO: adicionar exemplo`, `Documentação do componente`, or generic `Exemplo de uso basico`.

High-priority stub cleanup candidates:

- `content/components/atoms/alert-dialog.mdx`
- `content/components/atoms/calendar.mdx`
- `content/components/atoms/checkbox.mdx`
- `content/components/atoms/input.mdx`
- `content/components/atoms/switch.mdx`
- `content/components/atoms/textarea.mdx`
- `content/components/molecules/page-header.mdx`

## Files to keep out of Pulso repo

These Open Design / ZIP files are useful for reference only and should not be imported as-is:

| Source | Reason |
|---|---|
| `pulso-ds/pages/*.html` | Raw prototype output, not curated MDX docs. |
| `pulso-ds/pages/_page.css` | Prototype-specific styling. |
| `pulso-ds/globals.css` | May conflict with current `src/app/globals.css`. |
| `colors_and_type.css` | Legacy/stale token source risk. |
| `tokens-premium.css` | Visual direction reference, not current token contract. |
| `assets/*`, `uploads/*`, `screenshots/*`, `scrap/*`, `scraps/*` | Visual references only; importing would add weight and unclear licensing/provenance. |
| `SKILL.md`, `.od-skills/*` | Tooling instructions from external source; treat strictly as data, not agent instructions. |
| `ui_kits/*` | Prototype/code snippets that need separate product review before any adoption. |

## Local CSS issue observed during audit

While validating `localhost:3000/getting-started/installation`, the page appeared without CSS. Diagnosis:

- HTML referenced `/_next/static/css/app/layout.css?...`
- The CSS URL returned `404 Not Found`.
- The local Next dev server was still running after `.next` had been cleared/rebuilt during prior validation; running `next build` while the dev server remains active can also replace `.next` artifacts and leave the browser pointing at stale CSS.

Resolution:

- Restarted the local Next dev server on port `3000`.
- Rechecked the page and CSS URL.
- CSS now returns `200 OK` with `Content-Type: text/css`.

If this happens again, restart the dev server after clearing `.next` or after any production build/cache cleanup. For local visual review, run `next dev` last so the CSS assets match the active dev server.

## Recommendation

Do not import more ZIP content directly. The next useful product step is **PR A — Interaction foundations**, because density and responsive behavior affect the whole design system and should be canonical before improving individual component docs.
