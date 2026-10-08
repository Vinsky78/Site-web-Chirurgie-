import { describe, expect, it } from "vitest";
import { INTERVENTIONS_FROM_FILES } from "@/content/interventions/files";
import type { Intervention as CmsIntervention } from "@/payload-types";
import { SUBPAGES_FROM_FILES } from "@/content/subpages/files";
import { GUIDES_FROM_FILES } from "@/content/guides/files";
import { GLOSSARY_FROM_FILES } from "@/content/glossary/files";
import {
  glossaryTermFromCms,
  glossaryTermToCms,
  guideFromCms,
  guideToCms,
  interventionFromCms,
  interventionToCms,
  subpageFromCms,
  subpageToCms,
} from "./mapping";

const cmsDoc = (item = INTERVENTIONS_FROM_FILES.fr[0]): CmsIntervention => ({
  id: 1,
  ...interventionToCms(item),
  updatedAt: "2026-10-07T12:00:00.000Z",
  createdAt: "2026-10-01T12:00:00.000Z",
});

describe("conversion CMS ↔ pages", () => {
  it("restitue le contenu d'origine après un aller-retour", () => {
    const item = INTERVENTIONS_FROM_FILES.fr[0];
    expect(interventionFromCms(cmsDoc(item), "fr")).toEqual({ ...item, updatedAt: "2026-10-07" });
  });

  it("n'importe jamais une fiche comme relue", () => {
    expect(interventionToCms(INTERVENTIONS_FROM_FILES["en-gb"][1]).medicalReview).toEqual({ status: "draft" });
  });

  it("expose une relecture complète", () => {
    const doc = cmsDoc();
    doc.medicalReview = { status: "reviewed", reviewer: "Dr X", qualification: "Chirurgien", reviewedAt: "2026-10-05T09:00:00.000Z" };
    expect(interventionFromCms(doc, "fr")?.medicalReview).toEqual({
      status: "reviewed",
      reviewer: "Dr X",
      qualification: "Chirurgien",
      reviewedAt: "2026-10-05",
    });
  });

  it("traite une relecture incomplète comme un brouillon", () => {
    const doc = cmsDoc();
    doc.medicalReview = { status: "reviewed", reviewer: null, qualification: null, reviewedAt: null };
    expect(interventionFromCms(doc, "fr")?.medicalReview).toEqual({ status: "draft" });
  });

  it("ignore une fiche absente de la locale demandée", () => {
    const doc = cmsDoc();
    (doc as Partial<CmsIntervention>).slug = undefined;
    expect(interventionFromCms(doc, "en-gb")).toBeUndefined();
  });
});

describe("conversion CMS ↔ pages : sous-pages, guides et lexique", () => {
  const stamps = { id: 1, updatedAt: "2026-10-07T12:00:00.000Z", createdAt: "2026-10-01T12:00:00.000Z" };

  it("restitue une sous-page après un aller-retour", () => {
    for (const item of SUBPAGES_FROM_FILES["en-gb"]) {
      expect(subpageFromCms({ ...stamps, ...subpageToCms(item) }, "en-gb")).toEqual({ ...item, updatedAt: "2026-10-07" });
    }
  });

  it("restitue un guide après un aller-retour", () => {
    for (const item of GUIDES_FROM_FILES.fr) {
      expect(guideFromCms({ ...stamps, ...guideToCms(item) }, "fr")).toEqual({ ...item, updatedAt: "2026-10-07" });
    }
  });

  it("restitue une entrée de lexique après un aller-retour", () => {
    for (const item of GLOSSARY_FROM_FILES.fr) {
      expect(glossaryTermFromCms({ ...stamps, ...glossaryTermToCms(item) }, "fr")).toEqual({ ...item, updatedAt: "2026-10-07" });
    }
  });

  it("n'importe jamais un contenu comme relu", () => {
    const reviewed = { status: "reviewed" as const, reviewer: "Dr X", qualification: "Chirurgien", reviewedAt: "2026-10-01" };
    expect(subpageToCms({ ...SUBPAGES_FROM_FILES.fr[0], medicalReview: reviewed }).medicalReview).toEqual({ status: "draft" });
    expect(guideToCms({ ...GUIDES_FROM_FILES.fr[0], medicalReview: reviewed }).medicalReview).toEqual({ status: "draft" });
    expect(glossaryTermToCms({ ...GLOSSARY_FROM_FILES.fr[0], medicalReview: reviewed }).medicalReview).toEqual({ status: "draft" });
  });

  it("ignore une sous-page absente de la locale demandée", () => {
    const doc = { ...stamps, ...subpageToCms(SUBPAGES_FROM_FILES.fr[0]) };
    (doc as { title?: string }).title = undefined;
    expect(subpageFromCms(doc, "en-gb")).toBeUndefined();
  });
});
