import * as React from "react"
import { RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

// LiveIndicator: sinaliza feed em tempo real
// Uso: aba Cobertura, seções com atualização automática
export interface LiveIndicatorProps {
  // Label exibido ao lado do dot (padrão: "Ao vivo")
  label?: string
  // Esconde o label, exibe só o dot
  dotOnly?: boolean
  // Callback para o botão de refresh manual
  onRefresh?: () => void
  // Está carregando (ex: durante o refresh)
  refreshing?: boolean
  // Desativa o indicador (dot cinza, sem pulse)
  inactive?: boolean
  className?: string
}

export function LiveIndicator({
  label = "Ao vivo",
  dotOnly = false,
  onRefresh,
  refreshing = false,
  inactive = false,
  className,
}: LiveIndicatorProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5", className)}
      aria-label={inactive ? "Inativo" : label}
    >
      {/* Dot animado */}
      <span className="relative flex size-2 shrink-0">
        {!inactive && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span
          className={cn(
            "relative inline-flex size-2 rounded-full",
            inactive ? "bg-muted-foreground/40" : "bg-emerald-500"
          )}
        />
      </span>

      {/* Label */}
      {!dotOnly && (
        <span className="text-[11px] font-medium text-muted-foreground">
          {inactive ? "Pausado" : label}
        </span>
      )}

      {/* Botão refresh opcional */}
      {onRefresh && !inactive && (
        <button
          type="button"
          onClick={onRefresh}
          disabled={refreshing}
          className={cn(
            "rounded p-0.5 text-muted-foreground/60 transition-colors",
            "hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50",
            refreshing && "animate-spin text-muted-foreground/40"
          )}
          aria-label="Atualizar"
        >
          <RefreshCw className="size-3" />
        </button>
      )}
    </span>
  )
}
