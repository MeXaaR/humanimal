import { Category } from "@/types/posts";

export const CategorieTag = ({ category }: { category: Category }) => {
  return (
    <span
      className="tag is-white"
      style={{ border: "1px solid var(--bulma-dark)" }}
    >
      {category.name}
    </span>
  );
};
