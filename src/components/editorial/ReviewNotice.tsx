import { getFormatter, getTranslations } from "next-intl/server";
import type { MedicalReview } from "@/content/types";

/** Relecteur (nom, qualification, date) ou date de mise à jour, et bandeau tant que le contenu n'est pas relu. */
export async function ReviewNotice({ review, updatedAt }: { review: MedicalReview; updatedAt: string }) {
  const t = await getTranslations("intervention");
  const format = await getFormatter();
  const formatDate = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "long" });

  return (
    <>
      <p className="mt-4 text-small text-muted">
        {review.status === "reviewed"
          ? t("reviewedBy", {
              reviewer: review.reviewer,
              qualification: review.qualification,
              date: formatDate(review.reviewedAt),
            })
          : t("updatedAt", { date: formatDate(updatedAt) })}
      </p>
      {review.status === "draft" && (
        <p role="note" className="mt-6 rounded-control bg-warning-bg p-4 text-warning-ink">
          {t("draftBanner")}
        </p>
      )}
    </>
  );
}
