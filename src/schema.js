// JSON-LD builders. The LocalBusiness node lives in index.html and is
// referenced here through its @id.
import { SITE_URL } from './Seo';

export const BUSINESS_ID = `${SITE_URL}/#business`;

export const SERVICE_AREAS = [
  'Lafayette', 'Scott', 'Youngsville', 'Broussard', 'Carencro',
  'Duson', 'Maurice', 'Breaux Bridge',
  'St. Martinville', 'Cade',
];

const abs = (p) => (p.startsWith('http') ? p : `${SITE_URL}${p}`);

export function serviceSchema({ name, serviceType, description, path, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    name,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    ...(image && { image: abs(image) }),
    provider: { '@id': BUSINESS_ID },
    areaServed: SERVICE_AREAS.map((city) => ({
      '@type': 'City',
      name: `${city}, LA`,
    })),
  };
}

export function blogPostingSchema(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#post`,
    headline: post.title,
    description: post.excerpt,
    image: abs(post.image),
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: 'en-US',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'Sparklean Cleaning Services', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Sparklean Cleaning Services',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/img/sparklean-cleaning-logo-lafayette.webp` },
    },
  };
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
