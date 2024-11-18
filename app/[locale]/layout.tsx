import { GlobalLayout } from "@/components/layouts/global_layout";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { LOCALES } from "@/data/constants";
import { PageTransition } from "@/components/layouts/page_transition";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import moment from "moment";
import "moment/locale/fr";
import "moment/locale/en-gb";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../globals.css";
import fonts from "../fonts";
import Footer from "@/components/footer/footer";
import "@/components/footer/footer.css";
import { generateMetadata as generateSiteMetadata } from "@/utils/metadata";

export const generateMetadata = generateSiteMetadata;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const navParams = await params;

  // Ensure that the incoming `locale` is valid
  if (!LOCALES.includes(navParams.locale as "en" | "fr")) {
    notFound();
  }

  moment.locale(navParams.locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={navParams.locale}>
      <body
        className={`${fonts.permanentMarker.variable} ${fonts.georama.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <GlobalLayout>
            <PageTransition>{children}</PageTransition>
          </GlobalLayout>
        </NextIntlClientProvider>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
