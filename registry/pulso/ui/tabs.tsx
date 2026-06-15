"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & { variant?: "default" | "underline" }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        variant === "underline"
          ? "inline-flex h-auto w-fit items-center justify-center gap-1 border-b border-border/70 p-0"
          : "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  variant = "default",
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & { variant?: "default" | "underline" }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        variant === "underline"
          ? "inline-flex h-10 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-t-[calc(var(--radius-lg)-0.25rem)] border-b-[3px] border-transparent px-3.5 py-1 text-sm tracking-[0.01em] text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-[color:var(--brand)] data-[state=active]:font-semibold data-[state=active]:text-[color:var(--brand)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          : "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 outline-none will-change-[opacity,transform] data-[state=active]:animate-in data-[state=active]:duration-200 data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-1 data-[state=inactive]:animate-out data-[state=inactive]:duration-150 data-[state=inactive]:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
