"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { MegaMenu, type MenuGroup } from "@/components/MegaMenu";
import { buttonClasses } from "@/components/ui/button";
import type { Locale } from "@/i18n/routing";

interface Labels {
  main: string;
  interventions: string;
  allInterventions: string;
  surgeons: string;
  guides: string;
  howItWorks: string;
  search: string;
  searchLabel: string;
  request: string;
  menuOpen: string;
  menuClose: string;
  language: string;
  languages: Record<Locale, { short: string; long: string }>;
}

/**
 * Navigation principale : barre sur une ligne à partir de 1 024 px, menu
 * repliable en dessous. Le menu mobile se referme à chaque changement de page.
 */
export function HeaderNav({ labels, groups, locale, locales }: { labels: Labels; groups: MenuGroup[]; locale: Locale; locales: readonly Locale[] }) {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const link = "inline-flex min-h-11 items-center underline-offset-4 hover:text-primary hover:underline";

  return (
    <nav aria-label={labels.main} className="flex flex-1 items-center justify-end gap-3">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpenOn(open ? null : pathname)}
        className="inline-flex min-h-11 items-center gap-2 rounded-control border border-border px-3 text-label lg:hidden"
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        {open ? labels.menuClose : labels.menuOpen}
      </button>

      <div
        id="main-menu"
        className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] flex-col gap-1 overflow-y-auto overscroll-contain border-b border-border bg-surface px-4 pb-6 pt-2 shadow-float lg:static lg:max-h-none lg:overflow-visible lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-end lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        <ul className="flex flex-col gap-1 text-label lg:flex-row lg:items-center lg:gap-6">
          <MegaMenu label={labels.interventions} groups={groups} allLabel={labels.allInterventions} />
          <li>
            <Link href="/guides" className={link}>
              {labels.guides}
            </Link>
          </li>
          <li>
            <Link href="/chirurgiens" className={link}>
              {labels.surgeons}
            </Link>
          </li>
          <li>
            <Link href="/comment-ca-marche" className={link}>
              {labels.howItWorks}
            </Link>
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4 lg:mt-0 lg:border-0 lg:pt-0">
          <Link href="/recherche" aria-label={labels.searchLabel} className={`${link} gap-2`}>
            <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="M13 13l4 4" />
            </svg>
            <span className="lg:sr-only">{labels.search}</span>
          </Link>
          <ul aria-label={labels.language} className="flex items-center gap-1 text-small">
            {locales.map((l, i) => (
              <li key={l} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true" className="text-border-input">|</span>}
                <Link
                  href="/"
                  locale={l}
                  hrefLang={l}
                  lang={l}
                  aria-label={labels.languages[l].long}
                  aria-current={l === locale ? "true" : undefined}
                  className={`inline-flex min-h-11 min-w-8 items-center justify-center ${l === locale ? "font-semibold text-primary-strong" : "text-muted hover:text-primary"}`}
                >
                  {labels.languages[l].short}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/demande" className={buttonClasses("primary", "w-full lg:w-auto")}>
            {labels.request}
          </Link>
        </div>
      </div>
    </nav>
  );
}
