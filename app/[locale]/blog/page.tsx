import { redirect } from "@/i18n/routing";
import { getLocale } from "next-intl/server";
import { RedirectType } from "next/navigation";

export default async function BlogPage() {
  const locale = await getLocale();
  redirect({ href: "/blog/explore", locale }, RedirectType.replace);
}
