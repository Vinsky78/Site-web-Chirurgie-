"use server";

import { headers } from "next/headers";
import { getDb } from "@/db/client";
import { getProSession } from "@/lib/auth";
import { linkedSurgeonSlugs, markRelevance } from "./inbox";

export type RelevanceState = { saved?: boolean; error?: boolean };

export async function relevanceAction(_prev: RelevanceState, form: FormData): Promise<RelevanceState> {
  const session = await getProSession(await headers());
  if (!session?.user.twoFactorEnabled) return { error: true };
  const relevant = form.get("relevant");
  if (relevant !== "yes" && relevant !== "no") return { error: true };
  const db = getDb();
  const saved = await markRelevance(db, {
    requestId: String(form.get("requestId") ?? ""),
    slugs: await linkedSurgeonSlugs(db, session.user.id),
    relevant: relevant === "yes",
  });
  return saved ? { saved: true } : { error: true };
}
