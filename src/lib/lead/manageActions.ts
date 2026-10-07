"use server";

import { isLocale, type Locale } from "@/i18n/routing";
import { getDb } from "@/db/client";
import { getEmailSender, sendSafely } from "@/lib/email";
import { surgeonWithdrawnEmail } from "@/lib/email/templates";
import { proEmailsForSurgeons } from "@/lib/pro/recipients";
import { absoluteUrl } from "@/lib/seo";
import { deleteByToken } from "./manage";

export type DeleteState = { deleted?: boolean; error?: boolean };

/** Suppression demandée par le patient ; les chirurgiens destinataires en sont prévenus, sans détail. */
export async function deleteRequestAction(_prev: DeleteState, form: FormData): Promise<DeleteState> {
  if (form.get("confirm") !== "yes") return { error: true };
  let db: ReturnType<typeof getDb>;
  let result: Awaited<ReturnType<typeof deleteByToken>>;
  try {
    db = getDb();
    result = await deleteByToken(db, String(form.get("token") ?? ""));
  } catch (error) {
    console.error("Suppression de demande impossible :", error instanceof Error ? error.message : "erreur inconnue");
    return { error: true };
  }
  if (!result) return { error: true };

  const locale: Locale = isLocale(result.locale) ? result.locale : "fr";
  const sender = getEmailSender();
  const emails = await proEmailsForSurgeons(db, result.surgeonSlugs).catch(() => []);
  await Promise.all(
    emails.map((email) => sendSafely(sender, surgeonWithdrawnEmail(locale, { email, proUrl: absoluteUrl(locale, "/pro") }))),
  );
  return { deleted: true };
}
