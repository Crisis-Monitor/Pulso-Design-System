import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// Chip: componente para metadados e tags (keywords, fontes, identificadores)
// Diferente do Badge (semântico/status) — Chip é para rotulagem e filtragem
const chipVariants = cva(
  "inline-flex items-center gap-1 rounded-full border w-fit whitespace-nowrap shrink-0 transition-colors [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        // Padrão muted — usado para keywords e tags genéricas
        default:
          "border-border/50 bg-muted/40 text-foreground/80 hover:bg-muted/60 hover:text-foreground",
        // Brand — keywords ativas, itens selecionados
        brand:
          "border-[color:var(--brand-muted)] bg-[color:var(--brand-muted)] text-[color:var(--brand)] hover:bg-[color:color-mix(in_oklab,var(--brand)_15%,transparent)]",
        // Outline — filtros e opções disponíveis
        outline:
          "border-border/60 bg-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground",
        // Mono — identificadores técnicos: IDs, slugs, hashes, nomes de fonte
        mono:
          "border-border/45 bg-muted/30 font-mono text-[color:var(--foreground)] tracking-tight hover:bg-muted/50",
        // Ghost — label contextual sem destaque visual
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:bg-muted/20 hover:text-foreground",
      },
      size: {
        sm: "h-5 px-2 text-[10px] [&>svg]:size-2.5",
        default: "h-6 px-2.5 text-[11px] [&>svg]:size-3",
        lg: "h-7 px-3 text-xs [&>svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {
  // Ícone exibido à esquerda do label
  icon?: React.ReactNode
  // Se true, exibe botão X para remoção
  removable?: boolean
  onRemove?: () => void
  // Se true, o chip inteiro é clicável como botão
  asButton?: boolean
}

function Chip({
  className,
  variant,
  size,
  icon,
  removable,
  onRemove,
  asButton,
  children,
  onClick,
  ...props
}: ChipProps) {
  const Comp = asButton || onClick ? "button" : "span"

  return (
    <Comp
      data-slot="chip"
      className={cn(
        chipVariants({ variant, size }),
        (asButton || onClick) && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1",
        removable && "pr-1",
        className
      )}
      onClick={onClick}
      type={Comp === "button" ? "button" : undefined}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      {/* Ícone prefix opcional */}
      {icon && <span className="shrink-0 opacity-60">{icon}</span>}

      {/* Conteúdo principal */}
      <span className="font-medium leading-none">{children}</span>

      {/* Botão de remoção hover-reveal */}
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
          className={cn(
            "ml-0.5 rounded-full p-0.5 opacity-50 transition-opacity hover:opacity-100",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50"
          )}
          aria-label="Remover"
        >
          <X className="size-2.5" />
        </button>
      )}
    </Comp>
  )
}

export { Chip, chipVariants }
