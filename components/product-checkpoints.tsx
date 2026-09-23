import Image from 'next/image';

export function ProductCheckpoints() {
  return <section id="check-points" className="product-checkpoints" aria-labelledby="checkpoints-title">
    <header><p className="eyebrow">CHECK POINT</p><h2 id="checkpoints-title">하나의 비누,<br/>네 가지 포인트.</h2></header>
    <div className="checkpoint-canvas">
      <div className="checkpoint-soap"><Image src="/images/soap-isolated.png" alt="회흑색 원형 바와 중앙 X 각인을 보여주는 elementX 비누 연출 이미지" fill sizes="(max-width:760px) 70vw, 600px"/></div>
      <svg className="checkpoint-lines" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" aria-hidden="true"><g stroke="#68725e" strokeWidth=".3"><path d="M22 27v12h14M78 27v17H65M22 80V65h27M78 80V66h-9"/></g><g fill="#536048"><circle cx="36" cy="39" r=".85"/><circle cx="65" cy="44" r=".85"/><circle cx="49" cy="65" r=".85"/><circle cx="69" cy="66" r=".85"/></g></svg>
      <a className="checkpoint-label checkpoint-one" href="#features"><span>01</span><strong>풍부하고 미세한<br/>거품</strong></a>
      <a className="checkpoint-label checkpoint-two" href="#making-process"><span>02</span><strong>직접 키우고 발효한<br/>황칠나무 원료</strong></a>
      <a className="checkpoint-label checkpoint-three" href="#soap-story"><span>03</span><strong>가운데 깊게 새긴<br/>X 각인</strong></a>
      <a className="checkpoint-label checkpoint-four" href="/purchase#single"><span>04</span><strong>손에 쥐는 원형 바<br/>95g 개별 제품</strong></a>
    </div>
    <p className="checkpoint-caption">개별 클렌징바를 소개하는 연출 이미지입니다.</p>
  </section>;
}
