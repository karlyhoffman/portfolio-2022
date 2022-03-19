import Head from "next/head";
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
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
