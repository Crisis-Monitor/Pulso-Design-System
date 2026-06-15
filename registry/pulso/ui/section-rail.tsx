import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionRailProps = {
  title?: ReactNode;
  kicker?: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  sticky?: boolean;
  className?: string;
};

export function SectionRail({
  title,
  kicker,
  meta,
  icon,
  children,
  footer,
  sticky = false,
  className,
}: SectionRailProps) {
  return (
    <aside className={cn("space-y-4", sticky ? "xl:sticky xl:top-6 xl:self-start" : "", className)}>
      <section className="rounded-[calc(var(--radius-xl)-0.08rem)] border border-border/35 bg-card p-5 shadow-[var(--shadow-lg)]">
        {title ? (
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 space-y-1.5">
                {kicker ? (
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {kicker}
                  </div>
                ) : null}
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  {icon}
                  {title}
                </div>
              </div>
              {meta ? (
                <div className="shrink-0 rounded-full bg-muted/35 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {meta}
                </div>
              ) : null}
            </div>
            <div className="border-t border-border/45" />
          </div>
        ) : null}
        <div className={title ? "mt-4" : ""}>{children}</div>
        {footer ? <div className="mt-4 text-xs text-muted-foreground">{footer}</div> : null}
      </section>
    </aside>
  );
}
