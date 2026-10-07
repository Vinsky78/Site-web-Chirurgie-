import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <>
      <PageHeader title={t("title")} eyebrow="404" />
      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10">
        <Link href="/" className={buttonClasses()}>
          {t("back")}
        </Link>
      </div>
    </>
  );
}
