import { cn } from "@/lib/utils"

type KickerProps = {
  children: React.ReactNode
  className?: string
  /** Elemento HTML renderizado — padrão "p" */
  as?: "p" | "div" | "span"
}

/**
 * Rótulo de seção: 11px, uppercase, tracking wide.
 * Padrão visual mais recorrente do Design System (100+ ocorrências).
 *
 * Use acima de valores métricos, grupos de conteúdo ou títulos de seção.
 * Não use para títulos de página — use <h1> ou <PageHeader>.
 */
export function Kicker({ children, className, as: Tag = "p" }: KickerProps) {
  return (
    <Tag
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className
      )}
    >
      {children}
    </Tag>
  )
}
