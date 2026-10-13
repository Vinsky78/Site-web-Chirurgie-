import type { CategoryId } from "@/content/types";

/** Pictogrammes au trait (1,6 px), décoratifs. Voir la charte : iconographie. */
export function CategoryIcon({ category, className = "h-6 w-6" }: { category: CategoryId; className?: string }) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} {...stroke}>
      {category === "face" && (
        <>
          <ellipse cx="12" cy="12" rx="6.5" ry="8.5" />
          <path d="M12 11c-.6 1.6-.6 3 .5 3.6M9.5 16.5c1.6 1 3.4 1 5 0" />
        </>
      )}
      {category === "body" && (
        <>
          <circle cx="12" cy="4.5" r="2" />
          <path d="M8.5 9c1.6 1.5 5.4 1.5 7 0M8.5 9c-.5 4 2 5 2 7l-1 5M15.5 9c.5 4-2 5-2 7l1 5" />
        </>
      )}
      {category === "breast" && (
        <>
          <path d="M3 12c0-4 3-6.5 6-6.5s5.5 2.5 5.5 6.5S12 18 9 18s-6-2-6-6Z" />
          <path d="M9.5 12c0-4 2.5-6.5 5.5-6.5S21 8 21 12s-3 6-6 6" />
        </>
      )}
    </svg>
  );
}
