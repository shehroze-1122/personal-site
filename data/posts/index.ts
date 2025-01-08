export type PostMetadata = {
  slug: string;
  title: string;
  tags: string[];
  minutesToRead: number;
  createdAt: string;
  updatedAt: string;
  thumbnailUrl: string;
  description: string;
};

export const posts: PostMetadata[] = [
  {
    slug: "evolution-of-rendering-in-web-and-next.js",
    title: "Evolution of Rendering in Web and Next.js",
    tags: ["Web Development", "Next.js", "React"],
    minutesToRead: 8,
    createdAt: "2024-12-27",
    updatedAt: "2024-12-27",
    thumbnailUrl:
      "/blogs/evolution-of-rendering-in-web-and-next.js/thumbnail.webp",
    description:
      "Explore the core rendering paradigms shaping modern web development: CSR, SSR, SSG, ISR, and the latest innovations in React and Next.js with Server and Client Components. This technical deep dive breaks down each concept with clear explanations and real-world examples, helping you master their use cases and understand how they interconnect to optimize performance, scalability, and user experience.",
  },
];
