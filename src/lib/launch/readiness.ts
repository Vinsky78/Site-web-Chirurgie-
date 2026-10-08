import { keyringFromEnv } from "@/lib/crypto/fieldCrypto";
import { ACTIVE_COUNTRIES, COUNTRY_RULES } from "@/lib/countries";

type Env = Record<string, string | undefined>;

export interface ReadinessReport {
  /** Bloquant : la mise en production est refusée. */
  errors: string[];
  /** À lire avant d'ouvrir au public. */
  warnings: string[];
}

/** Hébergeurs certifiés HDS envisagés en Phase 4. */
const KNOWN_HDS_PROVIDERS = ["ovhcloud", "clever cloud", "scaleway", "outscale"];

function isLocalHost(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return ["localhost", "127.0.0.1", "::1", "[::1]"].includes(hostname) || hostname.endsWith(".local");
  } catch {
    return true;
  }
}

const isPlaceholder = (value: string) => /\.example\b|votre-domaine|exemple\./i.test(value);

/**
 * Contrôle de mise en production (plan de lancement, Phase 7) : configuration
 * de l'environnement, sans se connecter à quoi que ce soit. Aucun secret
 * n'apparaît dans le rapport, seulement le nom des variables.
 */
export function checkLaunchReadiness(env: Env): ReadinessReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  const need = (name: string, message: string) => {
    if (!env[name]) errors.push(`${name} : ${message}`);
    return Boolean(env[name]);
  };

  // Adresse publique
  if (need("NEXT_PUBLIC_SITE_URL", "adresse publique du site manquante.")) {
    const url = env.NEXT_PUBLIC_SITE_URL!;
    if (!url.startsWith("https://")) errors.push("NEXT_PUBLIC_SITE_URL : HTTPS obligatoire.");
    if (isLocalHost(url) || isPlaceholder(url)) errors.push("NEXT_PUBLIC_SITE_URL : adresse locale ou provisoire.");
  }

  // Données de santé : hébergement HDS et chiffrement
  if (need("DATABASE_URL", "base de données manquante.") && isLocalHost(env.DATABASE_URL!)) {
    errors.push("DATABASE_URL : base locale ; les données de santé doivent être chez un hébergeur certifié HDS.");
  }
  if (need("HDS_PROVIDER", "nommer l'hébergeur certifié HDS sous contrat (déclaration de l'équipe).")) {
    if (!KNOWN_HDS_PROVIDERS.includes(env.HDS_PROVIDER!.trim().toLowerCase())) {
      warnings.push(`HDS_PROVIDER : « ${env.HDS_PROVIDER} » n'est pas dans la liste de la Phase 4, vérifier son certificat HDS.`);
    }
  }
  try {
    keyringFromEnv(env);
  } catch (error) {
    errors.push(`Chiffrement des demandes : ${error instanceof Error ? error.message : "clés invalides."}`);
  }
  if (env.LEAD_STORAGE === "memory") errors.push("LEAD_STORAGE=memory : les demandes seraient perdues au redémarrage.");

  // Secrets
  for (const name of ["PAYLOAD_SECRET", "BETTER_AUTH_SECRET"]) {
    if (need(name, "secret manquant.") && env[name]!.length < 32) errors.push(`${name} : 32 caractères au moins.`);
  }

  // Contenus et annuaire
  if (env.CONTENT_SOURCE !== "cms") errors.push("CONTENT_SOURCE=cms : les fiches relues viennent du CMS en production.");
  if (env.DIRECTORY_FIXTURES === "1") errors.push("DIRECTORY_FIXTURES=1 : les chirurgiens fictifs seraient publiés.");

  // E-mails
  need("BREVO_API_KEY", "sans clé, aucun e-mail ne part (patients, chirurgiens, candidatures).");
  if (need("EMAIL_FROM", "adresse d'expédition manquante.") && isPlaceholder(env.EMAIL_FROM!)) {
    errors.push("EMAIL_FROM : adresse provisoire.");
  }
  need("TEAM_EMAIL", "l'équipe ne serait pas prévenue des candidatures de chirurgiens.");

  // À lire, sans bloquer
  if (!env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN) warnings.push("NEXT_PUBLIC_PLAUSIBLE_DOMAIN : mesure d'audience inactive.");
  if (!env.NEXT_PUBLIC_SITE_NAME) warnings.push("NEXT_PUBLIC_SITE_NAME : nom par défaut (Éclaira), marque à confirmer.");
  if (env.REQUESTS_PAUSED === "1") warnings.push("REQUESTS_PAUSED=1 : le formulaire de demande est fermé (bêta).");
  for (const country of ACTIVE_COUNTRIES) {
    if (COUNTRY_RULES[country].legalReview !== "validated") {
      warnings.push(`${country} : validation juridique locale non enregistrée (legalReview dans src/lib/countries.ts).`);
    }
  }
  return { errors, warnings };
}
