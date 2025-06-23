import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Consejos de SEO y Desarrollo Web</title>
        <meta name="description" content="Lee artículos sobre SEO, rendimiento y mejores prácticas en desarrollo web." />
        <meta name="keywords" content="blog, SEO, rendimiento web, desarrollo, Next.js" />
        
        <meta property="og:title" content="Blog - Consejos de SEO y Desarrollo Web" />
        <meta property="og:description" content="Explora artículos sobre SEO y optimización web con Next.js." />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://lab14-1.onrender.com/blog" />
      </Head>

      <main>
        <h1>Blog</h1>
        <p>Bienvenido a nuestro blog de optimización y desarrollo web.</p>
      </main>
    </>
  );
}
