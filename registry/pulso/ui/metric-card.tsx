import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: ReactNode;
  value: ReactNode;
  meta?: ReactNode;
  icon?: ReactNode;
  align?: "left" | "center";
  tone?: "neutral" | "blue" | "violet" | "rose" | "amber" | "emerald";
  chip?: ReactNode;
  delta?: ReactNode;
  sparkBars?: number[];
  /** Barra de progresso horizontal (0–100). Tem precedência sobre sparkBars quando fornecida. */
  progressBar?: number;
  variant?: "default" | "compact" | "dense" | "status";
  surface?: "grouped" | "isolated";
  className?: string;
  contentClassName?: string;
};

export function MetricCard({
  label,
  value,
  meta,
  icon,
  align = "left",
  tone = "neutral",
  chip,
  delta,
  sparkBars,
  progressBar,
  variant = "default",
  surface = "grouped",
  className,
  contentClassName,
}: MetricCardProps) {
  const centered = align === "center";
  const isStatus = variant === "status";
  const hasProgress = progressBar !== undefined;
  const hasSpark = !hasProgress && !isStatus && Boolean(sparkBars && sparkBars.length > 0);
  const hasBottomSlot = hasProgress || hasSpark;

    // Cor da barra de progresso baseada em percentual de risco
    // Thresholds canônicos do Pulso: stable ≤25, monitor 26–45, attention 46–65, high 66–80, critical ≥81
    const progressColor = hasProgress
      ? progressBar >= 81
        ? "var(--risk-critical-text)"
        : progressBar >= 66
          ? "var(--risk-high-text)"
          : progressBar >= 46
            ? "var(--risk-attention-text)"
            : progressBar >= 26
              ? "var(--risk-monitor-text)"
              : "var(--risk-stable-text)"
      : undefined;
  const compact = variant === "compact" || variant === "dense";
  const dense = variant === "dense";
  const isolated = surface === "isolated";

  const iconAccentClasses: Record<NonNullable<MetricCardProps["tone"]>, string> = {
    neutral: "border-[color:color-mix(in_oklab,var(--metric-neutral-border)_78%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-neutral-bg)_72%,var(--card))] text-[color:var(--metric-neutral-spark)]",
    blue: "border-[color:color-mix(in_oklab,var(--metric-blue-border)_78%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-blue-bg)_78%,var(--card))] text-[color:var(--metric-blue-spark)]",
    violet: "border-[color:color-mix(in_oklab,var(--metric-violet-border)_78%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-violet-bg)_78%,var(--card))] text-[color:var(--metric-violet-spark)]",
    rose: "border-[color:color-mix(in_oklab,var(--metric-rose-border)_78%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-rose-bg)_78%,var(--card))] text-[color:var(--metric-rose-spark)]",
    amber: "border-[color:color-mix(in_oklab,var(--metric-amber-border)_78%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-amber-bg)_78%,var(--card))] text-[color:var(--metric-amber-spark)]",
    emerald: "border-[color:color-mix(in_oklab,var(--metric-emerald-border)_78%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-emerald-bg)_78%,var(--card))] text-[color:var(--metric-emerald-spark)]",
  };

  const chipAccentClasses: Record<NonNullable<MetricCardProps["tone"]>, string> = {
    neutral: "border-[color:color-mix(in_oklab,var(--metric-neutral-border)_68%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-neutral-bg)_58%,var(--background))]",
    blue: "border-[color:color-mix(in_oklab,var(--metric-blue-border)_68%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-blue-bg)_62%,var(--background))]",
    violet: "border-[color:color-mix(in_oklab,var(--metric-violet-border)_68%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-violet-bg)_62%,var(--background))]",
    rose: "border-[color:color-mix(in_oklab,var(--metric-rose-border)_68%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-rose-bg)_62%,var(--background))]",
    amber: "border-[color:color-mix(in_oklab,var(--metric-amber-border)_68%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-amber-bg)_62%,var(--background))]",
    emerald: "border-[color:color-mix(in_oklab,var(--metric-emerald-border)_68%,transparent)] bg-[color:color-mix(in_oklab,var(--metric-emerald-bg)_62%,var(--background))]",
  };

  const sparkColor: Record<NonNullable<MetricCardProps["tone"]>, string> = {
    neutral: "bg-[color:var(--metric-neutral-spark)]",
    blue: "bg-[color:var(--metric-blue-spark)]",
    violet: "bg-[color:var(--metric-violet-spark)]",
    rose: "bg-[color:var(--metric-rose-spark)]",
    amber: "bg-[color:var(--metric-amber-spark)]",
    emerald: "bg-[color:var(--metric-emerald-spark)]",
  };

  return (
    <Card
      className={cn(
        "overflow-hidden border-none py-0 shadow-none",
        isolated
          ? "rounded-[calc(var(--radius-xl)-0.18rem)] bg-card/96"
          : "rounded-[calc(var(--radius-xl)-0.22rem)] bg-[color:color-mix(in_oklab,var(--card)_96%,var(--brand-muted))]",
        className
      )}
    >
      <CardContent
        className={cn(
          "flex h-full flex-col",
          isStatus
            ? hasBottomSlot
              ? "min-h-[88px] px-4 py-3"
              : "min-h-[68px] px-4 py-3"
            : hasBottomSlot
              ? dense
                ? isolated
                  ? "min-h-[84px] p-2.5"
                  : "min-h-[80px] px-3 py-2"
                : compact
                  ? isolated
                    ? "min-h-[108px] p-3.5"
                    : "min-h-[104px] px-4 py-3.5"
                  : isolated
                    ? "min-h-[124px] p-[18px]"
                    : "min-h-[118px] px-4 py-4"
              : dense
                ? isolated
                  ? "min-h-[72px] p-2.5"
                  : "min-h-[68px] px-3 py-2"
                : compact
                  ? isolated
                    ? "min-h-[96px] p-3.5"
                    : "min-h-[92px] px-4 py-3.5"
                  : isolated
                    ? "min-h-[108px] p-[18px]"
                    : "min-h-[104px] px-4 py-4",
          centered ? "text-center" : "text-left",
          contentClassName
        )}
      >
        <div className="flex min-h-5 items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            {icon ? (
              <span
                className={cn(
                  "inline-flex shrink-0 items-center justify-center",
                  isolated || isStatus
                    ? cn("h-7 w-7 rounded-[calc(var(--radius-lg)-0.2rem)] border", iconAccentClasses[tone])
                    : "h-4 w-4 rounded-none border-none bg-transparent text-muted-foreground"
                )}
              >
                {icon}
              </span>
            ) : null}
            <div className="leading-tight text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
          </div>
          {chip ? (
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground",
                isolated
                  ? cn("border", chipAccentClasses[tone])
                  : "border-none bg-background/72"
              )}
            >
              {chip}
            </span>
          ) : null}
        </div>
        <div
          className={cn(
            "font-semibold text-foreground",
            isStatus
              ? "mt-2 text-lg leading-snug tracking-normal"
              : cn(
                  "leading-none tracking-[-0.04em]",
                  dense ? "mt-1.5 text-[1.6rem]" : compact ? "mt-2 text-[2rem]" : isolated ? "mt-2 text-[2.6rem]" : "mt-3 text-[2.45rem]"
                )
          )}
        >
          {value}
        </div>
        <div className={cn("mt-2 flex min-h-[18px] items-center justify-between gap-2", centered ? "justify-center" : "")}>
          {meta ? <div className="text-[11px] leading-4 text-muted-foreground">{meta}</div> : <span />}
          {!hasBottomSlot && delta ? <div className="text-[11px]">{delta}</div> : null}
        </div>
        {hasProgress ? (
          <div className="mt-3 space-y-1">
            <div className="h-1.5 w-full rounded-full bg-muted/30 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, progressBar!))}%`, backgroundColor: progressColor }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-muted-foreground/40">0%</span>
              {delta ? <div className="text-[11px]">{delta}</div> : null}
              <span className="text-[9px] text-muted-foreground/40">100%</span>
            </div>
          </div>
        ) : hasSpark ? (
          <div className={cn("mt-2 flex items-end justify-between gap-2", centered ? "justify-center" : "")}>
            <div className="flex items-end gap-1.5">
              {sparkBars!.map((v, idx) => (
                <span
                  key={`${idx}-${v}`}
                  className={cn("w-1.5 rounded-full opacity-90", sparkColor[tone])}
                  style={{ height: `${Math.max(8, Math.min(22, v))}px` }}
                />
              ))}
            </div>
            {delta ? <div className="text-[11px]">{delta}</div> : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
