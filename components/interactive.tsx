'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { product } from '@/lib/product';
const links = [['제품 소개', '/products'], ['만드는 이야기', '/story'], ['사용 후기', '/reviews']];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return <header className="header" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); trigger.current?.focus(); } }}>
    <div className="container header-inner"><Link className="wordmark" href="/" aria-label="elementX 홈" onClick={() => setOpen(false)}>ELEMENT X</Link>
      <nav className="desktop-nav" aria-label="주 메뉴">{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}</nav>
      <Link className="button header-buy" href="/purchase" aria-current={pathname === '/purchase' ? 'page' : undefined}>구매하기 <span aria-hidden="true">↗</span></Link>
      <button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setOpen(!open)}>{open ? '닫기 ×' : '메뉴 ☰'}</button>
    </div>
    <nav id="mobile-menu" className="mobile-nav" aria-label="모바일 메뉴" hidden={!open}>{links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label} <span aria-hidden="true">↗</span></Link>)}<Link href="/purchase" onClick={() => setOpen(false)}>구매하기 ↗</Link></nav>
  </header>;
}
export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return <div className="accordion">{items.map((item, i) => <div className="faq-item" key={item.question}><h3><button aria-expanded={expanded === i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`} onClick={() => setExpanded(expanded === i ? null : i)}><span className="q" aria-hidden="true">Q</span><span>{item.question}</span><span className="plus" aria-hidden="true">{expanded === i ? '−' : '+'}</span></button></h3><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={expanded !== i}><p>{item.answer}</p></div></div>)}</div>;
}
export function PurchaseControls() {
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState(false);
  return <div className="purchase-controls"><div className="price-row"><span>판매가격</span><strong>{product.price === null ? '가격 안내 준비 중' : `${product.price.toLocaleString('ko-KR')}원`}</strong></div><div className="price-row shipping"><span>배송비</span><span>{product.shipping === null ? '배송 정책 준비 중' : `${product.shipping.toLocaleString('ko-KR')}원`}</span></div><div className="price-row"><label htmlFor="quantity">수량</label><div className="stepper"><button aria-label="수량 줄이기" disabled={quantity === 1} onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button><output id="quantity" aria-live="polite">{quantity}</output><button aria-label="수량 늘리기" disabled={quantity === 99} onClick={() => setQuantity(q => Math.min(99, q + 1))}>+</button></div></div><div className="price-row total"><span>총 상품금액</span><strong aria-live="polite">{product.price === null ? '가격 확정 후 안내' : `${(product.price * quantity).toLocaleString('ko-KR')}원`}</strong></div><button className="button purchase-button" onClick={() => setNotice(true)}>구매하기 <span aria-hidden="true">↗</span></button><p className="purchase-note" role="status">{notice ? '현재 판매를 준비하고 있습니다. 가격과 배송 정보가 확정되면 구매 서비스를 시작합니다. 결제는 진행되지 않았습니다.' : '구매 서비스 오픈을 준비하고 있습니다.'}</p></div>;
}
