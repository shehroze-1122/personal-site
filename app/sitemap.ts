import config from "@/config";
import { getAllPosts } from "@/lib/api/posts";

export default async function sitemap() {
  const baseUrl = config.baseUrl;
  const allPosts = getAllPosts();
  const basePaths = ["", "blog"].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
  }));
  const postsPaths = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  return [...basePaths, ...postsPaths];
}
