import ExploreHero from "@/components/hero/explore_hero";
import "./style.css";
import CategorieList from "@/components/categories/categorie_list";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Pages");
  const t2 = await getTranslations("SEO");
  return {
    title: `${t2("title")} | ${t("explore_blog")}`,
  };
}

export default async function Explore() {
  return (
    <div className="explore-container">
      <ExploreHero />
      <div className="container is-max-widescreen">
        <CategorieList />
      </div>
    </div>
  );
}
