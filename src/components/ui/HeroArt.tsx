/** Illustration décorative d'accueil : formes douces et arcs, sans visage ni corps. */
export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" aria-hidden="true" focusable="false" className={className}>
      <defs><clipPath id="hero-clip"><circle cx="260" cy="230" r="190" /></clipPath></defs>
      <circle cx="260" cy="230" r="190" fill="var(--color-primary-soft)" />
      <circle className="float-slow-reverse" cx="320" cy="170" r="120" fill="var(--color-sand)" />
      <g clipPath="url(#hero-clip)">
      <path d="M60 360C150 250 240 230 330 270s110 70 130 150H60Z" fill="var(--color-primary)" opacity="0.92" />
      </g>
      <path d="M60 400C140 300 250 300 340 340" stroke="var(--color-surface)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      <circle className="float-slow" cx="380" cy="110" r="26" fill="var(--color-clay)" opacity="0.85" />
      <circle className="float-slow-reverse" cx="120" cy="150" r="10" fill="var(--color-primary)" opacity="0.5" />
      <circle className="float-slow" cx="430" cy="300" r="7" fill="var(--color-clay)" opacity="0.6" />
      <path d="M150 90c30-30 80-30 110-5" stroke="var(--color-primary)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
