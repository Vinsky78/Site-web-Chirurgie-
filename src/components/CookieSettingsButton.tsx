"use client";

import { useTranslations } from "next-intl";
import { GA_ID, isValidGaId } from "@/lib/analytics";
import { writeConsent } from "@/lib/consent";

/** Permet de revenir sur son choix à tout moment (retrait du consentement aussi simple que son octroi). */
export function CookieSettingsButton({ className = "" }: { className?: string }) {
  const t = useTranslations("consent");
  if (!isValidGaId(GA_ID)) return null;
  return (
    <button type="button" onClick={() => writeConsent(null)} className={className}>
      {t("manage")}
    </button>
  );
}
