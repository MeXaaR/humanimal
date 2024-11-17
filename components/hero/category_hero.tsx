import { MDXRemote } from "next-mdx-remote/rsc";
import { Category } from "@/types/posts";

import "./hero.css";
import Image from "next/image";

export default async function CategoryHero({
  category,
}: {
  category: Category;
}) {
  return (
    <section className="category-hero">
      <section className="hero">
        <div className="hero-body container is-max-widescreen">
          <h2 className="humanimal-title title is-2">
            <figure className="image is-64x64 has-text-centered">
              <Image
                src={category.icon?.url}
                alt={category.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </figure>
            <div>{category.name}</div>
          </h2>
          <div className="content markdown">
            <MDXRemote source={category.description} />
          </div>
        </div>
      </section>
    </section>
  );
}
