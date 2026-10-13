"use server";

import { after } from "next/server";
import { getLocale } from "next-intl/server";
import { isLocale } from "@/i18n/routing";
import { getEmailSender, sendSafely } from "@/lib/email";
import { contactConfirmationEmail, contactTeamEmail } from "@/lib/email/templates";
import { SITE_URL } from "@/lib/site";
import { getContactRepository, type StoredContact } from "./repository";
import { pushToSheet, toSheetRow } from "./sheet";
import { contactFromFormData, type ContactInput } from "./schema";
import { submitContact, type ContactResult } from "./submit";

export type ContactState = ContactResult & {
  /** Valeurs saisies, renvoyées pour regarnir le formulaire après une erreur. */
  values?: Partial<Record<keyof ContactInput, unknown>>;
};

export async function submitContactAction(_previous: ContactState | null, form: FormData): Promise<ContactState> {
  const locale = await getLocale();
  const raw = contactFromFormData(form);
  const result = await submitContact(raw, locale, {
    repository: getContactRepository(),
    // Les e-mails partent après la réponse : la personne n'attend pas Brevo.
    // Après la réponse : e-mails et ligne de suivi dans Google Sheets.
    onSaved: async (contact) =>
      after(async () => {
        await Promise.all([sendContactEmails(contact), syncToSheet(contact)]);
      }),
  });
  return result.ok ? result : { ...result, values: { ...raw, website: "", startedAt: undefined } };
}

/** Ni le message ni l'intervention ne partent par e-mail : on les lit dans le back-office. */
async function sendContactEmails(contact: StoredContact): Promise<void> {
  const sender = getEmailSender();
  const locale = isLocale(contact.locale) ? contact.locale : "fr";
  await sendSafely(sender, contactConfirmationEmail(locale, { email: contact.email, name: contact.firstName }));
  const team = process.env.TEAM_EMAIL;
  if (team) {
    await sendSafely(
      sender,
      contactTeamEmail({ email: team, subject: `${contact.subject} · ${contact.reference}`, adminUrl: `${SITE_URL}/admin/collections/contact-requests` }),
    );
  }
}

/** Ligne de suivi dans Google Sheets (sans intervention ni message). */
async function syncToSheet(contact: StoredContact): Promise<void> {
  await pushToSheet(
    toSheetRow(contact, {
      reference: contact.reference,
      receivedAt: new Date(),
      adminUrl: `${SITE_URL}/admin/collections/contact-requests`,
    }),
  );
}
