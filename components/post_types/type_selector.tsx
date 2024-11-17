import { PostType } from "@/types/posts";
import TypeSelectorItem from "./type_selector_item";
import "./type-selector.css";

export default function TypeSelector({ postTypes }: { postTypes: PostType[] }) {
  return (
    <section className="type-selector container is-max-widescreen">
      {postTypes?.map((postType: PostType) => (
        <TypeSelectorItem postType={postType} key={postType.title} />
      ))}
    </section>
  );
}
