# Product reference — premium direction (norte visual)

Estes arquivos são a **fonte de verdade rastreável** do norte visual do produto Crisis
Monitor sob o Pulso DS. Foram extraídos dos estudos premium (inspiração Linear / Mercury /
Done.app) que definem a direção: **neutros frios, hairlines sobre sombra, um único acento
violeta, ritmo 24/40/72, peso 500, mono para números** — "confiança por disciplina, não por
decoração".

Antes deles, viviam soltos em `~/Downloads/Crisis Monitor Design System (1)/` (volátil).
Versioná-los aqui torna o norte auditável e impede que ele se perca.

## Arquivos

| Arquivo | Papel |
|---|---|
| `dashboard.html` | **O dashboard alvo** ("Bom dia, Neviton" / Visão geral). Estrutura EXATA a espelhar na implementação: markup, classes, grid da tabela, card da Cris, feed de atividade, sidebar, sidesheet. |
| `tokens-premium.css` | Tokens do norte (neutro): radii 4/6/8/10, bg `#FBFAF7` warm, hairlines `rgba(20,18,10,.08)`, acento `#5D52FF`, mono p/ números. Prefixados `--pm-*` para não colidir. |
| `premium-direction.html` | Os princípios da direção: hairlines > sombra, mono p/ número, UM acento, ritmo 24/40/72, peso 500, neutros frios. |

## Relação com os tokens canônicos do Pulso

`src/app/globals.css` é o canônico que o produto consome. A neutralização da paleta light
(lavanda → neutro) aplica o espírito destes estudos, com uma diferença deliberada: o Pulso
**mantém o acento violeta `#6C46F5`** (a marca), enquanto o estudo usa `#5D52FF`. Os tokens
`--pm-*` aqui são **referência**, não são importados em build.

> Implementação deve **espelhar o markup exato** de `dashboard.html`, não aproximá-lo.
