/** Génère des clés de chiffrement pour .env.local (npm run keys:generate). Ne jamais les committer. */
import { randomBytes } from "node:crypto";

const key = () => randomBytes(32).toString("base64");
console.log(`LEAD_ENCRYPTION_KEYS=k1:${key()}`);
console.log("LEAD_ENCRYPTION_ACTIVE_KEY=k1");
console.log(`LEAD_HMAC_KEY=${key()}`);
