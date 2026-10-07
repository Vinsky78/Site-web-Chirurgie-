/**
 * Crée un compte de l'espace pro ou de l'équipe interne et envoie par e-mail
 * un lien pour choisir son mot de passe (valable 48 h).
 *
 *   npm run pro:create-user -- --email dr@exemple.fr --name "Dr Claire Martin" --role surgeon --surgeon claire-martin-lyon
 *   npm run pro:create-user -- --email equipe@exemple.fr --name "Camille" --role staff
 *
 * Sans BREVO_API_KEY (développement), le lien s'affiche dans la console. À la
 * première connexion, la personne active la double authentification.
 */
import { parseArgs } from "node:util";
import { getDb } from "../src/db/client";
import { PRO_ROLES, type ProRole } from "../src/db/schema";
import { createProAccount, temporaryPassword } from "../src/lib/auth/accounts";
import { createAuth } from "../src/lib/auth/config";
import { passwordLinkUrl } from "../src/lib/auth/passwordLink";
import { getEmailSender } from "../src/lib/email";
import { proPasswordEmail } from "../src/lib/email/templates";

const { values } = parseArgs({
  options: {
    email: { type: "string" },
    name: { type: "string" },
    role: { type: "string", default: "surgeon" },
    surgeon: { type: "string" },
  },
});

if (!values.email || !values.name || !(PRO_ROLES as readonly string[]).includes(values.role ?? "")) {
  console.error("Usage : --email <e-mail> --name <nom> --role surgeon|assistant|staff [--surgeon <slug>]");
  process.exit(1);
}

const secret = process.env.BETTER_AUTH_SECRET;
if (!secret) {
  console.error("BETTER_AUTH_SECRET n'est pas défini.");
  process.exit(1);
}

const db = getDb();
const sender = getEmailSender();
const auth = createAuth(db, {
  secret,
  baseURL: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  withNextCookies: false,
  // Ici l'envoi doit réussir : une erreur est remontée plutôt que masquée.
  sendPasswordLink: ({ email, name, token }) =>
    sender.send(proPasswordEmail("fr", { email, name, url: passwordLinkUrl(token), invitation: true })),
});

try {
  // Mot de passe aléatoire jamais affiché : la personne choisit le sien par le lien.
  const user = await createProAccount(
    auth,
    db,
    { email: values.email, name: values.name, role: values.role as ProRole, surgeonSlug: values.surgeon },
    temporaryPassword(),
  );
  await auth.api.requestPasswordReset({ body: { email: user.email } });
  console.log(`Compte créé : ${user.email} (${values.role}). Invitation envoyée.`);
  process.exit(0);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
