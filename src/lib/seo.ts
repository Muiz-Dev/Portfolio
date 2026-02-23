import { personalData } from '@/lib/portfolio-data';

const DEFAULT_SITE_URL = personalData.portfolioUrl;

function normalizeSiteUrl(rawUrl: string | undefined) {
  const fallback = new URL(DEFAULT_SITE_URL);

  if (!rawUrl) {
    return fallback.origin;
  }

  try {
    return new URL(rawUrl).origin;
  } catch {
    return fallback.origin;
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
export const siteName = `${personalData.name} Portfolio`;
export const siteTitle = `${personalData.name} | ${personalData.title}`;
export const siteDescription =
  'Portfolio of Muiz Adesope, a product-focused full-stack developer building fast web apps, dashboards, and marketplaces with Next.js, React, TypeScript, and modern backend tools.';
export const ogImagePath = '/profile-2.jpg';
export const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION || process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString();
}

export function getPortfolioJsonLd() {
  const sameAs = [personalData.linkedin, personalData.github, personalData.x, personalData.instagram].filter(
    (value): value is string => Boolean(value)
  );

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: personalData.name,
        jobTitle: personalData.title,
        description: siteDescription,
        url: siteUrl,
        image: absoluteUrl(ogImagePath),
        email: personalData.email,
        telephone: personalData.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lagos',
          addressCountry: 'NG',
        },
        sameAs,
        knowsAbout: [
          'Next.js',
          'React',
          'TypeScript',
          'PostgreSQL',
          'PHP',
          'MySQL',
          'Full-stack development',
          'Web application development',
        ],
      },
      {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: personalData.name,
        },
      },
      {
        '@type': 'WebPage',
        name: siteTitle,
        url: siteUrl,
        description: siteDescription,
        isPartOf: {
          '@type': 'WebSite',
          name: siteName,
          url: siteUrl,
        },
        about: {
          '@type': 'Person',
          name: personalData.name,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absoluteUrl(ogImagePath),
        },
      },
    ],
  };
}
