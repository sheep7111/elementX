'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Review } from '@/lib/reviews';

function ReviewCard({ review }: { review: Review }) {
  return <article className="review-card">
    {review.photo && <div className="review-photo"><Image src={review.photo.src} alt={review.photo.alt} fill sizes="(max-width:760px) 100vw, 33vw" /></div>}
    <blockquote>{review.body}</blockquote>
    <footer><span>{review.author}</span>{review.date && <time dateTime={review.date}>{review.date}</time>}{review.sourceUrl && <a href={review.sourceUrl} target="_blank" rel="noreferrer">원문 보기 ↗</a>}</footer>
  </article>;
}

export function Reviews({ items }: { items: Review[] }) {
  const [photosOnly, setPhotosOnly] = useState(false);
  const [visible, setVisible] = useState(6);
  const featured = items.filter(item => item.featured).slice(0, 3);
  const filtered = photosOnly ? items.filter(item => item.photo) : items;
  return <section id="reviews" className="reviews-section section" aria-labelledby="reviews-title"><div className="container">
    <header className="making-heading"><p className="eyebrow">IN YOUR WORDS</p><h2 id="reviews-title">사용한 분들의 이야기.</h2><p>매일의 세정 속에서 만난 elementX.</p></header>
    {items.length === 0 ? <div className="reviews-empty"><p>아직 등록된 후기가 없습니다.</p></div> : <>
      {featured.length > 0 && <div className="featured-reviews"><h3>먼저 만나보는 후기</h3><div className="reviews-grid">{featured.map(review => <ReviewCard key={review.id} review={review} />)}</div></div>}
      <div className="review-filters" role="group" aria-label="후기 종류"><button aria-pressed={!photosOnly} onClick={() => { setPhotosOnly(false); setVisible(6); }}>전체 후기</button><button aria-pressed={photosOnly} onClick={() => { setPhotosOnly(true); setVisible(6); }}>사진 후기</button></div>
      <p className="review-count" role="status">{photosOnly ? '사진 후기' : '전체 후기'} {filtered.length}개</p>
      {filtered.length > 0 ? <div className="reviews-grid" id="review-list">{filtered.slice(0, visible).map(review => <ReviewCard key={review.id} review={review} />)}</div> : <p className="reviews-empty">아직 등록된 사진 후기가 없습니다.</p>}
      {visible < filtered.length && <div className="reviews-more"><button className="button outline" aria-controls="review-list" onClick={() => setVisible(count => count + 6)}>후기 더 보기</button></div>}
    </>}
  </div></section>;
}
