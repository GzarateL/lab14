import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Hablemos sobre tu Proyecto</title>
        <meta name="description" content="Contáctanos para mejorar el SEO y rendimiento de tu sitio web." />
        <meta name="keywords" content="contacto, soporte, servicios web, SEO" />
        
        <meta property="og:title" content="Contacto - Hablemos sobre tu Proyecto" />
        <meta property="og:description" content="Ponte en contacto para servicios de optimización web con Next.js." />
        <meta property="og:image" content="/seo-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lab14-1.onrender.com/contacto" />
      </Head>

      <main>
        <h1>Contacto</h1>
        <p>¿Tienes dudas o quieres trabajar con nosotros? ¡Contáctanos!</p>
      </main>
    </>
  );
}
