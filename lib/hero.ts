export const excludedIngredients = [
  { label: '무색소', verified: false },
  { label: '무방부제', verified: false },
  { label: '무경화제', verified: false },
  { label: '합성 기포제 무첨가', verified: false },
  { label: '합성향료 무첨가', verified: false },
]; // TODO: 전성분 및 제조공정 확인 후에만 verified=true.
export const heroSlides = [
 { label:'피부 고민에서 시작된 비누', title:['내 피부를 위해서','직접 만들었습니다.'], description:'피부가 예민하고 불편해지면서\n매일 사용하는 비누부터 다시 생각했습니다.\n강한 향과 불필요한 첨가물을 덜어내고\n매일 사용할 수 있는 비누의 본질에 집중했습니다.', mobile:'피부 고민에서 시작해,\n매일 사용하는 비누의 본질에 집중했습니다.', closing:'나에게 필요해서 만든 비누, elementX', actions:[['elementX 이야기','/story#brand-story'],['제품 알아보기','/products']] },
 { label:'LESS IS BETTER', title:['불필요한 것들을','덜어냈습니다.'], description:'매일 피부에 닿는 비누이기에\n꼭 필요하지 않은 성분은 넣지 않았습니다.', mobile:'매일 피부에 닿는 비누이기에\n꼭 필요하지 않은 성분은 넣지 않았습니다.', closing:'더 많이 넣는 대신, 비누의 본질에 집중했습니다.', actions:[['전성분 확인하기','/products#ingredients'],['제품 알아보기','/products']] },
 { label:'원료부터 직접', title:['좋은 비누를 위해','원료부터 직접 키웠습니다.'], description:'좋은 비누는 좋은 원료에서 시작된다고 믿기에,\n비누의 원료가 되는 황칠나무를 직접 재배합니다.', mobile:'좋은 원료를 위해, 비누의 원료가 되는\n황칠나무를 직접 재배합니다.', closing:'재배부터 비누까지, 우리가 직접 확인합니다.', actions:[['황칠 이야기','/story#origin-step'],['제조 과정 보기','/story#manufacturing']] },
];
export const heroAssets = {
 product:'/images/elementx-banner-1-v3.png', // 사용자 제공 배너1.1.png (2026-09-22).
 banner2:'/images/elementx-banner-2-final.png', // 사용자 승인 시안: 작은 비누, 각인 위 자연스러운 거품, 웜그레이 배경. AI 연출.
 // 원본에서 배경을 제거한 AI 편집 컷. 최종 실물 대조 필요.
 soap:'/images/soap-isolated.png',
 // 사용자 제공 배너4.png를 배너 3에 적용. 실제 재배지 촬영 여부는 미확인.
 botanical:'/images/elementx-banner-3.png',
};



