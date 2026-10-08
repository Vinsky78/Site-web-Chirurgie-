import { notFound } from "next/navigation";

/**
 * Adresse inconnue sous une locale : affiche la page 404 du site (avec en-tête,
 * pied de page et langue du document) plutôt que la 404 nue de Next.js.
 */
export default function CatchAll(): never {
  notFound();
}
