// 공정 순서와 벌크 취지는 사용자 제공 정보. 기간·온도·절감액은 미확정.
export const manufacturingSteps = [
  { title: '직접 재배', text: '비누의 원료가 되는 황칠나무를 직접 키웁니다.', group: '원료 준비' },
  { title: '발효', text: '재배한 원료를 발효하는 과정을 거칩니다.', group: '원료 준비' },
  { title: '액기스 추출', text: '발효한 원료에서 비누에 사용할 추출물을 얻습니다.', group: '원료 준비' },
  { title: '비누화', text: '준비한 원료를 사용해 비누화 과정을 진행합니다.', group: '비누 만들기' },
  { title: '몰드 작업', text: '비누를 틀에 담아 형태를 잡습니다.', group: '비누 만들기' },
  { title: '트리밍', text: '개별 바의 모양과 가장자리를 다듬습니다.', group: '마무리' },
  { title: '건조', text: '비누를 건조하는 과정을 거칩니다.', group: '마무리' },
];

export const bulkSizes = ['500g', '1,000g'];
// TODO: 벌크의 몰드·분할 방식, 최종 형태, 중량 기준, 배송 보호 방식 확인.
// TODO: 실제 공정 사진, 발효·추출·비누화 상세, 건조 조건 확인. 효능 추정 금지.
// 확정된 가격과 무료배송은 lib/product.ts에서 관리한다.

export const manufacturingSources = [
  { title: '세정바 원료와 제조 방식 참고 자료', url: 'https://doi.org/10.1063/5.0099145' },
  { title: '비누와 합성 세정제의 구분 참고 자료', url: 'https://www.fda.gov/cosmetics/cosmetic-products/frequently-asked-questions-soap' },
];
