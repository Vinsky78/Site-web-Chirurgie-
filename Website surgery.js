#!/usr/bin/env node
/**
 * Raccourci vers scripts/website-surgery.mts (outils de contenu).
 *   node "Website surgery.js" check
 *   node "Website surgery.js" standalone [dossier]
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const result = spawnSync("npx", ["tsx", join(root, "scripts/website-surgery.mts"), ...process.argv.slice(2)], {
  cwd: root,
  stdio: "inherit",
});
process.exit(result.status ?? 1);
