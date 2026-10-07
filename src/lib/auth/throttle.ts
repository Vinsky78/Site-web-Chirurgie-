/**
 * Limite les tentatives de connexion par adresse e-mail : après 5 échecs,
 * blocage 15 minutes (même règle que le back-office). En mémoire, donc par
 * conteneur : suffisant avec une seule instance applicative (Phase 4) ; à
 * déplacer dans PostgreSQL si l'application passe sur plusieurs instances.
 * Le code de double authentification a son propre verrouillage (Better Auth).
 */
export const MAX_FAILURES = 5;
export const LOCK_MS = 15 * 60 * 1000;

export class LoginThrottle {
  private readonly failures = new Map<string, { count: number; first: number }>();

  constructor(private readonly now: () => number = Date.now) {}

  isLocked(key: string): boolean {
    const entry = this.current(key);
    return entry !== undefined && entry.count >= MAX_FAILURES;
  }

  fail(key: string): void {
    const entry = this.current(key);
    this.failures.set(key, entry ? { ...entry, count: entry.count + 1 } : { count: 1, first: this.now() });
  }

  succeed(key: string): void {
    this.failures.delete(key);
  }

  private current(key: string) {
    const entry = this.failures.get(key);
    if (entry && this.now() - entry.first > LOCK_MS) {
      this.failures.delete(key);
      return undefined;
    }
    return entry;
  }
}
