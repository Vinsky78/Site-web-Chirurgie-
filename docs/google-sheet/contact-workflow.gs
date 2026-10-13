/**
 * Éclaira — suivi des demandes de contact dans Google Sheets.
 * À coller dans Extensions > Apps Script du classeur. Mise en place :
 * docs/workflow-contact.md.
 *
 * Propriétés du script (Paramètres du projet > Propriétés du script) :
 *   TOKEN       secret partagé avec le site (CONTACT_SHEET_TOKEN)
 *   TEAM_EMAIL  adresse qui reçoit le récapitulatif des relances
 *
 * Aucune donnée de santé ne doit arriver ici : le site n'envoie ni
 * l'intervention envisagée ni le message, qui restent dans le back-office.
 */

const SHEET_REQUESTS = "Demandes";
const SHEET_DASHBOARD = "Tableau de bord";

/** Colonnes, dans l'ordre. Les 11 premières viennent du site, les suivantes du suivi. */
const COLUMNS = [
  ["reference", "Référence"],
  ["receivedAt", "Reçue le"],
  ["subject", "Objet"],
  ["firstName", "Prénom"],
  ["email", "E-mail"],
  ["phone", "Téléphone"],
  ["channel", "Recontacter par"],
  ["slot", "Créneau"],
  ["locale", "Langue"],
  ["page", "Page d'origine"],
  ["adminUrl", "Back-office"],
  ["status", "Statut"],
  ["owner", "Responsable"],
  ["nextAction", "Prochaine action le"],
  ["updatedAt", "Dernière mise à jour"],
  ["notes", "Notes (jamais d'information médicale)"],
];

/** Étapes du workflow, dans l'ordre. */
const STATUSES = ["Nouvelle", "À rappeler", "En cours", "Orientée vers une demande de consultation", "Clôturée"];

const LABELS = {
  subject: { project: "Projet d'intervention", question: "Question sur la plateforme", surgeon: "Chirurgien", press: "Presse ou partenariat", privacy: "Données personnelles", other: "Autre" },
  channel: { email: "E-mail", phone: "Téléphone" },
  slot: { morning: "Matin", lunch: "Midi", afternoon: "Après-midi", evening: "Soir", any: "Peu importe" },
};

/** Délai de réponse annoncé sur le site, en jours ouvrés. */
const RESPONSE_DAYS = 2;
/** Conservation maximale annoncée sur le site, en mois. */
const RETENTION_MONTHS = 12;

function col(key) {
  return COLUMNS.findIndex((c) => c[0] === key) + 1;
}

/** Réception d'une demande envoyée par le site (application web). */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const body = JSON.parse(e.postData.contents);
    const expected = PropertiesService.getScriptProperties().getProperty("TOKEN");
    if (!expected || body.token !== expected) return json({ ok: false, error: "unauthorized" });

    const row = body.row || {};
    const sheet = requestsSheet();
    // Pas de doublon si le site renvoie la même demande.
    const refs = sheet.getRange(2, col("reference"), Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat();
    if (refs.includes(row.reference)) return json({ ok: true, duplicate: true });

    const received = row.receivedAt ? new Date(row.receivedAt) : new Date();
    const values = COLUMNS.map(([key]) => {
      switch (key) {
        case "receivedAt": return received;
        case "subject": return LABELS.subject[row.subject] || row.subject || "";
        case "channel": return LABELS.channel[row.channel] || row.channel || "";
        case "slot": return LABELS.slot[row.slot] || row.slot || "";
        case "status": return STATUSES[0];
        case "nextAction": return addWorkingDays(received, RESPONSE_DAYS);
        case "updatedAt": return new Date();
        case "owner":
        case "notes": return "";
        default: return String(row[key] || "").slice(0, 300);
      }
    });
    sheet.appendRow(values);
    return json({ ok: true });
  } catch (error) {
    return json({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

/** À lancer une fois : crée les onglets, les listes de choix, les couleurs et les déclencheurs. */
function setup() {
  const ss = SpreadsheetApp.getActive();
  const sheet = requestsSheet();
  sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS.map((c) => c[1])]).setFontWeight("bold").setBackground("#0a3642").setFontColor("#ffffff");
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);
  sheet.getRange("B:B").setNumberFormat("dd/mm/yyyy hh:mm");
  sheet.getRange(2, col("nextAction"), sheet.getMaxRows() - 1, 1).setNumberFormat("dd/mm/yyyy");
  sheet.getRange(2, col("updatedAt"), sheet.getMaxRows() - 1, 1).setNumberFormat("dd/mm/yyyy hh:mm");

  const statusRange = sheet.getRange(2, col("status"), sheet.getMaxRows() - 1, 1);
  statusRange.setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).setAllowInvalid(false).build());

  // Formules en syntaxe anglaise (virgules) : c'est ce qu'attend Apps Script.
  // Couleur de ligne selon le statut, et alerte si la prochaine action est dépassée.
  const all = sheet.getRange(2, 1, sheet.getMaxRows() - 1, COLUMNS.length);
  const s = String.fromCharCode(64 + col("status"));
  const n = String.fromCharCode(64 + col("nextAction"));
  const rule = (formula, color) => SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied(formula).setBackground(color).setRanges([all]).build();
  sheet.setConditionalFormatRules([
    rule(`=AND($${s}2<>"Clôturée",$${n}2<>"",$${n}2<TODAY())`, "#fde2e1"),
    rule(`=$${s}2="Nouvelle"`, "#fff6e0"),
    rule(`=$${s}2="À rappeler"`, "#e8f1fb"),
    rule(`=$${s}2="En cours"`, "#e6efef"),
    rule(`=$${s}2="Clôturée"`, "#eeeeee"),
  ]);
  if (!sheet.getFilter()) sheet.getRange(1, 1, sheet.getMaxRows(), COLUMNS.length).createFilter();
  sheet.autoResizeColumns(1, COLUMNS.length);

  buildDashboard(ss);

  // Déclencheurs : mise à jour automatique, relances quotidiennes, purge.
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("onEditStatus").forSpreadsheet(ss).onEdit().create();
  ScriptApp.newTrigger("dailyFollowUp").timeBased().everyDays(1).atHour(8).create();
  ScriptApp.newTrigger("purgeOldRequests").timeBased().everyDays(1).atHour(3).create();
}

function requestsSheet() {
  const ss = SpreadsheetApp.getActive();
  return ss.getSheetByName(SHEET_REQUESTS) || ss.insertSheet(SHEET_REQUESTS, 0);
}

/** Changement de statut : date de mise à jour et prochaine action recalculées. */
function onEditStatus(e) {
  const range = e.range;
  const sheet = range.getSheet();
  if (sheet.getName() !== SHEET_REQUESTS || range.getRow() < 2) return;
  const row = range.getRow();
  sheet.getRange(row, col("updatedAt")).setValue(new Date());
  if (range.getColumn() !== col("status")) return;
  const status = range.getValue();
  const next = sheet.getRange(row, col("nextAction"));
  if (status === "Clôturée" || status === "Orientée vers une demande de consultation") next.clearContent();
  else if (status === "À rappeler") next.setValue(addWorkingDays(new Date(), 1));
  else if (status === "En cours") next.setValue(addWorkingDays(new Date(), 3));
}

/** Chaque matin : récapitulatif des demandes en retard, par référence seulement. */
function dailyFollowUp() {
  const team = PropertiesService.getScriptProperties().getProperty("TEAM_EMAIL");
  const sheet = requestsSheet();
  const last = sheet.getLastRow();
  if (!team || last < 2) return;
  const rows = sheet.getRange(2, 1, last - 1, COLUMNS.length).getValues();
  const today = startOfDay(new Date());
  const late = rows.filter((r) => {
    const status = r[col("status") - 1];
    const next = r[col("nextAction") - 1];
    return status !== "Clôturée" && status !== "Orientée vers une demande de consultation" && next instanceof Date && startOfDay(next) <= today;
  });
  if (late.length === 0) return;
  const lines = late.map((r) => `- ${r[col("reference") - 1]} · ${r[col("subject") - 1]} · ${r[col("status") - 1]} · ${r[col("owner") - 1] || "sans responsable"}`);
  MailApp.sendEmail({
    to: team,
    subject: `Éclaira : ${late.length} demande(s) de contact à traiter aujourd'hui`,
    body: `Demandes dont la prochaine action est due :\n\n${lines.join("\n")}\n\nTableau : ${SpreadsheetApp.getActive().getUrl()}`,
  });
}

/** Suppression des demandes de plus de 12 mois (durée annoncée sur le site). */
function purgeOldRequests() {
  const sheet = requestsSheet();
  const last = sheet.getLastRow();
  if (last < 2) return;
  const limit = new Date();
  limit.setMonth(limit.getMonth() - RETENTION_MONTHS);
  const dates = sheet.getRange(2, col("receivedAt"), last - 1, 1).getValues().flat();
  for (let i = dates.length - 1; i >= 0; i--) {
    if (dates[i] instanceof Date && dates[i] < limit) sheet.deleteRow(i + 2);
  }
}

/** Onglet de synthèse : volumes par statut et par objet, délai de traitement. */
function buildDashboard(ss) {
  const sheet = ss.getSheetByName(SHEET_DASHBOARD) || ss.insertSheet(SHEET_DASHBOARD);
  sheet.clear();
  const D = `'${SHEET_REQUESTS}'`;
  const statusCol = String.fromCharCode(64 + col("status"));
  const subjectCol = String.fromCharCode(64 + col("subject"));
  const nextCol = String.fromCharCode(64 + col("nextAction"));
  sheet.getRange("A1").setValue("Suivi des demandes de contact").setFontWeight("bold").setFontSize(14);
  sheet.getRange("A3:B3").setValues([["Statut", "Nombre"]]).setFontWeight("bold");
  STATUSES.forEach((status, i) => sheet.getRange(4 + i, 1, 1, 2).setValues([[status, `=COUNTIF(${D}!${statusCol}:${statusCol},"${status}")`]]));
  const row = 5 + STATUSES.length;
  sheet.getRange(row, 1, 1, 2).setValues([["En retard", `=COUNTIFS(${D}!${nextCol}:${nextCol},"<"&TODAY(),${D}!${statusCol}:${statusCol},"<>Clôturée")`]]).setFontWeight("bold");
  sheet.getRange(row + 2, 1, 1, 2).setValues([["Objet", "Nombre"]]).setFontWeight("bold");
  Object.values(LABELS.subject).forEach((label, i) => sheet.getRange(row + 3 + i, 1, 1, 2).setValues([[label, `=COUNTIF(${D}!${subjectCol}:${subjectCol},"${label}")`]]));
  sheet.autoResizeColumns(1, 2);
}

function addWorkingDays(date, days) {
  const d = new Date(date);
  let added = 0;
  while (added < days) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) added++;
  }
  return d;
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
