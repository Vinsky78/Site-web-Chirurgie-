"use server";

import { getLocale } from "next-intl/server";
import { getLeadRepository } from "./repository";
import { submitLead, type SubmitResult } from "./submit";

export async function submitLeadAction(input: unknown): Promise<SubmitResult> {
  const locale = await getLocale();
  return submitLead(input, locale, { repository: getLeadRepository() });
}
