export default async function sitemap() {
  const baseUrl = new URL("https://shehroze.vercel.app");
  const paths = ["", "blog"].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date().toISOString(),
  }));

  return paths;
}
