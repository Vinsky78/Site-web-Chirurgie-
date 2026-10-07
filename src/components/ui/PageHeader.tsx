import type { ReactNode } from "react";

/** Bandeau de tête de page sur fond sable. */
export function PageHeader({ eyebrow, title, lead, children }: { eyebrow?: ReactNode; title: string; lead?: string; children?: ReactNode }) {
  return (
    <div className="border-b border-border bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {eyebrow && <div className="text-sm font-semibold uppercase tracking-wider text-clay">{eyebrow}</div>}
        <h1 className="mt-2 max-w-3xl font-serif text-4xl font-semibold leading-tight text-primary-strong sm:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-lg text-muted">{lead}</p>}
        {children}
      </div>
    </div>
  );
}
