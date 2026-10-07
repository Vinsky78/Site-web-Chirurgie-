import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-serif text-3xl font-semibold">{t("title")}</h1>
      <p className="mt-6">
        <Link href="/" className="text-primary underline underline-offset-4">
          {t("back")}
        </Link>
      </p>
    </div>
  );
}
