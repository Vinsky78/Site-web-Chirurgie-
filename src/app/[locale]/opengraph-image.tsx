import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TAGLINE: Record<string, string> = {
  fr: "Comprendre avant de décider",
  "en-gb": "Understand before you decide",
};

/** Image de partage 1200×630 générée aux couleurs du site. */
export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
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
          background: "linear-gradient(135deg, #f5eee4 0%, #fbfaf8 55%, #d3e5e5 100%)",
          color: "#0a3642",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#8f432c", letterSpacing: 4, textTransform: "uppercase", display: "flex" }}>{SITE_NAME}</div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1, marginTop: 24, display: "flex" }}>{TAGLINE[locale] ?? TAGLINE.fr}</div>
        <div style={{ width: 160, height: 8, background: "#0f4c5c", marginTop: 40, display: "flex" }} />
      </div>
    ),
    size,
  );
}
