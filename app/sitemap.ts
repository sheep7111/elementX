import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/product';
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl && process.env.SITE_READY === 'true' ? ['/', '/products', '/story', '/reviews', '/purchase', '/policies'].map(path => ({ url: new URL(path, siteUrl).href, changeFrequency: 'monthly' as const, priority: path === '/' ? 1 : 0.7 })) : [];
}
