import { getTranslations } from "next-intl/server";
import { COUNTRY_RULES, type CountryCode } from "@/lib/countries";

/** Encadré des obligations légales du pays de la locale (délai de réflexion, devis, vérification). */
export async function LegalBox({ country }: { country: CountryCode }) {
  const t = await getTranslations("legalBox");
  const rules = COUNTRY_RULES[country];

  return (
    <aside aria-labelledby="droits" className="rounded-lg border-l-4 border-primary bg-accent-soft p-6">
      <h2 id="droits" className="font-semibold">
        {t("title")}
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {rules.writtenQuoteMandatory && <li>{t("quote")}</li>}
        {rules.legalReflectionDays !== null && <li>{t("reflection", { days: rules.legalReflectionDays })}</li>}
        {rules.legalReflectionDays === null && rules.recommendedReflectionDays !== null && (
          <li>{t("recommended", { days: rules.recommendedReflectionDays })}</li>
        )}
        <li>{t("verify", { registry: rules.verificationRegistry })}</li>
      </ul>
    </aside>
  );
}
