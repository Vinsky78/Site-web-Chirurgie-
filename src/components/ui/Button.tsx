import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "btn-fx btn-fx-primary bg-primary text-white",
  secondary: "btn-fx border border-primary bg-surface text-primary hover:bg-accent-soft",
  ghost: "btn-fx text-primary hover:bg-accent-soft",
};

/** Classes d'un bouton, utilisables aussi sur un lien. Cible tactile minimale de 44 px (WCAG 2.5.8). */
export function buttonClasses(variant: ButtonVariant = "primary"): string {
  return `inline-flex min-h-11 items-center justify-center rounded-control px-4 font-medium disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]}`;
}

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return <button type={type} className={`${buttonClasses(variant)} ${className}`.trim()} {...props} />;
}
