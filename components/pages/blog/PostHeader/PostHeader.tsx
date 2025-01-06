import { PostMetadata } from "@/data/posts";
import { getFormattedDateString } from "@/lib/utils";
import React from "react";

type PostHeaderProps = {
  title: PostMetadata["title"];
  createdAt: PostMetadata["createdAt"];
  minutesToRead: PostMetadata["minutesToRead"];
};

function PostHeader({ title, createdAt, minutesToRead }: PostHeaderProps) {
  const createdAtDate = new Date(createdAt);
  return (
    <div className="mb-10">
      <h1 className="text-highlight font-extrabold">{title}</h1>
      <div className="flex flex-row gap-2 mt-3 font-extralight">
        <time dateTime={createdAtDate.toISOString()}>
          <small>{getFormattedDateString(createdAtDate)}</small>
        </time>{" "}
        |{" "}
        <small>
          {minutesToRead} {minutesToRead > 1 ? "mins" : "min"} read
        </small>
      </div>
    </div>
  );
}

export default PostHeader;
