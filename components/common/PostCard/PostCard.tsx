import Image from "next/image";
import React from "react";
import InternalLink from "../InternalLink";
import Tag from "../Tag";
import { PostMetadata } from "@/data/posts";
import { getFormattedDateString } from "@/lib/utils";

type PostCardProps = PostMetadata;

function PostCard({
  thumbnailUrl,
  createdAt,
  title,
  slug,
  tags,
  minutesToRead,
}: PostCardProps) {
  const formattedCreationDate = getFormattedDateString(new Date(createdAt));

  return (
    <div className="flex flex-row gap-3 w-full max-xs:flex-col">
      <div>
        <Image
          src={thumbnailUrl}
          alt={`Blog: '${title}' thumbnail`}
          width={150}
          height={150}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col w-full">
        <div>
          <time dateTime={formattedCreationDate}>{formattedCreationDate}</time>
        </div>
        <div className="flex flex-col gap-1">
          <h4>
            <InternalLink href={`/blog/${slug}`} className="text-highlight">
              {title}
            </InternalLink>
          </h4>
          <div className="flex flex-row justify-between items-center max-xs:flex-col-reverse max-xs:justify-start max-xs:items-start max-xs:gap-2">
            <div className="flex flex-row gap-1 flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <small>
              {minutesToRead} {minutesToRead > 1 ? "mins" : "min"} read
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
