import type { CategoryId } from "@/content/types";

/** Pictogrammes abstraits et sobres par catégorie (décoratifs, masqués aux lecteurs d'écran). */
export function CategoryIcon({ category, className = "h-10 w-10" }: { category: CategoryId; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className} {...common}>
      {category === "face" && (
        <>
          <ellipse cx="24" cy="24" rx="12" ry="16" />
          <path d="M24 22c-1 3-1 6 1 7" />
          <path d="M17 20c2-1.5 4-1.5 5 0M26 20c1-1.5 3-1.5 5 0" />
          <path d="M19.5 33c3 2 6 2 9 0" />
        </>
      )}
      {category === "body" && (
        <>
          <circle cx="24" cy="9" r="4" />
          <path d="M17 18c3 3 11 3 14 0M17 18c-1 8 4 10 4 14l-2 10M31 18c1 8-4 10-4 14l2 10" />
        </>
      )}
      {category === "hair" && (
        <>
          <path d="M10 26c0-9 6-16 14-16s14 7 14 16" />
          <path d="M14 26v10M19 24v14M24 23v16M29 24v14M34 26v10" />
        </>
      )}
      {category === "injectables" && (
        <>
          <path d="M30 8l10 10M33 11L16 28l-3 8 8-3 17-17" />
          <path d="M14 34l-6 6M22 22l4 4" />
        </>
      )}
      {category === "breast" && (
        <>
          <path d="M6 24c0-8 6-13 12-13s11 5 11 13-5 12-11 12S6 32 6 24Z" />
          <path d="M19 24c0-8 5-13 11-13s12 5 12 13-6 12-12 12" />
        </>
      )}
    </svg>
  );
}
