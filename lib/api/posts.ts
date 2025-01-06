import { posts } from "@/data/posts";

export const getAllPosts = ({
  limit,
  sorted,
}: {
  limit?: number;
  sorted?: boolean;
} = {}) => {
  if (sorted) {
    return posts
      .toSorted(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .slice(0, limit ?? posts.length);
  }
  return posts.slice(0, limit ?? posts.length);
};

export const getPostBySlug = (slug: string) => {
  const post = posts.find((post) => post.slug === slug);
  return post;
};
