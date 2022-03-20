import Head from "next/head";
import Script from "next/script";
import { Navbar, Footer } from "components";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Karly Hoffman | Web Developer</title>
        <meta
          name="description"
          content="Karly Hoffman, a quality web developer who knows how to learn quickly and isn't afraid to try new technologies."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="ga"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
        }}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
