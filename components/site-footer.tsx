import Link from 'next/link';

export function SiteFooter() {
  return <footer className="footer"><div className="container footer-top">
    <Link className="wordmark" href="/">ELEMENT X</Link><p>바이제로가 만드는 비누, elementX.</p>
    <a className="text-link" href="#main">맨 위로 ↑</a>
  </div><nav className="container footer-links" aria-label="하단 메뉴">
    <Link href="/products">제품 소개</Link><Link href="/story">만드는 이야기</Link><Link href="/reviews">사용 후기</Link><Link href="/purchase">구매 안내</Link><Link href="/policies">배송·이용 안내</Link>
  </nav><div className="container footer-bottom"><p>회사 바이제로 · 브랜드 elementX</p><p>© {new Date().getFullYear()} ELEMENT X</p></div></footer>;
}

