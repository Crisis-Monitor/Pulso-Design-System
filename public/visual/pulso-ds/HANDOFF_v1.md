# Pulso DS v1 — Handoff para Claude Code

Pacote de instruções para abrir dois PRs sincronizando a v1 do Pulso Design System:

1. **Pulso-Design-System** (oficial) — `github.com/Crisis-Monitor/Pulso-Design-System`
2. **Crisis-Monitor** (consumidor) — `github.com/Crisis-Monitor/Crisis-Monitor`

A fonte da verdade desta release é o snapshot em `pulso-ds/` deste projeto (62 páginas de doc + tokens em `globals.css`).

---

## Resumo executivo da v1

> A v1 do Pulso fecha o esqueleto do DS: tokens, atoms, organisms e templates do produto Crisis Monitor. Cobre 62 páginas de documentação interativa em HTML, alinhadas ao spec do repo oficial. Próxima fase (v2) tem roadmap próprio em `pulso-ds/roadmap-v2.html`.

### O que mudou em relação à pré-v1

#### Tokens (`globals.css`)

| Token | Antes | Agora |
|---|---|---|
| `--primary` (light) | `#5D52FF` | **`#6C46F5`** |
| `--primary` (dark) | `#7B71FF` | **`#8A63FF`** |
| `--background` (light) | `#FBFAF7` (warm-cream) | **`#F5F4FA`** (lavanda muito clara) |
| `--background` (dark) | cinza-frio | **`#0F0C1A`** (indigo-deep) |
| Foreground hierarchy | 5 níveis genéricos | **5 níveis recalibrados**: `#171629 / #4A4961 / #73718A / #A09CB4 / #C5C2D2 / #D5CEC5` |
| Borders | hairline neutro | **lavanda hairline** (`#DDD7EE` / `#302A50`) |
| Risk taxonomy | `safe / monitor / medium / high / critical` | **`stable / monitor / attention / high / critical`** (`medium` e `safe` viram aliases backward-compat) |
| Surface roles | n/a | **`--surface-page / panel / elevated / subtle / inverse`** |
| Sidebar | variava por theme | **chrome fixo near-black** (`#0F0C1A`) em light + dark, com `--sidebar-primary: #8A63FF` único |
| Sidebar muted text | `var(--fg-subtle)` | **`#7E78A0`** fixo (mesma cor em light + dark) |

#### Páginas novas (21)

- **Getting Started**: `installation`, `quick-start`
- **Foundations**: `icons`
- **Atoms**: `avatar`, `kicker`, `label`, `controls`
- **Molecules**: `accordion`, `avatar-group`, `button-group`, `empty-state`, `input-group`, `page-header`
- **Organisms**: `collapsible-card`, `responsive-sheet`, `form`
- **Patterns**: `risk-levels`, `crisis-status`
- **Templates**: `tpl-dashboard`, `tpl-crisis-detail`, `tpl-settings`

Crisis Domain (`mention-card`, `score-ring`, `sentiment-bar`) migrado de "Molecules" para **Patterns**.

#### Faxina

- Deletado `field-group.html` (substituído por `input-group.html`).
- `filter-bar.html` marcado como "Extensão Pulso · não está no spec oficial".
- Theme switcher movido para o topo da sidebar, com ícones sol/lua (era texto Light/Dark no rodapé).
- Cards inline do template Dashboard e Crisis Detail refeitos no padrão canônico `.pmc`.
- Padrão Do/Don't (`.rules-grid`) unificado em 10 páginas (`score-ring`, `mention-card`, `sentiment-bar`, `filter-bar`, `form-field`, `checkbox`, `radio`, `switch`, `select`, `datepicker`).

#### Decisão de produto

- **Densidade default = `comfortable`**. `compact` e `spacious` ficam disponíveis como preferência do usuário em Settings → Personal. Tabelas operacionais podem ter override local.

---

## Branch A · `Pulso-Design-System` (oficial)

**Branch:** `feat/v1-tokens-realignment`

**Escopo:** sincronizar o repo de documentação com os 62 HTMLs do snapshot, refatorar `globals.css` e atualizar `DESIGN.md`.

### Passos

1. Abrir branch a partir de `main`.
2. **Tokens** — sobrescrever `src/app/globals.css` com a versão de `pulso-ds/globals.css`. Preserve a estrutura `@theme inline` + `:root` + `.dark` existente; o que muda são valores e tokens novos (risk-attention, surface roles, sidebar chrome fixo).
3. **Páginas MDX/rotas** — para cada HTML em `pulso-ds/pages/`, garantir cobertura equivalente em `src/app/design-system/<categoria>/<slug>/page.tsx` ou `content/<categoria>/<slug>.mdx`. Use o HTML do snapshot como referência de copy, estrutura de seções, exemplos e regras. As 21 páginas novas listadas acima precisam ser criadas. Páginas pré-existentes só precisam de revisão de copy + atualização para a nova taxonomia de risk.
4. **Conteúdo conceitual** — `roadmap-v2.html` do snapshot vira `content/roadmap/v2.mdx` (ou rota equivalente). Marcar como "Próxima versão · em planejamento".
5. **DESIGN.md** — adicionar seção `## v1.0 · Maio 2026` no topo, replicando o "Resumo executivo" acima e a tabela de tokens.
6. **README.md** — atualizar versão e link para o roadmap.

### Critérios de aceite

- [ ] `pnpm dev` roda sem erro.
- [ ] Light/Dark toggle funciona; sidebar idêntica nos dois modos.
- [ ] Todas as 62 páginas do snapshot têm equivalente navegável.
- [ ] `grep -r "risk-medium\|risk-safe" src/` retorna apenas referências em aliases backward-compat.
- [ ] Lighthouse score ≥ 90 em performance e acessibilidade nas 3 páginas mais visitadas.

### PR description (template)

```markdown
## Pulso DS v1.0 — Release

Fecha a primeira versão estável do Pulso DS. Sincroniza tokens, taxonomia de risco
e adiciona 21 páginas novas de documentação.

### Mudanças principais

- **Tokens**: primary realinhado para `#6C46F5` (light) / `#8A63FF` (dark), background
  lavanda em vez de warm-cream, sidebar com chrome fixo em ambos os modos.
- **Risk taxonomy**: `medium → attention` (alias backward-compat mantido).
- **Surface roles**: novos tokens `--surface-page/panel/elevated/subtle/inverse`.
- **21 páginas novas** (ver DESIGN.md para lista completa).
- **Crisis Domain** movido para Patterns.

### Próximos passos

- Roadmap da v2 disponível em `content/roadmap/v2.mdx` (5 fases, 23 iniciativas).
- Sincronização com o Crisis Monitor via PR separado.

### Quem revisa

@nevitonsantana
```

---

## Branch B · `Crisis-Monitor` (consumidor)

**Branch:** `chore/sync-pulso-ds-v1`

**Escopo:** atualizar os tokens consumidos pelo app, migrar usos de `risk-medium` para `risk-attention` e validar telas críticas.

### Passos

1. Abrir branch a partir de `main`.
2. **`src/app/globals.css`** — substituir os tokens do Pulso pelos novos valores. **Preservar** tokens custom do app (gráficos próprios, layouts específicos). Os campos a substituir são exatamente os listados na tabela do "Resumo executivo".
3. **Sidebar** — verificar se a sidebar do app usa `--sidebar-*`. Se sim, agora ela é idêntica em light e dark; confirme que não tem CSS sobrescrevendo essas variáveis com lógica de tema.
4. **Migração de `risk-medium`**:
   ```bash
   grep -rn "risk-medium\|risk-safe" src/
   ```
   Substituir por `risk-attention` / `risk-stable`. Os aliases ficam no `globals.css` como fallback temporário (depreciar em 2 minor releases — ver roadmap v2 iniciativa 5.3).
5. **Densidade** — implementar o toggle de densidade do usuário em `Settings → Personal → Densidade`. Persistência em `localStorage` (futuramente em perfil sync). Default `comfortable`.
6. **Smoke test** das telas críticas:
   - Dashboard (com 4 metric cards)
   - Crisis Detail (com mention list + sentiment + IA panel)
   - Settings (form fields + nav lateral)
   - Login / SSO
   - Modais de criação de caso e aprovação de resposta

### Critérios de aceite

- [ ] `pnpm dev` roda sem erro.
- [ ] Nenhuma tela com texto ilegível (contraste &lt; AA).
- [ ] Focus rings visíveis em ambos os temas.
- [ ] Toggle de densidade funciona e persiste.
- [ ] Nenhuma regressão visual reportada pelo time.

### PR description (template)

```markdown
## Sync com Pulso DS v1.0

Atualiza os tokens consumidos do Pulso DS para a v1.0. Migra usos de risk-medium
para risk-attention, mantendo aliases backward-compat por 2 releases.

### Mudanças

- Tokens do Pulso atualizados em `src/app/globals.css`.
- Migração assistida de `risk-medium → risk-attention`.
- Toggle de densidade adicionado em Settings → Personal.
- Sidebar do app agora usa chrome fixo do Pulso (idêntico light/dark).

### Próximos passos

- Roadmap da v2 (acessibilidade, voz, data viz, governança) disponível em
  Pulso-Design-System/content/roadmap/v2.mdx.

### Quem revisa

@nevitonsantana
```

---

## Ordem recomendada

1. PR no `Pulso-Design-System` primeiro (release v1.0 publicada no DS).
2. Após merge, PR no `Crisis-Monitor` consumindo a v1.0.
3. **Não** mergear nenhum dos dois sem revisão humana — o segundo PR depende do primeiro.

## Se algo divergir

Se o estado do `Crisis-Monitor` no momento do PR tiver consumo direto de hex codes
do Pulso (em vez de tokens), pare e abra issue listando os usos. Não substitua
silenciosamente — pode quebrar telas em produção.

Se algum arquivo do snapshot `pulso-ds/` parecer estar com conteúdo errado ou
faltando ao comparar com o repo oficial, pergunte antes de inventar conteúdo.
