import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-[calc(var(--radius-lg)-2px)] border border-white/35 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--muted)_78%,white)_0%,color-mix(in_oklab,var(--muted)_92%,white)_50%,color-mix(in_oklab,var(--muted)_78%,white)_100%)] dark:border-white/8 dark:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--muted)_82%,black)_0%,color-mix(in_oklab,var(--muted)_94%,black)_50%,color-mix(in_oklab,var(--muted)_82%,black)_100%)]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
