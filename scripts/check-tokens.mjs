#!/usr/bin/env node
/**
 * Verifica consistência de tokens entre as três camadas do Pulso DS:
 *
 *   1. src/app/globals.css            — fonte canônica (o que o site publica)
 *   2. DESIGN.md                      — contrato documentado (tabelas markdown)
 *   3. public/visual/pulso-ds/globals.css — snapshot da camada visual (Open Design)
 *
 * Uso:
 *   bun scripts/check-tokens.mjs            # modo warn (exit 0, lista divergências)
 *   bun scripts/check-tokens.mjs --strict   # exit 1 se houver divergência fora do allowlist
 *
 * Divergências aceitas conscientemente entram no ALLOWLIST abaixo, com motivo.
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const STRICT = process.argv.includes("--strict");

/** Token → motivo. Divergências aqui não falham o modo --strict. */
const ALLOWLIST = {
  // ex.: "--tracking-kicker": "camada visual é snapshot v2; v3 mudou para 0.12em",
};

// ─── Parsing ────────────────────────────────────────────────────────────────

/** Extrai blocos top-level `selector { ... }` respeitando chaves aninhadas. */
function cssBlocks(css) {
  const blocks = [];
  const re = /([^{}]+)\{/g;
  let m;
  while ((m = re.exec(css))) {
    const selector = m[1].trim().split("\n").pop().trim();
    let depth = 1;
    let i = re.lastIndex;
    while (i < css.length && depth > 0) {
      if (css[i] === "{") depth++;
      else if (css[i] === "}") depth--;
      i++;
    }
    blocks.push({ selector, body: css.slice(re.lastIndex, i - 1) });
    re.lastIndex = i;
  }
  return blocks;
}

function normalize(value) {
  const v = value.trim().replace(/\s+/g, " ").replace(/;$/, "").toLowerCase();
  // px e rem são notações equivalentes (root 16px) — compara em rem
  const px = v.match(/^(-?[\d.]+)px$/);
  if (px) return `${parseFloat(px[1]) / 16}rem`;
  const rem = v.match(/^(-?[\d.]+)rem$/);
  if (rem) return `${parseFloat(rem[1])}rem`;
  return v;
}

/** Retorna { light: Map(token→valor), dark: Map(token→valor) } de um CSS. */
function parseCss(path) {
  const css = readFileSync(resolve(ROOT, path), "utf8");
  const light = new Map();
  const dark = new Map();
  for (const { selector, body } of cssBlocks(css)) {
    const isRoot = /(^|,)\s*:root\s*($|,)/.test(selector);
    const isDark = /\.dark\b/.test(selector);
    if (!isRoot && !isDark) continue;
    const target = isDark ? dark : light;
    for (const dm of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
      target.set(dm[1], normalize(dm[2]));
    }
  }
  return { light, dark };
}

/**
 * Extrai tokens das tabelas markdown do DESIGN.md no formato
 * `| `--token` | `light` | `dark` | ... |` (colunas além do nome são opcionais).
 */
function parseDesignMd(path) {
  const md = readFileSync(resolve(ROOT, path), "utf8");
  const light = new Map();
  const dark = new Map();
  for (const line of md.split("\n")) {
    const m = line.match(/^\|\s*`(--[\w-]+)`\s*\|\s*`([^`]+)`\s*(?:\|\s*`([^`]+)`\s*)?\|/);
    if (!m) continue;
    light.set(m[1], normalize(m[2]));
    if (m[3]) dark.set(m[1], normalize(m[3]));
  }
  return { light, dark };
}

// ─── Comparação ─────────────────────────────────────────────────────────────

const sources = {
  "src/app/globals.css": parseCss("src/app/globals.css"),
  "DESIGN.md": parseDesignMd("DESIGN.md"),
  "public/visual/pulso-ds/globals.css": parseCss("public/visual/pulso-ds/globals.css"),
};
const CANONICAL = "src/app/globals.css";

const divergences = [];
for (const mode of ["light", "dark"]) {
  const canonical = sources[CANONICAL][mode];
  for (const [name, maps] of Object.entries(sources)) {
    if (name === CANONICAL) continue;
    for (const [token, value] of maps[mode]) {
      if (!canonical.has(token)) continue; // tokens exclusivos não são divergência
      const canonValue = canonical.get(token);
      if (canonValue !== value) {
        divergences.push({ mode, token, source: name, value, canonValue });
      }
    }
  }
}

// Inverso: a camada visual evolui junto com o canônico, então todo token canônico
// precisa existir nela. (DESIGN.md é isento: as tabelas são curadas, não exaustivas.)
const VISUAL = "public/visual/pulso-ds/globals.css";
const missing = [];
for (const mode of ["light", "dark"]) {
  for (const token of sources[CANONICAL][mode].keys()) {
    if (!sources[VISUAL][mode].has(token)) missing.push({ mode, token });
  }
}

const blocking = [
  ...divergences.filter((d) => !(d.token in ALLOWLIST)),
  ...missing.filter((m) => !(m.token in ALLOWLIST)),
];

if (divergences.length === 0 && missing.length === 0) {
  console.log("✓ Tokens consistentes entre as três fontes.");
} else {
  if (divergences.length > 0) {
    console.log(`Divergências de token vs ${CANONICAL}:\n`);
    for (const d of divergences) {
      const allowed = d.token in ALLOWLIST ? "  [allowlist]" : "";
      console.log(`  [${d.mode}] ${d.token}${allowed}`);
      console.log(`      canônico: ${d.canonValue}`);
      console.log(`      ${d.source}: ${d.value}`);
    }
  }
  if (missing.length > 0) {
    console.log(`\nTokens canônicos ausentes em ${VISUAL}:\n`);
    for (const m of missing) {
      const allowed = m.token in ALLOWLIST ? "  [allowlist]" : "";
      console.log(`  [${m.mode}] ${m.token}${allowed}`);
    }
  }
  console.log(
    `\n${divergences.length} divergência(s), ${missing.length} ausência(s), ${blocking.length} fora do allowlist.`
  );
}

if (STRICT && blocking.length > 0) process.exit(1);
