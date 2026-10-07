"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { useTranslations } from "next-intl";
import { enrolAction, type EnrolState } from "@/lib/auth/actions";
import { buttonClasses } from "@/components/ui/button";
import { inputClass } from "../fields";

/** L'état est fusionné pour garder le QR code et les codes de secours affichés après une erreur de saisie. */
async function mergedEnrol(prev: EnrolState, form: FormData): Promise<EnrolState> {
  const next = await enrolAction(prev, form);
  return { ...prev, ...next, error: next.error };
}

export function EnrolForm() {
  const t = useTranslations("pro");
  const id = useId();
  const [state, action, pending] = useActionState<EnrolState, FormData>(mergedEnrol, { step: "password" });
  const errorRef = useRef<HTMLParagraphElement>(null);
  const stepRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (state.error) errorRef.current?.focus();
    else if (state.step === "code") stepRef.current?.focus();
  }, [state]);

  const error = state.error && (
    <p ref={errorRef} tabIndex={-1} role="alert" className="rounded-control border border-danger p-4 text-danger">
      {t(`errors.${state.error}`)}
    </p>
  );

  if (state.step === "password") {
    return (
      <form action={action} className="mt-8 space-y-6">
        <p>{t("security.step1")}</p>
        {error}
        <div>
          <label htmlFor={`${id}-password`} className="text-label">
            {t("security.password")}
          </label>
          <input
            id={`${id}-password`}
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className={inputClass}
          />
        </div>
        <button type="submit" disabled={pending} className={buttonClasses("primary")}>
          {t("security.generate")}
        </button>
      </form>
    );
  }

  return (
    <form action={action} className="mt-8 space-y-6">
      <input type="hidden" name="step" value="code" />
      <p ref={stepRef} tabIndex={-1} className="focus:outline-none">
        {t("security.step2")}
      </p>
      {state.qrSvg && (
        <div
          role="img"
          aria-label={t("security.qrAlt")}
          className="size-48 rounded-card border border-border bg-white p-2 [&>svg]:size-full"
          // SVG produit côté serveur par la bibliothèque qrcode à partir de l'URI otpauth://.
          dangerouslySetInnerHTML={{ __html: state.qrSvg }}
        />
      )}
      {state.secret && (
        <p className="text-small">
          {t("security.manual")} <code className="break-all font-mono">{state.secret}</code>
        </p>
      )}
      {state.backupCodes && (
        <section aria-labelledby={`${id}-backup`} className="rounded-card border border-border bg-surface p-4">
          <h2 id={`${id}-backup`} className="font-serif text-h3">
            {t("security.backupTitle")}
          </h2>
          <p className="mt-1 text-small text-muted">{t("security.backupHelp")}</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 font-mono text-small">
            {state.backupCodes.map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        </section>
      )}
      {error}
      <div>
        <label htmlFor={`${id}-code`} className="text-label">
          {t("security.code")}
        </label>
        <input
          id={`${id}-code`}
          name="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9 ]*"
          required
          className={inputClass}
        />
      </div>
      <button type="submit" disabled={pending} className={buttonClasses("primary")}>
        {t("security.confirm")}
      </button>
    </form>
  );
}
