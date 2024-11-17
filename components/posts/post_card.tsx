import React from "react";
import { Post } from "@/types/posts";
import Image from "next/image";
import "./post_cards.css";
import { CategorieTag } from "../categories/categorie_tag";
import { PostTypeLine } from "./post_type";
import { Link } from "@/i18n/routing";

const PostCard = async ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="">
      <>
        <div className="single-link-post columns container">
          <div className="column is-three-fifths image is-16by9">
            <Image
              src={post.coverImage?.url}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="column is-two-fifths  post-card-content">
            <PostTypeLine postType={post.postType} createdAt={post.createdAt} />
            <h4 className="title is-4">{post.title}</h4>
            <p className="block">{post.excerpt}</p>
            {post?.category?.map((category) => (
              <CategorieTag category={category} key={category.id} />
            ))}
          </div>
        </div>
      </>
    </Link>
  );
};

export default PostCard;
