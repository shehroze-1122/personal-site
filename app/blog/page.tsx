import React from "react";
import { Metadata } from "next";
import Section from "@/components/common/Section";
import { getAllPosts } from "@/lib/api/posts";
import PostCard from "@/components/common/PostCard";

const title = "Blog";
const description =
  "Explore Shehroze Talat's in-depth tutorials, concept explainers, and insights on web and software engineering, designed to simplify complex topics and enhance your skills.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: "/blog",
    images: ["/opengraph-blog.png"],
    siteName: "Blog | Shehroze Talat",
  },
  twitter: {
    title,
    description,
    images: ["/opengraph-blog.png"],
    card: "summary_large_image",
    site: "@shehrozett",
    creator: "@shehrozett",
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
