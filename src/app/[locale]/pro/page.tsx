import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Alert } from "@/components/ui/Alert";

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Espace professionnel : réservé aux chirurgiens vérifiés, sur invitation.
 * L'authentification n'est volontairement pas simulée : cette page n'expose
 * aucune donnée tant qu'un fournisseur d'identité (accès sécurisé, 2FA) n'est
 * pas branché.
 */
export default async function ProPage({ params }: PageProps<"/[locale]/pro">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pro");
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold text-primary-strong">{t("title")}</h1>
      <div className="mt-6">
        <Alert title={t("noticeTitle")}>{t("notice")}</Alert>
      </div>
    </div>
  );
}
