import { getLocale, getTranslations } from 'next-intl/server'
import type { MetadataRoute } from 'next'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const locale = await getLocale();
    const t = await getTranslations({
        locale,
        namespace: "SEO",
    });
    return {
        name: t("title"),
        short_name: t("title"),
        description: t("description"),
        start_url: '/fr',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3b82f6',
        orientation: 'portrait',
        categories: ['blog', 'health', 'nutrition'],
        prefer_related_applications: false,
        icons: [
            {
                src: '/logos/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logos/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png',
            },
            {
                src: '/logos/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        screenshots: [
            {
                src: '/screenshots/blog-home.png',
                sizes: '1280x720',
                type: 'image/png',
                label: 'Homepage of the Blog',
            },
            {
                src: '/screenshots/blog-article.png',
                sizes: '1280x720',
                type: 'image/png',
                label: 'Article page example',
            },
        ],
    }
}