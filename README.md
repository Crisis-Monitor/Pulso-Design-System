# Pulso Design System

> Sistema de design do **Crisis Monitor** — plataforma de gestão de crises reputacionais e monitoramento de mídia social. Design system para **operações de crise, IA auditável e decisão humana**.

📖 **Documentação publicada**: https://crisis-monitor.github.io/Pulso-Design-System/

---

## Para quem é este projeto

- **Devs do Crisis Monitor**: consultar antes de criar qualquer componente novo
- **Designers**: referência de tokens, padrões e regras de composição
- **QA**: validar comportamento visual e acessibilidade
- **Newcomers**: onboarding rápido na stack e convenções

---

## Arquitetura

```
content/                     # Fonte da documentação (MDX + _meta.ts por seção)
├── getting-started/         # Instalação e quick start
├── showcase/                # Camada visual HTML (Open Design) + visão geral
├── release/                 # Release notes (v3.0)
├── roadmap/                 # Roadmaps (v3 concluído, v2/próximo ciclo)
├── conceitual/              # Modelo conceitual, princípios e regras de IA
├── foundations/             # Tokens: cores, tipografia, ritmo, densidade, shapes...
├── accessibility/           # Contraste, teclado, leitores de tela, reduced motion
├── data-visualization/      # Primitivas, eixos, cor de dados, realtime, receitas
├── voice/                   # Vocabulário, microcopy, voz de IA, localização
├── patterns/                # Padrões de crise, IA (β) e mobile (γ)
├── templates/               # Layouts de página completos
├── governance/              # Token architecture, RFC, states matrix, adoção
├── brand/                   # Toolkit de marca
└── components/
    ├── atoms/               # 47 componentes base
    ├── molecules/           # 9 composições
    └── organisms/           # 9 seções complexas

src/
├── app/
│   ├── globals.css          # Design tokens reais (cores, tipografia, motion)
│   ├── [[...mdxPath]]/      # Catch-all que renderiza o content/ via Nextra
│   └── docs/                # Rotas auxiliares de docs
├── components/              # Componentes do site de documentação
└── lib/utils.ts             # cn() — tailwind-merge + clsx

DESIGN.md                    # Contrato canônico de tokens e changelog (v3.0)
public/visual/pulso-ds/      # Versão visual HTML criada no Open Design
docs/audits/                 # Auditorias (ex.: open-design-zip-audit)
```

### Camadas da documentação

| Camada | Papel |
|--------|-------|
| **Versão visual HTML** (`public/visual/pulso-ds/`) | Navegação visual completa — densidade, componentes, templates |
| **MDX** (`content/`) | Contrato canônico — anatomia, regras, blueprints React + HTML |
| **DESIGN.md + globals.css** | Fonte de verdade de tokens |

> Os componentes são **blueprints, não pacote runtime**: cada página traz contrato + exemplos copiáveis em React e HTML puro, sem acoplar o produto a uma lib publicada.

### Hierarquia de Componentes (Atomic Design)

| Nível | Definição | Exemplos |
|-------|-----------|----------|
| **Foundations** | Tokens puros — cores, tipografia, ritmo, densidade, motion, shapes | — |
| **Atoms** | Componente indivisível mais simples | `Button`, `Badge`, `Input`, `Chip`, `Kicker` |
| **Molecules** | Composição de 2+ átomos com propósito único | `FormField`, `InputGroup`, `DeltaChip`, `MetricCard`, `PageHeader` |
| **Organisms** | Seções completas e complexas | `Form`, `Table`, `Tabs`, `Card`, `Dialog`, `Command` |
| **Templates** | Montagem de organisms em layout de página | `Dashboard`, `CrisisDetail`, `Settings`, `Auth`, `Onboarding` |
| **Patterns** | Combinações recorrentes de componentes | `CrisisStatus`, `RiskLevels`, padrões de IA, padrões mobile |

---

## Getting Started

### Pré-requisitos

- Node.js >= 18
- Bun >= 1.2

### Instalação

```bash
bun install
bun dev          # Nextra em http://localhost:3000
```

### Build e busca

```bash
bun run build         # build estático + índice Pagefind
bun run build:pages   # build para GitHub Pages (GITHUB_PAGES=true + .nojekyll)
bun run dev:search    # dev com índice de busca local
```

O deploy é automático: push em `main` dispara `.github/workflows/pages.yml`, que builda com Bun, gera o índice Pagefind e publica o diretório `out/` no GitHub Pages.

---

## Stack Técnica

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| Next.js | 15 | Framework (static export) |
| React | 19 | UI library |
| Nextra | 4 | Documentação/docs site |
| Tailwind CSS | 4 | Styling |
| Pagefind | 1.5 | Busca client-side |
| Radix UI | latest | Primitivos acessíveis |
| Lucide icons | latest | Iconografia |

---

## Catálogo de Conteúdo

### Componentes — 66 documentados

Todos os componentes de `src/components/ui/` do Crisis Monitor possuem MDX.

| Nível | Pasta | Componentes |
|-------|-------|-------------|
| **Atoms** (48) | `content/components/atoms/` | alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, carousel, chart, checkbox, chip, collapsible, context-menu, controls, drawer, empty, field, hover-card, input, input-otp, item, kbd, kicker, label, live-indicator, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, section-rail, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, textarea, toggle, toggle-group, tooltip |
| **Molecules** (9) | `content/components/molecules/` | accordion, avatar-group, button-group, delta-chip, empty-state, form-field, input-group, metric-card, page-header |
| **Organisms** (9) | `content/components/organisms/` | card, collapsible-card, command, dialog, dropdown-menu, form, responsive-sheet, table, tabs |

### Foundations — 15 páginas

colors, typography, spacing, radii, density, elevation, motion, icons, responsive, **rhythm** (α.3), **signature-shapes** (α.4), **type-confidence** (α.2), **identity-audit** (α.1), **mobile-native-tokens** (γ.4)

### Patterns — 13 páginas

| Grupo | Páginas |
|-------|---------|
| Semântica de crise | crisis-status, risk-levels, mention-card, multi-select, filter-bar |
| IA (fase β) | ai-origin-tracking, ai-audit-trail, ai-recommendation, ai-embedding, ai-draft-regenerate |
| Mobile (fase γ) | mobile-gestures, mobile-offline, mobile-handover |

### Templates — 8 páginas

dashboard, crisis-detail, settings, auth, onboarding, search, notifications, audit-log

### Demais seções

| Seção | Páginas |
|-------|---------|
| Accessibility | contrast, focus-keyboard, screen-readers, reduced-motion, risk-redundancy |
| Data Visualization | primitives, axes, data-color, realtime, recipes, score-ring, sentiment-bar |
| Voice | vocabulary, microcopy, ai-voice, localization |
| Governance | token-architecture, rfc-process, states-matrix, figma-parity, adoption-metrics |
| Conceitual | conceito, princípios, padrões, ai-rules |
| Brand | toolkit |

---

## Convenções do Time

### Nomenclatura

- **Componentes**: PascalCase (`MetricCard`, `CrisisForm`)
- **Arquivos**: kebab-case (`metric-card.tsx`, `crisis-form.tsx`)
- **Hooks**: use + PascalCase (`useCrisisDispatch`)
- **Utils**: camelCase (`formatDelta`, `cn`)
- **Tipos**: Prefixo `T` ou sufixo `Props`/`State` (`TCrisis`, `ButtonProps`)

### Commits — Conventional Commits

```
<type>(<scope>): <description>

# Tipos: feat, fix, docs, style, refactor, test, chore
```

### Branches

- Feature: `codex/<feature-name>` ou `claude/<feature-name>`
- Hotfix: `hotfix/<issue-description>`

### Pull Requests

- Título: `docs(design-system): add breadcrumb documentation`
- Incluir: screenshots, checklist, referência a issue

---

## Integração com Crisis Monitor

O Pulso DS é o **espelho de documentação** do design system real que vive em `orchids-crisis-manager`.

### Fluxo de sincronização

```
Crisis Monitor (local)               Pulso DS (GitHub)
[src/components/ui/]          --->   [content/components/<nível>/]
[src/app/globals.css]         --->   [DESIGN.md + src/app/globals.css]
[Claude Design / Open Design] --->   [public/visual/pulso-ds/ + content/]
```

### Regras

1. Componentes novos primeiro no Crisis Monitor (`src/components/ui/`)
2. Depois espelhar o MDX no Pulso DS (`content/components/<nível>/<nome>.mdx`) com blueprints React + HTML
3. Tokens novos entram primeiro no `globals.css` do produto e são formalizados no `DESIGN.md`

---

## Decisões de Design

| Decisão | Justificativa |
|---------|--------------|
| OKLCH para cores | Perceptualmente uniforme, melhor para acessibilidade |
| color-mix() | Manipulação de cor no browser, sem build step |
| 5 níveis de risco | Granularidade suficiente sem complexidade |
| Manrope como fonte principal | Alta legibilidade em números e UI text |
| IBM Plex Mono | Monospace para dados técnicos e código |
| Nextra para docs | MDX nativo, integração com Next.js |
| Blueprints, não pacote npm | Contratos copiáveis; produto não depende de lib publicada |
| Identidade por estrutura (v3) | Pulso sem o roxo ainda é Pulso — shapes, ritmo e tipografia carregam a marca |

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| Cores não batem com o produto | Confirmar que está lendo o `globals.css` do Crisis Monitor |
| Componente não existe no Pulso | Verificar catálogo — todos os componentes do produto têm MDX |
| Font não carrega | Verificar `next.config.ts` e imports de fonte |
| Busca não funciona em dev | Rodar `bun run dev:search` para gerar o índice Pagefind local |
| Build do Pages divergente do local | Usar `bun run build:pages` (seta `GITHUB_PAGES=true`) |

---

## Contribuindo

1. Criar branch: `codex/nome-da-feature` ou `claude/nome-da-feature`
2. Implementar componente no Crisis Monitor
3. Criar/atualizar MDX no Pulso DS com blueprint React + HTML
4. Testar visualmente e em mobile
5. Abrir Pull Request — merge em `main` publica automaticamente

---

## Histórico de Versões

| Data | Versão | Mudança |
|------|--------|---------|
| 2026-05-25 | 3.0.0 | Identidade por estrutura (α), padrões de IA auditável (β), paridade mobile (γ) — 14 iniciativas. Breaking moderado: `--text-display-lg` 28→34px, numerais tabulares default |
| 2026-05-18 | 2.x | Fase α sincronizada com Claude Design; infra do sistema operacional (v2) consolidada |
| 2026-04-27 | 1.0.0 | Catálogo completo + DESIGN.md + convenções |

Detalhes em [Release v3.0](https://crisis-monitor.github.io/Pulso-Design-System/release/v3) e no `DESIGN.md`.

---

## Licença

Privado — uso interno.
