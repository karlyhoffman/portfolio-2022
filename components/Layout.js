import Head from "next/head";
import { GoogleAnalytics, Navbar, Footer } from "components";

function Layout({ children, fontClasses }) {
  return (
    <div id="app" className={fontClasses}>
      <Head>
        <title>Karly Hoffman | Web Developer</title>
        <meta
          name="description"
          content="Karly Hoffman, a quality web developer who knows how to learn quickly and isn't afraid to try new technologies."
        />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
