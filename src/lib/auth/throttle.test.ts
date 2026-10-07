import { describe, expect, it } from "vitest";
import { LOCK_MS, LoginThrottle, MAX_FAILURES } from "./throttle";

describe("LoginThrottle", () => {
  it("bloque après 5 échecs puis libère au bout de 15 minutes", () => {
    let now = 0;
    const throttle = new LoginThrottle(() => now);
    for (let i = 0; i < MAX_FAILURES - 1; i++) throttle.fail("a@example.com");
    expect(throttle.isLocked("a@example.com")).toBe(false);
    throttle.fail("a@example.com");
    expect(throttle.isLocked("a@example.com")).toBe(true);
    expect(throttle.isLocked("b@example.com")).toBe(false);
    now = LOCK_MS + 1;
    expect(throttle.isLocked("a@example.com")).toBe(false);
  });

  it("remet le compteur à zéro après une connexion réussie", () => {
    const throttle = new LoginThrottle();
    for (let i = 0; i < MAX_FAILURES - 1; i++) throttle.fail("a@example.com");
    throttle.succeed("a@example.com");
    throttle.fail("a@example.com");
    expect(throttle.isLocked("a@example.com")).toBe(false);
  });
});
