import { Post } from "@/types/posts";
import Image from "next/image";
import { PostTypeLine } from "../posts/post_type";
import { CategorieTag } from "../categories/categorie_tag";
import "./hero.css";

export const PostHero = ({ post }: { post: Post }) => {
  return (
    <section className="post-hero">
      <section className="hero">
        <div className="hero-body container is-max-tablet">
          <div className="block">
            <PostTypeLine postType={post.postType} createdAt={post.createdAt} />
            <h3 className="title is-4">{post.title}</h3>
            {post?.category?.map((category) => (
              <CategorieTag category={category} key={category.id} />
            ))}
          </div>
          <div className="image is-16by9">
            <Image
              src={post.coverImage?.url}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};
