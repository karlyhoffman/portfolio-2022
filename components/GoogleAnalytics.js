const isProduction = process.env.NODE_ENV === 'production';

const GoogleAnalytics = () => {
  console.log('GA', { isProduction });

  if (!isProduction) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
        }}
      />
    </>
  );
};

export const GoogleAnalyticsEvent = ({ action, params }) => {
  if (isProduction && window?.gtag && action && params) {
    window.gtag('event', action, params);
  }
};

export default GoogleAnalytics;
