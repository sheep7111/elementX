import { ProductDetails } from '@/components/product-details';

import { pageMetadata } from '@/lib/page-metadata';
export const metadata = pageMetadata('제품 소개', 'elementX 클렌징바의 구성과 사용법, 전성분과 자주 묻는 질문.', '/products');
export default function ProductsPage() {
  return <ProductDetails />;
}
