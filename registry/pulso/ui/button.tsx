import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[calc(var(--radius-lg)-2px)] text-[13px] leading-none font-semibold tracking-[-0.01em] transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-150 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px] active:translate-y-px aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-[var(--shadow-lg)] hover:brightness-[0.98]",
        destructive:
          "bg-destructive text-white shadow-[var(--shadow-lg)] hover:bg-destructive/92 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-border bg-card text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/88",
        ghost:
          "text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        success:
          "border border-[color:var(--delta-success-border)]/72 bg-[color:var(--delta-success-bg)] text-[color:var(--delta-success)] hover:bg-[color:var(--delta-success-bg)]/82",
        warn:
          "border border-[color:var(--delta-warn-border)]/72 bg-[color:var(--delta-warn-bg)] text-[color:var(--delta-warn)] hover:bg-[color:var(--delta-warn-bg)]/84",
        error:
          "border border-[color:var(--delta-error-border)]/72 bg-[color:var(--delta-error-bg)] text-[color:var(--delta-error)] hover:bg-[color:var(--delta-error-bg)]/84",
        info:
          "border border-[color:var(--delta-info-border)]/72 bg-[color:var(--delta-info-bg)] text-[color:var(--delta-info)] hover:bg-[color:var(--delta-info-bg)]/84",
        neutral:
          "border border-[color:var(--delta-neutral-border)]/72 bg-[color:var(--delta-neutral-bg)] text-[color:var(--delta-neutral)] hover:bg-[color:var(--delta-neutral-bg)]/84",
      },
      size: {
        default: "h-[var(--control-h-default)] px-4 has-[>svg]:px-3.5",
        sm: "h-[var(--control-h-compact)] gap-1.5 px-3 text-[12px] has-[>svg]:px-2.5",
        lg: "h-[var(--control-h-prominent)] px-5 text-sm has-[>svg]:px-4",
        hero: "h-[var(--control-h-hero)] px-6 text-sm has-[>svg]:px-5",
        icon: "size-[var(--control-h-default)]",
        "icon-sm": "size-[var(--control-h-compact)]",
        "icon-lg": "size-[var(--control-h-prominent)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = (asChild ? Slot : "button") as React.ElementType

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
