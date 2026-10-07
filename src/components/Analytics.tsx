"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";
import { GA_ID, isValidGaId, shouldTrack } from "@/lib/analytics";
import { readConsent, subscribeConsent } from "@/lib/consent";

/**
 * Google Analytics 4, chargé uniquement après consentement explicite.
 * Consent Mode v2 : toutes les finalités publicitaires restent refusées.
 * Seul le chemin de la page est envoyé (jamais la query string), et jamais
 * pour le formulaire de demande (données de santé).
 */
export function Analytics() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);
  const pathname = usePathname();
  const enabled = isValidGaId(GA_ID) && consent === "granted";

  useEffect(() => {
    if (!enabled || window.__gaInitialised) return;
    window.dataLayer = window.dataLayer || [];
    // gtag.js attend l'objet `arguments` (et non un tableau) dans le dataLayer.
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false, allow_google_signals: false });
    window.__gaInitialised = true;
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !shouldTrack(pathname)) return;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}`,
      page_title: document.title,
    });
  }, [enabled, pathname]);

  if (!enabled) return null;
  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />;
}
