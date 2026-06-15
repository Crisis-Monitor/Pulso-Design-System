# Pulso DS — Registry de componentes (conjunto core)

Componentes instaláveis via `shadcn`, **gerados a partir do runtime do produto**
(Crisis Monitor), já alinhados aos tokens Pulso v3. O blueprint MDX em
`content/components/` é a referência de design; o código aqui é a versão
completa e testada em produção (CVA, `asChild`, variantes reais).

## Conjunto core (16)

`button` · `page-header` · `kicker` · `badge` · `input` · `textarea` ·
`select` · `label` · `card` · `alert` · `skeleton` · `alert-dialog` ·
`sheet` · `metric-card` · `checkbox` · `breadcrumb` (+ `utils`)

Seleção pelo uso real no produto (button 89×, page-header 55×, kicker 49×…),
fechada sob dependências internas.

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
