import { getLocale } from "next-intl/server";
import { fetchData } from "@/utils/fetchData";
import PostList from "./post_list";
import { SearchParams } from "next/dist/server/request/search-params";

async function getPosts(locale: string, sort = "DESC", type = "") {
  console.log(locale, sort, type);
  const data = await fetchData(`query GetPosts {
          posts(
            locales: ${locale}, 
            orderBy: createdAt_${sort}, 
            where: {
              ${
                !type
                  ? ""
                  : `postType: { 
                slug_in: ${JSON.stringify(type.split(","))}
              }`
              }
            }
          ) {
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
  console.log(JSON.stringify(data, null, 2));
  return data?.posts;
}

export default async function PostListWrapper({
  params,
}: {
  params: SearchParams;
}) {
  const { sort, type } = await params;
  const locale = await getLocale();
  // Fetch posts from the API
  const posts = await getPosts(locale, sort as string, type as string);
  return (
    <section className="post-list-wrapper">
      <PostList posts={posts} />
    </section>
  );
}
