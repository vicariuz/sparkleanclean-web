// Per-route SEO tags. React 19 hoists <title>, <meta> and <link> rendered
// anywhere in the tree into <head>, and removes them when the component
// unmounts, so no helmet-style dependency is needed.
export const SITE_URL = 'https://www.sparkleancleaners.com';
// Same 1200x630 share image on every route.
export const OG_IMAGE = '/img/sparklean-og-image.png';

export default function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  noindex = false,
  schema,
}) {
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;
  const imageUrl = `${SITE_URL}${OG_IMAGE}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <link rel="canonical" href={url} />
      )}

      <meta property="og:site_name" content="Sparklean Cleaning Services" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
