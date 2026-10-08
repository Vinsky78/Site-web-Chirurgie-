import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { findForbiddenTerms } from "./charter";
import { GUIDE_IDS, INTERVENTION_IDS, SUBPAGE_KINDS, type Source } from "./types";
import { SUBPAGES_FROM_FILES } from "./subpages/files";
import { SUBPAGE_SLUGS, subpageKindFromSlug } from "./subpages/slugs";
import { GUIDES_FROM_FILES } from "./guides/files";
import { GLOSSARY_FROM_FILES } from "./glossary/files";

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const sourcesValid = (sources: Source[]) => sources.every((s) => s.label && (!s.url || /^https:\/\//.test(s.url)));

describe("sous-pages d'intervention (fichiers)", () => {
  for (const locale of routing.locales) {
    const items = SUBPAGES_FROM_FILES[locale];

    it(`${locale} : cinq sous-pages par intervention, une par sujet`, () => {
      for (const id of INTERVENTION_IDS) {
        expect(items.filter((item) => item.interventionId === id).map((item) => item.kind).sort()).toEqual(
          [...SUBPAGE_KINDS].sort(),
        );
      }
    });

    it(`${locale} : gabarit respecté (réponse en tête, sections, sources, résumé court)`, () => {
      for (const item of items) {
        expect(item.locale).toBe(locale);
        expect(item.answer.length).toBeGreaterThan(0);
        expect(item.sections.length).toBeGreaterThan(0);
        for (const section of item.sections) {
          expect(section.paragraphs.length + (section.bullets?.length ?? 0)).toBeGreaterThan(0);
        }
        expect(item.sources.length).toBeGreaterThan(0);
        expect(sourcesValid(item.sources)).toBe(true);
        expect(item.summary.length).toBeLessThanOrEqual(160);
      }
    });

    it(`${locale} : aucun terme promotionnel`, () => {
      for (const item of items) expect(findForbiddenTerms(JSON.stringify(item))).toEqual([]);
    });

    it(`${locale} : segments d'URL valides et réversibles`, () => {
      for (const kind of SUBPAGE_KINDS) {
        expect(SUBPAGE_SLUGS[locale][kind]).toMatch(SLUG);
        expect(subpageKindFromSlug(locale, SUBPAGE_SLUGS[locale][kind])).toBe(kind);
      }
      expect(subpageKindFromSlug(locale, "lyon")).toBeUndefined();
    });
  }
});

describe("guides (fichiers)", () => {
  for (const locale of routing.locales) {
    const items = GUIDES_FROM_FILES[locale];

    it(`${locale} : un guide par identifiant, slugs valides et uniques`, () => {
      expect(items.map((item) => item.id).sort()).toEqual([...GUIDE_IDS].sort());
      for (const item of items) expect(item.slug).toMatch(SLUG);
      expect(new Set(items.map((item) => item.slug)).size).toBe(items.length);
    });

    it(`${locale} : gabarit respecté et ressources officielles`, () => {
      for (const item of items) {
        expect(item.locale).toBe(locale);
        expect(item.summary.length).toBeLessThanOrEqual(160);
        expect(item.steps.length).toBeGreaterThan(0);
        expect(item.warningSigns.length).toBeGreaterThan(0);
        expect(item.resources.length).toBeGreaterThan(0);
        expect(sourcesValid(item.resources)).toBe(true);
        for (const id of item.interventions) expect(INTERVENTION_IDS).toContain(id);
      }
    });

    it(`${locale} : aucun terme promotionnel`, () => {
      for (const item of items) expect(findForbiddenTerms(JSON.stringify(item))).toEqual([]);
    });
  }
});

describe("lexique (fichiers)", () => {
  for (const locale of routing.locales) {
    const items = GLOSSARY_FROM_FILES[locale];

    it(`${locale} : identifiants et slugs valides et uniques`, () => {
      for (const item of items) {
        expect(item.id).toMatch(SLUG);
        expect(item.slug).toMatch(SLUG);
      }
      expect(new Set(items.map((item) => item.id)).size).toBe(items.length);
      expect(new Set(items.map((item) => item.slug)).size).toBe(items.length);
    });

    it(`${locale} : définition en deux phrases au plus`, () => {
      for (const item of items) {
        const sentences = item.definition.split(/[.!?](?:\s|$)/).filter((part) => part.trim().length > 0);
        expect(sentences.length, item.term).toBeLessThanOrEqual(2);
      }
    });

    it(`${locale} : aucun terme promotionnel`, () => {
      for (const item of items) expect(findForbiddenTerms(JSON.stringify(item))).toEqual([]);
    });
  }

  it("chaque entrée existe dans tous les marchés (hreflang)", () => {
    const ids = (locale: (typeof routing.locales)[number]) => GLOSSARY_FROM_FILES[locale].map((item) => item.id).sort();
    for (const locale of routing.locales) expect(ids(locale)).toEqual(ids(routing.defaultLocale));
  });
});
