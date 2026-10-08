"use client";

import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { isTracked, pageTemplate, trackEvent } from "@/lib/analytics";

const CORE_WEB_VITALS = new Set(["LCP", "INP", "CLS"]);

/** Core Web Vitals des vrais visiteurs : métrique, note et gabarit de page, sans l'adresse. */
export function WebVitals() {
  const pathname = usePathname();
  useReportWebVitals((metric) => {
    if (!CORE_WEB_VITALS.has(metric.name) || !isTracked(pathname)) return;
    trackEvent("Web Vitals", { metric: metric.name, rating: metric.rating, page: pageTemplate(pathname) });
  });
  return null;
}
