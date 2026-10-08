import { headers } from "next/headers";
import { redirect as nextRedirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link, redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { canAccessAdmin, getProSession } from "@/lib/auth";
import { safeNext } from "@/lib/auth/redirects";
import { SignInForm } from "./SignInForm";

export default async function SignInPage({ params, searchParams }: PageProps<"/[locale]/pro/connexion">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { next } = await searchParams;
  const session = await getProSession(await headers());
  const target = safeNext(next);
  if (session) {
    if (target && canAccessAdmin(session)) nextRedirect(target);
    redirect({ href: session.user.twoFactorEnabled ? "/pro" : "/pro/securite", locale: locale as Locale });
  }

  const t = await getTranslations("pro.signIn");
  return (
    <div className="max-w-reading">
      <h1 className="font-serif text-h1 text-primary-strong">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("lead")}</p>
      <SignInForm next={target} />
      <p className="mt-10 text-small text-muted">
        {t("noAccount")}{" "}
        <Link href="/rejoindre" className="underline underline-offset-4">
          {t("apply")}
        </Link>
      </p>
    </div>
  );
}
