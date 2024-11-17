import { getLocale, getTranslations } from "next-intl/server";
import "./latest.css";
import { Post } from "@/types/posts";
import SmallPostCard from "./small_post_card";
import { fetchData } from "@/utils/fetchData";

async function getPosts(locale: string) {
  const data = await fetchData(`query FeaturedPosts {
          posts(locales: ${locale}, orderBy: createdAt_DESC, last: 3, where: {featured: true}) {
            date
            publishedAt
            slug
            title
            updatedAt
            postType {
                title
                class
                slug
            }
            author {
                title
                name
            }
            category {
                name
                slug
            }
            coverImage(locales: en) {
                url
            }
         }
      }`);
  return data?.posts;
}

// Add async component
export default async function Featured() {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");

  // Fetch posts from the API
  const posts = await getPosts(locale);

  if (posts?.length === 0) {
    return null;
  }

  return (
    <div className="latest-posts">
      <h2 className="humanimal-title title is-2 is-secondary">
        {t("featured")}
      </h2>
      <div className="posts columns is-gap-2" style={{ marginTop: "2rem" }}>
        {posts?.map((post: Post) => (
          <div className="column is-one-third" key={post.slug}>
            <SmallPostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
