"use client";

import dynamic from "next/dynamic";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { isTracked } from "@/lib/analytics";

const DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
/** Script « manual » : les pages vues sont envoyées par ce composant, sans paramètres d'adresse. */
const SRC = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? "https://plausible.io/js/script.manual.js";

// Chargé seulement quand la mesure est active : aucun poids sinon.
const WebVitals = dynamic(() => import("./WebVitals").then((m) => m.WebVitals));

/** Mesure d'audience sans cookie (src/lib/analytics.ts). Ne rend rien sans NEXT_PUBLIC_PLAUSIBLE_DOMAIN. */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!DOMAIN) return;
    // File d'attente : les événements envoyés avant le chargement du script ne sont pas perdus.
    window.plausible ??= Object.assign((...args: unknown[]) => void (window.plausible!.q ??= []).push(args), {});
    // Adresse sans paramètres : ni filtres, ni intervention présélectionnée.
    if (isTracked(pathname)) window.plausible("pageview", { u: `${window.location.origin}${pathname}` });
  }, [pathname]);

  if (!DOMAIN) return null;
  return (
    <>
      <Script src={SRC} data-domain={DOMAIN} strategy="lazyOnload" />
      <WebVitals />
    </>
  );
}
