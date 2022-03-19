import { CurrentSectionProvider } from "context/CurrentSection";
import { Layout } from "components";
import "styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <CurrentSectionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CurrentSectionProvider>
  );
}

export default MyApp;
