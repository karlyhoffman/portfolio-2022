const Sitemap = () => null;

const PAGES = ['/'];

const createSitemap = ({ data = [], url }) =>
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${data
        .map(
          (loc) =>
            `<url>
              <loc>${url + loc}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>`
        )
        .join('')}
    </urlset>
  `;

export default Sitemap;

export const getServerSideProps = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(
    createSitemap({
      data: PAGES,
      url: `https://${req.headers?.host || karlyhoffman.com}`,
    })
  );
  res.end();
  return { props: {} };
};
