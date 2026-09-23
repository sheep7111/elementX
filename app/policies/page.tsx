import { PageIntro } from '@/components/page-intro';
import { pageMetadata } from '@/lib/page-metadata';
export const metadata = pageMetadata('배송·이용 안내', '배송, 교환·반품, 이용약관 및 개인정보처리 안내.', '/policies');
export default function PoliciesPage() { return <><PageIntro label="INFORMATION" title="배송·이용 안내" description="배송과 교환, 서비스 이용에 관한 안내입니다." />    <section id="policies" className="container policies"><details><summary>배송·교환·반품 안내</summary><p>95g × 1개, 95g × 3개, 벌크 500g, 벌크 1kg 구성은 모두 무료배송입니다.</p></details><details><summary>이용약관</summary><p>현재 등록된 이용약관이 없습니다.</p></details><details><summary>개인정보처리방침</summary><p>현재 이 홈페이지에는 회원가입이나 주문 정보 입력 기능이 없습니다.</p></details>{/* TODO: 자료 확정 후 입력 — 정책 전문 및 사업자정보. */}</section></>; }


