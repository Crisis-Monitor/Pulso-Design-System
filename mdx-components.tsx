import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

const docsComponents = getDocsMDXComponents();

function BlueprintNote() {
  return (
    <aside className="not-prose my-4 rounded-md border border-[var(--border)] bg-[var(--muted)] px-4 py-3 text-sm text-[var(--fg-muted)]">
      <strong className="text-[var(--fg-strong)]">Blueprint, não pacote runtime.</strong>{" "}
      O Pulso DS hoje documenta contratos, tokens e exemplos de implementação. Use este snippet como ponto de partida no produto; ele não representa uma biblioteca de componentes publicada.
    </aside>
  );
}

export function useMDXComponents(components: Record<string, React.ComponentType<any>>) {
  return {
    ...docsComponents,
    BlueprintNote,
    ...components,
  };
}
