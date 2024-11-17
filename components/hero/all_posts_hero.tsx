import { getTranslations, getLocale } from "next-intl/server";
import "./hero.css";
import { fetchData } from "@/utils/fetchData";
import TypeSelector from "../post_types/type_selector";

async function getAllTypes(locale: string) {
  const data = await fetchData(`query GetAllTypes {
          postTypes(locales: ${locale}) {
            title
            class
            slug
         }
      }`);
  return data.postTypes;
}

export default async function AllPostsHero() {
  const t = await getTranslations("AllPostsPage");
  const locale = await getLocale();
  const postTypes = await getAllTypes(locale);
  return (
    <section className="all-posts-hero">
      <section className="hero">
        <div className="hero-body container is-max-widescreen">
          <h2 className="humanimal-title title is-2">{t("title")}</h2>
          <h2 className="humanimal-title title is-2">{t("subtitle")}</h2>
          <TypeSelector postTypes={postTypes} />
        </div>
      </section>
    </section>
  );
}
