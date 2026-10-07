import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { getDb } from "@/db/client";
import { getInterventions } from "@/content/interventions";
import { requireProSession } from "@/lib/auth/guard";
import { linkedSurgeonSlugs, listInbox } from "@/lib/pro/inbox";
import { SignOutButton } from "./SignOutButton";

export default async function InboxPage({ params }: PageProps<"/[locale]/pro">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await requireProSession(locale as Locale);
  const t = await getTranslations("pro.inbox");
  const format = await getFormatter();

  const db = getDb();
  const slugs = await linkedSurgeonSlugs(db, session.user.id);
  const items = await listInbox(db, slugs);
  const titles = new Map((await getInterventions(locale as Locale)).map((i) => [i.id as string, i.title]));

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-reading">
          <h1 className="font-serif text-h1 text-primary-strong">{t("title")}</h1>
          <p className="mt-4 text-muted">{t("lead")}</p>
        </div>
        <SignOutButton />
      </div>

      {slugs.length === 0 ? (
        <p className="mt-8 rounded-control border-l-4 border-primary bg-surface p-4">{t("noProfile")}</p>
      ) : items.length === 0 ? (
        <p className="mt-8">{t("empty")}</p>
      ) : (
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border text-small text-muted">
                <th scope="col" className="py-2 pr-4 font-medium">{t("date")}</th>
                <th scope="col" className="py-2 pr-4 font-medium">{t("intervention")}</th>
                <th scope="col" className="py-2 pr-4 font-medium">{t("city")}</th>
                <th scope="col" className="py-2 font-medium">{t("status")}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const date = format.dateTime(item.createdAt, { dateStyle: "medium" });
                return (
                  <tr key={item.id} className="border-b border-border">
                    <td className="whitespace-nowrap py-3 pr-4">
                      <Link
                        href={{ pathname: "/pro/demandes/[id]", params: { id: item.id } }}
                        aria-label={t("open", { date })}
                        className="underline underline-offset-4"
                      >
                        {date}
                      </Link>
                    </td>
                    <td className="py-3 pr-4">{titles.get(item.interventionId) ?? item.interventionId}</td>
                    <td className="py-3 pr-4">{item.city}</td>
                    <td className="py-3">
                      <span className={item.status === "sent" ? "font-semibold text-primary" : "text-muted"}>
                        {t(item.status)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
