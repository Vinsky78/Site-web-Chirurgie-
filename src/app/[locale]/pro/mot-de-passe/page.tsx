import { getTranslations, setRequestLocale } from "next-intl/server";
import { ResetRequestForm } from "./ResetRequestForm";

export default async function ForgotPasswordPage({ params }: PageProps<"/[locale]/pro/mot-de-passe">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pro.password");
  return (
    <div className="max-w-reading">
      <h1 className="font-serif text-h1 text-primary-strong">{t("requestTitle")}</h1>
      <p className="mt-4 text-muted">{t("requestLead")}</p>
      <ResetRequestForm />
    </div>
  );
}
