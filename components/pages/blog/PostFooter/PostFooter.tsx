import { PostMetadata } from "@/data/posts";
import { getFormattedDateString } from "@/lib/utils";
import React from "react";

type PostFooterProps = {
  updatedAt: PostMetadata["updatedAt"];
};
function PostFooter({ updatedAt }: PostFooterProps) {
  const updatedAtDate = new Date(updatedAt);
  return (
    <div className="mt-8 flex gap-1">
      <dl className="flex gap-1">
        <dt className="font-semibold">Last Modified:</dt>
        <dd>
          <time dateTime={updatedAtDate.toISOString()}>
            {getFormattedDateString(updatedAtDate)}
          </time>
        </dd>
      </dl>
    </div>
  );
}

export default PostFooter;
