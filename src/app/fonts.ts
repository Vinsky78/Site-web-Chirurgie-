import { Inter, Source_Serif_4 } from "next/font/google";

/**
 * Polices auto-hébergées : next/font les télécharge au build et les sert depuis
 * notre domaine. Aucune requête vers Google depuis le navigateur du visiteur
 * (pas de transfert d'adresse IP hors UE, cf. LG München, 20.01.2022).
 * latin-ext couvre les marchés suivants (DE, NL, ES, IT, et l'accentuation du polonais ou du tchèque).
 */
export const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-source-serif",
});

export const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});
