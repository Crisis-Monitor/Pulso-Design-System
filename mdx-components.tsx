import { Anchor, Tabs } from "nextra/components";
import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

const docsComponents = getDocsMDXComponents();

function BlueprintNote() {
  return (
    <aside className="not-prose my-4 rounded-md border border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-sm text-[var(--fg-muted)]">
      <strong className="text-[var(--fg-strong)]">Blueprint de design + código instalável.</strong>{" "}
      Este snippet documenta o contrato de design (estrutura, tokens e comportamento). O Pulso DS hoje também publica uma biblioteca instalável: o artefato de tokens (<code>tokens/pulso-tokens.css</code>) e o registry shadcn de componentes, gerados a partir do runtime do produto. Para a versão completa e testada em produção, instale via registry com <code>npx shadcn add &lt;pages-url&gt;/r/&lt;nome&gt;.json</code>.
    </aside>
  );
}

export function useMDXComponents(components: Record<string, React.ComponentType<any>>) {
  return {
    ...docsComponents,
    // Âncora interna com basePath aplicado (GitHub Pages). Use <A href="/..."> em vez
    // de <a> cru para links internos estilizados — <a> literal não recebe basePath.
    A: Anchor,
    BlueprintNote,
    Tabs,
    ...components,
  };
}
