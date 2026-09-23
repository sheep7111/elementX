import Image from 'next/image';

export function RecommendedStory() {
  return <section className="recommended-story" aria-labelledby="recommended-title">
    <div className="recommended-label">FOR YOUR DAILY WASH</div>
    <div className="recommended-photo">
      <Image src="/images/elementx-feature-foam.png" alt="손 위에서 elementX 비누로 풍성한 거품을 내는 연출 사진" fill sizes="(max-width:760px) 800px, 960px" />
      <div className="recommended-copy">
        <p className="eyebrow">ELEMENT X</p>
        <h2 id="recommended-title">이런 비누를<br/>찾고 계셨나요?</h2>
        <ul>
          <li><strong>풍부하고 미세한 거품</strong>을 좋아하는 분</li>
          <li>매일 <strong>깔끔한 세정감</strong>을 원하는 분</li>
          <li><strong>원료와 만드는 과정</strong>까지 살펴보는 분</li>
          <li>가공과 포장을 덜어낸 <strong>실속 있는 벌크</strong>를 찾는 분</li>
        </ul>
        <a href="/purchase" className="recommended-link">나에게 맞는 구성 살펴보기 <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>;
}
