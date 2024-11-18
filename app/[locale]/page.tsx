import MainHero from "@/components/hero/main_hero";
import Featured from "@/components/posts/featured";
import Latest from "@/components/posts/latest";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Pages");
  const t2 = await getTranslations("SEO");
  return {
    title: `${t2("title")} | ${t("home")}`,
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
