import { describe, expect, it } from "vitest";
import { adminGate } from "./adminGate";

describe("adminGate", () => {
  it("laisse passer le site public", () => {
    expect(adminGate("/fr/interventions", false)).toBe("pass");
    expect(adminGate("/administration", false)).toBe("pass");
    expect(adminGate("/apiculture", false)).toBe("pass");
  });

  it("renvoie vers la connexion pro sans session d'équipe validée", () => {
    expect(adminGate("/admin", false)).toBe("redirect");
    expect(adminGate("/admin/collections/users", false)).toBe("redirect");
  });

  it("refuse l'API Payload sans session d'équipe validée (connexion directe incluse)", () => {
    expect(adminGate("/api/users/login", false)).toBe("deny");
    expect(adminGate("/api", false)).toBe("deny");
  });

  it("autorise l'équipe interne après double authentification", () => {
    expect(adminGate("/admin", true)).toBe("allow");
    expect(adminGate("/api/users/me", true)).toBe("allow");
  });
});
