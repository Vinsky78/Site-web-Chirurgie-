import type { EmailMessage, EmailSender } from "./types";

const ENDPOINT = "https://api.brevo.com/v3/smtp/email";

/**
 * Envoi transactionnel par l'API Brevo (société française, sous-traitant
 * art. 28). Les messages ne contiennent aucune donnée de santé. Le suivi des
 * ouvertures et des clics se désactive dans le compte Brevo (voir README).
 */
export class BrevoSender implements EmailSender {
  constructor(
    private readonly apiKey: string,
    private readonly from: { email: string; name: string },
    private readonly fetchImpl: typeof fetch = fetch,
  ) {}

  async send(message: EmailMessage): Promise<void> {
    const response = await this.fetchImpl(ENDPOINT, {
      method: "POST",
      headers: { "api-key": this.apiKey, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: this.from,
        to: [message.to],
        subject: message.subject,
        textContent: message.text,
        htmlContent: message.html,
        tags: [message.tag],
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Brevo a refusé l'envoi (HTTP ${response.status}).`);
  }
}
