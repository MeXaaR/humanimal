import { PostType } from "@/types/posts";
import moment from "moment";
import { MOMENT_FORMATS } from "@/data/constants";
import { getLocale } from "next-intl/server";
import "./post_cards.css";

export const PostTypeLine = async ({
  postType,
  createdAt,
}: {
  postType: PostType;
  createdAt: string;
}) => {
  const locale: string = await getLocale();
  return (
    <div className="post-card-type">
      {postType ? <PostTypeTag postType={postType} /> : null}
      <div className="post-card-date">
        {moment(createdAt).format(MOMENT_FORMATS[locale])}
      </div>
    </div>
  );
};

export const PostTypeTag = ({ postType }: { postType: PostType }) => {
  return <div className={`tag ${postType.class}`}>{postType.title}</div>;
};
