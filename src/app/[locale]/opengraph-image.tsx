import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";

/** Image de partage (Open Graph) par marché : nom du site et promesse, sans visuel médical. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = SITE_NAME;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0f4c5c",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700 }}>{SITE_NAME}</div>
        <div style={{ marginTop: 32, fontSize: 44, maxWidth: 900, lineHeight: 1.3 }}>{t("ogTagline")}</div>
      </div>
    ),
    size,
  );
}
