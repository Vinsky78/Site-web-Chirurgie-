/**
 * Payload ajoute sur toutes les adresses `Critical-CH: Sec-CH-Prefers-Color-Scheme`
 * (thème clair ou sombre de son back-office). Chrome relance alors la première
 * navigation de chaque visiteur pour envoyer cet indice : une redirection
 * interne d'environ 600 ms sur mobile. On le réserve à /admin.
 */
const CLIENT_HINT_HEADERS = new Set(["Accept-CH", "Critical-CH"]);

export function scopeClientHints<T extends { source: string; headers: { key: string; value: string }[] }>(
  rules: T[],
): T[] {
  return rules.flatMap((rule) => {
    const hints = rule.headers.filter((header) => CLIENT_HINT_HEADERS.has(header.key));
    if (rule.source !== "/:path*" || hints.length === 0) return [rule];
    const others = rule.headers.filter(
      (header) => !CLIENT_HINT_HEADERS.has(header.key) && !(header.key === "Vary" && header.value === "Sec-CH-Prefers-Color-Scheme"),
    );
    const admin = { ...rule, source: "/admin/:path*" };
    return others.length > 0 ? [{ ...rule, headers: others }, admin] : [admin];
  });
}
