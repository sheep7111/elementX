import { HeroCarousel } from '@/components/hero-carousel';
import { ProductDetails } from '@/components/product-details';
import { LegacyHomeAnchors } from '@/components/legacy-home-anchors';
import { pageMetadata } from '@/lib/page-metadata';
export const metadata = pageMetadata('매일의 세정, 더 신중하게', 'elementX 클렌징바의 제품 상세, 벌크 구성과 사용법을 확인하고 구매 안내로 이어집니다.', '/');
export default function Home() {
  return <><LegacyHomeAnchors /><HeroCarousel /><ProductDetails /></>;
}
