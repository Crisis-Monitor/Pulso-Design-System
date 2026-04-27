# Design.md — Pulso Design System

> Documento de referência de design para o **Crisis Monitor**. Define tokens, princípios, tipografia, cores, espaçamento, motion, acessibilidade e padrões de UI usados em toda a plataforma.

---

## 1. Princípios de Design

| Princípio | Descrição |
|-----------|----------|
| **Clareza primeiro** | Em situações de crise, a informação precisa ser lida em segundos. Hierarquia visual forte, sem ambiguidade. |
| **Progressive disclosure** | Mostrar apenas o essencial no primeiro nível; detalhes sob demanda. Evita sobrecarga cognitiva. |
| **Consistência sistemática** | Mesmo token, mesmo comportamento em qualquer contexto. Reduz custo de aprendizado. |
| **Feedback contínuo** | Toda ação do usuário gera resposta visual. Estados vazios nunca são silenciosos. |
| **Acessibilidade por padrão** | WCAG AA como baseline. Não é "adaptável" — é requisito desde o design. |

---

## 2. Design Tokens

### 2.1 Cores — Tema Claro (Light)

#### Superfícies base

| Token | Valor | Uso |
|-------|-------|-----|
| `--background` | `#F5F4FA` | Fundo da página |
| `--foreground` | `#171629` | Texto principal |
| `--card` | `#FFFFFF` | Cartões e painéis |
| `--elevated` | `#ECE7F8` | Superfície elevada (popovers, dropdowns) |
| `--muted` | `#F1EEFA` | Fundos secundários |
| `--border` | `#DDD7EE` | Bordas padrão |
| `--input` | `#DDD7EE` | Bordas de inputs |

#### Marca / Primary

| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#6C46F5` | Cor de marca, botões primários |
| `--primary-hover` | `#5C39DA` | Hover de botões |
| `--primary-soft` | `#EEE8FF` | Fundo sutil de destaque |
| `--primary-strong` | `#4D2FD0` | Estado ativo/pressed |
| `--primary-foreground` | `#FFFFFF` | Texto sobre primary |
| `--ring` | `color-mix(primary 32%, transparent)` | Focus ring |

#### Semânticos

| Token | Valor | Uso |
|-------|-------|-----|
| `--success` | `#2FA36B` / bg: `#E8F7EF` | Confirmações, status positivo |
| `--info` | `#4F7DF5` / bg: `#EEF3FF` | Informações, dicas |
| `--attention` | `#D18B2F` / bg: `#FFF3DF` | Alertas, atenção |
| `--critical` | `#C4516C` / bg: `#FCE8EE` | Erros, risco alto |
| `--evidence` | `#1A756D` / bg: `#E8F8F7` | Evidências, dados de crise |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Ações destrutivas |

#### Risco — 5 níveis

| Nível | BG | Texto | Border |
|-------|----|-------|--------|
| **Stable** | `#EAF6EF` | `#2B7A56` | `#BFE2D1` |
| **Monitor** | `#EEF3FF` | `#4368B8` | `#C8D7F6` |
| **Attention** | `#FFF3DF` | `#9A691E` | `#E8C98E` |
| **High** | `#FCE8EE` | `#A8455C` | `#E1B5C0` |
| **Critical** | `#F7D9E2` | `#8F3349` | `#D696A8` |

#### Sidebar (Dark)

| Token | Valor |
|-------|-------|
| `--sidebar` | `#0F0C1A` |
| `--sidebar-foreground` | `#F6F3FF` |
| `--sidebar-primary` | `#6C46F5` |
| `--sidebar-border` | `color-mix(#0F0C1A 78%, #FFFFFF 22%)` |

#### Cores de suporte

| Token | Valor |
|-------|-------|
| `--lavender` | `#CFC2FF` |
| `--cyan` | `#45B8E8` |
| `--teal` | `#6FD6CF` |
| `--indigo-deep` | `#32256D` |

#### Chart palette

| Token | Valor |
|-------|-------|
| `--chart-1` | `#6C46F5` |
| `--chart-2` | `#45B8E8` |
| `--chart-3` | `#6FD6CF` |
| `--chart-4` | `#B38CFF` |
| `--chart-5` | `#D18B2F` |
| `--chart-6` | `#C4516C` |
| `--chart-7` | `#8A63FF` |
| `--chart-8` | `#74E0D8` |

---

### 2.2 Cores — Tema Escuro (Dark)

#### Superfícies base

| Token | Valor |
|-------|-------|
| `--background` | `#0F0C1A` |
| `--foreground` | `#F6F3FF` |
| `--card` | `#151126` |
| `--elevated` | `#221B3D` |
| `--muted` | `#1B1630` |
| `--border` | `#302A50` |

#### Marca / Primary

| Token | Valor |
|-------|-------|
| `--primary` | `#8A63FF` |
| `--primary-hover` | `#9B7BFF` |
| `--primary-soft` | `#2A1F55` |
| `--primary-strong` | `#6C46F5` |

#### Semânticos

| Token | Valor |
|-------|-------|
| `--success` | `#44B97B` / bg: `#13281D` |
| `--info` | `#78A0FF` / bg: `#18253D` |
| `--attention` | `#E0A144` / bg: `#2B2112` |
| `--critical` | `#DA6A88` / bg: `#351522` |

---

### 2.3 Foreground Scale — 5 níveis de texto

| Nível | Light | Dark | Uso |
|-------|-------|------|-----|
| `--fg` | `#171629` | `#F6F3FF` | Texto principal |
| `--fg-secondary` | `#4A4961` | `#C9C3E6` | Texto secundário |
| `--fg-muted` | `#73718A` | `#9891B8` | Descrições, captions |
| `--fg-subtle` | `#A09CB4` | `#6E678E` | Metadados, placeholders |
| `--fg-disabled` | `#D5CEC5` | `#3D3660` | Estados desabilitados |

---

### 2.4 Tipografia

| Nome | Size (rem) | Size (px) | Uso |
|------|-----------|-----------|-----|
| `--text-display` | 1.75 | 28px | Títulos de página |
| `--text-title` | 1.25 | 20px | Cabeçalhos de seção |
| `--text-heading` | 1.125 | 18px | Subtítulos |
| `--text-body` | 0.875 | 14px | Texto principal |
| `--text-sm` | 0.8125 | 13px | Texto de suporte |
| `--text-caption` | 0.75 | 12px | Labels, badges |
| `--text-xs` | 0.6875 | 11px | Metadados finos |

**Fontes:**
- **Sans:** Manrope (`--font-manrope`) — corpo e UI
- **Mono:** IBM Plex Mono (`--font-ibm-plex-mono`) — código, dados técnicos
- **Feature settings:** `ss01` (a single-story), `cv05` (ponto estilizado)

---

### 2.5 Espaçamento (Densidade)

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-compact` | 0.5rem (8px) | Tabelas densas, listas longas |
| `--space-comfortable` | 0.75rem (12px) | Padrão para cards e formulários |
| `--space-airy` | 1rem (16px) | Seções com respiro |
| `--space-editorial` | 1.5rem (24px) | Hero, landing pages |

**Control Heights:**

| Token | Valor | Uso |
|-------|-------|-----|
| `--control-height-compact` | 2rem (32px) | Inputs em tabelas |
| `--control-height-default` | 2.375rem (38px) | Inputs padrão |
| `--control-height-prominent` | 2.75rem (44px) | Botões de destaque |
| `--control-height-hero` | 3rem (48px) | CTA principal |

**Border Radius:**

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `calc(--radius - 4px)` | Badges, chips |
| `--radius-md` | `calc(--radius - 2px)` | Inputs, botões |
| `--radius-lg` | 0.5rem (8px) | Cards padrão |
| `--radius-xl` | 0.875rem (14px) | Cards elevados, modais |
| `--surface-radius` | 1.1rem | Superfícies grandes |
| `--control-radius` | 0.625rem | Controles de formulário |

---

### 2.6 Motion

| Token | Valor | Uso |
|-------|-------|-----|
| `--motion-duration-fast` | 100ms | Hover, toggle instantâneo |
| `--motion-duration-default` | 150ms | Transições padrão |
| `--motion-duration-slow` | 300ms | Entrada de página, modal |
| `--motion-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Padrão (Material standard) |
| `--motion-easing-emphasized` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrada com ênfase |

**Animações globais:**
- `cm-fade-up-in` — entrada de página (220ms, easing emphasized)
- `.cm-stagger` — stagger de filhos (24ms delay por item)
- `.cm-page-enter` — animação de página
- `.cm-tab-panel` — animação de troca de tabs

**Reduced motion:** respeita `prefers-reduced-motion: reduce` — desativa todas as animações.

---

### 2.7 Focus Ring

| Token | Valor |
|-------|-------|
| `--focus-ring-width` | 2px |
| `--focus-ring-offset` | 2px |
| Cor | `color-mix(primary 32%, transparent)` |

Todos os elementos interativos devem ter focus ring visível.

---

## 3. Shadows

| Token | Light | Dark |
|-------|-------|------|
| `--surface-shadow-soft` | `0 16px 36px -24px rgba(23,22,31,0.18)` | `0 18px 40px -24px rgba(0,0,0,0.52)` |
| `--surface-shadow-elevated` | `0 28px 60px -28px rgba(23,22,31,0.22)` | `0 30px 68px -30px rgba(0,0,0,0.68)` |

---

## 4. Surface Roles

| Role | Light | Dark | Uso |
|------|-------|------|-----|
| `--surface-page` | `--background` | `--background` | Fundo base da página |
| `--surface-panel` | `--card` | `--card` | Painéis, sidebars |
| `--surface-elevated` | `--elevated` | `--elevated` | Popovers, menus |
| `--surface-subtle` | `color-mix(muted 50%, bg)` | igual | Seções sutis |
| `--surface-inverse` | `--foreground` | `--background` | Áreas de alto contraste |

---

## 5. Delta Chips (variações de métricas)

| Tipo | Light BG | Light Text | Dark BG | Dark Text |
|------|----------|------------|---------|----------|
| **Success** | `#E2F5F0` | `#0F6F66` | `#19302D` | `#69D0C3` |
| **Warn** | `#F8EDD7` | `#855014` | `#312613` | `#DFB666` |
| **Error** | `#F5E1E2` | `#90373D` | `#301D22` | `#DF8A90` |
| **Info** | `#ECE8FF` | `#4838C9` | `#282347` | `#B3ABFF` |
| **Neutral** | `#ECE9E5` | `#4C4758` | `#23212D` | `#B2ACBA` |

---

## 6. Metric Card Tones

| Tom | Light Border | Light BG | Spark | Dark Border | Dark BG |
|-----|-------------|----------|-------|-------------|---------|
| **Neutral** | `oklch(0.89 0.008 260)` | `oklch(0.985 0.004 260)` | `oklch(0.68 0.03 260)` | `oklch(0.28 0.02 280)` | `oklch(0.17 0.02 280)` |
| **Blue** | `#B9C7DD` | `#EEF2F8` | `#6E89B8` | `#43536F` | `#1A1F2B` |
| **Violet** | `#C9C2FF` | `#F1EEFF` | `#7568F6` | `#5E52D9` | `#231F3D` |
| **Rose** | `#E1BBBB` | `#F8E8E8` | `#C55A5F` | `#74484D` | `#2A1D21` |
| **Amber** | `#E4C892` | `#FAF1DE` | `#C48A2C` | `#775D30` | `#2D2417` |
| **Emerald** | `#A5D8D2` | `#E7F7F4` | `#1FA99B` | `#2F8F84` | `#182926` |

---

## 7. Brand Gradient

**Light:**
```css
linear-gradient(135deg, color-mix(primary 84%, white) 0%, color-mix(primary 72%, #8A63FF) 55%, color-mix(primary 60%, #B38CFF) 100%)
```

**Dark:**
```css
linear-gradient(135deg, color-mix(primary 88%, #6C46F5) 0%, color-mix(primary 74%, #58C7F2) 55%, color-mix(primary 60%, #C2ACFF) 100%)
```

---

## 8. Acessibilidade

- **Contraste mínimo:** WCAG AA (4.5:1 para texto normal, 3:1 para texto grande)
- **Focus ring:** sempre visível, 2px com offset de 2px
- **Reduced motion:** `prefers-reduced-motion: reduce` desativa todas as animações
- **Font rendering:** `text-rendering: optimizeLegibility` + feature settings `ss01`, `cv05`
- **Sem cor isolada:** informação nunca é transmitida apenas por cor (usar ícones, texto ou padrões como suporte)

---

## 9. Padrões de Layout

### 9.1 Estrutura de página

```
+----------------------------------+
|  Sidebar (dark)                  |
|  width: 256px (collapsed: 64px)  |
+----------------------------------+
|  TopBar (breadcrumb, search)     |
+----------------------------------+
|  Content (surface-page)          |
|    +- Header (kicker + title)    |
|    +- Cards (surface-panel)      |
|    +- Footer                     |
+----------------------------------+
```

### 9.2 Hierarquia visual

1. **Display** → título da página (28px)
2. **Title** → cabeçalho de seção (20px)
3. **Heading** → subtítulos (18px)
4. **Body** → conteúdo principal (14px)
5. **Caption** → labels, badges (12px)

### 9.3 Densidade

| Modo | Espaçamento | Contexto |
|------|-------------|----------|
| **Compact** | 8px | Tabelas, dashboards densos |
| **Comfortable** | 12px | Padrão — formulários, cards |
| **Airy** | 16px | Landing, páginas de marketing |

---

## 10. Tech Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 + App Router |
| CSS | Tailwind CSS v4 + `@theme` |
| Componentes | shadcn/ui (Radix primitives) |
| Ícones | Lucide React |
| Fonte | Manrope (sans) + IBM Plex Mono (mono) |
| Documentação | Nextra (MDX) |
| Animações | CSS custom + Framer Motion (onde necessário) |

---

## 11. Como Usar

### Em componentes React

```tsx
// Cores via Tailwind
<div className="bg-background text-foreground">
  <span className="text-muted-foreground">Texto secundário</span>
  <Badge className="bg-success-bg text-success">Stable</Badge>
</div>

// Cores via CSS custom property
<div style={{ backgroundColor: 'var(--primary-soft)' }}>
  Fundo sutil de marca
</div>

// Tokens de risco
<span className="text-[var(--risk-critical-text)] bg-[var(--risk-critical-bg)]">
  Crítico
</span>
```

### Em CSS custom

```css
.card {
  background: var(--surface-panel);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--surface-shadow-soft);
  padding: var(--space-comfortable);
}
```

---

## 12. Decisões de Design

### Por que OKLCH?
Usamos `oklch()` para cores semânticas que exigem precisão perceptual (destructive, charts). OKLCH garante que a percepção de luminância seja consistente entre light e dark mode.

### Por que `color-mix()`?
Para derivar variações de cor (hover, focus ring, brand-muted) sem hardcode. Mantém a relação matemática com a cor base.

### Por que 5 níveis de risco?
A escala de 5 níveis (Stable → Monitor → Attention → High → Critical) mapeia diretamente a gravidade de crises reputacionais, permitindo leitura rápida por operadores de SOC.

### Por que Manrope?
Manrope oferece legibilidade superior em tamanhos pequenos (crucial para dashboards densos) com uma estética moderna e profissional. O `ss01` produz "a" de um só andar, mais legível em UI.

---

## 13. Checklist de Novo Componente

Antes de adicionar um componente ao design system:

- [ ] Usa tokens de cor (nunca hardcoded)
- [ ] Usa tokens de espaçamento
- [ ] Usa tokens de tipografia
- [ ] Tem estado hover, focus, active, disabled
- [ ] Respeita `prefers-reduced-motion`
- [ ] Contraste mínimo WCAG AA
- [ ] Documentado em MDX (`content/components/`)
- [ ] Funciona em light e dark mode
- [ ] Testado em viewport mobile (375px)
