import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

/**
 * Transmet aux composants client les seuls textes dont ils ont besoin. La mise
 * en page n'en transmet aucun : sinon tout le fichier de traductions serait
 * sérialisé dans chaque page (environ 25 Ko de plus à télécharger sur mobile).
 */
export async function ClientMessages({ namespaces, children }: { namespaces: string[]; children: ReactNode }) {
  const messages = await getMessages();
  const picked = Object.fromEntries(namespaces.filter((key) => key in messages).map((key) => [key, messages[key]]));
  return <NextIntlClientProvider messages={picked}>{children}</NextIntlClientProvider>;
}
