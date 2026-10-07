import { describe, expect, it } from "vitest";
import { SURGEON_FIXTURES } from "./fixtures";
import { CITY_PAGE_MIN_SURGEONS, citiesWithPage, filterSurgeons, isListed, sortSurgeons } from "./rules";
import type { Surgeon } from "./types";

const now = new Date("2026-10-07T12:00:00Z");
const surgeon = (overrides: Partial<Surgeon> = {}): Surgeon => ({
  ...SURGEON_FIXTURES[0],
  verification: { status: "verified", verifiedAt: "2026-06-01" },
  subscriptionActive: true,
  ...overrides,
});

describe("publication dans l'annuaire", () => {
  it("publie un chirurgien vérifié depuis moins d'un an et abonné", () => {
    expect(isListed(surgeon(), now)).toBe(true);
  });

  it("retire un profil dont le contrôle annuel est dépassé", () => {
    expect(isListed(surgeon({ verification: { status: "verified", verifiedAt: "2025-10-06" } }), now)).toBe(false);
    expect(isListed(surgeon({ verification: { status: "verified", verifiedAt: "2025-10-08" } }), now)).toBe(true);
  });

  it.each(["pending", "suspended"] as const)("ne publie pas un profil %s", (status) => {
    expect(isListed(surgeon({ verification: { status, verifiedAt: "2026-06-01" } }), now)).toBe(false);
  });

  it("ne publie pas un chirurgien sans abonnement", () => {
    expect(isListed(surgeon({ subscriptionActive: false }), now)).toBe(false);
  });
});

describe("ordre et filtres", () => {
  it("trie par nom de famille, sans autre critère", () => {
    const sorted = sortSurgeons([
      surgeon({ lastName: "Zola", displayName: "Dr Zoé Zola" }),
      surgeon({ lastName: "Émery", displayName: "Dr Éva Émery" }),
      surgeon({ lastName: "Bernard", displayName: "Dr Paul Bernard" }),
    ]);
    expect(sorted.map((s) => s.lastName)).toEqual(["Bernard", "Émery", "Zola"]);
  });

  it("filtre par intervention et par ville", () => {
    const listed = SURGEON_FIXTURES.slice(0, 4);
    expect(filterSurgeons(listed, { intervention: "abdominoplasty" }).map((s) => s.slug)).toEqual([
      "bruno-essai-lyon",
      "david-test-paris",
    ]);
    expect(filterSurgeons(listed, { city: "paris" }).map((s) => s.slug)).toEqual(["david-test-paris"]);
  });

  it(`ne crée une page ville qu'à partir de ${CITY_PAGE_MIN_SURGEONS} chirurgiens`, () => {
    expect(citiesWithPage(SURGEON_FIXTURES.slice(0, 4))).toEqual([{ slug: "lyon", name: "Lyon", count: 3 }]);
  });
});
