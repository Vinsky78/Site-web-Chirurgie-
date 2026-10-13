/**
 * Outils de contenu : npx tsx scripts/website-surgery.mts <commande>
 * (ou node "Website surgery.js" <commande>).
 *
 *   check              Cohérence fr / en-gb : mêmes interventions et guides, résumés ≤ 160,
 *                      au moins 3 risques, charte éditoriale, clés de messages identiques.
 *   standalone [dir]   Page HTML autonome (sans Next.js) listant les interventions,
 *                      avec bascule FR/EN et recherche. Défaut : ./site-autonome
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { findForbiddenTerms } from "../src/content/charter";
import { GUIDES_FROM_FILES } from "../src/content/guides/files";
import { INTERVENTIONS_FROM_FILES } from "../src/content/interventions/files";

const ROOT = resolve(import.meta.dirname, "..");
const LOCALES = ["fr", "en-gb"] as const;

function flattenKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v) ? flattenKeys(v as Record<string, unknown>, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
}

function sameIds(kind: string, byLocale: Record<string, { id: string }[]>, errors: string[]) {
  const [a, b] = LOCALES.map((l) => new Set(byLocale[l].map((x) => x.id)));
  for (const id of a) if (!b.has(id)) errors.push(`${kind} « ${id} » présent en fr, absent en en-gb`);
  for (const id of b) if (!a.has(id)) errors.push(`${kind} « ${id} » présent en en-gb, absent en fr`);
}

function check(): number {
  const errors: string[] = [];
  let drafts = 0;
  sameIds("intervention", INTERVENTIONS_FROM_FILES, errors);
  sameIds("guide", GUIDES_FROM_FILES, errors);

  for (const locale of LOCALES) {
    const items = [...INTERVENTIONS_FROM_FILES[locale], ...GUIDES_FROM_FILES[locale]];
    const slugs = items.map((i) => i.slug);
    if (new Set(slugs).size !== slugs.length) errors.push(`${locale} : slugs en double`);
    for (const item of items) {
      const tag = `${locale}/${item.slug}`;
      if (item.summary.length > 160) errors.push(`${tag} : résumé trop long (${item.summary.length} > 160)`);
      if ("risks" in item && item.risks.length < 3) errors.push(`${tag} : moins de 3 risques`);
      const forbidden = findForbiddenTerms(JSON.stringify(item));
      if (forbidden.length) errors.push(`${tag} : termes interdits ${forbidden.join(", ")}`);
      if (item.medicalReview.status !== "reviewed") drafts++;
    }
  }

  const keys = LOCALES.map((l) => new Set(flattenKeys(JSON.parse(readFileSync(join(ROOT, `messages/${l}.json`), "utf8")))));
  for (const k of keys[0]) if (!keys[1].has(k)) errors.push(`messages : « ${k} » présent en fr, absent en en-gb`);
  for (const k of keys[1]) if (!keys[0].has(k)) errors.push(`messages : « ${k} » présent en en-gb, absent en fr`);

  console.log(`Interventions : ${INTERVENTIONS_FROM_FILES.fr.length} · Guides : ${GUIDES_FROM_FILES.fr.length} · Brouillons non relus : ${drafts}`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  console.log(errors.length ? `\n${errors.length} erreur(s).` : "\nAucune erreur.");
  return errors.length ? 1 : 0;
}

function standalone(dirArg?: string): number {
  const out = resolve(dirArg ?? join(ROOT, "site-autonome"));
  const data = Object.fromEntries(
    LOCALES.map((l) => [l, INTERVENTIONS_FROM_FILES[l].map(({ id, title, summary, category, medicalReview }) => ({ id, title, summary, category, reviewed: medicalReview.status === "reviewed" }))]),
  );
  const ui = {
    fr: { title: "Chirurgie : information", search: "Rechercher une intervention", draft: "Brouillon, non relu par le comité médical", notice: "Information générale, ne remplace pas une consultation médicale. Toute intervention comporte des risques.", cats: { face: "Visage", body: "Silhouette", breast: "Seins" }, all: "Toutes", empty: "Aucun résultat." },
    "en-gb": { title: "Surgery: information", search: "Search for a procedure", draft: "Draft, not yet reviewed by the medical committee", notice: "General information, not a substitute for a medical consultation. Every procedure carries risks.", cats: { face: "Face", body: "Body", breast: "Breast" }, all: "All", empty: "No results." },
  };
  const json = (v: unknown) => JSON.stringify(v).replace(/</g, "\\u003c");
  const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Chirurgie</title>
<style>
:root{color-scheme:light dark;--bg:#fbfaf8;--fg:#1c2430;--mut:#4a5563;--card:#fff;--bd:#d5dade;--ac:#0f4c5c}
@media(prefers-color-scheme:dark){:root{--bg:#161615;--fg:#eeeee9;--mut:#a5a59d;--card:#1f1f1d;--bd:#3a3a36;--ac:#6cc3c3}}
*{box-sizing:border-box}body{margin:0;font:16px/1.5 system-ui,sans-serif;background:var(--bg);color:var(--fg)}
.wrap{max-width:60rem;margin:0 auto;padding:1rem 1.25rem 3rem}
header{display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:space-between}
h1{font:600 1.6rem/1.2 Georgia,serif;margin:.5rem 0}
button,input{font:inherit;color:inherit;background:var(--card);border:1px solid var(--bd);border-radius:.5rem;padding:.6rem .9rem;min-height:44px}
button{cursor:pointer}button[aria-pressed=true]{border-color:var(--ac);color:var(--ac);font-weight:600}
:focus-visible{outline:3px solid var(--ac);outline-offset:2px}
.notice{border-left:4px solid var(--ac);background:var(--card);padding:.75rem 1rem;border-radius:.25rem;color:var(--mut)}
.tools{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0}.tools input{flex:1 1 14rem}
ul{list-style:none;padding:0;display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr))}
li{background:var(--card);border:1px solid var(--bd);border-radius:.75rem;padding:1rem}
li h2{font:600 1.1rem Georgia,serif;margin:.1rem 0 .4rem}li p{margin:.3rem 0;color:var(--mut)}
.tag{font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;color:var(--ac)}.draft{font-size:.8rem;font-style:italic}
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
const DATA=${json(data)};
const UI=${json(ui)};
const $=s=>document.querySelector(s);
const state={l:(navigator.language||"fr").toLowerCase().startsWith("fr")?"fr":"en-gb",cat:"all",q:""};
try{const s=localStorage.getItem("lang");if(s in DATA)state.l=s}catch{}
const el=(tag,props={},...kids)=>{const e=Object.assign(document.createElement(tag),props);e.append(...kids);return e};
const norm=s=>s.normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").toLowerCase();
function render(){
  const u=UI[state.l];document.documentElement.lang=state.l==="fr"?"fr":"en-GB";document.title=u.title;
  $("#t").textContent=u.title;$("#n").textContent=u.notice;$("#q").placeholder=u.search;$("#q").setAttribute("aria-label",u.search);
  document.querySelectorAll("[data-l]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===state.l));
  $("#cats").replaceChildren(...["all",...Object.keys(u.cats)].map(c=>{const b=el("button",{textContent:c==="all"?u.all:u.cats[c]});b.setAttribute("aria-pressed",state.cat===c);b.onclick=()=>{state.cat=c;render()};return b}));
  const q=norm(state.q.trim());
  const items=DATA[state.l].filter(i=>(state.cat==="all"||i.category===state.cat)&&(!q||norm(i.title+" "+i.summary).includes(q)));
  $("#list").replaceChildren(...(items.length?items.map(i=>el("li",{},el("span",{className:"tag",textContent:u.cats[i.category]||i.category}),el("h2",{textContent:i.title}),el("p",{textContent:i.summary}),...(i.reviewed?[]:[el("p",{className:"draft",textContent:u.draft})]))):[el("li",{textContent:u.empty})]));
}
document.querySelectorAll("[data-l]").forEach(b=>b.onclick=()=>{state.l=b.dataset.l;try{localStorage.setItem("lang",state.l)}catch{}render()});
$("#q").oninput=e=>{state.q=e.target.value;render()};
render();
</script>
</body>
</html>
`;
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, "index.html"), html);
  console.log(`Page autonome générée : ${join(out, "index.html")} (${data.fr.length} interventions)`);
  return 0;
}

const [command, arg] = process.argv.slice(2);
if (command === "check") process.exit(check());
else if (command === "standalone") process.exit(standalone(arg));
else {
  console.log('Commandes : check | standalone [dossier]\nEx. : node "Website surgery.js" check');
  process.exit(command ? 1 : 0);
}
