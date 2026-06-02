# Pulso DS v3.0 — HANDOFF (PR 2 · detail pages)

> Segundo PR da release v3.0. Adiciona as **14 páginas detalhadas** das fases α (identidade), β (IA patterns) e γ (mobile). Depende do PR 1 (roadmap + release notes) já mergeado.

**Repositório-alvo:** `github.com/Crisis-Monitor/Pulso-Design-System` (privado · default `main`)
**Branch:** `feat/v3.0-detail-pages`
**Escopo:** 14 MDX novas + 3 `_meta.ts` editados + 1 `_meta.ts` novo · estritamente documental.

---

## Dependência

Este PR **deve abrir depois** de `feat/v3.0-roadmap-and-release` (PR 1) estar mergeado, porque:

- O frontmatter das páginas referencia conteúdo do `roadmap/v3.mdx` (entregue no PR 1).
- A nav lateral fica mais limpa com Release/Roadmap já presentes.

Se PR 1 ainda está em review, abrir este PR contra o branch dele (`feat/v3.0-roadmap-and-release` como base) é aceitável — vai mergear em cascata.

---

## Arquivos a commitar

### Novos · 14 MDX + 1 `_meta.ts`

| Caminho no repo | Origem no snapshot |
|-----------------|--------------------|
| `content/foundations/identity-audit.mdx` | `pulso-ds-pr/content/foundations/identity-audit.mdx` |
| `content/foundations/type-confidence.mdx` | `pulso-ds-pr/content/foundations/type-confidence.mdx` |
| `content/foundations/rhythm.mdx` | `pulso-ds-pr/content/foundations/rhythm.mdx` |
| `content/foundations/signature-shapes.mdx` | `pulso-ds-pr/content/foundations/signature-shapes.mdx` |
| `content/foundations/mobile-native-tokens.mdx` | `pulso-ds-pr/content/foundations/mobile-native-tokens.mdx` |
| `content/patterns/ai-origin-tracking.mdx` | `pulso-ds-pr/content/patterns/ai-origin-tracking.mdx` |
| `content/patterns/ai-draft-regenerate.mdx` | `pulso-ds-pr/content/patterns/ai-draft-regenerate.mdx` |
| `content/patterns/ai-embedding.mdx` | `pulso-ds-pr/content/patterns/ai-embedding.mdx` |
| `content/patterns/ai-recommendation.mdx` | `pulso-ds-pr/content/patterns/ai-recommendation.mdx` |
| `content/patterns/ai-audit-trail.mdx` | `pulso-ds-pr/content/patterns/ai-audit-trail.mdx` |
| `content/patterns/mobile-gestures.mdx` | `pulso-ds-pr/content/patterns/mobile-gestures.mdx` |
| `content/patterns/mobile-offline.mdx` | `pulso-ds-pr/content/patterns/mobile-offline.mdx` |
| `content/patterns/mobile-handover.mdx` | `pulso-ds-pr/content/patterns/mobile-handover.mdx` |
| `content/brand/toolkit.mdx` | `pulso-ds-pr/content/brand/toolkit.mdx` |
| `content/brand/_meta.ts` | `pulso-ds-pr/content/brand/_meta.ts` *(nova pasta)* |

### Editados · 2 `_meta.ts`

| Caminho no repo | Origem | Mudança |
|-----------------|--------|---------|
| `content/foundations/_meta.ts` | `pulso-ds-pr/content/foundations/_meta.ts` | adiciona 5 entradas (α + γ.4) |
| `content/patterns/_meta.ts` | `pulso-ds-pr/content/patterns/_meta.ts` | adiciona 8 entradas (β + γ.1–γ.3) preservando v2 |

**Total: 15 arquivos novos + 2 edições.**

---

## Mapa fase → arquivo

| Fase | Página | Arquivo |
|------|--------|---------|
| **α.1** | Identity Audit | `foundations/identity-audit.mdx` |
| **α.2** | Type Confidence | `foundations/type-confidence.mdx` |
| **α.3** | Rhythm | `foundations/rhythm.mdx` |
| **α.4** | Signature Shapes | `foundations/signature-shapes.mdx` |
| **α.5** | Brand Toolkit | `brand/toolkit.mdx` |
| **β.1** | AI Origin Tracking | `patterns/ai-origin-tracking.mdx` |
| **β.2** | AI Draft & Regenerate | `patterns/ai-draft-regenerate.mdx` |
| **β.3** | AI Embedding | `patterns/ai-embedding.mdx` |
| **β.4** | AI Recommendation | `patterns/ai-recommendation.mdx` |
| **β.5** | AI Audit Trail | `patterns/ai-audit-trail.mdx` |
| **γ.1** | Mobile Gestures | `patterns/mobile-gestures.mdx` |
| **γ.2** | Mobile Offline-first | `patterns/mobile-offline.mdx` |
| **γ.3** | Mobile Push Handover | `patterns/mobile-handover.mdx` |
| **γ.4** | Native Token Foundation | `foundations/mobile-native-tokens.mdx` |

**Por que γ.4 fica em `foundations/` e não `patterns/`:** é pipeline de tokens cross-platform, não pattern de uso. Mesma lógica de `foundations/colors.mdx` ou `foundations/spacing.mdx`.

**Por que `brand/` é nova top-level:** é peça de identidade de marca, não componente nem pattern. Coexiste com `foundations` e `patterns`. Sem entrada no `content/_meta.ts` root → Nextra ordena alfabeticamente (entre `_meta.ts` vazio existente).

---

## Passo-a-passo para o Codex

```bash
# 1. Checkout sobre o PR 1 (se ainda em review) ou main (se já mergeado)
git checkout main
git pull
git checkout -b feat/v3.0-detail-pages

# 2. Criar pasta brand/
mkdir -p content/brand

# 3. Copiar 14 MDX (paths a partir da raiz do repo)
cp <snapshot>/pulso-ds-pr/content/foundations/identity-audit.mdx       content/foundations/identity-audit.mdx
cp <snapshot>/pulso-ds-pr/content/foundations/type-confidence.mdx      content/foundations/type-confidence.mdx
cp <snapshot>/pulso-ds-pr/content/foundations/rhythm.mdx               content/foundations/rhythm.mdx
cp <snapshot>/pulso-ds-pr/content/foundations/signature-shapes.mdx     content/foundations/signature-shapes.mdx
cp <snapshot>/pulso-ds-pr/content/foundations/mobile-native-tokens.mdx content/foundations/mobile-native-tokens.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/ai-origin-tracking.mdx      content/patterns/ai-origin-tracking.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/ai-draft-regenerate.mdx     content/patterns/ai-draft-regenerate.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/ai-embedding.mdx            content/patterns/ai-embedding.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/ai-recommendation.mdx       content/patterns/ai-recommendation.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/ai-audit-trail.mdx          content/patterns/ai-audit-trail.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/mobile-gestures.mdx         content/patterns/mobile-gestures.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/mobile-offline.mdx          content/patterns/mobile-offline.mdx
cp <snapshot>/pulso-ds-pr/content/patterns/mobile-handover.mdx         content/patterns/mobile-handover.mdx
cp <snapshot>/pulso-ds-pr/content/brand/toolkit.mdx                    content/brand/toolkit.mdx

# 4. Copiar _meta.ts editados/novos
cp <snapshot>/pulso-ds-pr/content/foundations/_meta.ts content/foundations/_meta.ts
cp <snapshot>/pulso-ds-pr/content/patterns/_meta.ts    content/patterns/_meta.ts
cp <snapshot>/pulso-ds-pr/content/brand/_meta.ts       content/brand/_meta.ts

# 5. Validar localmente
pnpm install   # ou bun install
pnpm dev
# Conferir manualmente cada uma das 14 rotas — lista abaixo

# 6. Commit + push
git add content/foundations content/patterns content/brand
git commit -m "feat(v3.0): 14 detail pages α/β/γ

α · Identidade
- foundations/identity-audit.mdx    · auditoria sem-cor · 7 gaps priorizados
- foundations/type-confidence.mdx   · display 28→34px · tabular numerals · kicker 0.12em
- foundations/rhythm.mdx            · hairlines como sinal · 3 tokens de cadência
- foundations/signature-shapes.mdx  · 7 formas · RFC quórum 3/3
- brand/toolkit.mdx                 · deck · doc · social · email

β · IA Patterns
- patterns/ai-origin-tracking.mdx   · borda + kicker + monograma + popover
- patterns/ai-draft-regenerate.mdx  · DraftStack · chips · diff · undo timeline
- patterns/ai-embedding.mdx         · sheet · inline · balão · ambient
- patterns/ai-recommendation.mdx    · confidence ladder · slots · 3 desfechos
- patterns/ai-audit-trail.mdx       · assisted_action · diff slot-by-slot · 3 classes

γ · Mobile
- patterns/mobile-gestures.mdx      · 5 gestos · thumb-zone · hit-target
- patterns/mobile-offline.mdx       · 3 estados rede · queue lifecycle · freshness
- patterns/mobile-handover.mdx      · deep-link · 3 tiers push · SLA
- foundations/mobile-native-tokens.mdx · pipeline 1 JSON → 3 outputs · drift detector"

git push -u origin feat/v3.0-detail-pages

# 7. Abrir PR
gh pr create \\
  --base main \\
  --title "Pulso DS v3.0 — Detail pages (α + β + γ)" \\
  --body-file <snapshot>/pulso-ds-pr/PR_DESCRIPTION_pages.md
```

---

## Checklist de validação local

Rodar `pnpm dev` e abrir cada rota. Se renderiza sem erro de MDX no console, está ok.

**Foundations (5 novas):**

- [ ] `/foundations/identity-audit` — 4 tabelas + lista de 7 gaps
- [ ] `/foundations/type-confidence` — tabela auditoria + tokens novos
- [ ] `/foundations/rhythm` — tabela 14 superfícies + cadência por densidade
- [ ] `/foundations/signature-shapes` — 7 seções de signature + tabela de lint rules
- [ ] `/foundations/mobile-native-tokens` — 3 blocos de código (CSS/Swift/Kotlin) + parity matrix

**Patterns (8 novas):**

- [ ] `/patterns/ai-origin-tracking` — schema JSON renderiza · tabela de contrato por superfície
- [ ] `/patterns/ai-draft-regenerate` — 4 categorias de chips · tabela de atalhos
- [ ] `/patterns/ai-embedding` — árvore de decisão · 4 contratos de espaço
- [ ] `/patterns/ai-recommendation` — confidence ladder · schema JSON · tabela 3 desfechos
- [ ] `/patterns/ai-audit-trail` — schema JSON estendido · tabela política de retenção
- [ ] `/patterns/mobile-gestures` — 5 sub-seções de gesto · tabela thumb-zone
- [ ] `/patterns/mobile-offline` — tabela capacidades 3 estados · schema queued_action
- [ ] `/patterns/mobile-handover` — schema deep-link · 3 tiers · SLA

**Brand (1 nova):**

- [ ] `/brand/toolkit` — 3 surfaces · regras de uso · 5 arquivos

**Nav lateral:**

- [ ] Pasta `brand` aparece (alfabética).
- [ ] `foundations` mostra 5 novos itens preservando os 4 existentes (`colors`, `icons`, `motion`, `spacing`, `typography`).
- [ ] `patterns` mostra 10 itens — 2 existentes (`crisis-status`, `risk-levels`) + 8 novos.

---

## PR description

Salva como `pulso-ds-pr/PR_DESCRIPTION_pages.md`:

```markdown
## Pulso DS v3.0 — Detail pages (α + β + γ)

Segundo PR da release v3.0. Adiciona as **14 páginas detalhadas** das três fases. Depende do PR `feat/v3.0-roadmap-and-release`.

### O que entra

- **5 foundations** · `identity-audit`, `type-confidence`, `rhythm`, `signature-shapes`, `mobile-native-tokens`
- **8 patterns** · `ai-origin-tracking`, `ai-draft-regenerate`, `ai-embedding`, `ai-recommendation`, `ai-audit-trail`, `mobile-gestures`, `mobile-offline`, `mobile-handover`
- **1 brand** · `toolkit` (nova pasta `content/brand/`)
- **3 `_meta.ts`** · 1 nova (`brand/`) + 2 editadas (`foundations/`, `patterns/`)

### Estrutura

Foundations recebe pipeline de tokens nativos (γ.4). Brand é nova top-level — peça de identidade de marca, não componente nem pattern. Tudo o resto vai pra patterns.

### O que NÃO entra

- Mudanças em `globals.css` aplicando os tokens novos (`--text-display-lg`, `--rhythm-cadence-*`, `--touch-target-*`) — proposta de PR separado conforme HANDOFF_v3 original.
- Pacotes NPM (`@pulso/tokens-*`) — sem infra de publishing ainda.
- Sample apps nativos iOS/Android — γ.4 é documentação do pipeline, não código.

### Como revisar

1. `pnpm dev` (ou `bun dev`)
2. Abrir cada uma das 14 rotas novas (checklist completo no HANDOFF_v3_pages.md)
3. Confirmar nav lateral com `brand/`, `foundations/` e `patterns/` expandidos
4. Validar links cruzados entre páginas (ex: α.1 → α.4, β.1 → β.5)

### Quem revisa

@nevitonsantana
```

---

## Próximos PRs (não fazer agora)

### PR · `feat/v3.0-tokens-globalscss`

Aplica os tokens novos no `globals.css` do `Pulso-Design-System` e no `Crisis-Monitor` (consumidor). Inclui:

- `--text-display-lg`: 28px → **34px** (breaking moderado · codemod incluído)
- `--text-h1`: 20px → 22px
- `--text-display-num`: novo · 28px mono
- `--tracking-kicker`: 0.08em → 0.12em
- `--font-pulso-mono` com `font-variant-numeric: tabular-nums` default
- `--rhythm-cadence-{tight,beat,breath}`: novos
- `--touch-target-critical`, `--touch-target-dismiss`: novos

Esse PR depende de aprovação do display scale + codemod testado em projeto-piloto.

### PR · `feat/v3.0-eslint-rules`

Adicionar 6 lint rules no `eslint-plugin-pulso`:

- `pulso/kicker-spec`
- `pulso/score-ring-only`
- `pulso/no-pipe-separator`
- `pulso/risk-glyph-required`
- `pulso/marker-token-fixed`
- `pulso/evidence-border-reserved`

Esse PR depende de tooling existente do plugin.

---

## Se algo divergir

- Se nav lateral mostrar pasta `brand/` no lugar errado, adicionar entrada explícita em `content/_meta.ts` root:
  ```ts
  export default {
    'getting-started': { title: 'Getting Started' },
    foundations: { title: 'Foundations' },
    patterns: { title: 'Patterns' },
    components: { title: 'Components' },
    templates: { title: 'Templates' },
    brand: { title: 'Brand' },
    conceitual: { title: 'Conceitual' },
    roadmap: { title: 'Roadmap' },
    release: { title: 'Release' },
  }
  ```
- Se uma página renderizar mas faltar tabela / code block, conferir se markdown frontmatter ficou intacto (3 dashes em cima e embaixo) e se nenhum delimitador de code fence quebrou no copy/paste.
- Se MDX reclamar de caracteres Unicode (`α · β · γ · ●◆◐○■`), garantir encoding UTF-8 no `cp` (deve ser default em sistemas modernos · mas vale checar).

---

## Arquivos prontos no snapshot

```
pulso-ds-pr/
├── content/
│   ├── brand/
│   │   ├── _meta.ts                      # NOVO
│   │   └── toolkit.mdx                   # NOVO · α.5
│   ├── foundations/
│   │   ├── _meta.ts                      # SUBSTITUI
│   │   ├── identity-audit.mdx            # NOVO · α.1
│   │   ├── type-confidence.mdx           # NOVO · α.2
│   │   ├── rhythm.mdx                    # NOVO · α.3
│   │   ├── signature-shapes.mdx          # NOVO · α.4
│   │   └── mobile-native-tokens.mdx      # NOVO · γ.4
│   └── patterns/
│       ├── _meta.ts                      # SUBSTITUI
│       ├── ai-origin-tracking.mdx        # NOVO · β.1
│       ├── ai-draft-regenerate.mdx       # NOVO · β.2
│       ├── ai-embedding.mdx              # NOVO · β.3
│       ├── ai-recommendation.mdx         # NOVO · β.4
│       ├── ai-audit-trail.mdx            # NOVO · β.5
│       ├── mobile-gestures.mdx           # NOVO · γ.1
│       ├── mobile-offline.mdx            # NOVO · γ.2
│       └── mobile-handover.mdx           # NOVO · γ.3
└── PR_DESCRIPTION_pages.md               # criar antes do gh pr create
```
