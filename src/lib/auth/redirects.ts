/**
 * Destination après connexion. Seules des adresses internes connues sont
 * acceptées, pour éviter qu'un lien piégé renvoie vers un autre site.
 */
export function safeNext(next: unknown): "/admin" | undefined {
  if (typeof next !== "string") return undefined;
  return next === "/admin" || next.startsWith("/admin/") ? "/admin" : undefined;
}
