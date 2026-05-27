'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function normalizePath(path: string | null): string {
  if (!path) return '/';
  return path.replace(/\/$/, '') || '/';
}

function containsCurrentRoute(item: Element, pathname: string): boolean {
  return Array.from(item.querySelectorAll<HTMLAnchorElement>('a[href]')).some((link) => {
    return normalizePath(link.getAttribute('href')) === pathname;
  });
}

export function SidebarCollapseActive() {
  const pathname = normalizePath(usePathname());

  useEffect(() => {
    const collapseInactiveGroups = () => {
      for (const sidebar of document.querySelectorAll('aside.nextra-sidebar')) {
        for (const item of sidebar.querySelectorAll<HTMLLIElement>('li.open')) {
          if (containsCurrentRoute(item, pathname)) continue;

          item.querySelector<HTMLButtonElement>(':scope > button')?.click();
        }
      }
    };

    const frame = window.requestAnimationFrame(collapseInactiveGroups);
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
