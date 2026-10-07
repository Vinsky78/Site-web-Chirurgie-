"use client";

import { useActionState, useId } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { resetPasswordAction, type ResetState } from "@/lib/auth/actions";
import { buttonClasses } from "@/components/ui/button";
import { inputClass } from "../../fields";

export function NewPasswordForm({ token }: { token: string }) {
  const t = useTranslations("pro");
  const id = useId();
  const [state, action, pending] = useActionState<ResetState, FormData>(resetPasswordAction, {});

  if (state.done) {
    return (
      <div role="status" className="mt-8 space-y-4">
        <p className="rounded-card border-l-4 border-success bg-surface p-4">{t("password.done")}</p>
        <Link href="/pro/connexion" className={buttonClasses("primary")}>
          {t("password.signIn")}
        </Link>
      </div>
    );
  }
  return (
    <form action={action} className="mt-8 space-y-6">
      <input type="hidden" name="token" value={token} />
      {state.error && (
        <p role="alert" className="rounded-control border border-danger p-4 text-danger">
          {t(`errors.${state.error}`)}
          {state.error === "linkInvalid" && (
            <>
              {" "}
              <Link href="/pro/mot-de-passe" className="underline underline-offset-4">
                {t("password.forgot")}
              </Link>
            </>
          )}
        </p>
      )}
      <div>
        <label htmlFor={`${id}-password`} className="text-label">
          {t("password.new")}
        </label>
        <input
          id={`${id}-password`}
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={12}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={`${id}-confirm`} className="text-label">
          {t("password.confirm")}
        </label>
        <input
          id={`${id}-confirm`}
          name="confirm"
          type="password"
          autoComplete="new-password"
          minLength={12}
          required
          className={inputClass}
        />
      </div>
      <button type="submit" disabled={pending} className={buttonClasses("primary")}>
        {t("password.save")}
      </button>
    </form>
  );
}
