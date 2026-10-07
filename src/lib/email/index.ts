import { SITE_NAME } from "@/lib/site";
import { BrevoSender } from "./brevo";
import type { EmailMessage, EmailSender } from "./types";

export type { EmailMessage, EmailSender } from "./types";

/** Développement : le message s'affiche dans la console au lieu d'être envoyé. */
class ConsoleSender implements EmailSender {
  async send(message: EmailMessage): Promise<void> {
    console.info(`[e-mail non envoyé, développement] À : ${message.to.email}\nObjet : ${message.subject}\n\n${message.text}`);
  }
}

/** Production sans clé Brevo : échec explicite (journalisé par l'appelant, sans contenu). */
class NotConfiguredSender implements EmailSender {
  async send(): Promise<void> {
    throw new Error("EMAIL_NOT_CONFIGURED");
  }
}

let instance: EmailSender | undefined;

export function getEmailSender(): EmailSender {
  if (!instance) {
    const apiKey = process.env.BREVO_API_KEY;
    if (apiKey) {
      instance = new BrevoSender(apiKey, {
        email: process.env.EMAIL_FROM ?? "ne-pas-repondre@eclaira.example",
        name: process.env.EMAIL_FROM_NAME ?? SITE_NAME,
      });
    } else {
      instance = process.env.NODE_ENV === "production" ? new NotConfiguredSender() : new ConsoleSender();
    }
  }
  return instance;
}

/** Un e-mail qui échoue ne doit jamais faire échouer l'action de l'utilisateur : on journalise sans contenu. */
export async function sendSafely(sender: EmailSender, message: EmailMessage): Promise<boolean> {
  try {
    await sender.send(message);
    return true;
  } catch (error) {
    console.error(`Envoi d'e-mail impossible (${message.tag}) :`, error instanceof Error ? error.message : "erreur inconnue");
    return false;
  }
}
