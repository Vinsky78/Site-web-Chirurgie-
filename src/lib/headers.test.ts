import { describe, expect, it } from "vitest";
import { scopeClientHints } from "./headers";

describe("indices client de Payload", () => {
  it("réserve Accept-CH et Critical-CH au back-office", () => {
    const rules = scopeClientHints([
      { source: "/:path*", headers: [{ key: "X-Frame-Options", value: "DENY" }] },
      {
        source: "/:path*",
        headers: [
          { key: "Accept-CH", value: "Sec-CH-Prefers-Color-Scheme" },
          { key: "Vary", value: "Sec-CH-Prefers-Color-Scheme" },
          { key: "Critical-CH", value: "Sec-CH-Prefers-Color-Scheme" },
        ],
      },
    ]);
    expect(rules).toEqual([
      { source: "/:path*", headers: [{ key: "X-Frame-Options", value: "DENY" }] },
      {
        source: "/admin/:path*",
        headers: [
          { key: "Accept-CH", value: "Sec-CH-Prefers-Color-Scheme" },
          { key: "Vary", value: "Sec-CH-Prefers-Color-Scheme" },
          { key: "Critical-CH", value: "Sec-CH-Prefers-Color-Scheme" },
        ],
      },
    ]);
  });

  it("garde les autres en-têtes de la même règle sur tout le site", () => {
    const rules = scopeClientHints([
      {
        source: "/:path*",
        headers: [
          { key: "Critical-CH", value: "Sec-CH-Prefers-Color-Scheme" },
          { key: "X-Powered-By", value: "Next.js, Payload" },
        ],
      },
    ]);
    expect(rules.map((rule) => [rule.source, rule.headers.map((h) => h.key)])).toEqual([
      ["/:path*", ["X-Powered-By"]],
      ["/admin/:path*", ["Critical-CH", "X-Powered-By"]],
    ]);
  });
});
