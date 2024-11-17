import { getLocale } from "next-intl/server";
import { fetchData } from "@/utils/fetchData";
import { Category } from "@/types/posts";
import "./categories.css";
import CategoryListItem from "./category_list_item";

async function getAllCategories(locale: string) {
  const data = await fetchData(`query getAllCategories {
          categories(locales: ${locale}, orderBy: name_ASC) {
            id
            name
            slug
            icon(locales: en) {
              url
            }
        }
      }`);

  return data?.categories;
}

export default async function CategorieList() {
  const locale = await getLocale();
  const categories: Category[] = await getAllCategories(locale);
  return (
    <section className="section categorie-list">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {categories.map((category: Category) => (
            <div className="column is-6-mobile is-3-tablet" key={category.slug}>
              <CategoryListItem category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
