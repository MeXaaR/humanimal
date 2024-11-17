import { Post } from "@/types/posts";
import SmallPostCard from "./small_post_card";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <section className="post-list">
      <div className="columns is-multiline" style={{ marginTop: "2rem" }}>
        {posts?.map((post: Post) => (
          <div
            className="column is-one-third-desktop is-one-third-tablet"
            key={post.slug}
          >
            <SmallPostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
