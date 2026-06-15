"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export type AvatarGroupMember = {
  id: string
  name: string | null
  /** Papel no monitoramento ou na org */
  role: "owner" | "decisor" | "membro" | "admin"
  /** Número de itens pendentes para exibir como badge */
  pendingCount?: number
}

const ROLE_LABELS: Record<AvatarGroupMember["role"], string> = {
  owner: "Owner",
  decisor: "Decisor",
  membro: "Membro",
  admin: "Admin",
}

// Cor do anel por papel — destaca owner e decisor visivelmente
const ROLE_RING_CLASS: Record<AvatarGroupMember["role"], string> = {
  owner: "ring-[color:var(--brand)] ring-offset-background",
  decisor: "ring-[color:var(--risk-high-text)] ring-offset-background",
  admin: "ring-[color:var(--risk-attention-text)] ring-offset-background",
  membro: "ring-border ring-offset-background",
}

function buildInitials(name: string | null): string {
  if (!name?.trim()) return "?"
  const parts = name.trim().replace(/[@._-]+/g, " ").split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase()
}

export function AvatarGroup({
  members,
  max = 5,
  sectionLabel,
  showLabel = false,
  compact = false,
}: {
  members: AvatarGroupMember[]
  max?: number
  sectionLabel?: string
  showLabel?: boolean
  /** Tamanho menor (h-6 w-6) para uso em tabelas e contextos densos */
  compact?: boolean
}) {
  const visible = members.slice(0, max)
  const overflow = members.length - max

  const sizeClass = compact ? "h-6 w-6" : "h-9 w-9"
  const overlapPx = compact ? "-6px" : "-10px"
  const textClass = compact ? "text-[9px]" : "text-[11px]"
  const badgeSizeClass = compact ? "h-3 w-3 text-[7px]" : "h-4 w-4 text-[9px]"

  return (
    <div className="flex flex-col gap-1.5">
      {showLabel && sectionLabel && (
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {sectionLabel}
        </div>
      )}

      <div className="flex items-center">
        {visible.map((member, index) => (
          <Tooltip key={member.id}>
            <TooltipTrigger asChild>
              <div
                className="relative"
                style={{
                  marginLeft: index === 0 ? 0 : overlapPx,
                  zIndex: visible.length - index,
                }}
              >
                {/* Avatar com anel colorido por papel */}
                <div
                  className={`relative ${sizeClass} cursor-default rounded-full ring-2 ring-offset-1 transition-transform duration-150 hover:scale-110 ${ROLE_RING_CLASS[member.role]}`}
                >
                  <Avatar className="h-full w-full">
                    <AvatarFallback className={`bg-[color:color-mix(in_oklab,var(--background)_88%,var(--brand-muted))] ${textClass} font-semibold text-foreground`}>
                      {buildInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>

                  {/* Badge de pendências */}
                  {member.pendingCount && member.pendingCount > 0 ? (
                    <span className={`absolute -right-0.5 -top-0.5 flex ${badgeSizeClass} items-center justify-center rounded-full bg-[color:var(--risk-high-text)] font-bold leading-none text-white ring-1 ring-background`}>
                      {member.pendingCount > 9 ? "9+" : member.pendingCount}
                    </span>
                  ) : null}
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-center">
              <div className="text-xs font-semibold">{member.name ?? "Sem nome"}</div>
              <div className="text-[10px] text-muted-foreground">{ROLE_LABELS[member.role]}</div>
            </TooltipContent>
          </Tooltip>
        ))}

        {/* Overflow +N quando time é grande */}
        {overflow > 0 && (
          <div
            className={`relative flex ${sizeClass} cursor-default items-center justify-center rounded-full bg-muted ${textClass} font-semibold text-muted-foreground ring-2 ring-border ring-offset-1 ring-offset-background`}
            style={{ marginLeft: overlapPx }}
            title={`+${overflow} pessoa${overflow > 1 ? "s" : ""} no time`}
          >
            +{overflow}
          </div>
        )}
      </div>
    </div>
  )
}
