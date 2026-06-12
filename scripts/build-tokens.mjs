#!/usr/bin/env node
/**
 * Gera o artefato de tokens consumível a partir da fonte canônica:
 *
 *   src/app/globals.css  →  tokens/pulso-tokens.css           (CSS puro, framework-agnóstico)
 *                        →  tokens/pulso-tokens.tailwind.css  (bridge @theme para Tailwind 4)
 *
 * O artefato contém apenas tokens (custom properties): blocos :root,
 * [data-density] e .dark. Reset, camada base e keyframes ficam de fora —
 * são responsabilidade do app consumidor.
 *
 * Uso:
 *   bun scripts/build-tokens.mjs           # regenera tokens/
 *   bun scripts/build-tokens.mjs --check   # exit 1 se tokens/ está desatualizado
 *
 * A CI roda --check para impedir drift entre a fonte canônica e o artefato.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CHECK = process.argv.includes("--check");

const SOURCE = "src/app/globals.css";
const OUT_DIR = resolve(ROOT, "tokens");
const OUT_CSS = resolve(OUT_DIR, "pulso-tokens.css");
const OUT_TW = resolve(OUT_DIR, "pulso-tokens.tailwind.css");

const VERSION = JSON.parse(readFileSync(resolve(ROOT, "package.json"), "utf8")).version;
const css = readFileSync(resolve(ROOT, SOURCE), "utf8");

// ─── Parser de statements top-level ─────────────────────────────────────────

/** Divide o CSS em comentários, statements (@import etc.) e blocos `sel { ... }`. */
function topLevel(src) {
  const items = [];
  let i = 0;
  while (i < src.length) {
    if (/\s/.test(src[i])) {
      i++;
      continue;
    }
    const start = i;
    if (src.startsWith("/*", i)) {
      const end = src.indexOf("*/", i);
      i = end === -1 ? src.length : end + 2;
      items.push({ type: "comment", text: src.slice(start, i) });
      continue;
    }
    let j = i;
    let parens = 0;
    while (j < src.length) {
      const c = src[j];
      if (c === "(") parens++;
      else if (c === ")") parens--;
      else if (parens === 0 && (c === "{" || c === ";")) break;
      j++;
    }
    if (src[j] === ";" || j >= src.length) {
      items.push({ type: "statement", text: src.slice(start, j + 1) });
      i = j + 1;
    } else {
      let depth = 1;
      let k = j + 1;
      while (k < src.length && depth > 0) {
        if (src[k] === "{") depth++;
        else if (src[k] === "}") depth--;
        k++;
      }
      items.push({ type: "block", selector: src.slice(start, j).trim(), text: src.slice(start, k) });
      i = k;
    }
  }
  return items;
}

const items = topLevel(css);

/** Seleciona blocos pelo seletor, carregando os comentários imediatamente anteriores. */
function pickBlocks(test) {
  const out = [];
  let pendingComments = [];
  for (const item of items) {
    if (item.type === "comment") {
      pendingComments.push(item.text);
      continue;
    }
    if (item.type === "block" && test(item.selector)) {
      out.push([...pendingComments, item.text].join("\n"));
    }
    pendingComments = [];
  }
  return out;
}

const tokenBlocks = pickBlocks(
  (sel) => sel === ":root" || sel === ".dark" || sel.startsWith("[data-density")
);
const themeBridge = items.find((it) => it.type === "block" && it.selector === "@theme inline");
const fontImport = items.find(
  (it) => it.type === "statement" && /^@import\s+url\(/.test(it.text)
);

if (tokenBlocks.length < 3 || !themeBridge || !fontImport) {
  console.error(`✗ Estrutura inesperada em ${SOURCE} — extração abortada.`);
  process.exit(1);
}

// ─── Montagem dos artefatos ──────────────────────────────────────────────────

const banner = (title, extra) => `/**
 * Pulso Design System — ${title} · v${VERSION}
 *
 * GERADO a partir de ${SOURCE} — não edite à mão.
 * Regenerar: bun scripts/build-tokens.mjs
 *
${extra}
 */`;

const plainCss = `${banner(
  "Design Tokens",
  ` * Artefato consumível, framework-agnóstico. Contém apenas custom
 * properties: primitivas (:root), tema claro (:root), tema escuro (.dark)
 * e modificadores de densidade ([data-density]).
 *
 * Uso: importe este arquivo e aplique a classe \`.dark\` no <html> para o
 * tema escuro. Reset, tipografia base e keyframes são do app consumidor.`
)}

${fontImport.text}

${tokenBlocks.join("\n\n")}
`;

const tailwindCss = `${banner(
  "Tokens · bridge Tailwind 4",
  ` * Para apps com Tailwind 4: importa os tokens e expõe as utilities via
 * @theme inline (bg-background, text-foreground, border-border etc.).
 *
 * Uso no CSS de entrada do app:
 *   @import "tailwindcss";
 *   @import "<caminho>/pulso-tokens.tailwind.css";`
)}

@import "./pulso-tokens.css";

@custom-variant dark (&:is(.dark *));

${themeBridge.text}
`;

// ─── Escrita / verificação ──────────────────────────────────────────────────

const outputs = [
  [OUT_CSS, plainCss],
  [OUT_TW, tailwindCss],
];

if (CHECK) {
  const stale = outputs.filter(
    ([path, content]) => !existsSync(path) || readFileSync(path, "utf8") !== content
  );
  if (stale.length > 0) {
    console.error("✗ Artefato de tokens desatualizado em relação à fonte canônica:");
    for (const [path] of stale) console.error(`    ${path.replace(ROOT + "/", "")}`);
    console.error("  Rode: bun scripts/build-tokens.mjs");
    process.exit(1);
  }
  console.log("✓ tokens/ em dia com a fonte canônica.");
} else {
  mkdirSync(OUT_DIR, { recursive: true });
  for (const [path, content] of outputs) {
    writeFileSync(path, content);
    console.log(`✓ ${path.replace(ROOT + "/", "")}`);
  }
}
