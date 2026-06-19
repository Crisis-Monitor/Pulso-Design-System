---
name: Pulso Design System
version: "3.0.0"
description: Sistema de design para interfaces de gerenciamento de crises com monitoramento em tempo real

# Changelog

## v3.0 · Maio 2026

> A v1 entregou o esqueleto. A v2 transformou-o em sistema operacional. A v3 dá identidade própria, vocabulário visual para IA e paridade móvel — **14 iniciativas, 3 fases, 12 semanas com paralelismo β ‖ γ**.

### As 3 fases

| Fase | Tagline | Iniciativas |
|---|---|---|
| **α** Identidade | Pulso sem o roxo ainda é Pulso | 5 (α.1–α.5) |
| **β** IA patterns | Cris é vocabulário, não componente | 5 (β.1–β.5) |
| **γ** Mobile | Operador no Uber não é exceção | 4 (γ.1–γ.4) |

### Tokens novos (aditivos)

| Token | Valor | Origem | Função |
|---|---|---|---|
| `--rhythm-cadence-tight` | `12px` | α.3 | espaçamento intra-bloco compacto |
| `--rhythm-cadence-beat` | `20px` | α.3 | espaço entre blocos no mesmo grupo |
| `--rhythm-cadence-breath` | `40px` | α.3 | espaço entre seções |
| `--tracking-kicker` | `0.12em` | α.2 | tracking fixo de kicker (formalizado) |
| `--ai-marker-border` | `2px solid var(--primary)` | β.1 | borda de origem-IA |
| `--ai-marker-bg-mix` | `4%` | β.1 | mix de fundo para bloco IA |
| `--touch-target-critical` | `48px` | γ.1 | hit-target em ação crítica mobile |
| `--motion-haptic-light` | `8ms` | γ.1 | feedback háptico leve |

### Breaking moderado · 2 pontos

1. **`--text-display-lg`** subiu de 28px → **34px** com weight 700. Telas com uso direto crescem ~20% no `<h1>`. Alias `--text-display-lg-v2: 28px` mantido por 2 minor releases.

2. **Numerais tabulares default** em `.mono` e `[data-numeric]`. Reverter localmente com `font-variant-numeric: normal` se necessário.

### 14 páginas novas no DS

```
α/  identity-audit · type-confidence · rhythm · signature-shapes · brand-toolkit
β/  ai-origin-tracking · ai-draft-regenerate · ai-embedding · ai-recommendation · ai-audit-trail
γ/  mobile-gestures · mobile-offline · mobile-handover · mobile-native-tokens
```

### Métricas de sucesso

| Métrica | Alvo | Status |
|---|---|---|
| Reconhecimento sem-cor | ≥ 80% | ✓ 84% |
| Conteúdo AI marcado | 100% | ✓ |
| Mobile task success | ≥ 90% | ✓ 92% |
| Parity web ↔ native tokens | 100% | ✓ |
| RFC por signature shape | 100% | ✓ |
| Offline task survival | ≥ 95% | ✓ 100% |

Detalhamento completo · [Release Notes v3](/release/v3) · [Roadmap v3](/roadmap/v3)

## v1.0 · Maio 2026

Fecha a primeira versão estável do Pulso DS: tokens, atoms, organisms e templates do produto Crisis Monitor. Cobre 62 páginas de documentação interativa alinhadas ao spec deste repositório.

### Mudanças de tokens em relação à pré-v1

| Token | Antes | Agora |
|---|---|---|
| `--primary` (light) | `#5D52FF` | **`#6C46F5`** |
| `--primary` (dark) | `#7B71FF` | **`#8A63FF`** |
| `--background` (light) | `#FBFAF7` (warm-cream) | **`#F5F4FA`** (lavanda muito clara) |
| `--background` (dark) | cinza-frio | **`#0F0C1A`** (indigo-deep) |
| Foreground hierarchy | 5 níveis genéricos | **5 níveis recalibrados**: `#171629 / #4A4961 / #73718A / #A09CB4 / #C5C2D2` |
| Borders | hairline neutro | **lavanda hairline** (`#DDD7EE` / `#302A50`) |
| Risk taxonomy | `safe / monitor / medium / high / critical` | **`stable / monitor / attention / high / critical`** (`medium` e `safe` viram aliases backward-compat) |
| Surface roles | n/a | **`--surface-page / panel / elevated / subtle / inverse`** |
| Sidebar | variava por theme | **chrome fixo near-black** (`#0F0C1A`) em light + dark |
| Sidebar muted text | `var(--fg-subtle)` | **`#7E78A0`** fixo (mesma cor em light + dark) |
| Tipografia | Geist | **Manrope** (sans) + **IBM Plex Mono** (mono) |

### Páginas novas (21)

**Getting Started:** `installation`, `quick-start`
**Foundations:** `icons`
**Atoms:** `avatar`, `kicker`, `label`, `controls`
**Molecules:** `accordion`, `avatar-group`, `button-group`, `empty-state`, `input-group`, `page-header`
**Organisms:** `collapsible-card`, `responsive-sheet`, `form`
**Patterns:** `risk-levels`, `crisis-status`
**Templates:** `tpl-dashboard`, `tpl-crisis-detail`, `tpl-settings`

Crisis Domain (`mention-card`, `score-ring`, `sentiment-bar`) migrado de "Molecules" para **Patterns**.

### Faxina

- Deletado `field-group` (substituído por `input-group`).
- `filter-bar` marcado como "Extensão Pulso · não está no spec oficial".
- Theme switcher movido para o topo da sidebar, com ícones sol/lua.
- Padrão Do/Don't (`.rules-grid`) unificado em 10 páginas de componentes.

### Decisão de produto

- **Densidade default = `comfortable`**. `compact` e `spacious` disponíveis em Settings → Personal. Tabelas operacionais podem ter override local.

### Próximos passos

- Roadmap da v2 disponível em `content/roadmap/v2.mdx` (5 fases, 23 iniciativas).
- Fase 1 (Acessibilidade) é bloqueante para releases em clientes regulados.
- Sincronização com o Crisis Monitor via PR `chore/sync-pulso-ds-v1`.

colors:
  surfaces:
    background:
      light: "#F5F4FA"
      dark: "#0F0C1A"
    card:
      light: "#FFFFFF"
      dark: "#151126"
    elevated:
      light: "#ECE7F8"
      dark: "#221B3D"
    muted:
      light: "#F1EEFA"
      dark: "#1B1630"
    secondary:
      light: "#F1EEFA"
      dark: "#1B1630"
    surface-subtle:
      light: "color-mix(in oklab, var(--muted) 50%, var(--background))"
      dark: "color-mix(in oklab, var(--muted) 50%, var(--background))"
    inverse:
      light: "var(--foreground)"
      dark: "var(--background)"
  brand:
    primary:
      light: "#6C46F5"
      dark: "#8A63FF"
    primary-foreground:
      light: "#FFFFFF"
      dark: "#0F0C1A"
    primary-hover:
      light: "#5C39DA"
      dark: "#9B7BFF"
    primary-soft:
      light: "#EEE8FF"
      dark: "#2A1F55"
    primary-strong:
      light: "#4D2FD0"
      dark: "#6C46F5"
    brand-muted:
      light: "color-mix(in oklab, var(--primary) 10%, transparent)"
      dark: "color-mix(in oklab, var(--primary) 14%, transparent)"
    accent:
      light: "#F1EEFA"
      dark: "#1B1630"
    accent-foreground:
      light: "#171629"
      dark: "#F6F3FF"
  semantic:
    info:
      light: "#3B4D9F"
      dark: "#7A8CF0"
    info-bg:
      light: "#EDEFF9"
      dark: "rgba(122, 140, 240, 0.10)"
    success:
      light: "#14753A"
      dark: "#4ECB7C"
    success-bg:
      light: "#E8F4ED"
      dark: "rgba(78, 203, 124, 0.10)"
    attention:
      light: "#D18B2F"
      dark: "#E0A144"
    attention-bg:
      light: "#FFF3DF"
      dark: "#2B2112"
    critical:
      light: "#C4516C"
      dark: "#DA6A88"
    critical-bg:
      light: "#FCE8EE"
      dark: "#351522"
    destructive:
      light: "#C53341"
      dark: "#F47080"
    evidence:
      light: "#0F766E"
      dark: "#5DCAB8"
    evidence-bg:
      light: "#E6F4F2"
      dark: "rgba(93, 202, 184, 0.10)"
    ring:
      light: "color-mix(in oklab, #6C46F5 32%, transparent)"
      dark: "color-mix(in oklab, #8A63FF 40%, transparent)"
  risk:
    stable:
      bg:
        light: "#EAF6EF"
        dark: "#13281D"
      border:
        light: "#BFE2D1"
        dark: "#2E6F53"
      text:
        light: "#2B7A56"
        dark: "#7DDBA9"
    monitor:
      bg:
        light: "#EEF3FF"
        dark: "#18253D"
      border:
        light: "#C8D7F6"
        dark: "#39568E"
      text:
        light: "#4368B8"
        dark: "#97B4FF"
    medium:
      bg:
        light: "#FFF3DF"
        dark: "#2B2112"
      border:
        light: "#E8C98E"
        dark: "#816233"
      text:
        light: "#9A691E"
        dark: "#E9C06B"
    high:
      bg:
        light: "#FCE8EE"
        dark: "#351522"
      border:
        light: "#E1B5C0"
        dark: "#91495F"
      text:
        light: "#A8455C"
        dark: "#E6A1B3"
    critical:
      bg:
        light: "#F7D9E2"
        dark: "#3D1220"
      border:
        light: "#D696A8"
        dark: "#A54A62"
      text:
        light: "#8F3349"
        dark: "#F2AEC0"
  delta:
    success:
      bg:
        light: "#e2f5f0"
        dark: "#19302d"
      border:
        light: "#9ed4cc"
        dark: "#2f8f84"
      text:
        light: "#0f6f66"
        dark: "#69d0c3"
    warn:
      bg:
        light: "#f8edd7"
        dark: "#312613"
      border:
        light: "#dfc183"
        dark: "#775d30"
      text:
        light: "#855014"
        dark: "#dfb666"
    neutral:
      bg:
        light: "#ece9e5"
        dark: "#23212d"
      border:
        light: "#d5cec5"
        dark: "#4b4657"
      text:
        light: "#4c4758"
        dark: "#b2acba"
    info:
      bg:
        light: "#ece8ff"
        dark: "#282347"
      border:
        light: "#beb5ff"
        dark: "#5e52d9"
      text:
        light: "#4838c9"
        dark: "#b3abff"
    error:
      bg:
        light: "#f5e1e2"
        dark: "#301d22"
      border:
        light: "#dbb0b4"
        dark: "#74484d"
      text:
        light: "#90373d"
        dark: "#df8a90"
  metric:
    emerald:
      bg:
        light: "#e7f7f4"
        dark: "#182926"
      border:
        light: "#a5d8d2"
        dark: "#2f8f84"
      spark:
        light: "#1fa99b"
        dark: "#48c4b7"
    blue:
      bg:
        light: "#eef2f8"
        dark: "#1a1f2b"
      border:
        light: "#b9c7dd"
        dark: "#43536f"
      spark:
        light: "#6e89b8"
        dark: "#8ca0c4"
    violet:
      bg:
        light: "#f1eeff"
        dark: "#231f3d"
      border:
        light: "#c9c2ff"
        dark: "#5e52d9"
      spark:
        light: "#7568f6"
        dark: "#a192ff"
    amber:
      bg:
        light: "#faf1de"
        dark: "#2d2417"
      border:
        light: "#e4c892"
        dark: "#775d30"
      spark:
        light: "#c48a2c"
        dark: "#d4a247"
    rose:
      bg:
        light: "#f8e8e8"
        dark: "#2a1d21"
      border:
        light: "#e1bbbb"
        dark: "#74484d"
      spark:
        light: "#c55a5f"
        dark: "#d77c81"
    neutral:
      bg:
        light: "oklch(0.985 0.004 260)"
        dark: "oklch(0.17 0.02 280)"
      border:
        light: "oklch(0.89 0.008 260)"
        dark: "oklch(0.28 0.02 280)"
      spark:
        light: "oklch(0.68 0.03 260)"
        dark: "oklch(0.68 0.03 280)"
  chart:
    palette:
      - light: "#6C46F5"
        dark: "#8A63FF"
      - light: "#45B8E8"
        dark: "#58C7F2"
      - light: "#6FD6CF"
        dark: "#74E0D8"
      - light: "#B38CFF"
        dark: "#C2ACFF"
      - light: "#D18B2F"
        dark: "#E0A144"
      - light: "#C4516C"
        dark: "#DA6A88"
      - light: "#8A63FF"
        dark: "#B59CFF"
      - light: "#74E0D8"
        dark: "#49C0B8"
    positive:
      light: "#15803D"
      dark: "#4ECB7C"
    negative:
      light: "#D63D4E"
      dark: "#F47080"
    neutral:
      light: "#73718A"
      dark: "#9891B8"
    attention:
      light: "#D18B2F"
      dark: "#E0A144"
    critical:
      light: "#8F3349"
      dark: "#F2AEC0"
    grid:
      light: "color-mix(in oklab, var(--border) 84%, #d8d2c8 16%)"
      dark: "color-mix(in oklab, var(--border) 72%, #94a3b8 28%)"
    fill-soft:
      light: "color-mix(in oklab, var(--chart-1) 18%, white)"
      dark: "color-mix(in oklab, var(--chart-1) 24%, black)"
    fill-strong:
      light: "color-mix(in oklab, var(--chart-1) 65%, white)"
      dark: "color-mix(in oklab, var(--chart-1) 70%, black)"
  sidebar:
    background: "#0F0C1A"
    foreground: "#F6F3FF"
    accent: "#2A1F55"
    accent-foreground: "#FFFFFF"
    border: "#2A2540"
    primary:
      light: "#6C46F5"
      dark: "#8A63FF"
    primary-foreground:
      light: "#FFFFFF"
      dark: "#0F0C1A"
    ring: "color-mix(in oklab, #8A63FF 45%, transparent)"
  palette:
    indigo-deep:
      light: "#32256D"
      dark: "#1A1234"
    cyan:
      light: "#45B8E8"
      dark: "#58C7F2"
    teal:
      light: "#6FD6CF"
      dark: "#74E0D8"
    teal-deep:
      light: "#2E8F96"
      dark: "#3BA4A2"
    lavender:
      light: "#CFC2FF"
      dark: "#B59CFF"
    lavender-soft:
      light: "#F3EEFF"
      dark: "#2C2447"
  foreground:
    fg:
      light: "#171629"
      dark: "#F6F3FF"
    fg-secondary:
      light: "#4A4961"
      dark: "#C9C3E6"
    fg-muted:
      light: "#73718A"
      dark: "#9891B8"
    fg-subtle:
      light: "#706C88"
      dark: "#9189B5"
    fg-disabled:
      light: "#d5cec5"
      dark: "#3D3660"
    border:
      light: "#DDD7EE"
      dark: "#302A50"
    input:
      light: "#DDD7EE"
      dark: "#302A50"
  brand-gradient:
    light: "linear-gradient(135deg, #32256D 0%, #6C46F5 50%, #6FD6CF 100%)"
    dark: "linear-gradient(135deg, #0F0C1A 0%, #8A63FF 50%, #74E0D8 100%)"

typography:
  font-family:
    sans: "Manrope, sans-serif"
    mono: "'IBM Plex Mono', ui-monospace, monospace"
  display:
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: "-0.01em"
  title:
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: "1.3"
  heading:
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: "1.35"
  body:
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.5"
  body-sm:
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: "1.5"
  caption:
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1.4"
  micro:
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: "1.4"
  font-feature-settings: '"cv02", "cv03", "cv04", "cv11"'

layout:
  space:
    compact: "0.5rem"
    comfortable: "0.75rem"
    airy: "1rem"
    editorial: "1.5rem"
  control-height:
    default: "2.375rem"
    compact: "2rem"
    hero: "3rem"
    prominent: "2.75rem"

elevation:
  shadow-soft:
    light: "0 16px 36px -24px rgb(23 22 31 / 0.18)"
    dark: "0 18px 40px -24px rgb(0 0 0 / 0.52)"
  shadow-elevated:
    light: "0 28px 60px -28px rgb(23 22 31 / 0.22)"
    dark: "0 30px 68px -30px rgb(0 0 0 / 0.68)"

shapes:
  radius:
    default: "0.5rem"
    control: "0.625rem"
    surface: "1.1rem"
  focus-ring:
    width: "2px"
    offset: "2px"
    color: "var(--ring)"

motion:
  duration:
    fast: "120ms"
    default: "200ms"
    slow: "320ms"
  easing:
    default: "cubic-bezier(0.2, 0.9, 0.3, 1)"
    emphasized: "cubic-bezier(0.22, 1, 0.36, 1)"

components:
  button-primary:
    backgroundColor: "{colors.brand.primary}"
    textColor: "{colors.brand.primary-foreground}"
    borderRadius: "{shapes.radius.control}"
    hoverBackgroundColor: "{colors.brand.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surfaces.secondary}"
    textColor: "{colors.foreground.fg}"
    borderRadius: "{shapes.radius.control}"
  badge:
    borderRadius: "9999px"
    padding: "0.125rem 0.625rem"
  card:
    backgroundColor: "{colors.surfaces.card}"
    borderRadius: "{shapes.radius.surface}"
    shadow: "{elevation.shadow-soft}"
---

# Pulso Design System

> Sistema de design para interfaces de gerenciamento de crises com monitoramento em tempo real. Usado pelo **Crisis Monitor** para todas as superfícies visuais.

## Overview

### Identidade Visual

O Pulso DS segue o princípio de **Clareza Operacional**: cada pixel deve ajudar o operador a tomar decisões mais rápidas e seguras. O sistema é construído em torno de 5 pilares:

1. **Clareza sobre decoratividade** — informação antes de estética
2. **Progressive disclosure** — densidade de informação adaptada ao contexto
3. **Consistência semântica** — mesma cor = mesmo significado em toda a aplicação
4. **Feedback imediato** — toda ação gera resposta visual perceptível
5. **Acessibilidade como base** — WCAG AA mínimo, não objetivo final

### Modo Claro e Escuro

- **Light mode** — foco em legibilidade para ambientes bem iluminados
- **Dark mode** — foco em conforto visual para operação contínua em ambientes escuros
- Ambos os modos usam **OKLCH** como espaço de cor primário
- Transições usam `transition-colors duration-200` em todos os elementos mutáveis

### Estrutura de Tokens

- Todos os tokens CSS vivem em `src/app/globals.css`
- Tokens de cor usam variáveis CSS custom properties (`--token-name`)
- Referências entre tokens usam `var(--token-name)` ou `color-mix(in oklab, ...)`
- O sistema suporta token reference syntax: `{colors.brand.primary}`

## Colors

### Superfícies

Superfícies definem o fundo de cada camada da interface. Do mais distante (page) ao mais próximo do usuário (popover).

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--background` | `#FBFAF7` | `#0F0C1A` | Fundo da página |
| `--card` | `#FFFFFF` | `#151126` | Cards, painéis |
| `--elevated` | `#EBE9E2` | `#221B3D` | Popovers, dropdowns |
| `--muted` | `#F2F1EC` | `#1B1630` | Backgrounds sutis, hover |
| `--secondary` | `#F2F1EC` | `#1B1630` | Botões secundários |

### Marca (Brand)

A cor primária é o motor de interação e identidade visual do sistema.

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--primary` | `#6C46F5` | `#8A63FF` | Botões primários, links, ícones ativos |
| `--primary-foreground` | `#FFFFFF` | `#0F0C1A` | Texto sobre primary |
| `--primary-hover` | `#5C39DA` | `#9B7BFF` | Hover state |
| `--primary-soft` | `#EEE8FF` | `#2A1F55` | Backgrounds suaves de marca |
| `--primary-strong` | `#4D2FD0` | `#6C46F5` | Estados enfáticos |
| `--brand-muted` | `color-mix(in oklab, var(--primary) 10%, transparent)` | `color-mix(in oklab, var(--primary) 14%, transparent)` | Bordas, backgrounds decorativos |

**Gradiente de marca:**
- Light: `linear-gradient(135deg, #32256D 0%, #6C46F5 50%, #6FD6CF 100%)`
- Dark: `linear-gradient(135deg, #0F0C1A 0%, #8A63FF 50%, #74E0D8 100%)`

### Cores Semânticas

Cores de ação e feedback. Cada cor tem seu par `*-bg` para backgrounds.

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--info` | `#3B4D9F` | `#7A8CF0` | Informações, links, tooltips |
| `--success` | `#14753A` | `#4ECB7C` | Confirmações, status OK |
| `--warning` | `#9F4A07` | `#F5A23B` | Atenção, warnings moderados |
| `--destructive` | `#C53341` | `#F47080` | Ações destrutivas (delete, remove) |
| `--evidence` | `#0F766E` | `#5DCAB8` | Evidências, dados verificados |

### Níveis de Risco

Sistema de 5 níveis para classificação de crises. Cada nível tem `bg`, `border` e `text`.

| Nível | Light bg | Dark bg | Light text | Dark text | Contexto |
|-------|----------|---------|------------|-----------|----------|
| **Stable** | `#EAF6EF` | `#13281D` | `#2B7A56` | `#7DDBA9` | Sem atividade relevante |
| **Monitor** | `#EEF3FF` | `#18253D` | `#4368B8` | `#97B4FF` | Atividade abaixo do limiar |
| **Medium** | `#FFF3DF` | `#2B2112` | `#9A691E` | `#E9C06B` | Alerta moderado |
| **High** | `#FCE8EE` | `#351522` | `#A8455C` | `#E6A1B3` | Alerta significativo |
| **Critical** | `#F7D9E2` | `#3D1220` | `#8F3349` | `#F2AEC0` | Crise ativa |

### Delta Chips

Indicadores de variação métrica (mudança em relação a baseline).

| Tipo | Light bg | Dark bg | Light text | Dark text |
|------|----------|---------|------------|-----------|
| Success | `#e2f5f0` | `#19302d` | `#0f6f66` | `#69d0c3` |
| Warn | `#f8edd7` | `#312613` | `#855014` | `#dfb666` |
| Neutral | `#ece9e5` | `#23212d` | `#4c4758` | `#b2acba` |
| Info | `#ece8ff` | `#282347` | `#4838c9` | `#b3abff` |
| Error | `#f5e1e2` | `#301d22` | `#90373d` | `#df8a90` |

### Metric Card Tones

6 tons para cards de métricas no dashboard, cada um com `bg`, `border` e `spark` (cor do sparkline).

| Tom | Light bg | Dark bg | Spark (light) | Spark (dark) |
|-----|----------|---------|---------------|--------------|
| Emerald | `#e7f7f4` | `#182926` | `#1fa99b` | `#48c4b7` |
| Blue | `#eef2f8` | `#1a1f2b` | `#6e89b8` | `#8ca0c4` |
| Violet | `#f1eeff` | `#231f3d` | `#7568f6` | `#a192ff` |
| Amber | `#faf1de` | `#2d2417` | `#c48a2c` | `#d4a247` |
| Rose | `#f8e8e8` | `#2a1d21` | `#c55a5f` | `#d77c81` |
| Neutral | `oklch(0.985)` | `oklch(0.17)` | `oklch(0.68)` | `oklch(0.68)` |

### Paleta de Charts

8 cores para gráficos e visualizações de dados.

| # | Light | Dark |
|---|-------|------|
| 1 | `#6C46F5` | `#8A63FF` |
| 2 | `#45B8E8` | `#58C7F2` |
| 3 | `#6FD6CF` | `#74E0D8` |
| 4 | `#B38CFF` | `#C2ACFF` |
| 5 | `#D18B2F` | `#E0A144` |
| 6 | `#C4516C` | `#DA6A88` |
| 7 | `#8A63FF` | `#B59CFF` |
| 8 | `#74E0D8` | `#49C0B8` |

**Chart semânticos:**
- `--chart-positive`: `#15803D` / `#4ECB7C`
- `--chart-negative`: `#D63D4E` / `#F47080`
- `--chart-neutral`: `#5E5D68` / `#A1A0AD`
- `--chart-attention`: `#D97706` / `#F5A23B`
- `--chart-critical`: `#B91C1C` / `#F47080`
- `--chart-grid`: `color-mix(in oklab, var(--border) 84%, #d8d2c8 16%)` (light) / `72% border + 28% #94a3b8` (dark)
- `--chart-fill-soft`: `color-mix(in oklab, var(--chart-1) 18%, white)` (light) / `24% + black` (dark)
- `--chart-fill-strong`: `color-mix(in oklab, var(--chart-1) 65%, white)` (light) / `70% + black` (dark)

### Escala de Foreground (Texto)

5 níveis de hierarquia textual para consistência em toda a aplicação.

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--fg` | `#1C1B22` | `#F6F3FF` | Texto principal |
| `--fg-secondary` | `#46454F` | `#C9C3E6` | Texto secundário |
| `--fg-muted` | `#65646E` | `#9891B8` | Descrições, labels |
| `--fg-subtle` | `#8C8B94` | `#9189B5` | Placeholders, metadados |
| `--fg-disabled` | `#CFCDC4` | `#3D3660` | Estados desabilitados |

### Cores Auxiliares

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--indigo-deep` | `#32256D` | `#1A1234` | Gradientes, backgrounds profundos |
| `--cyan` | `#45B8E8` | `#58C7F2` | Accent, highlights |
| `--teal` | `#6FD6CF` | `#74E0D8` | Accent, gradientes |
| `--teal-deep` | `#2E8F96` | `#3BA4A2` | Variantes escuras |
| `--lavender` | `#CFC2FF` | `#B59CFF` | Decorativo, badges |
| `--lavender-soft` | `#F3EEFF` | `#2C2447` | Backgrounds decorativos |

### Sidebar

A sidebar **adapta ao tema** (painel cinza-quente no claro, near-black editorial no escuro).

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--sidebar` | `#F5F3EE` | `#151126` | Fundo da sidebar |
| `--sidebar-foreground` | `#1C1B22` | `#F6F3FF` | Texto da sidebar |
| `--sidebar-accent` | `#EBE9E2` | `#221B3D` | Item ativo |
| `--sidebar-primary` | `#6C46F5` | `#8A63FF` | Item primário |
| `--sidebar-ring` | `color-mix(in oklab, #6C46F5 45%, transparent)` | `color-mix(in oklab, #8A63FF 45%, transparent)` | Focus ring |

## Typography

### Fontes

| Fonte | Uso |
|-------|-----|
| **Manrope** (sans) | Todo texto da interface |
| **IBM Plex Mono** (mono) | Código, IDs, hashes, dados técnicos |

Font feature settings: `"cv02", "cv03", "cv04", "cv11"` — ativam variantes contextuais do Manrope para melhor legibilidade de números e formas de letras.

### Escala Tipográfica

| Nome | Tamanho | Peso | Line Height | Uso |
|------|---------|------|-------------|-----|
| Display | 1.75rem (28px) | 800 | 1.2 | Títulos de página, hero |
| Title | 1.25rem (20px) | 700 | 1.3 | Cabeçalhos de seção |
| Heading | 1.125rem (18px) | 600 | 1.35 | Subtítulos |
| Body | 0.875rem (14px) | 400 | 1.5 | Texto principal |
| Body-sm | 0.8125rem (13px) | 400 | 1.5 | Texto de suporte |
| Caption | 0.75rem (12px) | 500 | 1.4 | Labels, badges |
| Micro | 0.6875rem (11px) | 500 | 1.4 | Metadados finos, timestamps |

## Layout

### Espaçamento

4 densidades de espaçamento para consistência em paddings e gaps.

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-compact` | `0.5rem` (8px) | Componentes densos, badges inline |
| `--space-comfortable` | `0.75rem` (12px) | Cards, formulários padrão |
| `--space-airy` | `1rem` (16px) | Layouts espaçosos, seções |
| `--space-editorial` | `1.5rem` (24px) | Dashboards, landing pages |

### Altura de Controles

| Token | Valor | Uso |
|-------|-------|-----|
| `--control-height-compact` | `2rem` (32px) | Inputs em tabelas, filtros |
| `--control-height-default` | `2.375rem` (38px) | Botões, inputs padrão |
| `--control-height-prominent` | `2.75rem` (44px) | CTAs, hero actions |
| `--control-height-hero` | `3rem` (48px) | Hero buttons, CTAs primários |

## Elevation

Sombras criam hierarquia de profundidade. Cada nível corresponde a um tipo de superfície.

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--surface-shadow-soft` | `0 16px 36px -24px rgb(23 22 31 / 0.18)` | `0 18px 40px -24px rgb(0 0 0 / 0.52)` | Cards, painéis elevados |
| `--surface-shadow-elevated` | `0 28px 60px -28px rgb(23 22 31 / 0.22)` | `0 30px 68px -30px rgb(0 0 0 / 0.68)` | Popovers, dropdowns, modais |

### Surface Roles

| Role | Background | Sombra | Uso |
|------|-----------|--------|-----|
| Page | `--background` | Nenhuma | Fundo da página |
| Panel | `--card` | Soft | Painéis laterais, seções |
| Card | `--card` | Soft | Cards de conteúdo |
| Elevated | `--elevated` | Elevated | Overlays flutuantes |
| Inverse | `--foreground` | — | Overlays de marca, footers |

## Shapes

### Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius` | `0.5rem` (8px) | Cards, containers gerais |
| `--control-radius` | `0.625rem` (10px) | Botões, inputs, selects |
| `--surface-radius` | `1.1rem` (17.6px) | Superfícies grandes, modais |
| Full | `9999px` | Badges, chips, avatares |

### Focus Ring

| Token | Valor |
|-------|-------|
| Width | `2px` |
| Offset | `2px` |
| Color | `var(--ring)` — `color-mix(in oklab, #6C46F5 32%, transparent)` |

Todos os elementos interativos devem ter `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ring)]`.

## Motion

### Durações

| Token | Valor | Uso |
|-------|-------|-----|
| `--motion-duration-fast` | `120ms` | Hover states, micro-interações |
| `--motion-duration-default` | `200ms` | Transições de componente |
| `--motion-duration-slow` | `320ms` | Transições de layout, page transitions |

### Easing

| Token | Valor | Uso |
|-------|-------|-----|
| `--motion-easing` | `cubic-bezier(0.2, 0.9, 0.3, 1)` | Transições padrão (assinatura Pulso) |
| `--motion-easing-emphasized` | `cubic-bezier(0.22, 1, 0.36, 1)` | Animações enfáticas, entrances |

### Animações Globais

| Classe | Uso |
|--------|-----|
| `.animate-in / .animate-out` | Entrada/saída de componentes (via Tailwind + Radix) |
| `.fade-in-0 / .fade-out-0` | Fade transitions |
| `.slide-in-from-top-4` | Slide transitions |
| `.zoom-in-95` | Zoom entrances |
| `.pulse-opacity` | Indicadores de atividade contínua |
| `.landing-animate` | Animações de landing page (float, pulse, glow, spin) |
| `.landing-card` | Card float animation (6s cycle) |
| `.landing-scan-dot` | Scan dot pulse (2s cycle) |

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` desabilita todas as animações exceto `pulse-opacity` (crítico para indicadores de atividade).

## Components

### Button

- **Primary:** bg `{colors.brand.primary}`, text `{colors.brand.primary-foreground}`, radius `{shapes.radius.control}`
- **Secondary:** bg `{colors.surfaces.secondary}`, text `{colors.foreground.fg}`
- **Ghost/Destructive:** bg transparent, text `{colors.semantic.destructive}`
- Altura: `--control-height-default` (2.375rem)
- Hover: `--primary-hover` ou `bg-muted`

### Badge

- Radius: `9999px` (pill)
- Padding: `0.125rem 0.625rem`
- Font: `{typography.caption}`
- Variantes: `default`, `secondary`, `outline`, `destructive`

### Card

- bg: `{colors.surfaces.card}`
- radius: `{shapes.radius.surface}` (1.1rem)
- shadow: `{elevation.shadow-soft}`
- Padding interno: `--space-comfortable` ou `--space-airy`

### Input

- bg: `transparent`
- border: `--border` / `--input`
- radius: `{shapes.radius.control}`
- height: `--control-height-default`
- Focus: focus ring com `--ring`

### Alert

- Variantes: `default`, `destructive`, `info`, `success`, `warning`
- Usa cores semânticas para border e bg
- Ícone à esquerda, conteúdo à direita

### Table

- Header: `--muted` bg, `--fg-muted` text
- Row hover: `bg-muted/50`
- Border: `--border`
- Compact density usa `--control-height-compact`

## Do's and Don'ts

### Cores

**DO:**
- Use cores semânticas pelo seu significado, não por estética (`--success` para confirmações)
- Sempre combine foreground com background compatível (contraste ≥ 4.5:1)
- Use `--brand-muted` para elementos decorativos da marca
- Use `color-mix()` para criar variantes em vez de hardcodear cores

**DON'T:**
- Não use cores semânticas como decoração (`--critical` em um badge informativo)
- Não hardcode cores hex — sempre use tokens CSS
- Não crie novos níveis de risco — o sistema tem 5 e são suficientes
- Não use opacity em textos para criar hierarquia — use a escala `--fg-*`

### Tipografia

**DO:**
- Use a escala tipográfica definida — não invente tamanhos intermediários
- Use `--fg-secondary`, `--fg-muted`, `--fg-subtle` para hierarquia textual
- Use IBM Plex Mono para dados técnicos (IDs, hashes, timestamps ISO)

**DON'T:**
- Não use peso 800+ para texto de corpo
- Não use tamanhos abaixo de 11px (`--text-xs`)
- Não misture fontes — Manrope para tudo exceto código

### Espaçamento

**DO:**
- Use os 4 tokens de espaçamento para paddings e gaps
- Use control heights para elementos interativos
- Mantenha consistência: mesma densidade dentro do mesmo contexto

**DON'T:**
- Não use valores arbitrários de padding (`p-[13px]`)
- Não misture densidades dentro do mesmo componente
- Não use margins para criar espaçamento interno

### Acessibilidade

**DO:**
- Garanta contraste mínimo WCAG AA (4.5:1) para texto normal
- Sempre inclua focus ring visível em elementos interativos
- Respeite `prefers-reduced-motion` em todas as animações
- Forneça alternativas textuais para indicadores de cor

**DON'T:**
- Não confie apenas em cor para comunicar estado (use ícones + texto)
- Não remova focus ring sem fornecer alternativa visual
- Não use animações como único meio de feedback
