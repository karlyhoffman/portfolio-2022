import { Analytics } from '@vercel/analytics/react';
import { CurrentSectionProvider } from 'context/CurrentSection';
import { Layout } from 'components';
import 'styles/global.scss';

const isDevelopment = process.env.NODE_ENV === 'development';

function MyApp({ Component, pageProps }) {
  console.log({ isDevelopment });

  return (
    <>
      <CurrentSectionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CurrentSectionProvider>
      {/* {isProduction && <Analytics />} */}
    </>
  );
}

export default MyApp;
