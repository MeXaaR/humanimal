"use client";
import { LOCALES } from "@/data/constants";
import { usePathname, Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export const Locale = () => {
  const locale = useLocale();
  const otherLocale = LOCALES.find((l) => l !== locale);
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  return (
    <Link href={pathname} locale={otherLocale} className="button is-primary">
      {t(otherLocale)}
    </Link>
  );
};
