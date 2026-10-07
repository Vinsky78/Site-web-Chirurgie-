"use server";

import { headers } from "next/headers";
import { redirect as nextRedirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import QRCode from "qrcode";
import { isAPIError } from "better-auth/api";
import { redirect } from "@/i18n/navigation";
import { isLocale, type Locale } from "@/i18n/routing";
import { getAuth, getProSession, isAuthConfigured } from ".";
import { MIN_PASSWORD_LENGTH } from "./config";
import { safeNext } from "./redirects";
import { LoginThrottle } from "./throttle";

/**
 * Actions de connexion de l'espace pro. Les messages d'erreur sont des clés
 * de traduction (namespace "pro.errors") et ne disent jamais si l'adresse
 * e-mail existe.
 */

export type SignInState = { step: "password" | "code"; error?: string; next?: string };
export type EnrolState = {
  step: "password" | "code";
  error?: string;
  qrSvg?: string;
  secret?: string;
  backupCodes?: string[];
};

const throttle = new LoginThrottle();

async function currentLocale(): Promise<Locale> {
  const locale = await getLocale();
  return isLocale(locale) ? locale : "fr";
}

/** Après une connexion complète : back-office pour l'équipe, boîte de réception sinon. */
async function goHome(locale: Locale, next: string | undefined): Promise<never> {
  if (next && (await getProSession(await headers()))?.user.role === "staff") nextRedirect(next);
  return redirect({ href: "/pro", locale });
}

export async function signInAction(_prev: SignInState, form: FormData): Promise<SignInState> {
  const locale = await currentLocale();
  const next = safeNext(form.get("next"));
  if (!isAuthConfigured()) return { step: "password", error: "unavailable", next };

  if (form.get("step") === "code") return verifyCode(locale, String(form.get("code") ?? ""), next);

  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  if (!email || !password) return { step: "password", error: "required", next };
  if (throttle.isLocked(email)) return { step: "password", error: "locked", next };

  let result: Awaited<ReturnType<ReturnType<typeof getAuth>["api"]["signInEmail"]>>;
  try {
    result = await getAuth().api.signInEmail({ body: { email, password }, headers: await headers() });
  } catch (error) {
    if (isAPIError(error) && error.statusCode === 401) {
      throttle.fail(email);
      return { step: "password", error: throttle.isLocked(email) ? "locked" : "invalid", next };
    }
    console.error("Connexion pro impossible :", error instanceof Error ? error.message : "erreur inconnue");
    return { step: "password", error: "unavailable", next };
  }
  throttle.succeed(email);

  if ("twoFactorRedirect" in result && result.twoFactorRedirect) return { step: "code", next };
  // Première connexion : la double authentification doit être activée avant tout accès.
  return redirect({ href: "/pro/securite", locale });
}

async function verifyCode(locale: Locale, raw: string, next: string | undefined): Promise<SignInState> {
  const code = raw.replace(/\s/g, "");
  if (!code) return { step: "code", error: "codeRequired", next };
  try {
    const api = getAuth().api;
    const requestHeaders = await headers();
    // 6 chiffres : application d'authentification ; sinon, code de secours.
    if (/^\d{6}$/.test(code)) await api.verifyTOTP({ body: { code }, headers: requestHeaders });
    else await api.verifyBackupCode({ body: { code }, headers: requestHeaders });
  } catch (error) {
    if (isAPIError(error)) {
      // Délai de saisie du code dépassé (10 min) : retour à l'étape mot de passe.
      if (error.statusCode === 401 && /two factor/i.test(error.message)) return { step: "password", error: "expired", next };
      return { step: "code", error: error.statusCode === 423 || /lock/i.test(error.message) ? "locked" : "code", next };
    }
    console.error("Vérification du code impossible :", error instanceof Error ? error.message : "erreur inconnue");
    return { step: "code", error: "unavailable", next };
  }
  return goHome(locale, next);
}

/** Étape 1 de l'activation : mot de passe confirmé, création du secret et des codes de secours. */
export async function enrolAction(_prev: EnrolState, form: FormData): Promise<EnrolState> {
  const locale = await currentLocale();
  const requestHeaders = await headers();
  const session = await getProSession(requestHeaders);
  if (!session) return redirect({ href: "/pro/connexion", locale });
  if (session.user.twoFactorEnabled) return redirect({ href: "/pro", locale });

  if (form.get("step") === "code") {
    // Le QR code et les codes de secours restent affichés par le client (état fusionné).
    const code = String(form.get("code") ?? "").replace(/\s/g, "");
    if (!/^\d{6}$/.test(code)) return { step: "code", error: "code" };
    try {
      await getAuth().api.verifyTOTP({ body: { code }, headers: requestHeaders });
    } catch {
      return { step: "code", error: "code" };
    }
    return session.user.role === "staff" ? nextRedirect("/admin") : redirect({ href: "/pro", locale });
  }

  const password = String(form.get("password") ?? "");
  if (!password) return { step: "password", error: "required" };
  try {
    const enabled = await getAuth().api.enableTwoFactor({ body: { password, method: "totp" }, headers: requestHeaders });
    if (enabled.method !== "totp") throw new Error("Méthode de double authentification inattendue.");
    const { totpURI, backupCodes } = enabled;
    const secret = new URL(totpURI).searchParams.get("secret") ?? "";
    const qrSvg = await QRCode.toString(totpURI, { type: "svg", margin: 1, errorCorrectionLevel: "M" });
    return { step: "code", qrSvg, secret, backupCodes };
  } catch (error) {
    if (isAPIError(error)) return { step: "password", error: "invalid" };
    console.error("Activation de la double authentification impossible :", error instanceof Error ? error.message : "erreur inconnue");
    return { step: "password", error: "unavailable" };
  }
}

export async function signOutAction(): Promise<never> {
  const locale = await currentLocale();
  if (isAuthConfigured()) {
    try {
      await getAuth().api.signOut({ headers: await headers() });
    } catch {
      // Session déjà expirée : rien à faire.
    }
  }
  return redirect({ href: "/pro/connexion", locale });
}

export type ResetRequestState = { sent?: boolean; error?: string };

/** Mot de passe oublié : même réponse que l'adresse existe ou non. */
export async function requestResetAction(_prev: ResetRequestState, form: FormData): Promise<ResetRequestState> {
  if (!isAuthConfigured()) return { error: "unavailable" };
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  if (!email) return { error: "required" };
  const key = `reset:${email}`;
  if (throttle.isLocked(key)) return { sent: true };
  throttle.fail(key);
  try {
    await getAuth().api.requestPasswordReset({ body: { email } });
  } catch (error) {
    // Adresse mal formée ou inconnue : on ne le révèle pas.
    if (!isAPIError(error)) {
      console.error("Demande de réinitialisation impossible :", error instanceof Error ? error.message : "erreur inconnue");
    }
  }
  return { sent: true };
}

export type ResetState = { done?: boolean; error?: string };

export async function resetPasswordAction(_prev: ResetState, form: FormData): Promise<ResetState> {
  if (!isAuthConfigured()) return { error: "unavailable" };
  const token = String(form.get("token") ?? "");
  const password = String(form.get("password") ?? "");
  if (password.length < MIN_PASSWORD_LENGTH) return { error: "passwordLength" };
  if (password !== String(form.get("confirm") ?? "")) return { error: "passwordMismatch" };
  try {
    await getAuth().api.resetPassword({ body: { token, newPassword: password } });
  } catch (error) {
    if (isAPIError(error)) return { error: "linkInvalid" };
    console.error("Changement de mot de passe impossible :", error instanceof Error ? error.message : "erreur inconnue");
    return { error: "unavailable" };
  }
  return { done: true };
}
