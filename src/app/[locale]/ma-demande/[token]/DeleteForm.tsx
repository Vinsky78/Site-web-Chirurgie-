"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { useTranslations } from "next-intl";
import { deleteRequestAction, type DeleteState } from "@/lib/lead/manageActions";
import { buttonClasses } from "@/components/ui/button";

export function DeleteForm({ token }: { token: string }) {
  const t = useTranslations("manage");
  const id = useId();
  const [state, action, pending] = useActionState<DeleteState, FormData>(deleteRequestAction, {});
  const messageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (state.deleted || state.error) messageRef.current?.focus();
  }, [state]);

  if (state.deleted) {
    return (
      <p ref={messageRef} tabIndex={-1} role="status" className="mt-12 rounded-card border-l-4 border-success bg-surface p-6">
        {t("deleted")}
      </p>
    );
  }

  return (
    <form action={action} aria-labelledby={`${id}-title`} className="mt-12 rounded-card border border-danger p-6">
      <input type="hidden" name="token" value={token} />
      <h2 id={`${id}-title`} className="font-serif text-h3">
        {t("deleteTitle")}
      </h2>
      <p className="mt-2">{t("deleteText")}</p>
      {state.error && (
        <p ref={messageRef} tabIndex={-1} role="alert" className="mt-4 text-danger">
          {t("error")}
        </p>
      )}
      <div className="mt-4 flex items-start gap-3">
        <input
          id={`${id}-confirm`}
          name="confirm"
          type="checkbox"
          value="yes"
          required
          className="mt-1 size-5 shrink-0 accent-[var(--color-danger)]"
        />
        <label htmlFor={`${id}-confirm`}>{t("deleteConfirm")}</label>
      </div>
      <button type="submit" disabled={pending} className={buttonClasses("primary", "mt-6")}>
        {t("deleteAction")}
      </button>
    </form>
  );
}
