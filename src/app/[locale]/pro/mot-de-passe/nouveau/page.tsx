import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { NewPasswordForm } from "./NewPasswordForm";

export default async function NewPasswordPage({ params, searchParams }: PageProps<"/[locale]/pro/mot-de-passe/nouveau">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { token } = await searchParams;
  const t = await getTranslations("pro.password");
  return (
    <div className="max-w-reading">
      <h1 className="font-serif text-h1 text-primary-strong">{t("newTitle")}</h1>
      {typeof token === "string" && token ? (
        <>
          <p className="mt-4 text-muted">{t("newLead")}</p>
          <NewPasswordForm token={token} />
        </>
      ) : (
        <p className="mt-6">
          {t("missingToken")}{" "}
          <Link href="/pro/mot-de-passe" className="underline underline-offset-4">
            {t("forgot")}
          </Link>
        </p>
      )}
    </div>
  );
}
