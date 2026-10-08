import { Inter, Source_Serif_4 } from "next/font/google";

/**
 * Polices auto-hébergées : next/font les télécharge au build et les sert depuis
 * notre domaine. Aucune requête vers Google depuis le navigateur du visiteur
 * (pas de transfert d'adresse IP hors UE, cf. LG München, 20.01.2022).
 * Seul le jeu `latin` (français, anglais, allemand, espagnol, italien, néerlandais)
 * est préchargé : précharger aussi latin-ext doublait le poids critique et
 * retardait le LCP mobile. Les glyphes latin-ext restent servis à la demande
 * (unicode-range) si une page en contient.
 */
export const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  // Titres seulement : non préchargée, pour laisser la bande passante au texte
  // courant (élément LCP). La police de repli ajustée évite tout décalage.
  preload: false,
  variable: "--font-source-serif",
});

export const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
