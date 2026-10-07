"use client";

import { useState } from "react";

/** Bandeau d'annonce fermable, au-dessus de l'en-tête. */
export function AnnouncementBar({ text, closeLabel }: { text: string; closeLabel: string }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-primary-strong text-sm text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <p>{text}</p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={closeLabel}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-white/15"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  );
}
