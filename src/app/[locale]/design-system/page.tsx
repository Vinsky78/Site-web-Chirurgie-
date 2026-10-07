import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Alert } from "@/components/ui/Alert";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = { title: "Design system", robots: { index: false, follow: false } };

const COLORS = ["bg", "surface", "ink", "muted", "primary", "primary-strong", "accent-soft", "border", "danger"] as const;

/** Page interne de référence du design system, non indexée. */
export default async function DesignSystemPage({ params }: PageProps<"/[locale]/design-system">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHeader title="Design system" lead="Référence des tokens et composants du site." />
      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-12 pt-10">

      <section aria-labelledby="ds-colors">
        <h2 id="ds-colors" className="font-serif text-2xl font-semibold">Couleurs</h2>
        <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {COLORS.map((c) => (
            <li key={c} className="text-sm">
              <div className="h-14 rounded-control border border-border" style={{ background: `var(--color-${c})` }} />
              <code>{c}</code>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ds-buttons">
        <h2 id="ds-buttons" className="font-serif text-2xl font-semibold">Boutons</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button>Principal</Button>
          <Button variant="secondary">Secondaire</Button>
          <Button variant="ghost">Discret</Button>
          <Button disabled>Désactivé</Button>
        </div>
      </section>

      <section aria-labelledby="ds-feedback">
        <h2 id="ds-feedback" className="font-serif text-2xl font-semibold">Messages et badges</h2>
        <div className="mt-4 space-y-4">
          <Alert title="Information">Texte d&apos;information neutre.</Alert>
          <Alert tone="warning" title="Attention">Contenu en brouillon, non relu par un chirurgien.</Alert>
          <Alert tone="danger" title="Erreur">Vérifiez les champs signalés.</Alert>
          <div className="flex gap-3">
            <Badge>Vérifié</Badge>
            <Badge tone="warning">Brouillon</Badge>
            <Badge tone="danger">Refusé</Badge>
          </div>
        </div>
      </section>

      <section aria-labelledby="ds-cards">
        <h2 id="ds-cards" className="font-serif text-2xl font-semibold">Cartes</h2>
        <Card className="mt-4 max-w-md">
          <h3 className="text-lg font-semibold">Titre de carte</h3>
          <p className="mt-2 text-muted">Contenu de carte avec ombre légère et bordure.</p>
        </Card>
      </section>
      </div>
    </>
  );
}
