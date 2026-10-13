"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonClasses } from "@/components/ui/button";
import { submitContactAction, type ContactState } from "@/lib/contact/actions";
import {
  CONTACT_CHANNELS,
  CONTACT_SLOTS,
  CONTACT_SUBJECTS,
  CONTACT_TIMEFRAMES,
  MESSAGE_MAX,
  type ContactField,
} from "@/lib/contact/schema";
import { trackEvent } from "@/lib/analytics";

const inputClass =
  "mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2 aria-invalid:border-danger";

/** Page d'origine (même site seulement), pour savoir d'où viennent les demandes. Jamais de paramètres. */
function originPage(): string {
  try {
    const ref = new URL(document.referrer);
    return ref.origin === window.location.origin ? ref.pathname.slice(0, 200) : "";
  } catch {
    return "";
  }
}

export function ContactForm({
  interventions,
  initialSubject,
  initialIntervention,
  privacySlug,
}: {
  interventions: { value: string; label: string }[];
  initialSubject?: string;
  initialIntervention?: string;
  privacySlug: string;
}) {
  const t = useTranslations("contact");
  const id = useId();
  const [startedAt] = useState(() => Date.now());
  const pageRef = useRef<HTMLInputElement>(null);
  const [state, action, pending] = useActionState<ContactState | null, FormData>(submitContactAction, null);
  const values = state?.values ?? {};
  const [subject, setSubject] = useState(
    typeof values.subject === "string" ? values.subject : (initialSubject ?? ""),
  );
  const [channel, setChannel] = useState(typeof values.channel === "string" ? values.channel : "email");
  const [length, setLength] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Page d'origine lue après l'affichage (le serveur ne connaît pas le référent).
  useEffect(() => {
    if (pageRef.current) pageRef.current.value = originPage();
  });

  useEffect(() => {
    if (state?.ok) {
      successRef.current?.focus();
      trackEvent("Demande de contact envoyée");
    } else if (state) {
      summaryRef.current?.focus();
    }
  }, [state]);

  if (state?.ok) {
    return (
      <div role="status" className="rounded-card border-l-4 border-success bg-surface p-6">
        <h2 ref={successRef} tabIndex={-1} className="font-serif text-h3 text-primary-strong">
          {t("successTitle")}
        </h2>
        <p className="mt-2">{t("success")}</p>
        <p className="mt-4">
          <Link href="/demande" className={buttonClasses("secondary")}>
            {t("projectLink")}
          </Link>
        </p>
        <p className="mt-2 text-small text-muted">{t("successRequest")}</p>
      </div>
    );
  }

  const errors: Partial<Record<ContactField, string>> = state && !state.ok && state.reason === "invalid" ? state.fieldErrors : {};
  const text = (name: ContactField) => (typeof values[name] === "string" ? (values[name] as string) : "");
  const describedBy = (name: ContactField, hint?: boolean) =>
    [hint ? `${id}-${name}-hint` : "", errors[name] ? `${id}-${name}-error` : ""].filter(Boolean).join(" ") || undefined;
  const fieldProps = (name: ContactField, hint?: boolean) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": describedBy(name, hint),
  });
  const error = (name: ContactField) =>
    errors[name] ? (
      <p id={`${id}-${name}-error`} className="mt-1 text-small text-danger">
        {t(`errors.${errors[name]}`)}
      </p>
    ) : null;
  const label = (name: ContactField, required: boolean) => (
    <label htmlFor={`${id}-${name}`} className="text-label">
      {t(`fields.${name}`)}
      {required && <span className="text-muted"> ({t("fields.required")})</span>}
    </label>
  );
  const formError = state && !state.ok ? (state.reason === "invalid" ? "errors.summary" : `errors.${state.reason}`) : null;
  const radioGroup = (name: "channel" | "subject", choices: readonly string[], value: string, onChange: (v: string) => void) => (
    <fieldset aria-describedby={errors[name] ? `${id}-${name}-error` : undefined}>
      <legend className="text-label">
        {t(`fields.${name}`)} <span className="text-muted">({t("fields.required")})</span>
      </legend>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {choices.map((choice) => (
          <label
            key={choice}
            className="flex min-h-11 cursor-pointer items-center gap-3 rounded-control border border-border-input bg-surface px-3 has-checked:border-primary has-checked:bg-accent-soft"
          >
            <input type="radio" name={name} value={choice} checked={value === choice} onChange={() => onChange(choice)} className="size-5" />
            {t(`options.${name}.${choice}`)}
          </label>
        ))}
      </div>
      {error(name)}
    </fieldset>
  );

  return (
    // Clé : après une erreur, le formulaire est regarni avec les valeurs renvoyées par le serveur.
    <form key={JSON.stringify(values)} action={action} noValidate className="space-y-10">
      {formError && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-control border border-danger p-4 text-danger">
          {t(formError)}
        </div>
      )}

      <section aria-labelledby={`${id}-s1`} className="space-y-6">
        <h2 id={`${id}-s1`} className="font-serif text-h3 text-primary-strong">
          1. {t("sections.subject")}
        </h2>
        {radioGroup("subject", CONTACT_SUBJECTS, subject, setSubject)}

        {subject === "project" && (
          <div className="space-y-6 rounded-card bg-sand p-5">
            <p className="text-small">
              {t("projectHint")}{" "}
              <Link href="/demande" className="font-medium text-primary underline underline-offset-4">
                {t("projectLink")}
              </Link>
            </p>
            <div>
              {label("intervention", false)}
              <select {...fieldProps("intervention")} defaultValue={text("intervention") || initialIntervention || ""} className={inputClass}>
                <option value="">{t("fields.choose")}</option>
                {interventions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {label("timeframe", false)}
              <select {...fieldProps("timeframe")} defaultValue={text("timeframe")} className={inputClass}>
                <option value="">{t("fields.choose")}</option>
                {CONTACT_TIMEFRAMES.map((value) => (
                  <option key={value} value={value}>
                    {t(`options.timeframe.${value}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div>
          {label("message", subject !== "project")}
          <p id={`${id}-message-hint`} className="text-small text-muted">
            {t("fields.messageHint")}
          </p>
          <textarea
            {...fieldProps("message", true)}
            rows={5}
            maxLength={MESSAGE_MAX}
            defaultValue={text("message")}
            onChange={(e) => setLength(e.target.value.length)}
            className={`${inputClass} min-h-32`}
          />
          <p aria-live="polite" className="mt-1 text-right text-small text-muted">
            {length} / {MESSAGE_MAX}
          </p>
          {error("message")}
        </div>
      </section>

      <section aria-labelledby={`${id}-s2`} className="space-y-6">
        <h2 id={`${id}-s2`} className="font-serif text-h3 text-primary-strong">
          2. {t("sections.contact")}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            {label("firstName", true)}
            <input {...fieldProps("firstName")} type="text" autoComplete="given-name" required defaultValue={text("firstName")} className={inputClass} />
            {error("firstName")}
          </div>
          <div>
            {label("email", true)}
            <input {...fieldProps("email")} type="email" autoComplete="email" required defaultValue={text("email")} className={inputClass} />
            {error("email")}
          </div>
        </div>
      </section>

      <section aria-labelledby={`${id}-s3`} className="space-y-6">
        <h2 id={`${id}-s3`} className="font-serif text-h3 text-primary-strong">
          3. {t("sections.callback")}
        </h2>
        {radioGroup("channel", CONTACT_CHANNELS, channel, setChannel)}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            {label("phone", channel === "phone")}
            <p id={`${id}-phone-hint`} className="text-small text-muted">
              {t("fields.phoneHint")}
            </p>
            <input {...fieldProps("phone", true)} type="tel" autoComplete="tel" defaultValue={text("phone")} className={inputClass} />
            {error("phone")}
          </div>
          <div>
            {label("slot", false)}
            <p className="text-small text-muted">&nbsp;</p>
            <select {...fieldProps("slot")} defaultValue={text("slot")} className={inputClass}>
              <option value="">{t("fields.choose")}</option>
              {CONTACT_SLOTS.map((value) => (
                <option key={value} value={value}>
                  {t(`options.slot.${value}`)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

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
        <p className="mt-2 text-small">
          <Link href={{ pathname: "/informations/[page]", params: { page: privacySlug } }} className="underline underline-offset-4">
            {t("fields.privacy")}
          </Link>
        </p>
      </div>

      {/* Pot de miel anti-spam : invisible pour les humains et les lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-website`}>{t("fields.website")}</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
      <input ref={pageRef} type="hidden" name="page" defaultValue="" />

      <button type="submit" disabled={pending} className={buttonClasses("primary", "w-full sm:w-auto")}>
        {pending ? t("fields.submitting") : t("fields.submit")}
      </button>
    </form>
  );
}
