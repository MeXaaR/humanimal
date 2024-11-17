import { SearchParams } from "next/dist/server/request/search-params";
import AllPosts from "./all-posts/page";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return <AllPosts searchParams={searchParams} />;
}
