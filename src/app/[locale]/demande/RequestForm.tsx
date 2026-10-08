"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { submitLeadAction } from "@/lib/lead/actions";
import { BUDGETS, isPregnancyRelevant, MAX_SURGEONS, SMOKER, STEP_FIELDS, TIMEFRAMES, YES_NO } from "@/lib/lead/options";
import type { LeadInput } from "@/lib/lead/schema";
import type { SubmitResult } from "@/lib/lead/submit";
import { ACTIVE_COUNTRIES } from "@/lib/countries";
import { slugify } from "@/lib/slug";
import type { InterventionId } from "@/content/types";
import { buttonClasses } from "@/components/ui/button";

type Field = keyof LeadInput;
type Values = Partial<Record<Field, string | boolean>>;
type Errors = Partial<Record<Field, string>>;

const STEPS = ["project", "health", "reflection", "surgeons", "contact"] as const;
type Step = (typeof STEPS)[number];

/** Nombre de réponses « oui » à l'étape de réflexion à partir duquel on affiche un message de soutien. */
const REFLECTION_THRESHOLD = 2;
const REFLECTION_QUESTIONS = ["q1", "q2", "q3"] as const;

/** Chirurgien publié proposable dans le formulaire (informations déjà publiques). */
export interface SurgeonOption {
  slug: string;
  displayName: string;
  specialtyLabel: string;
  city: string;
  citySlug: string;
  country: string;
  interventions: InterventionId[];
}

interface Props {
  interventions: { id: InterventionId; title: string }[];
  initialIntervention?: InterventionId;
  surgeons: SurgeonOption[];
  initialSurgeon?: string;
  privacySlug: string;
}

/**
 * Chirurgiens publiés du pays qui pratiquent l'intervention choisie. Ceux de la
 * ville indiquée passent en premier ; l'ordre reste sinon alphabétique (aucun critère commercial).
 */
function availableSurgeons(surgeons: SurgeonOption[], values: Values): SurgeonOption[] {
  const matching = surgeons.filter(
    (s) => s.country === values.country && s.interventions.includes(values.interventionId as InterventionId),
  );
  const city = slugify(String(values.city ?? ""));
  return [...matching.filter((s) => s.citySlug === city), ...matching.filter((s) => s.citySlug !== city)];
}

function toCandidate(values: Values, startedAt: number, surgeons: string[]): Record<string, unknown> {
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
    surgeons,
    startedAt,
  };
}

/** Schéma Zod chargé à part, après l'affichage : il ne pèse pas sur le premier rendu. */
const loadSchema = () => import("@/lib/lead/schema");

async function validateStep(
  step: Step,
  values: Values,
  startedAt: number,
  surgeons: string[],
  available: number,
): Promise<Errors> {
  if (step === "reflection") return {};
  if (step === "surgeons") {
    if (available === 0) return { surgeons: "surgeonsNone" };
    if (surgeons.length === 0) return { surgeons: "surgeonsRequired" };
  }
  const fields = STEP_FIELDS[step] as readonly Field[];
  const { createLeadSchema } = await loadSchema();
  const result = createLeadSchema().safeParse(toCandidate(values, startedAt, surgeons));
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

export function RequestForm({ interventions, initialIntervention, surgeons, initialSurgeon, privacySlug }: Props) {
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
  const [chosen, setChosen] = useState<string[]>(initialSurgeon ? [initialSurgeon] : []);
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
  const available = availableSurgeons(surgeons, values);
  // Un choix devenu incompatible (intervention ou pays modifiés) n'est jamais envoyé.
  const selected = chosen.filter((slug) => available.some((s) => s.slug === slug));

  const toggleSurgeon = (slug: string, checked: boolean) => {
    setChosen((prev) => (checked ? [...prev.filter((s) => s !== slug), slug] : prev.filter((s) => s !== slug)));
    if (errors.surgeons) setErrors((prev) => ({ ...prev, surgeons: undefined }));
  };

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

  // Précharge le schéma de validation une fois la page affichée, avant le premier clic.
  useEffect(() => {
    void loadSchema();
  }, []);

  const set = (field: Field, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const fieldProps = (field: Field) => ({
    id: `${formId}-${field}`,
    errorId: `${formId}-${field}-error`,
    error: errors[field] ? t(`errors.${errors[field]}`) : undefined,
  });

  const goNext = async () => {
    const stepErrors = await validateStep(step, values, startedAt, selected, available.length);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) setStepIndex((i) => i + 1);
  };

  const submit = async () => {
    const stepErrors = await validateStep("contact", values, startedAt, selected, available.length);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    startTransition(async () => {
      try {
        const outcome = await submitLeadAction(toCandidate(values, startedAt, selected));
        if (!outcome.ok && outcome.reason === "invalid") {
          // Contrôle serveur (ex. chirurgien retiré de l'annuaire entre-temps) : retour à l'étape concernée.
          const fieldErrors = outcome.fieldErrors as Errors;
          const target = STEPS.findIndex((s) =>
            (STEP_FIELDS[s as keyof typeof STEP_FIELDS] as readonly Field[] | undefined)?.some((f) => fieldErrors[f]),
          );
          setErrors(fieldErrors);
          if (target >= 0) setStepIndex(target);
          setResult(null);
          return;
        }
        setResult(outcome);
      } catch {
        setResult({ ok: false, reason: "unavailable" });
      }
    });
  };

  if (result && (result.ok || result.reason === "underage")) {
    const key = result.ok ? "success" : "underage";
    return (
      <div role="status" className="mt-8 rounded-card border border-border bg-surface p-6">
        <h2 ref={headingRef} tabIndex={-1} className="font-serif text-h2 focus:outline-none">
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
      className="mt-8"
      onSubmit={(event) => {
        event.preventDefault();
        if (step === "contact") void submit();
        else void goNext();
      }}
    >
      <p className="text-small font-medium text-primary">
        {t("stepOf", { current: stepIndex + 1, total: STEPS.length })}
      </p>
      <h2
        id={`${formId}-step-title`}
        ref={headingRef}
        tabIndex={-1}
        className="mt-1 font-serif text-h2 focus:outline-none"
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
            <p className="rounded-control bg-accent-soft p-4 text-small">{t("healthNotice")}</p>
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
            <p className="rounded-control bg-accent-soft p-4 text-small">{t("reflection.intro")}</p>
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

        {step === "surgeons" && (
          <SurgeonPicker
            {...fieldProps("surgeons")}
            legend={t("fields.surgeons")}
            help={t("surgeons.help", { max: MAX_SURGEONS })}
            emptyText={t("surgeons.none")}
            maxText={t("surgeons.max", { max: MAX_SURGEONS })}
            profileText={t("surgeons.profile")}
            options={available}
            selected={selected}
            onToggle={toggleSurgeon}
          />
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
            <p className="text-small text-muted">
              {t("privacy")}{" "}
              <Link href={{ pathname: "/informations/[page]", params: { page: privacySlug } }} className="underline underline-offset-4">
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
            className={buttonClasses("secondary")}
          >
            {t("back")}
          </button>
        )}
        {!(step === "surgeons" && available.length === 0) && (
          <button type="submit" disabled={isPending} aria-disabled={isPending} className={buttonClasses("primary")}>
            {step === "contact" ? (isPending ? t("submitting") : t("submit")) : t("next")}
          </button>
        )}
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
    <p id={id} className="mt-1 text-small font-medium text-danger">
      {error}
    </p>
  );
}

const inputClass =
  "mt-1 block min-h-11 w-full rounded-control border border-border-input bg-surface px-3 py-2 aria-invalid:border-danger";

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
      <label htmlFor={id} className="text-label">
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
      <label htmlFor={id} className="text-label">
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
      <legend className="text-label">{legend}</legend>
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

function SurgeonPicker({
  id,
  errorId,
  error,
  legend,
  help,
  emptyText,
  maxText,
  profileText,
  options,
  selected,
  onToggle,
}: BaseFieldProps & {
  legend: string;
  help: string;
  emptyText: string;
  maxText: string;
  profileText: string;
  options: SurgeonOption[];
  selected: string[];
  onToggle: (slug: string, checked: boolean) => void;
}) {
  const helpId = `${id}-help`;
  if (options.length === 0) {
    return (
      <p id={id} tabIndex={-1} className="rounded-control border-l-4 border-primary bg-surface p-4 focus:outline-none">
        {emptyText}
      </p>
    );
  }
  const full = selected.length >= MAX_SURGEONS;
  return (
    <fieldset
      id={id}
      tabIndex={-1}
      aria-describedby={[helpId, error ? errorId : ""].filter(Boolean).join(" ")}
      className="focus:outline-none"
    >
      <legend className="text-label">{legend}</legend>
      <p id={helpId} className="mt-1 text-small text-muted">
        {help}
      </p>
      <ul className="mt-3 space-y-3">
        {options.map((s) => {
          const inputId = `${id}-${s.slug}`;
          const checked = selected.includes(s.slug);
          return (
            <li
              key={s.slug}
              className="flex items-start gap-3 rounded-control border border-border-input bg-surface p-4 has-checked:border-primary has-checked:bg-accent-soft"
            >
              <input
                id={inputId}
                type="checkbox"
                checked={checked}
                disabled={!checked && full}
                onChange={(e) => onToggle(s.slug, e.target.checked)}
                className="mt-1 size-5 shrink-0 accent-[var(--color-primary)]"
              />
              <div>
                <label htmlFor={inputId} className="font-semibold">
                  {s.displayName}
                </label>
                <p className="text-small text-muted">
                  {s.specialtyLabel} · {s.city}
                </p>
                <Link
                  href={{ pathname: "/chirurgiens/[slug]", params: { slug: s.slug } }}
                  target="_blank"
                  className="text-small underline underline-offset-4"
                >
                  {profileText}
                  <span className="sr-only"> ({s.displayName})</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <p aria-live="polite" className="mt-3 text-small">
        {full ? maxText : ""}
      </p>
      <FieldError id={errorId} error={error} />
    </fieldset>
  );
}
