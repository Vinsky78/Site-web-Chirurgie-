import { randomBytes } from "node:crypto";
import { describe, expect, it } from "vitest";
import { checkLaunchReadiness } from "./readiness";

const key = () => randomBytes(32).toString("base64");
const ready = {
  NEXT_PUBLIC_SITE_URL: "https://www.eclaira.fr",
  NEXT_PUBLIC_SITE_NAME: "Éclaira",
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: "eclaira.fr",
  DATABASE_URL: "postgres://app:secret@db.hds-provider.net:5432/eclaira",
  HDS_PROVIDER: "OVHcloud",
  LEAD_ENCRYPTION_KEYS: `k1:${key()}`,
  LEAD_ENCRYPTION_ACTIVE_KEY: "k1",
  LEAD_HMAC_KEY: key(),
  PAYLOAD_SECRET: "p".repeat(64),
  BETTER_AUTH_SECRET: "b".repeat(44),
  CONTENT_SOURCE: "cms",
  BREVO_API_KEY: "xkeysib-test",
  EMAIL_FROM: "ne-pas-repondre@eclaira.fr",
  TEAM_EMAIL: "equipe@eclaira.fr",
};

describe("contrôle de mise en production", () => {
  it("aucune erreur quand tout est configuré", () => {
    expect(checkLaunchReadiness(ready).errors).toEqual([]);
  });

  it("refuse une base locale, des chirurgiens fictifs et le stockage en mémoire", () => {
    const { errors } = checkLaunchReadiness({
      ...ready,
      DATABASE_URL: "postgres://chirurgie@localhost:5433/chirurgie",
      DIRECTORY_FIXTURES: "1",
      LEAD_STORAGE: "memory",
    });
    expect(errors).toHaveLength(3);
  });

  it("refuse une adresse provisoire ou sans HTTPS", () => {
    expect(checkLaunchReadiness({ ...ready, NEXT_PUBLIC_SITE_URL: "http://localhost:3000" }).errors).toHaveLength(2);
    expect(checkLaunchReadiness({ ...ready, NEXT_PUBLIC_SITE_URL: "https://eclaira.example" }).errors).toHaveLength(1);
  });

  it("exige les secrets, les clés de chiffrement et les e-mails", () => {
    const { errors } = checkLaunchReadiness({ ...ready, PAYLOAD_SECRET: "court", LEAD_HMAC_KEY: undefined, TEAM_EMAIL: undefined });
    expect(errors.map((e) => e.split(" ")[0])).toEqual(["Chiffrement", "PAYLOAD_SECRET", "TEAM_EMAIL"]);
  });

  it("ne révèle jamais la valeur d'un secret", () => {
    const report = checkLaunchReadiness({ ...ready, PAYLOAD_SECRET: "ultra-secret" });
    expect(JSON.stringify(report)).not.toContain("ultra-secret");
  });

  it("signale sans bloquer : formulaire fermé, validation juridique, hébergeur inconnu", () => {
    const { errors, warnings } = checkLaunchReadiness({ ...ready, REQUESTS_PAUSED: "1", HDS_PROVIDER: "Autre" });
    expect(errors).toEqual([]);
    expect(warnings.join("\n")).toMatch(/REQUESTS_PAUSED[\s\S]*HDS_PROVIDER|HDS_PROVIDER[\s\S]*REQUESTS_PAUSED/);
    expect(warnings.join("\n")).toContain("FR : validation juridique");
  });
});
