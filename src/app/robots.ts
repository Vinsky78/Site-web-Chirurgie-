import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Robots d'IA autorisés explicitement (GEO) : l'information publique peut être citée, les pages privées jamais. */
const AI_CRAWLERS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended"];

const PRIVATE_PATHS = ["/*/demande", "/*/pro", "/*/design-system"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
