"use client";

import { useActionState, useId } from "react";
import { useTranslations } from "next-intl";
import { requestResetAction, type ResetRequestState } from "@/lib/auth/actions";
import { buttonClasses } from "@/components/ui/button";
import { inputClass } from "../fields";

export function ResetRequestForm() {
  const t = useTranslations("pro");
  const id = useId();
  const [state, action, pending] = useActionState<ResetRequestState, FormData>(requestResetAction, {});

  if (state.sent) {
    return (
      <p role="status" className="mt-8 rounded-card border-l-4 border-success bg-surface p-4">
        {t("password.sent")}
      </p>
    );
  }
  return (
    <form action={action} className="mt-8 space-y-6">
      {state.error && (
        <p role="alert" className="rounded-control border border-danger p-4 text-danger">
          {t(`errors.${state.error}`)}
        </p>
      )}
      <div>
        <label htmlFor={`${id}-email`} className="text-label">
          {t("password.email")}
        </label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="username" required className={inputClass} />
      </div>
      <button type="submit" disabled={pending} className={buttonClasses("primary")}>
        {t("password.send")}
      </button>
    </form>
  );
}
