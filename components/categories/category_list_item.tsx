import { Link } from "@/i18n/routing";
import { Category } from "@/types/posts";
import Image from "next/image";

export default function CategoryListItem({ category }: { category: Category }) {
  return (
    <Link
      href={`/blog/explore/${category.slug}`}
      className="category-list-item"
    >
      <figure className="image is-64x64">
        <Image
          src={category.icon?.url}
          alt={category.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>

      <div className="title is-6">{category.name} </div>
    </Link>
  );
}
