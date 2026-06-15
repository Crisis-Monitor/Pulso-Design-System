import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type DeltaTone = "success" | "warn" | "error" | "info" | "neutral";

type DeltaChipProps = {
  tone: DeltaTone;
  children: ReactNode;
  className?: string;
};

export function DeltaChip({ tone, children, className }: DeltaChipProps) {
  return (
    <Badge
      variant={tone}
      className={cn("gap-1 px-2 py-0.5 text-[11px] font-medium", className)}
    >
      {children}
    </Badge>
  );
}
