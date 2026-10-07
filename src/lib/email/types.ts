export interface EmailMessage {
  to: { email: string; name?: string };
  subject: string;
  text: string;
  html: string;
  /** Étiquette technique (statistiques d'envoi), jamais de donnée personnelle. */
  tag: string;
}

export interface EmailSender {
  send(message: EmailMessage): Promise<void>;
}
