import Image from 'next/image';

export function PhotoCare() {
  return <section id="how-to" className="photo-care-story" aria-labelledby="photo-care-title">
    <header><p className="eyebrow">LATHER, RINSE, HANG.</p><h2 id="photo-care-title">거품을 내는 순간부터,<br/>걸어 말리는 순간까지.</h2></header>
    <figure><Image src="/images/elementx-feature-foam.png" alt="손에서 비누로 미세한 거품을 내는 연출 사진" width={1254} height={1254} sizes="(max-width:760px) 100vw, 960px"/><figcaption><strong>01. 충분히 거품 내어 씻기</strong><p>손이나 거품망으로 거품을 낸 뒤,<br/>거품으로 부드럽게 씻고 깨끗하게 헹궈 주세요.</p></figcaption></figure>
    <figure><Image src="/images/elementx-net-hanging-v1.png" alt="elementX 비누가 든 흰 거품망을 욕실 고리에 걸어 물기를 빼는 연출 사진" width={1122} height={1402} sizes="(max-width:760px) 100vw, 960px"/><figcaption><strong>02. 사용 후에는 걸어 말리기</strong><p>거품망을 사용한다면 비누와 망을 헹군 뒤,<br/>물줄기가 닿지 않는 곳에 걸어 주세요.</p></figcaption></figure>
    <p className="photo-care-note">거품망은 얼굴에 직접 문지르지 않고 거품을 내는 용도로 사용하세요.<br/>사용·보관 방법을 보여주는 연출 이미지입니다.</p>
  </section>;
}
