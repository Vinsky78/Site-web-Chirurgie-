"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";
import { submitApplicationAction, type ApplicationState } from "@/lib/applications/actions";
import type { ApplicationField } from "@/lib/applications/schema";
import { trackEvent } from "@/lib/analytics";

interface Option {
  value: string;
  label: string;
}

const inputClass =
  "mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2 aria-invalid:border-danger";

export function ApplicationForm({
  options,
  defaultCountry,
  privacySlug,
}: {
  options: { countries: Option[]; specialties: Option[]; interventions: Option[]; languages: Option[] };
  defaultCountry: string;
  privacySlug: string;
}) {
  const t = useTranslations("join");
  const id = useId();
  const [startedAt] = useState(() => Date.now());
  const [state, action, pending] = useActionState<ApplicationState | null, FormData>(submitApplicationAction, null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (state?.ok) {
      successRef.current?.focus();
      trackEvent("Candidature envoyée");
    } else if (state) {
      summaryRef.current?.focus();
    }
  }, [state]);

  if (state?.ok) {
    return (
      <div role="status" className="mt-8 rounded-card border-l-4 border-success bg-surface p-6">
        <h3 ref={successRef} tabIndex={-1} className="text-h3">
          {t("successTitle")}
        </h3>
        <p className="mt-2">{t("success")}</p>
      </div>
    );
  }

  const errors: Partial<Record<ApplicationField, string>> = state && !state.ok && state.reason === "invalid" ? state.fieldErrors : {};
  const values = state?.values ?? {};
  const text = (name: ApplicationField) => (typeof values[name] === "string" ? (values[name] as string) : "");
  const list = (name: ApplicationField) => (Array.isArray(values[name]) ? (values[name] as string[]) : []);
  const fieldProps = (name: ApplicationField) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });
  const error = (name: ApplicationField) =>
    errors[name] ? (
      <p id={`${id}-${name}-error`} className="mt-1 text-small text-danger">
        {t(`errors.${errors[name]}`)}
      </p>
    ) : null;

  const textField = (name: ApplicationField, type: string, autoComplete: string, hint?: string, required = true) => (
    <div>
      <label htmlFor={`${id}-${name}`} className="text-label">
        {t(`fields.${name}`)}
      </label>
      {hint && <p className="text-small text-muted">{hint}</p>}
      <input {...fieldProps(name)} type={type} autoComplete={autoComplete} required={required} defaultValue={text(name)} className={inputClass} />
      {error(name)}
    </div>
  );

  const selectField = (name: ApplicationField, choices: Option[], initial?: string) => (
    <div>
      <label htmlFor={`${id}-${name}`} className="text-label">
        {t(`fields.${name}`)}
      </label>
      <select {...fieldProps(name)} required defaultValue={text(name) || initial || ""} className={inputClass}>
        <option value="" disabled>
          {t("fields.choose")}
        </option>
        {choices.map((choice) => (
          <option key={choice.value} value={choice.value}>
            {choice.label}
          </option>
        ))}
      </select>
      {error(name)}
    </div>
  );

  const checkboxGroup = (name: ApplicationField, choices: Option[], initial: string[] = []) => {
    const checked = list(name).length > 0 ? list(name) : initial;
    return (
      <fieldset aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}>
        <legend className="text-label">{t(`fields.${name}`)}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {choices.map((choice) => (
            <label key={choice.value} className="flex min-h-11 items-center gap-3">
              <input type="checkbox" name={name} value={choice.value} defaultChecked={checked.includes(choice.value)} className="size-5" />
              {choice.label}
            </label>
          ))}
        </div>
        {error(name)}
      </fieldset>
    );
  };

  const formError = state && !state.ok ? (state.reason === "invalid" ? "errorSummary" : `errors.${state.reason}`) : null;

  return (
    // Clé : après une erreur, le formulaire est regarni avec les valeurs renvoyées par le serveur.
    <form key={JSON.stringify(values)} action={action} noValidate className="mt-6 space-y-6">
      {formError && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-control border border-danger p-4 text-danger">
          {t(formError)}
        </div>
      )}
      {textField("fullName", "text", "name", t("fields.fullNameHint"))}
      {textField("email", "email", "email")}
      {textField("phone", "tel", "tel", undefined, false)}
      {selectField("country", options.countries, defaultCountry)}
      {textField("registryNumber", "text", "off", t("fields.registryNumberHint"))}
      {selectField("specialty", options.specialties)}
      {textField("city", "text", "address-level2")}
      {checkboxGroup("interventions", options.interventions)}
      {checkboxGroup("languages", options.languages)}

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            required
            defaultChecked={values.consent === true}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${id}-consent-error` : undefined}
            className="mt-1 size-5 shrink-0"
          />
          <span>{t("fields.consent")}</span>
        </label>
        {error("consent")}
      </div>

      {/* Pot de miel anti-spam : invisible pour les humains et les lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>{t("fields.website")}</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <p className="text-small text-muted">
        {t("privacy")}{" "}
        <Link href={{ pathname: "/informations/[page]", params: { page: privacySlug } }} className="underline underline-offset-4">
          {t("privacyLink")}
        </Link>
        .
      </p>
      <button type="submit" disabled={pending} className={buttonClasses("primary")}>
        {pending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
