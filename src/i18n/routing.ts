import { defineRouting } from "next-intl/routing";

/**
 * Locales publiées. Chaque locale correspond à un marché (pays) et non à une
 * simple langue : les contenus et les règles de conformité en dépendent.
 * Pour ouvrir un marché, ajouter la locale ici, ses messages dans /messages,
 * ses contenus dans src/content, et sa règle dans src/lib/countries.ts.
 */
export const routing = defineRouting({
  locales: ["fr", "en-gb"],
  defaultLocale: "fr",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}
