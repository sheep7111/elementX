import Image from 'next/image';
import Link from 'next/link';
import { reviews } from '@/lib/reviews';

export function ReviewHighlights() {
  // 실제 승인 후기만 사용. 대표 지정과 사진 유무 순으로 최대 6개를 표시한다.
  const items = reviews.filter(review => review.approved)
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || Number(Boolean(b.photo)) - Number(Boolean(a.photo)))
    .slice(0, 6);
  if (items.length === 0) return null;
  return <section id="product-reviews" className="reviews-section section" aria-labelledby="product-reviews-title"><div className="container">
    <header className="making-heading"><p className="eyebrow">IN YOUR WORDS</p><h2 id="product-reviews-title">사용한 분들의 이야기.</h2><p>글과 사진으로 만나는 elementX의 사용 경험.</p></header>
    {items.length ? <div className="reviews-grid">{items.map(review => <article className="review-card" key={review.id}>
      {review.photo && <div className="review-photo"><Image src={review.photo.src} alt={review.photo.alt} fill sizes="(max-width:760px) 100vw, 33vw" /></div>}
      <blockquote>{review.body}</blockquote><footer><span>{review.author}</span>{review.date && <time dateTime={review.date}>{review.date}</time>}{review.sourceUrl && <a href={review.sourceUrl} target="_blank" rel="noreferrer">원문 보기 ↗</a>}</footer>
    </article>)}</div> : <div className="reviews-empty"><p>실제 사용 후기를 준비하고 있습니다.</p><p>사용자분들의 글과 사진을 확인한 뒤 소개하겠습니다.</p></div>}
    <div className="page-next"><Link className="button outline" href="/reviews">전체 후기 보기</Link><Link className="button" href="/purchase">구매하기</Link></div>
  </div></section>;
}
