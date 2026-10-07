"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { submitLeadAction } from "@/lib/lead/actions";
import {
  BUDGETS,
  createLeadSchema,
  isPregnancyRelevant,
  SMOKER,
  STEP_FIELDS,
  TIMEFRAMES,
  YES_NO,
  type LeadInput,
} from "@/lib/lead/schema";
import type { SubmitResult } from "@/lib/lead/submit";
import { ACTIVE_COUNTRIES } from "@/lib/countries";
import type { InterventionId } from "@/content/types";

type Field = keyof LeadInput;
type Values = Partial<Record<Field, string | boolean>>;
type Errors = Partial<Record<Field, string>>;

const STEPS = ["project", "health", "reflection", "contact"] as const;
type Step = (typeof STEPS)[number];

/** Nombre de réponses « oui » à l'étape de réflexion à partir duquel on affiche un message de soutien. */
const REFLECTION_THRESHOLD = 2;
const REFLECTION_QUESTIONS = ["q1", "q2", "q3"] as const;

interface Props {
  interventions: { id: InterventionId; title: string }[];
  initialIntervention?: InterventionId;
  privacySlug: string;
}

function toCandidate(values: Values, startedAt: number): Record<string, unknown> {
  const str = (field: Field) => (typeof values[field] === "string" && values[field] !== "" ? values[field] : undefined);
  return {
    interventionId: str("interventionId"),
    country: str("country"),
    city: str("city"),
    timeframe: str("timeframe"),
    budget: str("budget"),
    smoker: str("smoker"),
    previousSurgerySameArea: str("previousSurgerySameArea"),
    pregnancyPlanned: isPregnancyRelevant(str("interventionId") as string | undefined)
      ? str("pregnancyPlanned")
      : undefined,
    firstName: str("firstName"),
    email: str("email"),
    phone: str("phone"),
    birthYear: str("birthYear") ? Number(str("birthYear")) : undefined,
    isAdult: values.isAdult === true,
    consentHealthData: values.consentHealthData === true,
    consentNewsletter: values.consentNewsletter === true,
    website: typeof values.website === "string" ? values.website : "",
    startedAt,
  };
}

function validateStep(step: Step, values: Values, startedAt: number): Errors {
  if (step === "reflection") return {};
  const fields = STEP_FIELDS[step] as readonly Field[];
  const result = createLeadSchema().safeParse(toCandidate(values, startedAt));
  const errors: Errors = {};
  for (const issue of result.error?.issues ?? []) {
    const field = issue.path[0] as Field;
    if (fields.includes(field) && !errors[field]) errors[field] = issue.message;
  }
  // Les règles inter-champs du schéma ne s'exécutent que si tout l'objet est valide :
  // on les rejoue ici pour l'étape en cours.
  if (step === "health" && isPregnancyRelevant(String(values.interventionId)) && !values.pregnancyPlanned) {
    errors.pregnancyPlanned ??= "required";
  }
  return errors;
}

export function RequestForm({ interventions, initialIntervention, privacySlug }: Props) {
  const t = useTranslations("form");
  const formId = useId();
  const [startedAt] = useState(() => Date.now());
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Values>({
    interventionId: initialIntervention ?? "",
    country: ACTIVE_COUNTRIES.length === 1 ? ACTIVE_COUNTRIES[0] : "",
    consentNewsletter: false,
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  // Réponses de l'étape de réflexion : gardées en mémoire du navigateur uniquement, jamais envoyées.
  const [reflection, setReflection] = useState<Partial<Record<(typeof REFLECTION_QUESTIONS)[number], "yes" | "no">>>({});
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const step = STEPS[stepIndex];
  const errorCount = Object.keys(errors).length;

  // Déplace le focus sur le titre de l'étape à chaque changement (WCAG 2.4.3).
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [stepIndex, result]);

  useEffect(() => {
    if (errorCount > 0) summaryRef.current?.focus();
  }, [errors, errorCount]);

  const set = (field: Field, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const fieldProps = (field: Field) => ({
    id: `${formId}-${field}`,
    errorId: `${formId}-${field}-error`,
    error: errors[field] ? t(`errors.${errors[field]}`) : undefined,
  });

  const goNext = () => {
    const stepErrors = validateStep(step, values, startedAt);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) setStepIndex((i) => i + 1);
  };

  const submit = () => {
    const stepErrors = validateStep("contact", values, startedAt);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    startTransition(async () => {
      try {
        setResult(await submitLeadAction(toCandidate(values, startedAt)));
      } catch {
        setResult({ ok: false, reason: "unavailable" });
      }
    });
  };

  if (result && (result.ok || result.reason === "underage")) {
    const key = result.ok ? "success" : "underage";
    return (
      <div role="status" className="mt-8 rounded-card border border-border bg-surface p-6">
        <h2 ref={headingRef} tabIndex={-1} className="font-serif text-2xl font-semibold focus:outline-none">
          {t(`result.${key}Title`)}
        </h2>
        <p className="mt-3">{t(`result.${key}Text`)}</p>
      </div>
    );
  }

  const yesCount = Object.values(reflection).filter((v) => v === "yes").length;
  const reflectionComplete = REFLECTION_QUESTIONS.every((q) => reflection[q]);

  return (
    <form
      noValidate
      aria-labelledby={`${formId}-step-title`}
      className="mt-0"
      onSubmit={(event) => {
        event.preventDefault();
        if (step === "contact") submit();
        else goNext();
      }}
    >
      <p className="text-sm font-medium text-primary">
        {t("stepOf", { current: stepIndex + 1, total: STEPS.length })}
      </p>
      <h2
        id={`${formId}-step-title`}
        ref={headingRef}
        tabIndex={-1}
        className="mt-1 font-serif text-2xl font-semibold focus:outline-none"
      >
        {t(`steps.${step}`)}
      </h2>

      {errorCount > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-4 rounded-control border border-danger p-4 text-danger focus:outline-none"
        >
          <p className="font-semibold">{t("errors.summary", { count: errorCount })}</p>
          <ul className="mt-2 list-disc pl-5">
            {(Object.keys(errors) as Field[]).map((field) => (
              <li key={field}>
                <a href={`#${formId}-${field}`} className="underline">
                  {t(`fields.${field}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {result && !result.ok && result.reason !== "underage" && (
        <p role="alert" className="mt-4 rounded-control border border-danger p-4 text-danger">
          {t("result.error")}
        </p>
      )}

      <div className="mt-6 space-y-6">
        {step === "project" && (
          <>
            <SelectField
              {...fieldProps("interventionId")}
              label={t("fields.interventionId")}
              value={String(values.interventionId ?? "")}
              placeholder={t("fields.choose")}
              options={interventions.map((i) => ({ value: i.id, label: i.title }))}
              onChange={(v) => set("interventionId", v)}
            />
            <SelectField
              {...fieldProps("country")}
              label={t("fields.country")}
              value={String(values.country ?? "")}
              placeholder={t("fields.choose")}
              options={ACTIVE_COUNTRIES.map((c) => ({ value: c, label: t(`options.country.${c}`) }))}
              onChange={(v) => set("country", v)}
            />
            <TextField
              {...fieldProps("city")}
              label={t("fields.city")}
              value={String(values.city ?? "")}
              autoComplete="address-level2"
              onChange={(v) => set("city", v)}
            />
            <RadioGroup
              {...fieldProps("timeframe")}
              legend={t("fields.timeframe")}
              name="timeframe"
              value={String(values.timeframe ?? "")}
              options={TIMEFRAMES.map((v) => ({ value: v, label: t(`options.timeframe.${v}`) }))}
              onChange={(v) => set("timeframe", v)}
            />
            <RadioGroup
              {...fieldProps("budget")}
              legend={t("fields.budget")}
              name="budget"
              value={String(values.budget ?? "")}
              options={BUDGETS.map((v) => ({ value: v, label: t(`options.budget.${v}`) }))}
              onChange={(v) => set("budget", v)}
            />
          </>
        )}

        {step === "health" && (
          <>
            <p className="rounded-control bg-accent-soft p-4 text-sm">{t("healthNotice")}</p>
            <RadioGroup
              {...fieldProps("smoker")}
              legend={t("fields.smoker")}
              name="smoker"
              value={String(values.smoker ?? "")}
              options={SMOKER.map((v) => ({ value: v, label: t(`options.smoker.${v}`) }))}
              onChange={(v) => set("smoker", v)}
            />
            <RadioGroup
              {...fieldProps("previousSurgerySameArea")}
              legend={t("fields.previousSurgerySameArea")}
              name="previousSurgerySameArea"
              value={String(values.previousSurgerySameArea ?? "")}
              options={YES_NO.map((v) => ({ value: v, label: t(`options.yesNo.${v}`) }))}
              onChange={(v) => set("previousSurgerySameArea", v)}
            />
            {isPregnancyRelevant(String(values.interventionId)) && (
              <RadioGroup
                {...fieldProps("pregnancyPlanned")}
                legend={t("fields.pregnancyPlanned")}
                name="pregnancyPlanned"
                value={String(values.pregnancyPlanned ?? "")}
                options={YES_NO.map((v) => ({ value: v, label: t(`options.yesNo.${v}`) }))}
                onChange={(v) => set("pregnancyPlanned", v)}
              />
            )}
          </>
        )}

        {step === "reflection" && (
          <>
            <p className="rounded-control bg-accent-soft p-4 text-sm">{t("reflection.intro")}</p>
            {REFLECTION_QUESTIONS.map((q) => (
              <RadioGroup
                key={q}
                id={`${formId}-${q}`}
                errorId={`${formId}-${q}-error`}
                legend={t(`reflection.${q}`)}
                name={`reflection-${q}`}
                value={reflection[q] ?? ""}
                options={YES_NO.map((v) => ({ value: v, label: t(`options.yesNo.${v}`) }))}
                onChange={(v) => setReflection((prev) => ({ ...prev, [q]: v as "yes" | "no" }))}
              />
            ))}
            <div aria-live="polite">
              {reflectionComplete && yesCount >= REFLECTION_THRESHOLD && (
                <div className="rounded-control border-l-4 border-primary bg-surface p-4">
                  <p className="font-semibold">{t("reflection.supportTitle")}</p>
                  <p className="mt-1">{t("reflection.supportText")}</p>
                </div>
              )}
              {reflectionComplete && yesCount < REFLECTION_THRESHOLD && (
                <p className="text-muted">{t("reflection.ok")}</p>
              )}
            </div>
          </>
        )}

        {step === "contact" && (
          <>
            <TextField
              {...fieldProps("firstName")}
              label={t("fields.firstName")}
              value={String(values.firstName ?? "")}
              autoComplete="given-name"
              onChange={(v) => set("firstName", v)}
            />
            <TextField
              {...fieldProps("email")}
              label={t("fields.email")}
              type="email"
              value={String(values.email ?? "")}
              autoComplete="email"
              onChange={(v) => set("email", v)}
            />
            <TextField
              {...fieldProps("phone")}
              label={`${t("fields.phone")} (${t("optional")})`}
              type="tel"
              value={String(values.phone ?? "")}
              autoComplete="tel"
              onChange={(v) => set("phone", v)}
            />
            <TextField
              {...fieldProps("birthYear")}
              label={t("fields.birthYear")}
              inputMode="numeric"
              value={String(values.birthYear ?? "")}
              autoComplete="bday-year"
              onChange={(v) => set("birthYear", v.replace(/\D/g, "").slice(0, 4))}
            />
            <CheckboxField
              {...fieldProps("isAdult")}
              label={t("fields.isAdult")}
              checked={values.isAdult === true}
              onChange={(v) => set("isAdult", v)}
            />
            <CheckboxField
              {...fieldProps("consentHealthData")}
              label={t("fields.consentHealthData")}
              checked={values.consentHealthData === true}
              onChange={(v) => set("consentHealthData", v)}
            />
            <CheckboxField
              {...fieldProps("consentNewsletter")}
              label={`${t("fields.consentNewsletter")} (${t("optional")})`}
              checked={values.consentNewsletter === true}
              onChange={(v) => set("consentNewsletter", v)}
            />
            {/* Pot de miel anti-spam : invisible pour les humains et les lecteurs d'écran. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor={`${formId}-website`}>{t("fields.website")}</label>
              <input
                id={`${formId}-website`}
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={String(values.website ?? "")}
                onChange={(e) => set("website", e.target.value)}
              />
            </div>
            <p className="text-sm text-muted">
              {t("privacy")}{" "}
              <Link href={`/informations/${privacySlug}`} className="underline underline-offset-4">
                {t("privacyLink")}
              </Link>
            </p>
          </>
        )}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {stepIndex > 0 && (
          <button
            type="button"
            onClick={() => {
              setErrors({});
              setStepIndex((i) => i - 1);
            }}
            className="inline-flex min-h-11 items-center rounded-control border border-primary px-5 font-medium text-primary hover:bg-accent-soft"
          >
            {t("back")}
          </button>
        )}
        <button
          type="submit"
          disabled={isPending}
          aria-disabled={isPending}
          className="inline-flex min-h-11 items-center rounded-control bg-primary px-5 font-medium text-white hover:bg-primary-strong disabled:opacity-70"
        >
          {step === "contact" ? (isPending ? t("submitting") : t("submit")) : t("next")}
        </button>
      </div>
    </form>
  );
}

/* --- Champs accessibles --------------------------------------------------- */

interface BaseFieldProps {
  id: string;
  errorId: string;
  error?: string;
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1 text-sm font-medium text-danger">
      {error}
    </p>
  );
}

const inputClass =
  "mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2 text-base aria-invalid:border-danger";

function TextField({
  id,
  errorId,
  error,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  inputMode,
}: BaseFieldProps & {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text";
}) {
  return (
    <div>
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
      <FieldError id={errorId} error={error} />
    </div>
  );
}

function SelectField({
  id,
  errorId,
  error,
  label,
  value,
  placeholder,
  options,
  onChange,
}: BaseFieldProps & {
  label: string;
  value: string;
  placeholder: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <select
        id={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <FieldError id={errorId} error={error} />
    </div>
  );
}

function RadioGroup({
  id,
  errorId,
  error,
  legend,
  name,
  value,
  options,
  onChange,
}: BaseFieldProps & {
  legend: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <fieldset id={id} tabIndex={-1} aria-describedby={error ? errorId : undefined} className="focus:outline-none">
      <legend className="font-medium">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-3">
        {options.map((o) => (
          <label
            key={o.value}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-control border border-border-input bg-surface px-4 has-checked:border-primary has-checked:bg-accent-soft"
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="size-4 accent-[var(--color-primary)]"
            />
            {o.label}
          </label>
        ))}
      </div>
      <FieldError id={errorId} error={error} />
    </fieldset>
  );
}

function CheckboxField({
  id,
  errorId,
  error,
  label,
  checked,
  onChange,
}: BaseFieldProps & { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 size-5 shrink-0 accent-[var(--color-primary)]"
        />
        <label htmlFor={id}>{label}</label>
      </div>
      <FieldError id={errorId} error={error} />
    </div>
  );
}
