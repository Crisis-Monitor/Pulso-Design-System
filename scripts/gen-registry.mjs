/**
 * Gera registry.json a partir dos componentes em registry/pulso/ui/.
 * Deps (npm + internas via URL) são derivadas dos imports. Rode via:
 *   bun run build:registry   (gen + shadcn build → public/r/*.json)
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
const DIR = "registry/pulso/ui";
const HOOKS_DIR = "registry/pulso/hooks";
const core = new Set(readdirSync(DIR).map(f => f.replace(/\.tsx$/, "")));
const hooks = new Set(existsSync(HOOKS_DIR) ? readdirSync(HOOKS_DIR).map(f => f.replace(/\.tsx?$/, "")) : []);
const BASE = "https://crisis-monitor.github.io/Pulso-Design-System/r";
const items = [];
const externalDeps = new Set();
for (const file of readdirSync(DIR).sort()) {
  const name = file.replace(/\.tsx$/, "");
  const src = readFileSync(`${DIR}/${file}`, "utf8");
  const npm = new Set(), reg = new Set();
  for (const m of src.matchAll(/from\s+"([^"]+)"/g)) {
    const p = m[1];
    if (p.startsWith("@/components/ui/")) {
      const dep = p.replace("@/components/ui/", "");
      reg.add(dep);
      if (!core.has(dep)) externalDeps.add(`${name} → ${dep}`);
    } else if (p.startsWith("@/hooks/")) {
      const dep = p.replace("@/hooks/", "");
      reg.add(dep);
      if (!hooks.has(dep)) externalDeps.add(`${name} → hook ${dep}`);
    } else if (p === "@/lib/utils") {
      reg.add("utils");
    } else if (!p.startsWith("@/") && p !== "react" && !p.startsWith("react/") && p !== "react-dom" && p !== "next" && !p.startsWith("next/")) {
      npm.add(p);
    }
  }
  items.push({
    name, type: "registry:ui",
    ...(npm.size ? { dependencies: [...npm].sort() } : {}),
    ...(reg.size ? { registryDependencies: [...reg].sort().map(d => `${BASE}/${d}.json`) } : {}),
    files: [{ path: `registry/pulso/ui/${file}`, type: "registry:ui" }],
  });
}
// hooks items
for (const hook of [...hooks].sort()) {
  const file = readdirSync(HOOKS_DIR).find(f => f.replace(/\.tsx?$/, "") === hook);
  items.push({ name: hook, type: "registry:hook", files: [{ path: `${HOOKS_DIR}/${file}`, type: "registry:hook" }] });
}
// utils item
items.unshift({ name: "utils", type: "registry:lib", dependencies: ["clsx", "tailwind-merge"], files: [{ path: "registry/pulso/lib/utils.ts", type: "registry:lib" }] });
const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "pulso",
  homepage: "https://crisis-monitor.github.io/Pulso-Design-System/",
  items,
};
writeFileSync("registry.json", JSON.stringify(registry, null, 2) + "\n");
console.log("registry.json gerado com", items.length, "itens");
if (externalDeps.size) { console.log("\n⚠️ deps internas FORA do core (precisam entrar no registry):"); for (const d of externalDeps) console.log("   " + d); }
else console.log("✓ nenhuma dep interna fora do core — fechado");
