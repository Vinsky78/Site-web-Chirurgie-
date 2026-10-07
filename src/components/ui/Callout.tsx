import type { ReactNode } from "react";

/**
 * Encadré d'information. Le ton n'est jamais porté par la couleur seule
 * (WCAG 1.4.1) : le titre ou le texte dit de quoi il s'agit.
 */
export type CalloutTone = "info" | "warning" | "danger" | "success";

const TONES: Record<CalloutTone, string> = {
  info: "border-primary bg-accent-soft",
  warning: "border-warning-ink bg-warning-bg text-warning-ink",
  danger: "border-danger bg-surface",
  success: "border-success bg-surface",
};

export function Callout({
  tone = "info",
  title,
  titleId,
  as: Tag = "div",
  className,
  children,
}: {
  tone?: CalloutTone;
  title?: ReactNode;
  /** Identifiant du titre, pour un aria-labelledby sur une région. */
  titleId?: string;
  as?: "div" | "aside" | "section";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      aria-labelledby={Tag !== "div" && titleId ? titleId : undefined}
      className={["rounded-card border-l-4 p-6", TONES[tone], className].filter(Boolean).join(" ")}
    >
      {title && (
        <h2 id={titleId} className="text-h3">
          {title}
        </h2>
      )}
      <div className={title ? "mt-3" : undefined}>{children}</div>
    </Tag>
  );
}
