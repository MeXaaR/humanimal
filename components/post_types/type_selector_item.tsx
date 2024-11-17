"use client";
import { PostType } from "@/types/posts";
import { useSearchParams, useRouter } from "next/navigation";

export default function TypeSelectorItem({ postType }: { postType: PostType }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTypes = searchParams.get("type")?.split(",") || [];
  const isChecked = currentTypes.includes(postType.slug);

  const onClick = () => {
    // Create a new URLSearchParams instance
    const newSearchParams = new URLSearchParams(searchParams);
    const types = searchParams.get("type")?.split(",").filter(Boolean) || [];

    if (isChecked) {
      // Remove type if already selected
      const newTypes = types.filter((type) => type !== postType.slug);
      if (newTypes.length > 0) {
        newSearchParams.set("type", newTypes.join(","));
      } else {
        newSearchParams.delete("type");
      }
    } else {
      // Add new type
      types.push(postType.slug);
      newSearchParams.set("type", types.join(","));
    }

    // Use the router to update the URL
    router.push(`?${newSearchParams.toString()}`);
  };

  return (
    <div
      className={`type-item tag is-hoverable is-medium ${
        isChecked ? postType.class : "is-white"
      }`}
      onClick={onClick}
    >
      <span className="icon">
        {isChecked ? (
          <i className="fa-solid fa-square-check"></i>
        ) : (
          <i className="fa-regular fa-square"></i>
        )}
      </span>
      {postType.title}
    </div>
  );
}
