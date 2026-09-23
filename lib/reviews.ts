export type Review = {
  id: string;
  author: string; // 공개에 동의한 표시 이름만 저장. 개인정보 원문 저장 금지.
  body: string;
  date?: string; // 확인된 날짜만 YYYY-MM-DD.
  photo?: { src: string; alt: string }; // 공개 동의한 로컬 이미지 경로.
  sourceUrl?: string;
  featured?: boolean;
  approved: boolean; // 실제 원문 및 게재 동의 확인 후 true.
};

// TODO: 사용자에게 실제 후기와 사진, 출처, 게재 동의 확인 후 추가.
// 별점·구매 인증·후기 수를 임의로 생성하지 않는다. 작성/저장 서비스는 별도 범위.
export const reviews: Review[] = [];
