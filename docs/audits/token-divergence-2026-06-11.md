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

## Próximo passo

1. Dono do DS decide os canônicos dos grupos 2 e 3 (grupo 1 e 4 são mecânicos).
2. Corrigir as fontes; rodar `bun scripts/check-tokens.mjs` até zerar.
3. Promover o passo do CI para `--strict` (hoje roda em modo warn).
