import type { MetadataRoute } from 'next';
import { absoluteUrl, siteUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const host = new URL(siteUrl).host;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host,
  };
}
