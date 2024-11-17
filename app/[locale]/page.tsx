import MainHero from "@/components/hero/main_hero";
import Featured from "@/components/posts/featured";
import Latest from "@/components/posts/latest";
import { SITE_NAME } from "@/data/constants";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Pages");
  return {
    title: `${SITE_NAME} | ${t("home")}`,
  };
}

export default function HomePage() {
  return (
    <div className="container is-max-widescreen">
      <MainHero />
      <Latest />
      <Featured />
    </div>
  );
}
