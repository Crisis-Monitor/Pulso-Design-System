# Pulso Design System

> Sistema de design do **Crisis Monitor** — plataforma de gestão de crises reputacionais e monitoramento de mídia.

---

## Visão Geral

O Pulso é o design system que padroniza a interface do Crisis Monitor. Ele define componentes, tokens, padrões de layout e convenções de uso para garantir consistência visual e de experiência em toda a plataforma.

### Para quem é este repositório?

- **Desenvolvedores frontend** que implementam páginas e componentes do Crisis Monitor
- **Designers** que criam novos padrões visuais ou exploram variações de componentes
- **QA** que precisam entender os estados esperados de cada componente
- **Novos integrantes do time** que buscam contexto rápido sobre como a interface é construída

---

## Arquitetura

O projeto usa **Nextra** (Next.js + MDX) como engine de documentação, com preview ao vivo dos componentes.

```
pulso-design-system/
├── content/                    # Páginas MDX da documentação
│   ├── docs/                   # Documentação por categoria
│   │   ├── foundations/        # Tokens: cores, tipografia, espaçamento
│   │   ├── components/         # Catálogo de componentes
│   │   └── patterns/           # Padrões de uso e boas práticas
│   └── meta.json               # Sidebar / navegação da docs
├── components/                 # Componentes da própria documentação
├── public/                     # Assets estáticos
├── styles/                     # CSS global e overrides
├── next.config.mjs             # Configuração Nextra
└── package.json
```

### Hierarquia de componentes

Seguimos a metodologia **Atomic Design**:

| Nível | Exemplos | Descrição |
|-------|----------|----------|
| **Atoms** | Button, Input, Badge, Icon | Componentes indivisíveis, unidade mínima de UI |
| **Molecules** | FormGroup, SearchBar, StatCard | Combinação de 2+ átomos com função específica |
| **Organisms** | NavBar, Sidebar, DataForm, CrisisForm | Seções complexas e autônomas da interface |
| **Templates** | DashboardLayout, DetailLayout | Estruturas de página reutilizáveis |
| **Pages** | Dashboard, IncidentDetail, Reports | Páginas completas do produto |

---

## Getting Started

### Pré-requisitos

- **Node.js** 20+
- **Bun** (recomendado) ou npm

### Instalação e execução

```bash
bun install
bun dev          # Servidor de desenvolvimento (porta 3002)
bun run build    # Build de produção
bun run start    # Preview do build
```

Acesse a documentação em **http://localhost:3002**.

---

## Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 (App Router) |
| Documentação | Nextra (MDX) |
| Estilização | Tailwind CSS v4 |
| Componentes base | shadcn/ui |
| Ícones | Lucide React |
| Build | Bun |

---

## Convenções do Time

### Nomenclatura

- **Componentes**: `PascalCase` (`CrisisForm`, `MetricCard`)
- **Arquivos**: kebab-case (`metric-card.tsx`)
- **Variáveis CSS/Tokens**: kebab-case (`--brand-primary`, `--spacing-lg`)

### Commits

Seguimos **Conventional Commits**:

```
feat: adiciona componente Timeline ao organisms
fix: corrige alinhamento do Badge em mobile
docs: atualiza guia de cores com novos tokens
style: ajusta padding do DataForm
refactor: extrai hooks de validação do CrisisForm
```

### Branches

- `main` — código estável, fonte da verdade
- `feature/<nome>` — novas features ou componentes
- `fix/<nome>` — correções
- `docs/<nome>` — atualizações de documentação

### Pull Requests

1. Crie branch a partir de `main`
2. Implemente com commits descritivos
3. Abra PR com:
   - Descrição clara da mudança
   - Screenshots (se visual)
   - Checklist de testes manuais
4. Aguarde revisão de pelo menos 1 pessoa do time

---

## Catálogo de Componentes

### Foundations

- **Cores** — paleta semanticamente definida (primary, danger, warning, success)
- **Tipografia** — escala de tamanhos e pesos
- **Espaçamento** — sistema de 4px base
- **Ícones** — biblioteca Lucide com guia de uso

### Atoms

- `Button` — variantes: default, destructive, outline, ghost, link
- `Badge` — status indicators com semântica de cor
- `Input` — campos de texto com estados de validação
- `Icon` — wrapper consistente para Lucide icons

### Molecules

- `FormGroup` — label + input + mensagem de erro
- `SearchBar` — busca com debounce e clear action
- `StatCard` — cards de métricas com tendência

### Organisms

- `NavBar` — navegação principal com breadcrumbs
- `Sidebar` — navegação lateral colapsável
- `DataForm` — formulários dinâmicos com validação
- `CrisisForm` — formulário específico para registro de crises

> Veja a documentação completa com preview interativo em `/components`.

---

## Integração com o Crisis Monitor

O Pulso é consumido pelo **Crisis Manager** (repositório principal). A relação é:

```
Pulso Design System (este repo)
    ↓ documenta e referencia
Crisis Manager (orchids-crisis-manager)
    ↓ usa os componentes
Interfaces do produto
```

Quando um novo componente for criado no Pulso:

1. Documente aqui com MDX + preview
2. Exporte pelo caminho padrão
3. Importe no Crisis Manager via `@/components/...`
4. Registre no `PROJECT_STATE.md` do repo principal

---

## Decisões de Design

### Por que Nextra?

- MDX nativo — código + documentação no mesmo lugar
- Renderização estática — performance e SEO
- Sidebar automática via `meta.json`
- Preview de componentes ao vivo

### Por que shadcn/ui?

- Componentes não empacotados — controle total do código
- Acessibilidade built-in (ARIA, keyboard nav)
- Tailwind-first — consistente com nossa stack
- Customização sem overrides complexos

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| `bun dev` não sobe na porta 3002 | Verifique se não há outro processo: `lsof -i :3002` |
| Componente não aparece na sidebar | Adicione entrada no `content/docs/meta.json` |
| Preview de componente quebra | Verifique se o export default está correto no MDX |
| Build falha | Rode `bun install` novamente e limpe `.next/` |

---

## Contribuindo

1. **Discuta** a mudança com o time (Slack ou issue)
2. **Crie branch** a partir de `main`
3. **Implemente** seguindo convenções do projeto
4. **Documente** componentes novos ou alterados
5. **Abra PR** com descrição e screenshots
6. **Revise** o PR de colegas quando solicitado

---

## Licença

**Privado** — uso interno do time Crisis Monitor.

---

<details>
<summary><strong>Histórico de versões</strong></summary>

| Versão | Data | Mudança |
|--------|------|--------|
| 1.0.0 | 2026-04 | Documentação inicial com foundations, atoms e molecules |
| 1.1.0 | 2026-04 | Adicção de organisms (NavBar, Sidebar, DataForm, CrisisForm) |

</details>
