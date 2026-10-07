import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { requireProSession } from "@/lib/auth/guard";
import { SignOutButton } from "../SignOutButton";
import { EnrolForm } from "./EnrolForm";

export default async function SecurityPage({ params }: PageProps<"/[locale]/pro/securite">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireProSession(locale as Locale, { twoFactor: false });
  const t = await getTranslations("pro.security");

  return (
    <div className="max-w-reading">
      <h1 className="font-serif text-h1 text-primary-strong">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("signedInAs", { email: session.user.email })}</p>
      {session.user.twoFactorEnabled ? (
        <p className="mt-6 rounded-control border-l-4 border-success bg-surface p-4">{t("enabled")}</p>
      ) : (
        <>
          <p className="mt-4">{t("lead")}</p>
          <EnrolForm />
        </>
      )}
      <div className="mt-10">
        <SignOutButton />
      </div>
    </div>
  );
}
