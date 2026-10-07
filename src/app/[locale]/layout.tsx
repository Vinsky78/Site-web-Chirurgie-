import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import { siteStructuredData } from "@/lib/jsonld";
import { INFO_PAGE_SLUGS } from "@/lib/pages";
import { socialMetadata } from "@/lib/seo";
import { BING_SITE_VERIFICATION, GOOGLE_SITE_VERIFICATION, SITE_NAME, SITE_URL } from "@/lib/site";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
    description: t("siteDescription"),
    ...socialMetadata({ locale: locale as Locale, title: SITE_NAME, description: t("siteDescription"), path: "" }),
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
      other: BING_SITE_VERIFICATION ? { "msvalidate.01": BING_SITE_VERIFICATION } : undefined,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0f4c5c",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "meta" });

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col antialiased">
        <div aria-hidden="true" className="scroll-progress" />
        <NextIntlClientProvider>
          <JsonLd data={siteStructuredData(locale, t("siteDescription"))} />
          <Header />
          <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <CookieBanner privacyHref={`/informations/${INFO_PAGE_SLUGS[locale].privacy}`} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
