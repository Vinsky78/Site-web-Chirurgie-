import { describe, expect, it } from "vitest";
import { organizationData } from "./jsonld";

describe("organizationData", () => {
  it("n'invente ni réseaux ni contact", () => {
    const org = organizationData("desc", { sameAs: [] });
    expect(org).not.toHaveProperty("sameAs");
    expect(org).not.toHaveProperty("contactPoint");
    expect(org.logo).toMatch(/\/icon\.svg$/);
  });

  it("publie les réseaux et le contact renseignés", () => {
    const org = organizationData("desc", { sameAs: ["https://www.linkedin.com/company/x"], contactEmail: "contact@example.org" });
    expect(org).toMatchObject({
      sameAs: ["https://www.linkedin.com/company/x"],
      contactPoint: { email: "contact@example.org" },
    });
  });
});
