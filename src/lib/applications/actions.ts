"use server";

import { after } from "next/server";
import { getLocale } from "next-intl/server";
import { isLocale } from "@/i18n/routing";
import { getEmailSender, sendSafely } from "@/lib/email";
import { applicationConfirmationEmail, applicationTeamEmail } from "@/lib/email/templates";
import { SITE_URL } from "@/lib/site";
import { getApplicationRepository, type StoredApplication } from "./repository";
import { applicationFromFormData, type ApplicationInput } from "./schema";
import { submitApplication, type ApplicationResult } from "./submit";

export type ApplicationState = ApplicationResult & {
  /** Valeurs saisies, renvoyées pour regarnir le formulaire après une erreur. */
  values?: Partial<Record<keyof ApplicationInput, unknown>>;
};

export async function submitApplicationAction(_previous: ApplicationState | null, form: FormData): Promise<ApplicationState> {
  const locale = await getLocale();
  const raw = applicationFromFormData(form);
  const result = await submitApplication(raw, locale, {
    repository: getApplicationRepository(),
    // Les e-mails partent après la réponse : le candidat n'attend pas Brevo.
    onSaved: async (application) => after(() => sendApplicationEmails(application)),
  });
  return result.ok ? result : { ...result, values: { ...raw, website: "", startedAt: undefined } };
}

async function sendApplicationEmails(application: StoredApplication): Promise<void> {
  const sender = getEmailSender();
  const locale = isLocale(application.locale) ? application.locale : "fr";
  await sendSafely(sender, applicationConfirmationEmail(locale, { email: application.email, name: application.fullName }));
  const team = process.env.TEAM_EMAIL;
  if (team) {
    await sendSafely(
      sender,
      applicationTeamEmail({
        email: team,
        fullName: application.fullName,
        country: application.country,
        city: application.city,
        adminUrl: `${SITE_URL}/admin/collections/surgeon-applications`,
      }),
    );
  }
}
