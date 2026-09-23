import { ProductCheckpoints } from '@/components/product-checkpoints';
import { RecommendedStory } from '@/components/recommended-story';
import Image from 'next/image';
import Link from 'next/link';
import { saleOptions, formatPrice } from '@/lib/product';

export function SalesOpening() {
  return <>
    <section id="about" className="sales-opening campaign-opening">
      <div className="product-hero-scene">
        <Image src="/images/elementx-product-hero-v1.png" alt="X 각인이 새겨진 회흑색 elementX 비누와 미세한 거품을 표현한 제품 연출 이미지" width={1024} height={1536} sizes="(max-width:760px) 100vw, 760px" loading="eager" />
        <div className="product-hero-message"><p className="eyebrow">ELEMENT X</p><h2>풍부하고 미세한 거품,<br /><span>깔끔하게 씻어내는 매일.</span></h2><p>황칠나무 발효 원료를 담은 비누</p></div>
      </div>
      <div className="campaign-benefits"><p>풍부하고 미세한 <strong>거품</strong></p><p>직접 재배하고 발효한 <strong>황칠나무 원료</strong></p><p>개별 바부터 벌크까지 <strong>나에게 맞는 구성</strong></p></div>
      <div className="product-hero-action"><Link className="button" href="/purchase">내게 맞는 구성 선택하기 <span aria-hidden="true">↗</span></Link><p>제품의 특징을 표현한 연출 이미지입니다.</p></div>
    </section>
    <RecommendedStory />
    <ProductCheckpoints />
    <section className="sales-origin section"><div className="container sales-pair">
      <div className="sales-copy"><p className="eyebrow">INSIDE THE SOAP</p><h2>이 비누에는<br />무엇이 들어 있을까요?</h2><p>직접 재배한 황칠나무에서 얻은 추출물.<br />그리고 올리브오일, 코코넛오일, 피마자씨오일.</p><p>포장박스에 적힌 성분에서<br />elementX를 조금 더 자세히 만나보세요.</p><a className="text-link" href="#ingredients">전체 성분 확인하기 ↗</a></div>
      <div className="sales-detail-photo"><Image src="/images/elementx-banner-2-final.png" alt="바닥에 놓인 elementX 비누와 각인 위의 거품 연출 사진" fill sizes="(max-width:760px) 100vw, 50vw" /></div>
    </div></section>
    <section id="soap-story" className="container section sales-pair sales-real">
      <figure><div className="sales-real-photo"><Image src="/images/elementx-real-soap-reference.jpg" alt="노란 트레이 위에 놓인 회흑색 원형 비누 여러 개와 X 각인 실물 사진" fill sizes="(max-width:760px) 100vw, 50vw" /></div><figcaption>elementX 비누 실물 사진</figcaption></figure>
      <div className="sales-copy"><p className="eyebrow">MEET THE SOAP</p><h2>사진 속 이 비누가<br />elementX입니다.</h2><p>둥근 형태, 회흑색 표면,<br />가운데 깊게 새겨진 X.</p><p>손에 쥐고 물을 묻혀 거품을 내는 고형 비누입니다. 제품의 모양과 표면을 실제 사진으로 먼저 보여드립니다.</p><a className="text-link" href="#how-to">사용 방법 알아보기 ↗</a></div>
    </section>
  </>;
}

export function SalesPurchase() {
 return <section id="formats" className="sales-purchase section"><div className="container">
   <header className="making-heading"><p className="eyebrow">CHOOSE YOUR ELEMENT X</p><h2>나에게 맞는 구성으로<br />elementX를 만나세요.</h2><p>개별 클렌징바부터 가공과 포장을 덜어낸 벌크까지.<br />필요한 구성을 살펴보세요.</p></header>
   <div className="sales-format-grid">{saleOptions.map(option => <article key={option.id} className={option.best ? 'sale-best' : undefined}><span className="eyebrow">{option.kind}</span><h3>{option.label}</h3>{option.best && <span className="sale-best-badge">BEST</span>}<p>{option.description}</p><strong className="sale-price">{formatPrice(option.price)}</strong><p className="sale-unit">{option.unitLabel} {formatPrice(option.unitPrice)}</p><p className="sale-shipping">{option.shipping === 0 ? '무료배송' : `배송비 ${formatPrice(option.shipping)}`}</p><Link className="button outline" href={`/purchase#${option.id}`}>구매 안내 보기</Link></article>)}</div>

   <div className="sales-last-word"><p className="eyebrow">BYZERO MAKES ELEMENT X</p><h2>비누가 되기 전부터,<br />당신의 손에 닿기까지.</h2><p>바이제로가 만드는 비누, elementX.</p><div className="page-next"><Link className="button" href="/purchase">구매하기</Link><Link className="text-link" href="/policies">배송·교환 안내 ↗</Link></div></div>
 </div></section>;
}








