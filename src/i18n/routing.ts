import { defineRouting } from "next-intl/routing";

/**
 * Locales publiées. Chaque locale correspond à un marché (pays) et non à une
 * simple langue : les contenus et les règles de conformité en dépendent.
 * Pour ouvrir un marché, ajouter la locale ici, ses messages dans /messages,
 * ses contenus dans src/content, et sa règle dans src/lib/countries.ts.
 *
 * Les chemins sont traduits par marché (`pathnames`) : les clés sont les routes
 * internes (dossiers de src/app/[locale]), les valeurs les adresses publiques.
 */
export const routing = defineRouting({
  locales: ["fr", "en-gb"],
  defaultLocale: "fr",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/interventions": { fr: "/interventions", "en-gb": "/procedures" },
    "/interventions/[slug]": { fr: "/interventions/[slug]", "en-gb": "/procedures/[slug]" },
    "/demande": { fr: "/demande", "en-gb": "/request" },
    "/informations/[page]": { fr: "/informations/[page]", "en-gb": "/information/[page]" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;

export function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}
