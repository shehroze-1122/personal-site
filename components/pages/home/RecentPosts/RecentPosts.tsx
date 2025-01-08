import React from "react";
import Section from "@/components/common/Section";
import PostCard from "@/components/common/PostCard";
import { getAllPosts } from "@/lib/api/posts";
import InternalLink from "@/components/common/InternalLink";

function RecentPosts() {
  const recentPosts = getAllPosts({ limit: 3, sorted: true });

  return (
    <Section title="Recent Posts">
      {recentPosts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.title}
          description={post.description}
          tags={post.tags}
          slug={post.slug}
          minutesToRead={post.minutesToRead}
          thumbnailUrl={post.thumbnailUrl}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
        />
      ))}
      {recentPosts.length >= 3 && (
        <InternalLink href="/blog">View All</InternalLink>
      )}
    </Section>
  );
}

export default RecentPosts;
