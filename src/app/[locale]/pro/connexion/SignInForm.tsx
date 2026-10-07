"use client";

import { startTransition, useActionState, useEffect, useId, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { signInAction, type SignInState } from "@/lib/auth/actions";
import { buttonClasses } from "@/components/ui/button";
import { inputClass } from "../fields";

export function SignInForm({ next }: { next?: string }) {
  const t = useTranslations("pro");
  const id = useId();
  const [state, action, pending] = useActionState<SignInState, FormData>(signInAction, { step: "password", next });
  const headingRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);

  // Le focus suit l'étape (WCAG 2.4.3) puis l'erreur éventuelle.
  useEffect(() => {
    if (state.error) errorRef.current?.focus();
    else if (state.step === "code") headingRef.current?.focus();
  }, [state]);

  const errorId = `${id}-error`;
  const error = state.error && (
    <p id={errorId} ref={errorRef} tabIndex={-1} role="alert" className="rounded-control border border-danger p-4 text-danger">
      {t(`errors.${state.error}`)}
    </p>
  );

  return (
    <form
      action={action}
      // Avec JavaScript : envoi sans réinitialiser le formulaire, pour garder l'adresse saisie après une erreur.
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        startTransition(() => action(data));
      }}
      className="mt-8 space-y-6"
      aria-describedby={state.error ? errorId : undefined}
    >
      {state.next && <input type="hidden" name="next" value={state.next} />}
      {state.step === "password" ? (
        <>
          {error}
          <div>
            <label htmlFor={`${id}-email`} className="text-label">
              {t("signIn.email")}
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              autoComplete="username"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`${id}-password`} className="text-label">
              {t("signIn.password")}
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
          <div className="flex flex-wrap items-center gap-6">
            <button type="submit" disabled={pending} className={buttonClasses("primary")}>
              {t("signIn.submit")}
            </button>
            <Link href="/pro/mot-de-passe" className="underline underline-offset-4">
              {t("password.forgot")}
            </Link>
          </div>
        </>
      ) : (
        <>
          <input type="hidden" name="step" value="code" />
          <h2 ref={headingRef} tabIndex={-1} className="font-serif text-h2 focus:outline-none">
            {t("signIn.codeTitle")}
          </h2>
          {error}
          <div>
            <label htmlFor={`${id}-code`} className="text-label">
              {t("signIn.code")}
            </label>
            <p id={`${id}-code-help`} className="text-small text-muted">
              {t("signIn.codeHelp")}
            </p>
            <input
              id={`${id}-code`}
              name="code"
              autoComplete="one-time-code"
              inputMode="text"
              required
              aria-describedby={`${id}-code-help`}
              className={inputClass}
            />
          </div>
          <button type="submit" disabled={pending} className={buttonClasses("primary")}>
            {t("signIn.verify")}
          </button>
        </>
      )}
    </form>
  );
}
