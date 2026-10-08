import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ClientMessages } from "@/components/ClientMessages";

export async function generateMetadata({ params }: LayoutProps<"/[locale]/pro">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pro" });
  // Espace authentifié : jamais indexé.
  return { title: t("metaTitle"), robots: { index: false, follow: false } };
}

export default function ProLayout({ children }: LayoutProps<"/[locale]/pro">) {
  return (
    <ClientMessages namespaces={["pro"]}>
      <div className="mx-auto max-w-page px-4 py-12">{children}</div>
    </ClientMessages>
  );
}
