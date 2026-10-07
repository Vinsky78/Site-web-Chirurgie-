import { revalidatePath } from "next/cache";

/**
 * Régénère les pages publiques après une modification dans le CMS. Ignoré
 * hors serveur Next.js (scripts d'amorçage, migrations) ou quand l'appelant le
 * demande (`context.disableRevalidate`).
 */
function revalidateSite(context: Record<string, unknown>): void {
  if (context.disableRevalidate) return;
  try {
    revalidatePath("/[locale]", "layout");
    revalidatePath("/sitemap.xml");
  } catch {
    // Pas de contexte Next.js (script) : rien à régénérer.
  }
}

export const revalidateInterventions = revalidateSite;
export const revalidateDirectory = revalidateSite;
