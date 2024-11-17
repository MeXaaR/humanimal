import { getLocale, getTranslations } from "next-intl/server";
import "./latest.css";
import PostCard from "./post_card";
import { Post } from "@/types/posts";
import SmallPostCard from "./small_post_card";
import { fetchData } from "@/utils/fetchData";

async function getPosts(locale: string) {
  const data = await fetchData(`query LatestPosts {
        posts(locales: ${locale}, orderBy: createdAt_DESC, last: 3) {
            date
            publishedAt
            slug
            title
            postType {
                title
                class
                slug
            }
            updatedAt
            excerpt
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
export default async function Latest() {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");

  // Fetch posts from the API
  const posts = await getPosts(locale);

  return (
    <div className="latest-posts">
      <h2 className="humanimal-title title is-2 is-secondary">{t("latest")}</h2>
      {posts?.length > 0 && (
        <>
          <PostCard post={posts?.[0]} />
          <div className="posts columns is-gap-2" style={{ marginTop: "2rem" }}>
            {posts?.slice(1)?.map((post: Post) => (
              <div className="column is-half" key={post.slug}>
                <SmallPostCard post={post} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
