import { describe, expect, it } from "vitest";
import { listPublicSurgeons, SURGEONS } from "./directory";
import type { Surgeon } from "./types";

const base: Surgeon = {
  id: "a",
  name: "Zed",
  country: "FR",
  city: "Lyon",
  specialties: ["rhinoplasty"],
  contactEmail: "private@example.org",
  verification: { status: "verified", registry: "RPPS", registrationNumber: "1", verifiedAt: "2026-01-01" },
};

describe("annuaire", () => {
  it("n'expose que des chirurgiens vérifiés, sans coordonnées privées", () => {
    const list = listPublicSurgeons({}, [base, { ...base, id: "b", verification: { status: "pending" } }]);
    expect(list.map((s) => s.id)).toEqual(["a"]);
    expect(JSON.stringify(list)).not.toContain("private@example.org");
    expect(JSON.stringify(list)).not.toContain("registrationNumber");
  });

  it("filtre par intervention et trie par nom", () => {
    const list = listPublicSurgeons({ interventionId: "rhinoplasty" }, [
      base,
      { ...base, id: "b", name: "Abel" },
      { ...base, id: "c", specialties: ["abdominoplasty"] },
    ]);
    expect(list.map((s) => s.name)).toEqual(["Abel", "Zed"]);
  });

  it("ne publie aucune fiche fictive", () => {
    expect(SURGEONS).toEqual([]);
  });
});
