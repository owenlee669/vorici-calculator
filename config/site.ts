import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vorici-calculator.com";

export const SOURCE_CODE_URL = "https://github.com/weijunext/nextjs-starter";
export const PRO_VERSION = "https://nexty.dev";

const TWITTER_URL = "";
const BSKY_URL = "";
const EMAIL_URL = "hello@vorici-calculator.com";
const GITHUB_URL = "";
const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL;

export const siteConfig: SiteConfig = {
  name: "Vorici Calculator",
  tagLine: "POE Socket Color Calculator",
  description:
    "Calculate socket color odds, pure chromatic cost, and Path of Exile coloring strategies with a focused Vorici Calculator landing page.",
  url: BASE_URL,
  authors: [
    {
      name: "Vorici Calculator",
      url: BASE_URL,
    },
  ],
  creator: "@voricicalculator",
  socialLinks: {
    discord: DISCORD_URL,
    twitter: TWITTER_URL,
    github: GITHUB_URL,
    bluesky: BSKY_URL,
    email: EMAIL_URL,
  },
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  defaultNextTheme: "system", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
};
