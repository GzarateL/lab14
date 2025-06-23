import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Mi Sitio Optimizado</title>
        <meta name="description" content="Página principal con las mejores prácticas de SEO." />
        <meta property="og:title" content="Inicio - Mi Sitio Optimizado" />
        <meta property="og:description" content="Aprende cómo mejorar tu web con Next.js y SEO." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/seo-image.png" />
      </Head>
      <h1>Página de Inicio</h1>
    </>
  );
}
