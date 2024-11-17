import { SITE_DESCRIPTION, SITE_NAME } from '@/data/constants'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_NAME,
        short_name: SITE_NAME,
        description: SITE_DESCRIPTION,
        start_url: '/fr',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3b82f6',
        orientation: 'portrait',
        categories: ['blog', 'health', 'nutrition'],
        prefer_related_applications: false,
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-384x384.png',
                sizes: '384x384',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512x512.png',
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