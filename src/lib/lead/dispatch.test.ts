import { describe, expect, it, vi } from "vitest";
import type { Surgeon } from "@/lib/surgeons/types";
import { dispatchLead } from "./dispatch";
import type { StoredLead } from "./repository";

const lead = { id: "l1", country: "FR", interventionId: "rhinoplasty" } as StoredLead;

const surgeon = (id: string, over: Partial<Surgeon> = {}): Surgeon => ({
  id,
  name: id,
  country: "FR",
  city: "Paris",
  specialties: ["rhinoplasty"],
  contactEmail: `${id}@example.org`,
  verification: { status: "verified", registry: "RPPS", registrationNumber: "0", verifiedAt: "2026-01-01" },
  ...over,
});

describe("dispatchLead", () => {
  const surgeons = [surgeon("a"), surgeon("b"), surgeon("c"), surgeon("d"), surgeon("p", { verification: { status: "pending" } })];

  it("envoie aux chirurgiens choisis", async () => {
    const notifier = { notify: vi.fn().mockResolvedValue(undefined) };
    const result = await dispatchLead(lead, ["a", "b"], { notifier, surgeons });
    expect(result).toEqual({ ok: true, sent: ["a", "b"] });
    expect(notifier.notify).toHaveBeenCalledTimes(2);
  });

  it("refuse 0 ou plus de 3 chirurgiens", async () => {
    const notifier = { notify: vi.fn() };
    expect(await dispatchLead(lead, [], { notifier, surgeons })).toEqual({ ok: false, reason: "selection" });
    expect(await dispatchLead(lead, ["a", "b", "c", "d"], { notifier, surgeons })).toEqual({ ok: false, reason: "selection" });
    expect(notifier.notify).not.toHaveBeenCalled();
  });

  it("refuse un chirurgien non vérifié, inconnu ou d'un autre pays", async () => {
    const notifier = { notify: vi.fn() };
    expect(await dispatchLead(lead, ["p"], { notifier, surgeons })).toEqual({ ok: false, reason: "not-eligible" });
    expect(await dispatchLead(lead, ["zz"], { notifier, surgeons })).toEqual({ ok: false, reason: "unknown-surgeon" });
    const gb = [surgeon("g", { country: "GB" })];
    expect(await dispatchLead(lead, ["g"], { notifier, surgeons: gb })).toEqual({ ok: false, reason: "not-eligible" });
  });

  it("signale l'indisponibilité si l'envoi échoue", async () => {
    const notifier = { notify: vi.fn().mockRejectedValue(new Error("smtp")) };
    expect(await dispatchLead(lead, ["a"], { notifier, surgeons })).toEqual({ ok: false, reason: "unavailable" });
  });
});
