import BaiDuAnalytics from "@/app/BaiDuAnalytics";
import GoogleAdsense from "@/app/GoogleAdsense";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import MicrosoftClarity from "@/app/MicrosoftClarity";
import PlausibleAnalytics from "@/app/PlausibleAnalytics";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { LanguageDetectionAlert } from "@/components/LanguageDetectionAlert";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { siteConfig } from "@/config/site";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@/styles/loading.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    page: "Home",
    locale: DEFAULT_LOCALE,
    path: "/",
    canonicalUrl: "/",
  });
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setRequestLocale(DEFAULT_LOCALE);
  const messages = await getMessages();

  return (
    <html lang={DEFAULT_LOCALE} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && (
          <script
            defer
            src="https://umami.jinbai.online/script.js"
            data-website-id="57ca4af9-79b0-45b5-81c1-3bb3bb63f468"
          />
        )}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background flex flex-col font-sans antialiased"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme={siteConfig.defaultNextTheme}
            enableSystem
          >
            {messages.LanguageDetection && <LanguageDetectionAlert />}
            {messages.Header && <Header />}
            <main className="flex-1 flex flex-col items-center">{children}</main>
            {messages.Footer && <Footer />}
          </ThemeProvider>
        </NextIntlClientProvider>
        <TailwindIndicator />
        {process.env.NODE_ENV === "development" ? null : (
          <>
            <Analytics />
            <BaiDuAnalytics />
            <GoogleAnalytics />
            <MicrosoftClarity />
            <GoogleAdsense />
            <PlausibleAnalytics />
          </>
        )}
      </body>
    </html>
  );
}
