export type PostMetadata = {
  slug: string;
  title: string;
  tags: string[];
  minutesToRead: number;
  createdAt: string;
  thumbnailUrl: string;
};

export const posts: PostMetadata[] = [
  {
    slug: "evolution-of-rendering-in-web-and-next.js",
    title: "Evolution of Rendering in Web and Next.js",
    tags: ["Web Development", "Next.js", "React"],
    minutesToRead: 8,
    createdAt: "2024-12-27",
    thumbnailUrl:
      "/blogs/evolution-of-rendering-in-web-and-next.js/thumbnail.webp",
  },
];
