import Link from 'next/link';
import { Reviews } from '@/components/reviews';
import { reviews } from '@/lib/reviews';
import { PageIntro } from '@/components/page-intro';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('사용 후기', 'elementX를 사용한 분들의 글과 사진을 소개합니다.', '/reviews');
export default function ReviewsPage() {
  return <><PageIntro label="IN YOUR WORDS" title="사용 후기" description="매일의 세정 속에서 만난 elementX." /><Reviews items={reviews.filter(review => review.approved)} /><div className="page-next container"><Link className="button" href="/products">제품 알아보기</Link><Link className="button outline" href="/purchase">구매 안내</Link></div></>;
}
