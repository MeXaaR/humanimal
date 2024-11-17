import ExploreHero from "@/components/hero/explore_hero";
import "./style.css";
import CategorieList from "@/components/categories/categorie_list";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_NAME } from "@/data/constants";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Pages");
  return {
    title: `${SITE_NAME} | ${t("explore_blog")}`,
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
