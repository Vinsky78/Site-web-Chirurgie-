import type { StoredContact } from "./repository";

/**
 * Synchronisation vers Google Sheets (suivi des demandes de contact).
 * Google Sheets n'est pas un hébergeur certifié HDS : seules les données de
 * contact et de suivi y partent. L'intervention envisagée et le message,
 * susceptibles de contenir des données de santé, restent dans le back-office.
 * Script et mise en place : docs/google-sheet/ et docs/workflow-contact.md.
 */

/** Colonnes envoyées, dans l'ordre du tableau. Toute autre donnée est interdite. */
export const SHEET_FIELDS = ["reference", "receivedAt", "subject", "firstName", "email", "phone", "channel", "slot", "locale", "page", "adminUrl"] as const;
export type SheetRow = Record<(typeof SHEET_FIELDS)[number], string>;

export function toSheetRow(contact: StoredContact, meta: { reference: string; receivedAt: Date; adminUrl: string }): SheetRow {
  return {
    reference: meta.reference,
    receivedAt: meta.receivedAt.toISOString(),
    subject: contact.subject,
    firstName: contact.firstName,
    email: contact.email,
    phone: contact.phone ?? "",
    channel: contact.channel,
    slot: contact.slot ?? "",
    locale: contact.locale,
    page: contact.page ?? "",
    adminUrl: meta.adminUrl,
  };
}

export interface SheetConfig {
  url?: string;
  token?: string;
}

export function sheetConfig(env: Record<string, string | undefined> = process.env): SheetConfig {
  return { url: env.CONTACT_SHEET_WEBHOOK_URL, token: env.CONTACT_SHEET_TOKEN };
}

/**
 * Envoie une ligne au script Google Apps Script (application web).
 * Sans configuration, ne fait rien. Un échec est journalisé sans contenu et
 * ne fait jamais échouer la demande : la référence de la demande enregistrée
 * dans le back-office permet de la retrouver.
 */
export async function pushToSheet(row: SheetRow, config: SheetConfig = sheetConfig(), fetcher: typeof fetch = fetch): Promise<"sent" | "skipped" | "failed"> {
  if (!config.url || !config.token) return "skipped";
  try {
    const response = await fetcher(config.url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ token: config.token, row }),
      redirect: "follow",
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (result.ok !== true) throw new Error(result.error ?? "réponse inattendue");
    return "sent";
  } catch (error) {
    console.error(`Synchronisation Google Sheets impossible (${row.reference}) :`, error instanceof Error ? error.message : "erreur inconnue");
    return "failed";
  }
}

/** Référence courte et lisible au téléphone, partagée par le back-office et le tableau (ex. C-7K3M9Q). */
export function newReference(random: () => number = Math.random): string {
  const alphabet = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 6; i++) code += alphabet[Math.floor(random() * alphabet.length)];
  return `C-${code}`;
}
