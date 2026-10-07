"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { MegaMenu, type MenuGroup } from "@/components/MegaMenu";
import { buttonClasses } from "@/components/ui/Button";

interface Props {
  labels: { interventions: string; surgeons: string; request: string; main: string; open: string; close: string; all: string };
  groups: MenuGroup[];
}

/** Navigation principale : barre horizontale sur grand écran, menu repliable sur mobile. */
export function MainNav({ labels, groups }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label={labels.main} className="flex flex-col md:flex-row md:items-center">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen((v) => !v)}
        className="absolute right-4 top-3 inline-flex min-h-11 items-center gap-2 rounded-control border border-border px-3 text-sm font-medium md:hidden"
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        {open ? labels.close : labels.open}
      </button>
      <ul
        id="main-menu"
        className={`${open ? "flex" : "hidden"} flex-col gap-3 pb-4 pt-2 text-sm md:flex md:flex-row md:items-center md:gap-x-6 md:p-0`}
      >
        <MegaMenu label={labels.interventions} groups={groups} allLabel={labels.all} allHref="/interventions" />
        <li>
          <Link href="/chirurgiens" className="inline-flex min-h-11 items-center font-medium hover:text-primary">
            {labels.surgeons}
          </Link>
        </li>
        <li>
          <Link href="/demande" className={`${buttonClasses()} w-full md:w-auto`}>
            {labels.request}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
