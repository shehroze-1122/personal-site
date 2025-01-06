import createMDX from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  defaultLang: "plaintext",
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
};

/** @type {import('rehype-autolink-headings').Options} */
const rehypeAutolinkHeadingsOptions = {
  behavior: "prepend",
  properties: {
    className: ["rehype-auto-link"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
    ],
  },
});

export default withMDX(nextConfig);
