import config from "@/config";

export default async function sitemap() {
  const baseUrl = config.baseUrl;
  const paths = ["", "blog"].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
  }));

  return paths;
}
