import { describe, expect, it } from "vitest";
import { safeNext } from "./redirects";

describe("safeNext", () => {
  it("accepte le back-office", () => {
    expect(safeNext("/admin")).toBe("/admin");
    expect(safeNext("/admin/collections/surgeons")).toBe("/admin");
  });

  it.each(["https://exemple.com", "//exemple.com", "/administrateur", "/fr/pro", "", null, 42])("refuse %j", (value) => {
    expect(safeNext(value)).toBeUndefined();
  });
});
