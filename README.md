# Pulso Design System

> Sistema de design do **Crisis Monitor** - plataforma de gestao de crises reputacionais e monitoramento de midia social.

---

## Para quem e este projeto

- **Devs do Crisis Monitor**: consultar antes de criar qualquer componente novo
- **Designers**: referencia de tokens, padroes e regras de composicao
- **QA**: validar comportamento visual e acessibilidade
- **Newcomers**: onboarding rapido na stack e convencoes

---

## Arquitetura

```
src/
├── app/
│   ├── globals.css          # Design tokens reais (cores, tipografia, motion)
│   └── design-system/       # Paginas de documentacao Nextra (espelho -> Pulso DS)
├── components/
│   ├── ui/                  # Base: todos os componentes shadcn/ui usados no produto
│   ├── crisis-view/         # Visualizacao de crise (Claude Code domain)
│   └── app-sidebar.tsx      # Layout de navegacao
└── lib/
    └── utils.ts             # cn() - tailwind-merge + clsx
```

### Hierarquia de Componentes (Atomic Design)

| Nivel | Definicao | Exemplos |
|-------|-----------|----------|
| **Foundations** | Tokens puros - cores, tipografia, espacamento, motion, sombras | - |
| **Atoms** | Componente indivisivel mais simples | `Button`, `Badge`, `Input`, `Chip`, `Label` |
| **Molecules** | Composicao de 2+ atomos com proposito unico | `FormField`, `InputGroup`, `DeltaChip`, `AvatarGroup`, `MetricCard` |
| **Organisms** | Secoes completas e complexas | `Form`, `DataTable`, `Tabs`, `Card`, `Dialog` |
| **Templates** | Montagem de organisms em layout de pagina | `Dashboard`, `CrisisDetail`, `Settings` |
| **Patterns** | Combinacoes recorrentes de componentes | `CrisisStatus`, `RiskLevels` |

---

## Getting Started

### Pre-requisitos

- Node.js >= 18
- Bun >= 1.2

### Instalacao

```bash
bun install
bun dev
```

O Nextra roda em `http://localhost:3002`.

---

## Stack Tecnica

| Tecnologia | Versao | Uso |
|-----------|--------|-----|
| Next.js | 15 | Framework de aplicacao |
| React | 19 | UI library |
| Nextra | 4 | Documentacao/docs site |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | latest | Base de componentes |
| Radix UI | latest | Primitivos acessiveis |
| Lucide icons | latest | Iconografia |

---

## Catalogo de Componentes

### Status legendas

| Status | Significado |
|--------|-------------|
| Documentado | MDX completo no Pulso DS |
| Stubs | MDX placeholder criado, falta conteudo detalhado |
| Pendente | Existe no Crisis Monitor, sem MDX no Pulso DS |

### Foundations

| Componente | Status | Arquivo |
|-----------|--------|---------|
| Cores | Documentado | `content/foundations/colors.mdx` |
| Tipografia | Documentado | `content/foundations/typography.mdx` |
| Espacamento | Documentado | `content/foundations/spacing.mdx` |
| Motion | Documentado | `content/foundations/motion.mdx` |
| Icones | Documentado | `content/foundations/icons.mdx` |

### Atoms (base - `src/components/ui/`)

| Componente | Status | MDX Pulso DS |
|-----------|--------|-------------|
| alert | Documentado | `atoms/alert.mdx` |
| alert-dialog | Pendente | - |
| aspect-ratio | Pendente | - |
| avatar | Documentado | `atoms/avatar.mdx` |
| badge | Documentado | `atoms/badge.mdx` |
| breadcrumb | Pendente | - |
| button | Documentado | `atoms/controls.mdx` |
| calendar | Pendente | - |
| carousel | Pendente | - |
| chart | Pendente | - |
| checkbox | Pendente | - |
| chip | Documentado | `atoms/chip.mdx` |
| collapsible | Pendente | - |
| delta-chip | Documentado | `molecules/delta-chip.mdx` |
| input | Documentado | `atoms/input.mdx` |
| input-otp | Pendente | - |
| kicker | Documentado | `atoms/kicker.mdx` |
| kbd | Pendente | - |
| label | Documentado | `atoms/label.mdx` |
| live-indicator | Documentado | `atoms/live-indicator.mdx` |
| progress | Documentado | `atoms/progress.mdx` |
| radio-group | Documentado | `atoms/radio-group.mdx` |
| select | Documentado | `atoms/select.mdx` |
| separator | Documentado | `atoms/separator.mdx` |
| skeleton | Documentado | `atoms/skeleton.mdx` |
| slider | Pendente | - |
| spinner | Documentado | `atoms/spinner.mdx` |
| switch | Pendente | - |
| textarea | Pendente | - |
| toggle | Pendente | - |
| toggle-group | Pendente | - |
| tooltip | Documentado | `atoms/tooltip.mdx` |

### Molecules

| Componente | Status | MDX Pulso DS |
|-----------|--------|-------------|
| accordion | Documentado | `molecules/accordion.mdx` |
| avatar-group | Documentado | `molecules/avatar-group.mdx` |
| button-group | Documentado | `molecules/button-group.mdx` |
| delta-chip | Documentado | `molecules/delta-chip.mdx` |
| empty-state | Documentado | `molecules/empty-state.mdx` |
| form-field | Documentado | `molecules/form-field.mdx` |
| input-group | Documentado | `molecules/input-group.mdx` |
| metric-card | Documentado | `molecules/metric-card.mdx` |
| page-header | Pendente | - |

### Organisms

| Componente | Status | MDX Pulso DS |
|-----------|--------|-------------|
| card | Documentado | `organisms/card.mdx` |
| collapsible-card | Documentado | `organisms/collapsible-card.mdx` |
| command | Documentado | `organisms/command.mdx` |
| dialog | Documentado | `organisms/dialog.mdx` |
| dropdown-menu | Documentado | `organisms/dropdown-menu.mdx` |
| form | Documentado | `organisms/form.mdx` |
| responsive-sheet | Documentado | `organisms/responsive-sheet.mdx` |
| table | Documentado | `organisms/table.mdx` |
| tabs | Documentado | `organisms/tabs.mdx` |

### Templates

| Template | Status | MDX Pulso DS |
|---------|--------|-------------|
| Dashboard | Documentado | `templates/dashboard.mdx` |
| Crisis Detail | Documentado | `templates/crisis-detail.mdx` |
| Settings | Documentado | `templates/settings.mdx` |

### Patterns

| Pattern | Status | MDX Pulso DS |
|---------|--------|-------------|
| Crisis Status | Documentado | `patterns/crisis-status.mdx` |
| Risk Levels | Documentado | `patterns/risk-levels.mdx` |

---

## Convencoes do Time

### Nomenclatura

- **Componentes**: PascalCase (`MetricCard`, `CrisisForm`)
- **Arquivos**: kebab-case (`metric-card.tsx`, `crisis-form.tsx`)
- **Hooks**: use + PascalCase (`useCrisisDispatch`)
- **Utils**: camelCase (`formatDelta`, `cn`)
- **Tipos**: Prefixo `T` ou sufixo `Props`/`State` (`TCrisis`, `ButtonProps`)

### Commits - Conventional Commits

```
<type>(<scope>): <description>

# Tipos: feat, fix, docs, style, refactor, test, chore
```

### Branches

- Feature: `codex/<feature-name>` ou `claude/<feature-name>`
- Hotfix: `hotfix/<issue-description>`

### Pull Requests

- Titulo: `feat(design-system): add breadcrumb documentation`
- Incluir: screenshots, checklist, referencia a issue

---

## Integracao com Crisis Monitor

O Pulso DS e o **espelho de documentacao** do design system real que vive em `orchids-crisis-manager`.

### Fluxo de sincronizacao

```
Crisis Monitor (local)          Pulso DS (GitHub)
[Componentes ui/]        --->   [content/components/]
[src/app/design-sys/]    --->   [*.mdx]
[src/app/globals.css]    --->   [DESIGN.md]
```

### Regras

1. Componentes novos primeiro no Crisis Monitor (`src/components/ui/`)
2. Depois adicionar pagina no design system (`src/app/design-system/<tipo>/<nome>/page.tsx`)
3. Por fim, espelhar o MDX no Pulso DS (`content/components/<tipo>/<nome>.mdx`)

---

## Decisoes de Design

| Decisao | Justificativa |
|---------|--------------|
| OKLCH para cores | Perceptualmente uniforme, melhor para acessibilidade |
| color-mix() | Manipulacao de cor no browser, sem build step |
| 5 niveis de risco | Granularidade suficiente sem complexidade |
| Manrope como fonte principal | Alta legibilidade em numeros e UI text |
| IBM Plex Mono | Monospace para dados tecnicos e codigo |
| Nextra para docs | MDX nativo, integracao com Next.js |

---

## Troubleshooting

| Problema | Solucao |
|----------|---------|
| `bun dev` nao abre na porta 3002 | Verificar se outra instancia esta rodando (`lsof -i :3002`) |
| Cores nao batem com o produto | Confirmar que esta lendo o `globals.css` do Crisis Monitor |
| Componente nao existe no Pulso | Verificar tabela de status - pode estar Pendente |
| Font nao carrega | Verificar `next.config.ts` e `next/font/google` imports |

---

## Contribuindo

1. Criar branch: `codex/nome-da-feature` ou `claude/nome-da-feature`
2. Implementar componente no Crisis Monitor
3. Adicionar pagina no design system local
4. Criar/atualizar MDX no Pulso DS
5. Testar visualmente e em mobile
6. Abrir Pull Request

---

## Historico de Versoes

| Data | Versao | Mudanca |
|------|--------|---------|
| 2026-04-27 | 1.0.0 | Catalogo completo + DESIGN.md + convencoes |

---

## Licenca

Privado - uso interno.
