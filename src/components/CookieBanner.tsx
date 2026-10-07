"use client";

import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import { Link } from "@/i18n/navigation";
import { GA_ID, isValidGaId } from "@/lib/analytics";
import { readConsent, subscribeConsent, writeConsent } from "@/lib/consent";

/** Bandeau de consentement : « Refuser » aussi accessible que « Accepter » (CNIL). Absent si la mesure n'est pas configurée. */
export function CookieBanner({ privacyHref }: { privacyHref: string }) {
  const t = useTranslations("consent");
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => "granted" as const);

  if (!isValidGaId(GA_ID) || consent !== null) return null;

  const button =
    "inline-flex min-h-11 flex-1 items-center justify-center rounded-control border border-primary px-5 font-medium sm:flex-none";

  return (
    <div
      role="dialog"
      aria-labelledby="consent-title"
      aria-describedby="consent-text"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div className="max-w-3xl text-sm">
          <p id="consent-title" className="font-semibold text-primary-strong">
            {t("title")}
          </p>
          <p id="consent-text" className="mt-1 text-muted">
            {t("text")}{" "}
            <Link href={privacyHref} className="underline underline-offset-4">
              {t("learnMore")}
            </Link>
          </p>
        </div>
        <div className="flex w-full gap-3 sm:w-auto">
          <button type="button" onClick={() => writeConsent("denied")} className={`${button} bg-surface text-primary hover:bg-accent-soft`}>
            {t("refuse")}
          </button>
          <button type="button" onClick={() => writeConsent("granted")} className={`${button} bg-primary text-white hover:bg-primary-strong`}>
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
