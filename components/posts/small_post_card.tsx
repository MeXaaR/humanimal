import React from "react";
import { Post } from "@/types/posts";
import Image from "next/image";
import { CategorieTag } from "../categories/categorie_tag";
import { PostTypeLine } from "./post_type";
import { Link } from "@/i18n/routing";

export default async function SmallPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="">
      <div className="single-link-post block small-post-card">
        <div className="image is-16by9">
          <Image
            src={post.coverImage?.url}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <PostTypeLine postType={post.postType} createdAt={post.createdAt} />
        <h4 className="title is-4 is-secondary">{post.title}</h4>
        {post?.category?.map((category) => (
          <CategorieTag category={category} key={category.id} />
        ))}
      </div>
    </Link>
  );
}
