/**
 * Styles des boutons, partagés par <button> et par les liens d'action (<Link>).
 * Hauteur minimale 44 px : cible tactile confortable (WCAG 2.5.8 exige 24 px).
 */
export type ButtonVariant = "primary" | "secondary";

const BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-5 text-label disabled:cursor-not-allowed disabled:opacity-70";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-strong",
  secondary: "border border-primary bg-surface text-primary hover:bg-accent-soft",
};

export function buttonClasses(variant: ButtonVariant = "primary", extra?: string): string {
  return [BASE, VARIANTS[variant], extra].filter(Boolean).join(" ");
}
