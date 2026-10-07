import type { Locale } from "@/i18n/routing";
import type { EmailSender } from "@/lib/email";
import { sendSafely } from "@/lib/email";
import { patientConfirmationEmail, surgeonNewRequestEmail } from "@/lib/email/templates";
import type { StoredLead } from "./repository";

export interface NotifyDeps {
  sender: EmailSender;
  /** Noms affichés des chirurgiens choisis, dans l'ordre du choix. */
  surgeonNames: (slugs: string[]) => Promise<string[]>;
  /** Adresses des comptes pro reliés à ces fiches. */
  proEmails: (slugs: string[]) => Promise<string[]>;
  category: (interventionId: string) => Promise<string>;
  manageUrl: (token: string) => string;
  proUrl: string;
  reflectionDays: number | null;
}

/**
 * E-mails après une nouvelle demande : confirmation au patient avec son lien
 * personnel, alerte sans détail à chaque compte pro destinataire.
 */
export async function notifyNewLead(lead: StoredLead, locale: Locale, deps: NotifyDeps): Promise<void> {
  const [names, emails, category] = await Promise.all([
    deps.surgeonNames(lead.surgeons),
    deps.proEmails(lead.surgeons),
    deps.category(lead.interventionId),
  ]);

  await Promise.all([
    sendSafely(
      deps.sender,
      patientConfirmationEmail(locale, {
        email: lead.email,
        firstName: lead.firstName,
        surgeons: names,
        manageUrl: deps.manageUrl(lead.manageToken),
        reflectionDays: deps.reflectionDays,
      }),
    ),
    ...emails.map((email) => sendSafely(deps.sender, surgeonNewRequestEmail(locale, { email, category, proUrl: deps.proUrl }))),
  ]);
}
