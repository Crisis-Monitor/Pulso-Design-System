# Divergência de tokens entre as três fontes — 2026-06-11

Gerado a partir de `scripts/check-tokens.mjs` (comparação automática). Baseline canônica
presumida: **`src/app/globals.css`** (é o que o site publicado usa). Total: **25 divergências**
(px↔rem já normalizados; tokens exclusivos de uma fonte não contam como divergência).

Objetivo: decidir o valor canônico de cada grupo **antes** da adoção do Pulso pelo
Crisis Monitor, e então corrigir as fontes não-canônicas (ou registrar exceção no
allowlist do script, com motivo).

## Grupo 1 — Resíduo de scaffold shadcn no DESIGN.md (decisão óbvia: corrigir DESIGN.md)

| Token | DESIGN.md (errado) | globals.css (canônico) |
|---|---|---|
| `--destructive` light | `oklch(0.577 0.245 27.325)` | `#D63D4E` |
| `--destructive` dark | `oklch(0.704 0.191 22.216)` | `#F47080` |

Os valores oklch são os defaults do shadcn/ui, nunca substituídos pelos valores Pulso.

## Grupo 2 — DESIGN.md desatualizado vs v3 (provável: atualizar DESIGN.md)

| Token | DESIGN.md | globals.css (v3) |
|---|---|---|
| `--info` light/dark | `#4F7DF5` / `#78A0FF` | `#3B4D9F` / `#7A8CF0` |
| `--success` light/dark | `#2FA36B` / `#44B97B` | `#15803D` / `#4ECB7C` |
| `--evidence` light/dark | `#1A756D` / `#49C0B8` | `#0F766E` / `#5DCAB8` |
| `--motion-duration-fast` | `100ms` | `120ms` |
| `--motion-duration-default` | `150ms` | `200ms` |
| `--motion-duration-slow` | `300ms` | `320ms` |
| `--motion-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | `cubic-bezier(0.2, 0.9, 0.3, 1)` |
| `--sidebar-accent` light | `color-mix(primary 72%, #0F0C1A 28%)` | `#2A1F55` |

⚠️ Conferir uma vez no produto/Figma se os valores v3 do globals.css são mesmo os
desejados — se algum valor do DESIGN.md for o correto, a correção inverte.

## Grupo 3 — Camada visual (snapshot Open Design) divergente do v3

| Token (light, salvo nota) | Camada visual | globals.css (v3) |
|---|---|---|
| `--tracking-kicker` | `0.08em` | `0.12em` (v3 α.2 formalizou) |
| `--fg-subtle` | `#706C88` (dark: `#9189B5`) | `#A09CB4` (dark: `#6E678E`) |
| `--destructive` / `--destructive-border` | `#C53341` / rgba equiv. | `#D63D4E` / rgba equiv. |
| `--success` / `--success-border` | `#14753A` / rgba equiv. | `#15803D` / rgba equiv. |
| `--warning` / `--warning-border` | `#9F4A07` / rgba equiv. | `#D97706` / rgba equiv. |

⚠️ Atenção em `--warning`: `#9F4A07` (visual) tem contraste maior sobre fundo claro que
`#D97706` (canônico) — se a mudança da camada visual foi decisão de acessibilidade
recente, o canônico é que deve mudar. `--fg-subtle` light/dark parecem **trocados**
entre as fontes (o light de uma ≈ o dark da outra) — vale investigar se houve inversão.

Decisão estrutural pendente: a camada visual evolui junto ou é congelada como snapshot?
Se congelada, esses tokens entram no allowlist com motivo "snapshot v2" e a página
ganha um banner.

## Grupo 4 — Notação, não divergência real (resolver na escrita do DESIGN.md)

| Token | DESIGN.md | globals.css |
|---|---|---|
| `--brand-muted` light/dark | `10% primary` / `14% primary` (prosa) | `color-mix(in oklab, var(--primary) 10%/14%, transparent)` |
| `--sidebar-ring` | `color-mix(#8A63FF 45%, transparent)` (abreviado) | `color-mix(in oklab, #8A63FF 45%, transparent)` |

Recomendação: padronizar o DESIGN.md para sempre citar o valor CSS literal.

## Resolução — 2026-06-12

Decisões do dono do DS (Neviton): `src/app/globals.css` é canônico; contraste de
acessibilidade prevalece quando necessário; a camada visual evolui junto (não é snapshot).

Aplicado:

1. **Refator a11y v2 portado para o canônico** — descobriu-se que a camada visual havia
   passado por um refator deliberado de contraste (documentado em
   `public/visual/pulso-ds/pages/accessibility-contrast.html`, "cinco tokens realinhados
   para AA") que nunca chegou ao `src/app/globals.css`. Portados:
   `--fg-subtle` light `#A09CB4→#706C88` (2.43:1→4.58:1) e dark `#6E678E→#9189B5`
   (3.67:1→5.93:1); `--warning` `#D97706→#9F4A07` (2.91:1→5.56:1, falhava AA);
   `--destructive` `#D63D4E→#C53341` (4.14:1→4.89:1); `--success` `#15803D→#14753A`;
   bordas rgba correspondentes.
2. **Camada visual alinhada ao v3**: `--tracking-kicker 0.08em→0.12em`.
3. **DESIGN.md atualizado integralmente** (YAML + tabelas + bullets de chart): resíduos
   oklch do shadcn removidos, `--info/--success/--evidence/--fg-subtle/--destructive`,
   motion (120/200/320ms, easing assinatura Pulso), `--sidebar-accent/-ring/-border`,
   `--brand-muted` em CSS literal, chart semânticos.
4. **`content/foundations/colors.mdx`** atualizado (`--fg-subtle`).
5. `scripts/check-tokens.mjs --strict` zerado; passo do CI promovido a bloqueante.

Pendências conhecidas (fora deste ciclo):
- DESIGN.md documenta `--attention`/`--critical` (+ pares `-bg`) que **não existem** no
  globals.css — decidir: criar os tokens ou remover da doc (mapeiam à risk palette).
- O YAML do DESIGN.md duplica as tabelas e não é coberto pelo check (que lê só tabelas);
  candidato a geração automática a partir do globals.css no futuro.
- Frontmatter do DESIGN.md não fecha com `---`.
