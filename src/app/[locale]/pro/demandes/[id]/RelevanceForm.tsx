"use client";

import { useActionState, useId } from "react";
import { useTranslations } from "next-intl";
import { relevanceAction, type RelevanceState } from "@/lib/pro/actions";
import { buttonClasses } from "@/components/ui/button";

export function RelevanceForm({ requestId, initial }: { requestId: string; initial: boolean | null }) {
  const t = useTranslations("pro");
  const id = useId();
  const [state, action, pending] = useActionState<RelevanceState, FormData>(relevanceAction, {
    saved: initial !== null,
  });

  return (
    <form action={action} aria-labelledby={`${id}-q`} className="mt-12 rounded-card border border-border bg-surface p-6">
      <input type="hidden" name="requestId" value={requestId} />
      <h2 id={`${id}-q`} className="font-serif text-h3">
        {t("request.relevantQuestion")}
      </h2>
      <p className="mt-1 text-small text-muted">{t("request.relevantHelp")}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="submit" name="relevant" value="yes" disabled={pending} className={buttonClasses("secondary")}>
          {t("request.relevantYes")}
        </button>
        <button type="submit" name="relevant" value="no" disabled={pending} className={buttonClasses("secondary")}>
          {t("request.relevantNo")}
        </button>
      </div>
      <p aria-live="polite" className="mt-3 text-small">
        {state.saved ? t("request.relevantSaved") : state.error ? t("errors.unavailable") : ""}
      </p>
    </form>
  );
}
