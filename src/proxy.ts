import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { canAccessAdmin, getProSession } from "./lib/auth";
import { adminGate, isBackOfficePath } from "./lib/auth/adminGate";
import { isRootFile, isStrayFile } from "./lib/paths";

const intl = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isRootFile(pathname)) return NextResponse.next();
  if (isStrayFile(pathname)) {
    // Page 404 du site dans la langue par défaut, avec le statut 404.
    return NextResponse.rewrite(new URL(`/${routing.defaultLocale}/introuvable`, request.url));
  }
  if (!isBackOfficePath(pathname)) return intl(request);

  const session = await getProSession(request.headers);
  switch (adminGate(pathname, canAccessAdmin(session))) {
    case "allow":
      return NextResponse.next();
    case "deny":
      return NextResponse.json({ error: "Double authentification requise." }, { status: 401 });
    default: {
      const url = new URL(`/${routing.defaultLocale}/pro/connexion`, request.url);
      url.searchParams.set("next", "/admin");
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  // Pages : toutes sauf fichiers internes Next.js et fichiers statiques.
  // /admin et /api : toujours, fichiers compris, pour la vérification de double authentification.
  // Premier segment contenant un point : renvoyé vers la 404 du site (isStrayFile).
  matcher: ["/((?!_next|_vercel|.*\\..*).*)", "/(admin|api)/:path*", "/((?!_next|_vercel)[^/]*\\.[^/]*)/:path*"],
};
