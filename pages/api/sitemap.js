const BASE_URL = "https://lab14-1.onrender.com";

export default async function handler(req, res) {
  // Suponiendo rutas dinámicas simuladas desde una base de datos
  const blogPosts = [
    { slug: "introduccion-seo" },
    { slug: "mejorando-performance" },
    { slug: "nextjs-dinamico" },
  ];

  const staticPages = ["/", "/blog", "/contacto"];

  const urls = [
    ...staticPages,
    ...blogPosts.map((post) => `/blog/${post.slug}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
