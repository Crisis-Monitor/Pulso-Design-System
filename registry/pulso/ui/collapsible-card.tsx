"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

type CollapsibleCardProps = {
  /** ID do elemento (para âncoras e scroll-to) */
  id?: string
  /** Se começa aberto */
  defaultOpen?: boolean
  /** Conteúdo do header (kicker, título, badges) */
  header: ReactNode
  /** Conteúdo colapsável */
  children: ReactNode
  className?: string
}

/**
 * Card com header clicável que recolhe/expande o conteúdo.
 * Usa Radix Collapsible por baixo com animação de chevron.
 */
export function CollapsibleCard({
  id,
  defaultOpen = true,
  header,
  children,
  className,
}: CollapsibleCardProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        id={id}
        className={cn(
          "rounded-[calc(var(--radius-lg)+0.375rem)] border-none bg-card/96 shadow-none",
          className
        )}
      >
        {/* Header clicável */}
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="flex w-full items-start justify-between gap-3 px-6 pb-0 pt-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/45 focus-visible:ring-offset-2 rounded-t-[calc(var(--radius-lg)+0.375rem)]"
          >
            <div className="flex-1">{header}</div>
            <ChevronDown
              className={cn(
                "mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </button>
        </CollapsibleTrigger>

        {/* Separador sempre visível */}
        <div className="mx-6 mt-3 border-t border-border/45" />

        {/* Conteúdo colapsável */}
        <CollapsibleContent>
          <div className="px-6 pb-6 pt-4">{children}</div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}
