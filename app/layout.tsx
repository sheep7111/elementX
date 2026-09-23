import type { Metadata } from 'next';
import { siteUrl } from '@/lib/product';
import { Header } from '@/components/interactive';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';
export const metadata: Metadata = {
  title: 'elementX 클렌징바 | MIRAKLE SOAP',
  description: 'ELEMENT X MIRAKLE SOAP. 매일의 세정을 위한 사람용 클렌징바, 95g. 제품 소개와 사용 방법을 확인하세요.',
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  robots: { index: process.env.SITE_READY === 'true', follow: process.env.SITE_READY === 'true' },
  icons: { icon: { url: '/images/elementx-logo-original.jpg', type: 'image/jpeg' } },
  openGraph: { title: 'elementX 클렌징바 | MIRAKLE SOAP', description: '원료부터 직접, 매일의 세정을 위한 elementX 이야기.', locale: 'ko_KR', type: 'website', images: [{ url: '/images/elementx-banner-2-final.png', alt: 'elementX 비누와 X 각인', width: 1885, height: 834 }] },
  twitter: { card: 'summary_large_image', images: ['/images/elementx-banner-2-final.png'] },
  // TODO: 배포 도메인 확정 후 SITE_URL 설정 및 실제 공유 서비스에서 OG 미리보기 확인.
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><a className="skip-link" href="#main">본문으로 바로가기</a><Header /><main id="main">{children}</main><SiteFooter /></body></html>;
}
