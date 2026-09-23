export function BrandStory() {
  return <section id="brand-story" className="brand-story" aria-labelledby="brand-story-title">
    <div className="container section">
      <div className="brand-opening">
        <div><p className="eyebrow">BACK TO THE ESSENTIALS</p><h2 id="brand-story-title">필요 없는 것은 덜고,<br />매일의 본질에 가깝게.</h2></div>
        <p>매일 쓰는 비누이기에, 익숙한 것부터 다시 묻습니다.<br />향은 어떤지, 포장은 얼마나 필요한지.<br />작은 선택에서 elementX의 이야기가 시작됩니다.</p>
      </div>
      <div className="brand-questions" aria-label="클렌징바를 고를 때 생각할 질문">
        <p><span>01</span>씻고 난 뒤에도 오래 남는<br />강한 향이 부담스럽지는 않나요?</p>
        <p><span>02</span>비누 하나를 꺼낼 때마다<br />버려지는 포장이 아쉽지는 않나요?</p>
        <p><span>03</span>화려한 포장보다<br />제품 자체에 집중하고 싶지 않나요?</p>
      </div>
      <div className="brand-origin"><p className="brand-quote">깨끗함에<br /><span>강한 향이 꼭 필요할까요?</span></p><div><p className="eyebrow">A QUESTION THAT STARTED IT</p><h3>향에 대한 고민에서,<br />매일 쓰는 비누에 대한 고민으로.</h3><p>오래 남는 향보다 씻는 순간 자체에 집중하고 싶은 마음. 향에 대한 작은 질문은 가공과 포장, 매일 사용하는 방식에 대한 생각으로 이어집니다.</p><p>elementX는 필요한 것과 덜어낼 수 있는 것을 살피며, 일상에 자연스럽게 놓이는 클렌징바를 지향합니다.</p></div></div>
      <div className="brand-principles"><div className="principles-title"><p className="eyebrow">WHAT WE VALUE</p><h2>불필요한 것은 덜고,<br />필요한 가치는 온전히.</h2></div><div className="principles-grid">
        <article><span className="principle-symbol" aria-hidden="true">X</span><h3>덜어내는 방향</h3><p>제품을 위한 것인지 먼저 묻고, 불필요한 가공과 과대포장을 줄일 방법을 고민합니다.</p></article>
        <article><span className="principle-symbol" aria-hidden="true">O</span><h3>남겨야 할 가치</h3><p>매일의 세정에 필요한 기본과, 제품을 이해하는 데 필요한 정보를 중요하게 생각합니다.</p></article>
        <article><span className="principle-symbol principle-zero" aria-hidden="true">0</span><h3>합리적인 선택을 향해</h3><p>겉모습을 더하기보다 제품 자체에 집중하는 선택을 지향합니다.</p></article>
      </div></div>
      {/* TODO: 참고 사이트의 인공향 무첨가·원료 고유 향·후가공 절감·가격 절감 주장은 elementX 자료 확정 후 입력. 창업자 1인칭 경험은 본인 확인 전 인용하지 않는다. */}
    </div>
  </section>;
}
