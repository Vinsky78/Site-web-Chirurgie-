import type { ReactNode } from "react";

const TONES = {
  neutral: "bg-accent-soft text-primary-strong",
  warning: "bg-warning-bg text-warning-ink",
  danger: "bg-danger-bg text-danger",
} as const;

export function Badge({ tone = "neutral", children }: { tone?: keyof typeof TONES; children: ReactNode }) {
  return <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${TONES[tone]}`}>{children}</span>;
}
