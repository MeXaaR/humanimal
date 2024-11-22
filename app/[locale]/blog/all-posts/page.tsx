import AllPostsHero from "@/components/hero/all_posts_hero";
import SortPostsBy from "@/components/sorting/sort_posts_by";
import PostListWrapper from "@/components/posts/post_list_wrapper";
import "./style.css";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageProps } from "@/types/pages";

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Pages");
  const t2 = await getTranslations("SEO");
  return {
    title: `${t2("title")} | ${t("all_posts")}`,
  };
}

export default async function AllPosts({ searchParams }: PageProps) {
  const params = await searchParams;
  return (
    <div className="all-posts-container">
      <AllPostsHero />
      <div className="container is-max-widescreen">
        <SortPostsBy />
        <PostListWrapper params={params} />
      </div>
    </div>
  );
}
