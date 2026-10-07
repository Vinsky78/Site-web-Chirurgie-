import { createTranslator } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";
import fr from "../../../messages/fr.json";
import enGb from "../../../messages/en-gb.json";
import type { EmailMessage } from "./types";

/**
 * Gabarits d'e-mails. Règle (Phase 4) : aucune donnée de santé, ni
 * intervention précise, ni réponse médicale ; le contenu se lit dans l'espace
 * sécurisé ou par le lien personnel. Les variables sont échappées en HTML.
 */

const MESSAGES = { fr, "en-gb": enGb } as const;

function translator(locale: Locale) {
  return createTranslator({ locale, messages: MESSAGES[locale], namespace: "emails" });
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

interface Body {
  paragraphs: string[];
  list?: string[];
  /** Paragraphes placés après la liste. */
  after?: string[];
  action?: { label: string; url: string };
  footer: string;
}

function render(locale: Locale, to: EmailMessage["to"], subject: string, tag: string, body: Body): EmailMessage {
  const separator = locale === "fr" ? " : " : ": ";
  const text = [
    ...body.paragraphs,
    ...(body.list?.length ? [body.list.map((item) => `- ${item}`).join("\n")] : []),
    ...(body.after ?? []),
    ...(body.action ? [`${body.action.label}${separator}${body.action.url}`] : []),
    `--\n${body.footer}`,
  ].join("\n\n");

  const html = `<!doctype html><html lang="${locale}"><body style="font-family:Arial,sans-serif;color:#1f2933;line-height:1.5;max-width:560px;margin:0 auto;padding:24px">
<p style="font-family:Georgia,serif;font-size:20px;color:#0f4c5c;margin:0 0 24px">${escapeHtml(SITE_NAME)}</p>
${body.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n")}
${body.list ? `<ul>${body.list.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
${(body.after ?? []).map((p) => `<p>${escapeHtml(p)}</p>`).join("\n")}
${
  body.action
    ? `<p style="margin:24px 0"><a href="${escapeHtml(body.action.url)}" style="background:#0f4c5c;color:#ffffff;padding:12px 20px;border-radius:6px;text-decoration:none;display:inline-block">${escapeHtml(body.action.label)}</a></p>
<p style="font-size:13px;color:#52606d">${escapeHtml(body.action.url)}</p>`
    : ""
}
<p style="font-size:13px;color:#52606d;border-top:1px solid #d9dee3;padding-top:16px;margin-top:32px">${escapeHtml(body.footer)}</p>
</body></html>`;

  return { to, subject, text, html, tag };
}

/** Confirmation au patient : chirurgiens choisis, délai de réflexion, lien personnel. Sans intervention ni santé. */
export function patientConfirmationEmail(
  locale: Locale,
  data: { email: string; firstName: string; surgeons: string[]; manageUrl: string; reflectionDays: number | null },
): EmailMessage {
  const t = translator(locale);
  return render(locale, { email: data.email }, t("patient.subject"), "patient-confirmation", {
    paragraphs: [t("patient.greeting", { firstName: data.firstName }), t("patient.sent")],
    list: data.surgeons,
    after: [...(data.reflectionDays ? [t("patient.reflection", { days: data.reflectionDays })] : []), t("patient.manage")],
    action: { label: t("patient.manageAction"), url: data.manageUrl },
    footer: t("footer"),
  });
}

/** Alerte au chirurgien : uniquement l'existence d'une demande et sa catégorie. */
export function surgeonNewRequestEmail(
  locale: Locale,
  data: { email: string; category: string; proUrl: string },
): EmailMessage {
  const t = translator(locale);
  return render(locale, { email: data.email }, t("surgeonNew.subject"), "surgeon-new-request", {
    paragraphs: [t("surgeonNew.body", { category: data.category }), t("surgeonNew.secure")],
    action: { label: t("surgeonNew.action"), url: data.proUrl },
    footer: t("footerPro"),
  });
}

export function surgeonWithdrawnEmail(locale: Locale, data: { email: string; proUrl: string }): EmailMessage {
  const t = translator(locale);
  return render(locale, { email: data.email }, t("surgeonWithdrawn.subject"), "surgeon-request-withdrawn", {
    paragraphs: [t("surgeonWithdrawn.body")],
    action: { label: t("surgeonNew.action"), url: data.proUrl },
    footer: t("footerPro"),
  });
}

/** Invitation ou réinitialisation : même lien de choix du mot de passe, valable 48 h. */
export function proPasswordEmail(
  locale: Locale,
  data: { email: string; name: string; url: string; invitation: boolean },
): EmailMessage {
  const t = translator(locale);
  const key = data.invitation ? "proInvite" : "proReset";
  return render(locale, { email: data.email, name: data.name }, t(`${key}.subject`), key, {
    paragraphs: [t(`${key}.body`, { name: data.name }), t("proLinkValidity")],
    action: { label: t(`${key}.action`), url: data.url },
    footer: t("footerPro"),
  });
}
