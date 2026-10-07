import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { canAccessAdmin, getProSession } from "./lib/auth";
import { adminGate, isBackOfficePath } from "./lib/auth/adminGate";

const intl = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
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
  matcher: ["/((?!_next|_vercel|.*\\..*).*)", "/(admin|api)/:path*"],
};
