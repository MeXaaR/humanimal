import { LOCALES } from '@/data/constants';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: LOCALES,

    // Used when no locale matches
    defaultLocale: "fr",
    localePrefix: "always",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);