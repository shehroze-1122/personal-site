import { getAllPosts, getPostBySlug } from "@/lib/api/posts";
import { notFound } from "next/navigation";
import React from "react";
import "./mdx.css";
import PostHeader from "@/components/pages/blog/PostHeader";
import PostFooter from "@/components/pages/blog/PostFooter";
import { Metadata, ResolvingMetadata } from "next";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () => {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const generateMetadata = async (
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const parentMetadata = await parent;

  if (!post) {
    return notFound();
  }

  const title = `Blog | ${post.title}`;
  return {
    title: {
      absolute: title,
    },
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: {
        absolute: title,
      },
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [post.thumbnailUrl, ...(parentMetadata.openGraph?.images || [])],
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      title: {
        absolute: title,
      },
      description: post.description,
      images: [post.thumbnailUrl, ...(parentMetadata.twitter?.images || [])],
    },
  };
};

async function BlogPostPage({ params }: BlogPostPageProps) {
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
