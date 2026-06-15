"use client"

import type { ReactNode } from "react"
import { useIsDesktop } from "@/hooks/use-media-query"
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"

type Size = "default" | "regular" | "wide"

type ResponsiveSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Tamanho do Sheet no desktop (ignorado no mobile) */
  size?: Size
  /** Label de acessibilidade para o Drawer (sr-only) */
  accessibilityLabel?: string
  children: ReactNode
}

/**
 * Padrão responsivo: Sheet lateral no desktop, Drawer (bottom sheet) no mobile.
 *
 * No desktop: painel lateral que desliza da direita (Sheet).
 * No mobile: bottom sheet que sobe de baixo com drag-to-dismiss (Drawer/vaul).
 *
 * O conteúdo filho (children) é renderizado igual nos dois modos.
 * SheetHeader/SheetTitle/SheetDescription funcionam em ambos os contextos
 * porque são apenas divs estilizados (não dependem de provider específico).
 */
export function ResponsiveSheet({
  open,
  onOpenChange,
  size = "wide",
  accessibilityLabel = "Painel de conteúdo",
  children,
}: ResponsiveSheetProps) {
  const isDesktop = useIsDesktop()

  if (isDesktop) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="right"
          size={size === "default" ? "sm" : size}
          className="flex h-full w-full flex-col overflow-hidden"
        >
          {children}
        </SheetContent>
      </Sheet>
    )
  }

  // Mobile — Drawer (bottom sheet com vaul)
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        {/* Acessibilidade: vaul exige Title/Description no DOM */}
        <DrawerTitle className="sr-only">{accessibilityLabel}</DrawerTitle>
        <DrawerDescription className="sr-only">{accessibilityLabel}</DrawerDescription>
        <ScrollArea className="flex-1">
          <div className="px-2 pb-4">{children}</div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  )
}
