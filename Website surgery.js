#!/usr/bin/env node
/**
 * Website surgery : outils en ligne de commande pour le site Chirurgie.
 * Aucune dépendance, Node 18+ uniquement.
 *
 *   node "Website surgery.js" check
 *       Vérifie la cohérence fr / en-gb : interventions, slugs, messages,
 *       longueur des résumés, termes promotionnels interdits, relecture médicale.
 *
 *   node "Website surgery.js" new <id> <slug-fr> <slug-en> <catégorie> "<Titre fr>" "<Title en>"
 *       Crée une fiche intervention (brouillon à rédiger) en fr et en-gb et
 *       l'ajoute à INTERVENTION_IDS.
 *       Ex. : node "Website surgery.js" new liposuction liposuccion liposuction body "Liposuccion" "Liposuction"
 *
 *   node "Website surgery.js" standalone [dossier]
 *       Génère un site HTML/JS autonome (sans Next.js) listant les interventions,
 *       avec sélecteur de langue et recherche. Défaut : ./site-autonome
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const FR_FILE = path.join(ROOT, "src/content/interventions/fr.ts");
const EN_FILE = path.join(ROOT, "src/content/interventions/en-gb.ts");
const TYPES_FILE = path.join(ROOT, "src/content/types.ts");
const MESSAGES = { fr: path.join(ROOT, "messages/fr.json"), "en-gb": path.join(ROOT, "messages/en-gb.json") };

/** Termes promotionnels interdits par la charte éditoriale (voir content.test.ts). */
const FORBIDDEN = [
  /\bmeilleur(e|s)?\b/i, /résultats? garantis?/i, /\bpromo(tion)?\b/i, /\boffre\b/i,
  /\bsans risque\b/i, /\bindolore\b/i, /\bbest\b/i, /\brisk-free\b/i, /\bpainless\b/i, /\bspecial offer\b/i,
];

const read = (file) => fs.readFileSync(file, "utf8");

/** Catégories lues dans src/content/types.ts pour rester synchronisées avec le site. */
const CATEGORIES = [...read(TYPES_FILE).match(/CATEGORY_IDS = \[([^\]]*)\]/)[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);

/** Extrait les champs simples de chaque intervention d'un fichier de contenu. */
function parseInterventions(file) {
  const src = read(file);
  const blocks = src.split(/\n {2}\{\n {4}id: /).slice(1);
  return blocks.map((block) => {
    const text = "id: " + block;
    const pick = (key) => {
      const m = text.match(new RegExp(`\\b${key}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
      return m ? JSON.parse(`"${m[1]}"`) : undefined;
    };
    return {
      id: pick("id"),
      slug: pick("slug"),
      category: pick("category"),
      title: pick("title"),
      summary: pick("summary"),
      updatedAt: pick("updatedAt"),
      reviewed: /medicalReview:\s*\{\s*status:\s*"reviewed"/.test(text),
      risks: (text.match(/\{ name: "/g) || []).length + (text.match(/\n\s+name: "/g) || []).length,
      raw: text,
    };
  });
}

function flattenKeys(obj, prefix = "") {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v) ? flattenKeys(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
}

// ---------------------------------------------------------------- check
function check() {
  const errors = [];
  const warnings = [];
  const fr = parseInterventions(FR_FILE);
  const en = parseInterventions(EN_FILE);

  const idsInTypes = [...read(TYPES_FILE).match(/INTERVENTION_IDS = \[([^\]]*)\]/)[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  for (const [locale, items] of [["fr", fr], ["en-gb", en]]) {
    const ids = items.map((i) => i.id);
    for (const id of idsInTypes) if (!ids.includes(id)) errors.push(`${locale} : intervention « ${id} » manquante`);
    for (const id of ids) if (!idsInTypes.includes(id)) errors.push(`${locale} : « ${id} » absent de INTERVENTION_IDS`);
    const slugs = items.map((i) => i.slug);
    if (new Set(slugs).size !== slugs.length) errors.push(`${locale} : slugs en double`);
    for (const it of items) {
      const tag = `${locale}/${it.slug}`;
      if (!it.title) errors.push(`${tag} : titre manquant`);
      if (!it.summary) errors.push(`${tag} : résumé manquant`);
      else if (it.summary.length > 160) errors.push(`${tag} : résumé trop long (${it.summary.length} > 160)`);
      if (!CATEGORIES.includes(it.category)) errors.push(`${tag} : catégorie invalide « ${it.category} »`);
      if (it.risks < 3) errors.push(`${tag} : au moins 3 risques requis (${it.risks})`);
      for (const p of FORBIDDEN) if (p.test(it.raw)) errors.push(`${tag} : terme promotionnel interdit (${p})`);
      if (/À RÉDIGER|TO WRITE/.test(it.raw)) warnings.push(`${tag} : contient des passages à rédiger`);
      if (!it.reviewed) warnings.push(`${tag} : brouillon, non relu par un chirurgien (noindex)`);
    }
  }
  for (const f of fr) {
    const other = en.find((e) => e.id === f.id);
    if (other && other.category !== f.category) errors.push(`${f.id} : catégorie différente entre fr et en-gb`);
  }

  try {
    const keys = Object.fromEntries(Object.entries(MESSAGES).map(([l, f]) => [l, new Set(flattenKeys(JSON.parse(read(f))))]));
    for (const [a, b] of [["fr", "en-gb"], ["en-gb", "fr"]])
      for (const k of keys[a]) if (!keys[b].has(k)) errors.push(`messages : clé « ${k} » présente en ${a}, absente en ${b}`);
  } catch (e) {
    errors.push(`messages : lecture impossible (${e.message})`);
  }

  console.log(`Interventions : ${fr.length} fr, ${en.length} en-gb`);
  for (const w of warnings) console.log(`  ⚠ ${w}`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  console.log(errors.length ? `\n${errors.length} erreur(s).` : "\nAucune erreur.");
  return errors.length ? 1 : 0;
}

// ------------------------------------------------------------------ new
function scaffold(locale, { id, slug, category, title }) {
  const fr = locale === "fr";
  const todo = fr ? "À RÉDIGER et à faire relire par un chirurgien qualifié." : "TO WRITE and to be reviewed by a qualified surgeon.";
  const q = (s) => JSON.stringify(s);
  const risk = (n, d) => `      { name: ${q(n)}, detail: ${q(d)} },`;
  return `  {
    id: ${q(id)},
    locale: ${q(locale)},
    slug: ${q(slug)},
    category: ${q(category)},
    title: ${q(title)},
    summary: ${q(fr ? `${title} : fiche en cours de rédaction.` : `${title}: page being written.`)},
    description: [${q(todo)}],
    indications: [${q(todo)}],
    contraindications: [${q(todo)}],
    risks: [
${risk(fr ? "Risque 1" : "Risk 1", todo)}
${risk(fr ? "Risque 2" : "Risk 2", todo)}
${risk(fr ? "Risques liés à l'anesthésie" : "Anaesthetic risks", todo)}
    ],
    procedure: {
      anaesthesia: ${q(todo)},
      duration: ${q(todo)},
      hospitalStay: ${q(todo)},
    },
    recovery: [${q(todo)}],
    alternatives: [${q(fr ? "Ne rien faire : une option légitime, à reconsidérer après un temps de réflexion." : "Doing nothing: a legitimate option, worth revisiting after a period of reflection.")}],
    faq: [],
    medicalReview: { status: "draft" },
    updatedAt: ${q(new Date().toISOString().slice(0, 10))},
  },
`;
}

function appendTo(file, entry) {
  const src = read(file);
  const idx = src.lastIndexOf("\n];");
  if (idx === -1) throw new Error(`Fin de tableau introuvable dans ${file}`);
  fs.writeFileSync(file, src.slice(0, idx + 1) + entry + src.slice(idx + 1));
}

function create(args) {
  const [id, slugFr, slugEn, category, titleFr, titleEn] = args;
  if (args.length < 6) {
    console.error('Usage : new <id> <slug-fr> <slug-en> <catégorie> "<Titre fr>" "<Title en>"');
    return 1;
  }
  const slugRe = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  if (![id, slugFr, slugEn].every((s) => slugRe.test(s))) return console.error("id et slugs : minuscules, chiffres et tirets seulement."), 1;
  if (!CATEGORIES.includes(category)) return console.error(`Catégorie : ${CATEGORIES.join(", ")}`), 1;
  if (parseInterventions(FR_FILE).some((i) => i.id === id || i.slug === slugFr) ||
      parseInterventions(EN_FILE).some((i) => i.id === id || i.slug === slugEn)) {
    console.error("Cet id ou slug existe déjà.");
    return 1;
  }
  const types = read(TYPES_FILE);
  fs.writeFileSync(TYPES_FILE, types.replace(/(INTERVENTION_IDS = \[[^\]]*?)(\] as const)/, `$1, "${id}"$2`));
  appendTo(FR_FILE, scaffold("fr", { id, slug: slugFr, category, title: titleFr }));
  appendTo(EN_FILE, scaffold("en-gb", { id, slug: slugEn, category, title: titleEn }));
  console.log(`Fiche « ${id} » créée (brouillon). Complète les passages « À RÉDIGER » dans :\n  ${FR_FILE}\n  ${EN_FILE}`);
  console.log("Puis lance : node \"Website surgery.js\" check");
  return 0;
}

// ----------------------------------------------------------- standalone
function standalone(dirArg) {
  const out = path.resolve(dirArg || path.join(ROOT, "site-autonome"));
  const strip = (item) => Object.fromEntries(Object.entries(item).filter(([k]) => k !== "raw"));
  const data = { fr: parseInterventions(FR_FILE).map(strip), "en-gb": parseInterventions(EN_FILE).map(strip) };
  const ui = {
    fr: { title: "Chirurgie : information", search: "Rechercher une intervention", draft: "Brouillon, non relu par un chirurgien",
      notice: "Information générale, ne remplace pas une consultation médicale. Toute intervention comporte des risques.",
      cats: { face: "Visage", body: "Corps", breast: "Seins" }, all: "Toutes", empty: "Aucun résultat." },
    "en-gb": { title: "Surgery: information", search: "Search for a procedure", draft: "Draft, not yet reviewed by a surgeon",
      notice: "General information, not a substitute for a medical consultation. Every procedure carries risks.",
      cats: { face: "Face", body: "Body", breast: "Breast" }, all: "All", empty: "No results." },
  };
  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Chirurgie</title>
<style>
:root{color-scheme:light dark;--bg:#fafaf8;--fg:#1c1c1a;--mut:#5d5d58;--card:#fff;--bd:#d9d9d2;--ac:#0f5c5c}
@media(prefers-color-scheme:dark){:root{--bg:#161615;--fg:#eeeee9;--mut:#a5a59d;--card:#1f1f1d;--bd:#3a3a36;--ac:#6cc3c3}}
*{box-sizing:border-box}body{margin:0;font:16px/1.5 system-ui,sans-serif;background:var(--bg);color:var(--fg)}
.wrap{max-width:60rem;margin:0 auto;padding:1rem 1.25rem 3rem}
header{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:space-between}
h1{font-size:1.5rem;margin:.5rem 0}
button,input{font:inherit;color:inherit;background:var(--card);border:1px solid var(--bd);border-radius:.5rem;padding:.6rem .9rem;min-height:44px}
button{cursor:pointer}button[aria-pressed=true]{border-color:var(--ac);color:var(--ac);font-weight:600}
:focus-visible{outline:3px solid var(--ac);outline-offset:2px}
.notice{border-left:4px solid var(--ac);background:var(--card);padding:.75rem 1rem;border-radius:.25rem;color:var(--mut)}
.tools{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0}.tools input{flex:1 1 14rem}
ul{list-style:none;padding:0;display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr))}
li{background:var(--card);border:1px solid var(--bd);border-radius:.75rem;padding:1rem}
li h2{font-size:1.1rem;margin:.1rem 0 .4rem}li p{margin:.3rem 0;color:var(--mut)}
.tag{font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ac)}.draft{font-size:.8rem;color:var(--mut);font-style:italic}
</style>
</head>
<body>
<div class="wrap">
<header><h1 id="t"></h1><div role="group" aria-label="Langue"><button data-l="fr">FR</button> <button data-l="en-gb">EN</button></div></header>
<p class="notice" id="n"></p>
<div class="tools"><input id="q" type="search"><span id="cats" role="group"></span></div>
<ul id="list" aria-live="polite"></ul>
</div>
<script>
const DATA=${JSON.stringify(data).replace(/</g, "\\u003c")};
const UI=${JSON.stringify(ui).replace(/</g, "\\u003c")};
const $=s=>document.querySelector(s);
const state={l:(navigator.language||"fr").toLowerCase().startsWith("fr")?"fr":"en-gb",cat:"all",q:""};
try{const s=localStorage.getItem("lang");if(s in DATA)state.l=s}catch{}
const el=(tag,props={},...kids)=>{const e=Object.assign(document.createElement(tag),props);e.append(...kids);return e};
function render(){
  const u=UI[state.l];document.documentElement.lang=state.l==="fr"?"fr":"en-GB";document.title=u.title;
  $("#t").textContent=u.title;$("#n").textContent=u.notice;$("#q").placeholder=u.search;$("#q").setAttribute("aria-label",u.search);
  document.querySelectorAll("[data-l]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===state.l));
  const cats=$("#cats");cats.replaceChildren(...["all",...Object.keys(u.cats)].map(c=>{
    const b=el("button",{textContent:c==="all"?u.all:u.cats[c]});b.setAttribute("aria-pressed",state.cat===c);
    b.onclick=()=>{state.cat=c;render()};return b}));
  const q=state.q.trim().toLowerCase();
  const items=DATA[state.l].filter(i=>(state.cat==="all"||i.category===state.cat)&&(!q||(i.title+" "+i.summary).toLowerCase().includes(q)));
  $("#list").replaceChildren(...(items.length?items.map(i=>el("li",{},
    el("span",{className:"tag",textContent:u.cats[i.category]||i.category}),
    el("h2",{textContent:i.title}),el("p",{textContent:i.summary}),
    ...(i.reviewed?[]:[el("p",{className:"draft",textContent:u.draft})]))):[el("li",{textContent:u.empty})]));
}
document.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{state.l=b.dataset.l;try{localStorage.setItem("lang",state.l)}catch{}render()});
$("#q").oninput=e=>{state.q=e.target.value;render()};
render();
</script>
</body>
</html>
`;
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, "index.html"), html);
  console.log(`Site autonome généré : ${path.join(out, "index.html")} (${data.fr.length} interventions)`);
  return 0;
}

// ----------------------------------------------------------------- main
const [cmd, ...rest] = process.argv.slice(2);
const commands = { check: () => check(), new: () => create(rest), standalone: () => standalone(rest[0]) };
if (!commands[cmd]) {
  console.log(read(__filename).split("*/")[0].replace(/^#!.*\n\/\*\*?\n?/, "").replace(/^ \* ?/gm, ""));
  process.exit(cmd ? 1 : 0);
}
process.exit(commands[cmd]());
