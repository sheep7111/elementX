export const product = {
  name: 'ELEMENT X MIRAKLE SOAP', weight: '95g',
  // 사용자 확정 개별 바 1개 가격. 전 구성 무료배송. 사업자 세부정보는 별도 확인.
  price: 14800 as number | null,
  shipping: 0 as number | null,
};
// 사용자 제공 확정표: 판매가·무료배송·단위 가격.
export const saleOptions = [
  { id: 'single', label: '95g × 1개', kind: '클렌징바', description: '처음 사용해 보는 분', best: false, price: 14800, shipping: 0, unitLabel: '1개당', unitPrice: 14800 },
  { id: 'triple', label: '95g × 3개', kind: '클렌징바 세트', description: '정성스럽게 포장한 선물용 3개 세트', best: false, price: 33000, shipping: 0, unitLabel: '1개당', unitPrice: 11000 },
  { id: 'bulk500', label: '500g', kind: '벌크', description: '포장을 덜어낸 실속 구성', best: false, price: 38500, shipping: 0, unitLabel: '100g당', unitPrice: 7700 },
  { id: 'bulk1000', label: '1kg', kind: '벌크', description: '가장 경제적인 대용량 구성', best: true, price: 53500, shipping: 0, unitLabel: '100g당', unitPrice: 5350 },
];
export const formatPrice = (value: number) => `${value.toLocaleString('ko-KR')}원`;
// TODO: 실제 판매 도메인 확정 후 SITE_URL 설정. 임의 URL을 생성하지 않는다.
export const siteUrl = process.env.SITE_URL;




