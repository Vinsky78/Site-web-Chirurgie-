"use client";

import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export interface MenuGroup {
  id: string;
  label: string;
  items: { id: string; title: string; slug: string }[];
}

/**
 * Menu déroulant « Interventions » : une colonne par domaine. Se ferme avec
 * Échap, par un clic à l'extérieur et à chaque changement de page.
 */
export function MegaMenu({ label, groups, allLabel }: { label: string; groups: MenuGroup[]; allLabel: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const [openedOn, setOpenedOn] = useState(pathname);

  // Fermeture au changement de page (pas d'effet : on compare la page d'ouverture).
  const visible = open && openedOn === pathname;

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => root.current && !root.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [visible]);

  return (
    <li ref={root}>
      <button
        type="button"
        aria-expanded={visible}
        aria-controls="mega-menu"
        onClick={() => {
          setOpenedOn(pathname);
          setOpen(!visible);
        }}
        className="inline-flex min-h-11 items-center gap-1 underline-offset-4 hover:underline"
      >
        {label}
        <span aria-hidden="true" className="text-xs">
          {visible ? "▴" : "▾"}
        </span>
      </button>
      {visible && (
        <div id="mega-menu" className="absolute inset-x-0 top-full z-40 border-b border-border bg-surface shadow-lg">
          <div className="mx-auto max-w-page px-4 py-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {groups.map((group) => (
                <div key={group.id}>
                  <p className="font-serif text-h3 text-primary-strong">{group.label}</p>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={{ pathname: "/interventions/[slug]", params: { slug: item.slug } }}
                          className="text-muted underline-offset-4 hover:text-primary hover:underline"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6">
              <Link href="/interventions" className="font-medium text-primary underline underline-offset-4">
                {allLabel} →
              </Link>
            </p>
          </div>
        </div>
      )}
    </li>
  );
}
