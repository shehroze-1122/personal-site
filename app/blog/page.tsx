import React from "react";
import { Metadata } from "next";
import Section from "@/components/common/Section";
import { getAllPosts } from "@/lib/api/posts";
import PostCard from "@/components/common/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore Shehroze Talat's in-depth tutorials, concept explainers, and insights on web and software engineering, designed to simplify complex topics and enhance your skills.",
  openGraph: {
    title: "Blog",
    description:
      "Explore Shehroze Talat's in-depth tutorials, concept explainers, and insights on web and software engineering, designed to simplify complex topics and enhance your skills.",
  },
};

function BlogPage() {
  const allPosts = getAllPosts({ sorted: true });
  return (
    <Section title="Blogs">
      {allPosts.map((post) => (
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
    </Section>
  );
}

export default BlogPage;
