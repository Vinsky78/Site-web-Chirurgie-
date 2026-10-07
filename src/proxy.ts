import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Toutes les routes sauf API, back-office (/admin), fichiers internes Next.js et fichiers statiques.
  matcher: ["/((?!api|admin|_next|_vercel|.*\\..*).*)"],
};
