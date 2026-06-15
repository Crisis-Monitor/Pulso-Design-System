"use client"

import { useEffect, useState } from "react"

/**
 * Hook que escuta uma media query CSS e retorna true/false.
 * Usado para decidir layout responsivo no client (ex: Drawer vs Sheet).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])

  return matches
}

/** Atalho: retorna true quando a viewport é >= 768px (md do Tailwind) */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 768px)")
}
