/** Purge quotidienne des demandes arrivées à échéance (npm run leads:purge). */
import { getDb } from "../src/db/client";
import { purgeExpiredLeads } from "../src/lib/lead/purge";

const count = await purgeExpiredLeads(getDb());
console.log(`${count} demande(s) supprimée(s).`);
process.exit(0);
