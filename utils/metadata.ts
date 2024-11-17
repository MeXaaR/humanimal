import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/data/constants";
import { getLocale } from "next-intl/server";


export type ParamsProps = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};




export async function generateMetadata(): Promise<Metadata> {
    const locale = await getLocale();
    const title = SITE_NAME
    const description = SITE_DESCRIPTION
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.com';
    return {
        title: {
            default: title,
            template: `%s | ${SITE_NAME}`,
        },
        description,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: '/',
            languages: {
                'en': '/en',
                'fr': '/fr',
            },
        },
        openGraph: {
            title,
            description,
            url: siteUrl,
            siteName: SITE_NAME,
            locale,
            type: 'website',
            images: [
                {
                    url: `${siteUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: SITE_NAME,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${siteUrl}/og-image.jpg`],
        },
        robots: {
            index: false,
            follow: false,
            googleBot: {
                index: false,
                follow: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
        },
        icons: {
            icon: '/favicon.ico',
            shortcut: '/favicon-16x16.png',
            apple: '/apple-touch-icon.png',
        },
        manifest: '/site.webmanifest',
        viewport: {
            width: 'device-width',
            initialScale: 1,
            maximumScale: 1,
        },
    };
} 