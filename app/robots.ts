import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/product';
export default function robots(): MetadataRoute.Robots {
  const ready = process.env.SITE_READY === 'true' && !!siteUrl;
  return { rules: { userAgent: '*', ...(ready ? { allow: '/' } : { disallow: '/' }) }, ...(ready ? { sitemap: `${siteUrl}/sitemap.xml` } : {}) };
}
