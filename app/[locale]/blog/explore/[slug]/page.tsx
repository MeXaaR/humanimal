import { getLocale } from "next-intl/server";
import PostCard from "@/components/posts/post_card";
import { Post } from "@/types/posts";
import SmallPostCard from "@/components/posts/small_post_card";
import { fetchData } from "@/utils/fetchData";
import CategoryHero from "@/components/hero/category_hero";

import "../style.css";
import { PageProps } from "@/types/pages";

async function getPosts(locale: string, slug: string) {
  const data = await fetchData(`query CategoryPosts {
        category(
            locales: ${locale},
            where: {slug: "${slug}" }
        ) {
            name
            description
            slug
            icon(locales: en) {
              url
            }
        }
        posts(
            locales: ${locale}, 
            orderBy: createdAt_DESC, 
            where: {category_some: {slug: "${slug}"}}
        ) {
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
            coverImage(locales: en) {
                url
            }
         }
      }`);
  return data;
}

export default async function CategoryPosts({ params }: PageProps) {
  const locale = await getLocale();
  const { slug } = await params;
  const results = await getPosts(locale, slug);
  const { category, posts } = results || {};

  return (
    <div className="category-posts">
      <CategoryHero category={category} />
      <div className="posts-list container is-max-widescreen">
        {posts?.length > 0 && (
          <>
            <PostCard post={posts?.[0]} />
            <div
              className="posts columns is-multiline is-gap-0"
              style={{ marginTop: "2rem" }}
            >
              {posts?.slice(1)?.map((post: Post) => (
                <div className="column is-half" key={post.slug}>
                  <SmallPostCard post={post} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
