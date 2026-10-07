import type { ReactNode } from "react";

const TONES = {
  info: "border-info-ink bg-info-bg text-info-ink",
  warning: "border-warning-ink bg-warning-bg text-warning-ink",
  danger: "border-danger bg-danger-bg text-danger",
} as const;

/** Message d'état. Les erreurs sont annoncées aux lecteurs d'écran (role="alert"). */
export function Alert({ tone = "info", title, children }: { tone?: keyof typeof TONES; title?: string; children: ReactNode }) {
  return (
    <div role={tone === "danger" ? "alert" : "note"} className={`rounded-control border-l-4 p-4 ${TONES[tone]}`}>
      {title && <p className="font-semibold">{title}</p>}
      <div>{children}</div>
    </div>
  );
}
