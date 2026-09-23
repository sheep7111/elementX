import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { pageMetadata } from '@/lib/page-metadata';
import { saleOptions, formatPrice } from '@/lib/product';
export const metadata = pageMetadata('구매 안내', 'elementX 클렌징바 1개·3개와 벌크 500g·1,000g의 판매가를 확인하세요.', '/purchase');
// TODO: 배송 기준과 실제 주문·결제 연결. 임의 결제 완료 처리 금지.
export default function PurchasePage() {
  return <><PageIntro label="PURCHASE" title="구매 안내" description="나에게 맞는 elementX 구성을 선택하세요." /><section className="container purchase-preparation" aria-labelledby="purchase-options-title"><h2 id="purchase-options-title">제품 구성과 판매가</h2><div className="format-grid purchase-four">{saleOptions.map(option => <article id={option.id} key={option.id} className={option.best ? 'sale-best' : undefined}><p className="eyebrow">{option.kind}</p><h3>{option.label}</h3>{option.best && <span className="sale-best-badge">BEST</span>}<p>{option.description}</p><strong className="sale-price">{formatPrice(option.price)}</strong><p className="sale-unit">{option.unitLabel} {formatPrice(option.unitPrice)}</p><p className="sale-shipping">{option.shipping === 0 ? '무료배송' : `배송비 ${formatPrice(option.shipping)}`}</p></article>)}</div><div className="checkout-notice"><h2>주문 안내</h2><p>현재 이 페이지에는 온라인 주문·결제 기능이 연결되어 있지 않습니다.</p><div className="page-next"><Link className="button" href="/products">제품 상세 보기</Link><Link className="button outline" href="/policies">배송·이용 안내</Link></div></div></section></>;
}


