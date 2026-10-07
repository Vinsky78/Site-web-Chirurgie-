-- Phase 4 : schéma initial.
-- À exécuter UNIQUEMENT sur une base PostgreSQL hébergée en UE chez un
-- hébergeur certifié HDS (OVHcloud, Scaleway, Clever Cloud) : la table leads
-- contient des données de santé (RGPD art. 9).

CREATE TABLE IF NOT EXISTS leads (
  id                         uuid PRIMARY KEY,
  created_at                 timestamptz NOT NULL,
  locale                     text NOT NULL,
  intervention_id            text NOT NULL,
  country                    text NOT NULL,
  city                       text NOT NULL,
  timeframe                  text NOT NULL,
  budget                     text NOT NULL,
  smoker                     text NOT NULL,
  previous_surgery_same_area text NOT NULL,
  pregnancy_planned          text,
  first_name                 text NOT NULL,
  email                      text NOT NULL,
  phone                      text,
  birth_year                 integer NOT NULL,
  is_adult                   boolean NOT NULL,
  consent_health_data        boolean NOT NULL,
  consent_newsletter         boolean NOT NULL DEFAULT false,
  purge_after                timestamptz NOT NULL
);

CREATE INDEX IF NOT EXISTS leads_purge_after_idx ON leads (purge_after);

-- Un patient choisit 1 à 3 chirurgiens ; chaque envoi est tracé.
CREATE TABLE IF NOT EXISTS lead_dispatches (
  lead_id     uuid NOT NULL REFERENCES leads (id) ON DELETE CASCADE,
  surgeon_id  text NOT NULL,
  sent_at     timestamptz NOT NULL,
  PRIMARY KEY (lead_id, surgeon_id)
);
