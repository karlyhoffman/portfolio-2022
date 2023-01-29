import localFont from "@next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { CurrentSectionProvider } from "context/CurrentSection";
import { Layout } from "components";
import "styles/global.scss";

const isProduction = process.env.NODE_ENV === "production";

const fjallaOne = localFont({
  src: "../fonts/Fjalla-One.woff2",
  variable: "--font-fjalla-one",
});

const geographBold = localFont({
  src: "../fonts/Geograph-Bold.woff2",
  variable: "--font-geograph-bold",
});

const speedeeBold = localFont({
  src: "../fonts/Speedee-Bold.woff2",
  variable: "--font-speedee-bold",
});

const fonts = `${fjallaOne.variable} ${geographBold.variable} ${speedeeBold.variable}`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CurrentSectionProvider>
        <Layout fontClasses={fonts}>
          <Component {...pageProps} />
        </Layout>
      </CurrentSectionProvider>
      {isProduction && <Analytics />}
    </>
  );
}

export default MyApp;
