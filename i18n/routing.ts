import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const LOCALES = [
  "en",
  // "zh",
  // "ja",
] as const;
export const DEFAULT_LOCALE = "en";
export const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  // zh: "Chinese",
  // ja: "Japanese",
};

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: process.env.NEXT_PUBLIC_LOCALE_DETECTION === "true",
  localePrefix: "never",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
