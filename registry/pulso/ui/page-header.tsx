import type { ReactNode } from "react";
import { Fragment } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type BreadcrumbEntry = { label: string; href?: string };

type PageHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
  /** Breadcrumbs de navegação acima do título */
  breadcrumbs?: BreadcrumbEntry[];
  className?: string;
  dividerClassName?: string;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  breadcrumbs,
  className,
  dividerClassName,
}: PageHeaderProps) {
  return (
    <header className={cn("space-y-3 pb-2", dividerClassName, className)}>
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, idx) => (
              <Fragment key={item.label}>
                {idx > 0 ? <BreadcrumbSeparator /> : null}
                <BreadcrumbItem>
                  {idx < breadcrumbs.length - 1 && item.href ? (
                    <BreadcrumbLink asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      ) : null}

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 space-y-1.5">
          {eyebrow ? (
            <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-[2rem]">{title}</h1>
          {description ? (
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}
