/**
 * Logo Éclaira : un arc qui s'éclaire au-dessus d'un horizon (« éclairer sa
 * décision ») et le nom en Source Serif. Voir docs/charte-graphique.md.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <rect width="32" height="32" rx="8" fill="var(--color-primary-strong)" />
      <path d="M7 21a9 9 0 0 1 18 0" fill="none" stroke="var(--color-primary-soft)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="16" cy="12" r="2.6" fill="var(--color-clay)" />
      <path d="M6 24h20" stroke="var(--color-primary-soft)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="font-serif text-h3 text-primary-strong">{name}</span>
    </span>
  );
}
