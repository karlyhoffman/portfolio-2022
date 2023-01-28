import { Analytics } from '@vercel/analytics/react';
import { CurrentSectionProvider } from 'context/CurrentSection';
import { Layout } from 'components';
import 'styles/global.scss';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }) {
  console.log({ isProduction });

  return (
    <>
      <CurrentSectionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CurrentSectionProvider>
      {isProduction && <Analytics />}
    </>
  );
}

export default MyApp;
