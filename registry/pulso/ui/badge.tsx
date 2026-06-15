import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,background-color,border-color,box-shadow] overflow-hidden leading-none font-semibold tracking-[-0.01em]",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-border/70 bg-background/72 text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        success:
          "border-[color:var(--delta-success-border)]/72 bg-[color:var(--delta-success-bg)] text-[color:var(--delta-success)]",
        warn:
          "border-[color:var(--delta-warn-border)]/72 bg-[color:var(--delta-warn-bg)] text-[color:var(--delta-warn)]",
        error:
          "border-[color:var(--delta-error-border)]/72 bg-[color:var(--delta-error-bg)] text-[color:var(--delta-error)]",
        info:
          "border-[color:var(--delta-info-border)]/72 bg-[color:var(--delta-info-bg)] text-[color:var(--delta-info)]",
        neutral:
          "border-[color:var(--delta-neutral-border)]/72 bg-[color:var(--delta-neutral-bg)] text-[color:var(--delta-neutral)]",
      },
      size: {
        sm: "min-h-5 px-2 py-0.5 text-[10px]",
        default: "min-h-6 px-2.5 py-1 text-[11px]",
        lg: "min-h-7 px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = (asChild ? Slot : "span") as React.ElementType

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
