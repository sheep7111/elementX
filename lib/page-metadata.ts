import type { Metadata } from 'next';
import { siteUrl } from './product';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: `${title} | elementX`, description,
    ...(siteUrl ? { alternates: { canonical: path } } : {}),
    openGraph: {
      title: `${title} | elementX`, description, type: 'website', locale: 'ko_KR',
      ...(siteUrl ? { url: new URL(path, siteUrl).href } : {}),
      images: [{ url: '/images/elementx-banner-2-final.png', alt: 'elementX 비누와 X 각인' }],
    },
  };
}
