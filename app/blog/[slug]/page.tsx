import { getAllPosts, getPostBySlug } from "@/lib/api/posts";
import { notFound } from "next/navigation";
import React from "react";
import "./mdx.css";
import PostHeader from "@/components/pages/blog/PostHeader";
import PostFooter from "@/components/pages/blog/PostFooter";

export const dynamicParams = false;
export const generateStaticParams = () => {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const { default: Post } = await import(`@/data/posts/content/${slug}.mdx`);

  return (
    <article>
      <PostHeader
        title={post.title}
        minutesToRead={post.minutesToRead}
        createdAt={post.createdAt}
      />
      <Post />
      <PostFooter updatedAt={post.updatedAt} />
    </article>
  );
}

export default BlogPostPage;
