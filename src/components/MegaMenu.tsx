"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import type { CategoryId } from "@/content/types";

export interface MenuGroup {
  id: CategoryId;
  label: string;
  href: string;
  items: { title: string; href: string }[];
}

/** Menu déroulant « Interventions » : cartes par domaine, fermé par Échap ou un clic à l'extérieur. */
export function MegaMenu({ label, groups, allLabel, allHref }: { label: string; groups: MenuGroup[]; allLabel: string; allHref: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => root.current && !root.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <li ref={root} className="md:static">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mega-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 items-center gap-1 font-medium hover:text-primary"
      >
        {label}
        <span aria-hidden="true" className={`text-xs transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <div id="mega-menu" className="z-40 bg-surface md:absolute md:inset-x-0 md:top-full md:border-b md:border-border md:shadow-lg">
          <div className="mx-auto max-w-6xl py-3 md:px-4 md:py-6">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {groups.map((g) => (
                <li key={g.id} className="rounded-card border border-border p-4">
                  <Link href={g.href} onClick={() => setOpen(false)} className="flex items-center gap-2 font-semibold text-primary-strong hover:underline">
                    <CategoryIcon category={g.id} className="h-6 w-6 text-primary" />
                    {g.label}
                  </Link>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {g.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setOpen(false)} className="text-muted underline-offset-4 hover:text-primary hover:underline">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link href={allHref} onClick={() => setOpen(false)} className="font-medium text-primary underline underline-offset-4">
                {allLabel} →
              </Link>
            </p>
          </div>
        </div>
      )}
    </li>
  );
}
