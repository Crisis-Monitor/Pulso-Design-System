# Pulso DS — Registry de componentes (conjunto core)

Componentes instaláveis via `shadcn`, **gerados a partir do runtime do produto**
(Crisis Monitor), já alinhados aos tokens Pulso v3. O blueprint MDX em
`content/components/` é a referência de design; o código aqui é a versão
completa e testada em produção (CVA, `asChild`, variantes reais).

## Catálogo completo — 63 componentes + 2 hooks + `utils` (66 itens)

Paridade total com o `src/components/ui/` do produto: **todos os 63 componentes**,
cada um com blueprint MDX no Pulso (gate de paridade, 0 gaps). O manifesto e as
dependências (npm + internas via URL) são derivados automaticamente dos imports —
adicionar/atualizar um componente é copiar o `.tsx` e rodar `build:registry`.

**Suporte:** `utils` (cn) · hooks `use-media-query` (dep do `responsive-sheet`)
e `use-mobile` (dep do `sidebar`).

As composições resolvem a árvore inteira automaticamente, ex.:
`sidebar` → button + input + separator + sheet + skeleton + tooltip + use-mobile + utils.

## Pré-requisito: tokens

Os componentes consomem os custom properties do Pulso (`--primary`,
`--radius-lg`, `--delta-*`, `--shadow-*`…). Instale o artefato de tokens
**antes** (ver [`tokens/`](../tokens/)):

```css
/* CSS de entrada do app (Tailwind 4) */
@import "tailwindcss";
@import "<caminho>/pulso-tokens.tailwind.css";
```

## Instalação

```bash
# componente isolado (resolve registryDependencies: utils, e deps internas)
npx shadcn@latest add https://crisis-monitor.github.io/Pulso-Design-System/r/button.json
```

## Build

`registry.json` é a fonte; `public/r/*.json` é gerado:

```bash
bun run build:registry   # = shadcn build → public/r/*.json
```

Editar um componente: altere `registry/pulso/ui/<nome>.tsx` e rode o build.
Os `registryDependencies`/`dependencies` são derivados dos imports.
