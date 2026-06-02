# Pulso DS v3.0 — HANDOFF para GPT Codex

> Pacote de instruções para abrir **um único PR** publicando a v3.0 no repositório oficial. Tudo o que o Codex precisa está no diretório `pulso-ds-pr/` deste projeto (snapshot + arquivos prontos para commit).

**Repositório-alvo:** `github.com/Crisis-Monitor/Pulso-Design-System` (privado · default branch `main`)
**Branch:** `feat/v3.0-roadmap-and-release`
**Escopo:** publicar Roadmap v3 + Release Notes v3 como MDX + addendum em DESIGN.md.

Crisis-Monitor (consumidor) **não recebe PR nesta rodada** — não há mudança de tokens ainda em produção, apenas docs. A adoção de IA patterns e mobile fica para PRs subsequentes do produto.

---

## Realidade do repositório

Após inspeção do `main`:

- Stack: **Nextra v4** + **Fumadocs MDX** + Next.js 15 + Tailwind v4
- Conteúdo em `content/` com MDX e `_meta.ts` por pasta
- **Não há pacote NPM publicado** — o DS é puramente um site de docs
- v2 já está mergeado em `content/roadmap/v2.mdx`
- Estrutura atual de `content/`: components · conceitual · foundations · getting-started · patterns · roadmap · templates

Por isso o escopo desta release é **estritamente documental**. Próximas iterações podem adicionar pacotes de tokens publicados, mas isso é decisão separada.

---

## Arquivos a commitar

| Status | Caminho no repo | Origem no snapshot |
|--------|-----------------|--------------------|
| **NOVO** | `content/release/v3.mdx` | `pulso-ds-pr/content/release/v3.mdx` |
| **NOVO** | `content/release/_meta.ts` | `pulso-ds-pr/content/release/_meta.ts` |
| **NOVO** | `content/roadmap/v3.mdx` | `pulso-ds-pr/content/roadmap/v3.mdx` |
| **EDITAR** | `content/roadmap/_meta.ts` | substituir pelo `pulso-ds-pr/content/roadmap/_meta.ts` (adiciona entrada `v3` antes de `v2`) |
| **EDITAR** | `DESIGN.md` | inserir bloco de `pulso-ds-pr/DESIGN_addendum_v3.md` no topo, abaixo do título principal |

Total: **3 arquivos novos + 2 edições**.

---

## Passo-a-passo para o Codex

```bash
# 1. Clonar / checkout
git checkout main
git pull
git checkout -b feat/v3.0-roadmap-and-release

# 2. Copiar arquivos novos (paths a partir da raiz do repo)
mkdir -p content/release
cp <snapshot>/pulso-ds-pr/content/release/v3.mdx content/release/v3.mdx
cp <snapshot>/pulso-ds-pr/content/release/_meta.ts content/release/_meta.ts
cp <snapshot>/pulso-ds-pr/content/roadmap/v3.mdx content/roadmap/v3.mdx

# 3. Substituir _meta.ts de roadmap (adiciona v3 acima de v2)
cp <snapshot>/pulso-ds-pr/content/roadmap/_meta.ts content/roadmap/_meta.ts

# 4. Editar DESIGN.md — inserir conteúdo de DESIGN_addendum_v3.md
#    Abrir DESIGN.md, localizar a seção "## v2.0 · ..." (ou o topo logo após o título h1)
#    Inserir TODO o conteúdo de pulso-ds-pr/DESIGN_addendum_v3.md
#    (a partir da linha "## v3.0 · Maio 2026") IMEDIATAMENTE ANTES da seção v2

# 5. Validar localmente
pnpm install   # ou bun install (lockfile é bun.lock)
pnpm dev       # abre Nextra em localhost:3000
# Conferir manualmente:
#   - /roadmap/v3 renderiza
#   - /release/v3 renderiza
#   - Nav lateral mostra "Release v3.0" e "Roadmap v3"
#   - Sem erro de MDX no console

# 6. Commit + push
git add content/release content/roadmap/v3.mdx content/roadmap/_meta.ts DESIGN.md
git commit -m "feat(v3.0): roadmap, release notes e addendum em DESIGN.md

- content/release/v3.mdx · release notes consolidadas (14 iniciativas)
- content/roadmap/v3.mdx · plano detalhado v3 (α + β + γ)
- content/roadmap/_meta.ts · adiciona v3 acima de v2
- DESIGN.md · addendum v3.0 com tokens novos e breaking moderado"

git push -u origin feat/v3.0-roadmap-and-release

# 7. Abrir PR (via gh CLI ou web)
gh pr create \\
  --base main \\
  --title "Pulso DS v3.0 — Roadmap + Release Notes" \\
  --body-file <snapshot>/pulso-ds-pr/PR_DESCRIPTION.md
```

---

## PR description

Salva como `pulso-ds-pr/PR_DESCRIPTION.md` (referenciado no `gh pr create` acima):

```markdown
## Pulso DS v3.0 — Roadmap + Release Notes

Publica a v3 oficial como docs. 14 iniciativas em 3 fases (α + β + γ).

### O que entra neste PR (escopo documental)

- **`content/release/v3.mdx`** — release notes consolidadas (ponto único de leitura para times consumidores)
- **`content/roadmap/v3.mdx`** — plano detalhado das 14 iniciativas
- **`content/roadmap/_meta.ts`** — adiciona v3 no topo
- **`content/release/_meta.ts`** — nova seção
- **`DESIGN.md`** — addendum v3.0 com tokens novos e breaking moderado

### Conteúdo da v3 (sumário)

- **α Identidade (5)**: auditoria sem-cor · type confidence · ritmo · 7 signature shapes · brand toolkit. *Pulso sem o roxo ainda é Pulso.*
- **β IA Patterns (5)**: origin tracking · draft & regenerate · embedding · recommendation · audit trail. *Toda palavra da Cris é reconhecível e auditável.*
- **γ Mobile (4)**: gestures · offline-first · push handover · native tokens. *Operador no Uber não é exceção.*

### Breaking moderado (declarado)

- `--text-display-lg`: 28px → **34px**, weight 700. Alias `--text-display-lg-v2` mantido por 2 minor releases.
- `font-variant-numeric: tabular-nums` agora default em `.mono` e `[data-numeric]`.

### O que NÃO entra neste PR (próximos)

- Páginas de pattern detalhadas (14 MDX dos pages α/β/γ) — proposta para PR(s) subsequente(s).
- Mudanças em `globals.css` aplicando os tokens novos — depende de aprovação do display scale.
- Pacotes NPM (`@pulso/tokens-*`) — não há infra de publishing ainda.
- Sample apps nativos iOS/Android — futuro.

### Como revisar

1. `pnpm dev` (ou `bun dev`)
2. Acessar `/release/v3` e `/roadmap/v3`
3. Conferir que o link cruzado entre as duas páginas funciona
4. Confirmar que DESIGN.md fica legível com a nova seção no topo

### Quem revisa

@nevitonsantana
```

Crie esse arquivo no `pulso-ds-pr/PR_DESCRIPTION.md` antes de rodar o `gh pr create`.

---

## Verificação local · checklist

Antes do push:

- [ ] `pnpm dev` (ou `bun dev`) sobe sem erro
- [ ] `localhost:3000/roadmap/v3` renderiza com tabelas e headings
- [ ] `localhost:3000/release/v3` renderiza com blocos de código JSON formatados
- [ ] Nav lateral mostra **Release v3.0** numa seção própria (ordem alfabética entre `patterns` e `roadmap`)
- [ ] Nav de Roadmap mostra v3 acima de v2
- [ ] Links internos `/release/v3` ↔ `/roadmap/v3` funcionam
- [ ] Console sem warning de MDX (frontmatter mal-formado, code fence quebrado)
- [ ] DESIGN.md formata bem em qualquer Markdown renderer

---

## Próximos PRs (não fazer agora)

### PR seguinte · "v3 detail pages"

Adicionar os 14 MDX detalhados em:

```
content/foundations/
  identity-audit.mdx
  type-confidence.mdx
  rhythm.mdx
  signature-shapes.mdx
content/patterns/
  ai-origin-tracking.mdx
  ai-draft-regenerate.mdx
  ai-embedding.mdx
  ai-recommendation.mdx
  ai-audit-trail.mdx
  mobile-gestures.mdx
  mobile-offline.mdx
  mobile-handover.mdx
content/foundations/
  mobile-native-tokens.mdx
content/brand/
  toolkit.mdx
```

Fonte para conversão HTML → MDX está em `pulso-ds/pages/` do snapshot. Cada página HTML é rica em SVG/mocks; o MDX equivalente é prosa estruturada com tabelas (vide `risk-levels.mdx` como referência de estilo).

### PR de tokens · "v3 globals.css"

Se/quando o time decidir aplicar os tokens novos no consumidor (Crisis Monitor), abrir PR separado para `src/app/globals.css` adicionando os tokens aditivos da v3 (rhythm cadence, AI marker, touch target critical) + mudança no `--text-display-lg`.

---

## Se algo divergir

- Se Nextra reclamar de `_meta.ts` com tipo `MetaRecord` do `fumadocs-core/mdx-plugins`, conferir versão do pacote no `package.json` — pode ter migrado de API. O `content/roadmap/_meta.ts` original (snapshot do repo) é a referência canônica.
- Se o `gh pr create` falhar por permissão, gerar a description em arquivo e abrir o PR manualmente via GitHub web.
- Se houver conflito em `DESIGN.md` (alguém mergeou algo no topo no meio do processo), inserir o addendum **abaixo** da última seção adicionada — preservar ordem cronológica reversa (v3 acima de v2 acima de v1).

---

## Arquivos prontos no snapshot

Todos os arquivos abaixo já estão prontos em `pulso-ds-pr/` deste projeto — só copiar:

```
pulso-ds-pr/
├── content/
│   ├── release/
│   │   ├── v3.mdx               # NOVO
│   │   └── _meta.ts             # NOVO
│   └── roadmap/
│       ├── v3.mdx               # NOVO
│       └── _meta.ts             # SUBSTITUI o existente
├── DESIGN_addendum_v3.md        # CONTEÚDO para inserir no DESIGN.md do repo
└── PR_DESCRIPTION.md            # (criar antes do gh pr create)
```
