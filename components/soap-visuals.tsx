type SymbolName = 'foam' | 'leaf' | 'water' | 'net' | 'wash' | 'hang';

export function SoapSymbol({ name }: { name: SymbolName }) {
  return <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'foam' && <><path d="M42 109a22 22 0 0 1-5-43 30 30 0 0 1 57-7 25 25 0 1 1 20 50Z" /><circle cx="51" cy="35" r="7"/><circle cx="113" cy="39" r="5"/><path d="m24 40 5-8 5 8-5 8Z M124 77h12m-6-6v12"/></>}
    {name === 'leaf' && <><path d="M78 119V77C76 48 98 34 128 33c0 31-13 53-49 54M78 105C45 106 31 87 30 62c29-1 48 11 48 38M78 88l29-31M77 104 49 79"/><path d="M60 127h38"/></>}
    {name === 'water' && <><path d="M80 28C67 51 47 73 47 96a33 33 0 0 0 66 0c0-23-20-45-33-68Z M61 95c0 12 8 20 20 20M116 44l5-12 5 12 12 5-12 5-5 12-5-12-12-5Z"/></>}
    {(name === 'net' || name === 'hang') && <><path d="M65 52h30l15 64q0 20-30 20t-30-20Z M62 58h36"/><circle cx="80" cy="104" r="22" fill="#55584f"/><path d="m72 91 16 26m0-26-16 26" stroke="#e9e7dd"/><path d="m59 76 44 43m-48-25 37 36m-25-57 38 38m-48 7 43-43m-39 52 42-43" stroke="#d5d3c9" strokeWidth="1.5"/>{name === 'hang' ? <><path d="M70 52 83 31q13-1 13-13a11 11 0 0 0-22-1M90 52 83 31 M47 15h27"/><path d="m72 145-2 5m20-5 2 5"/></> : <><path d="M70 52 64 30q-2-8 7-6l14 27M90 52l7-22q2-8-7-6L76 51"/><circle cx="120" cy="70" r="7"/><circle cx="131" cy="90" r="4"/></>}</>}
    {name === 'wash' && <><path d="M28 104h31l21 12h34q14 0 9 12H73l-28-10H28 M59 104l20-12h19q12 1 6 11H83"/><path d="M61 78a13 13 0 0 1 3-25 18 18 0 0 1 34-4 15 15 0 1 1 10 29Z"/><circle cx="116" cy="36" r="5"/></>}
  </svg>;
}

export function FeatureVisuals() {
  return <section id="features" className="section feature-pictograms" aria-labelledby="features-title"><div className="container"><header className="making-heading"><p className="eyebrow">ELEMENT X AT A GLANCE</p><h2 id="features-title">매일의 세정,<br/>세 가지로 기억하세요.</h2></header><div className="pictogram-grid">{[
    { icon: 'foam', title: '풍부하고 미세한 거품', sub: '손에서 충분히 거품 내어', href: '#how-to' },
    { icon: 'leaf', title: '직접 키운 발효 원료', sub: '황칠나무 재배부터 발효·추출까지', href: '#making-process' },
    { icon: 'water', title: '깔끔한 세정감', sub: '거품으로 씻고 물로 헹구는 마무리', href: '#how-to' },
  ].map(item => <a className="pictogram-item" href={item.href} key={item.icon}><div className={`symbol-disc symbol-${item.icon}`}><SoapSymbol name={item.icon as SymbolName}/></div><h3>{item.title}</h3><p>{item.sub}</p></a>)}</div></div></section>;
}

export function NetCareVisuals() {
  return <section className="soap-care section" aria-labelledby="soap-care-title"><div className="container"><header className="making-heading"><p className="eyebrow">LATHER & HANG</p><h2 id="soap-care-title">거품 낼 때도,<br/>걸어 말릴 때도.</h2><p>거품망을 사용한다면 이렇게 해보세요.</p></header><ol className="pictogram-grid net-visuals">{[
    { icon: 'net', title: '망에 넣고 거품 내기', sub: '비누와 망을 적신 뒤 손으로 문질러 주세요.' },
    { icon: 'wash', title: '거품으로 부드럽게 씻기', sub: '망을 얼굴에 문지르지 않고, 거품을 덜어 사용하세요.' },
    { icon: 'hang', title: '사용 후 걸어 말리기', sub: '비누와 망을 헹군 뒤 물줄기가 닿지 않는 곳에 걸어 주세요.' },
  ].map((item, i) => <li className="pictogram-item" key={item.icon}><div className="symbol-disc"><SoapSymbol name={item.icon as SymbolName}/></div><span className="visual-step">0{i + 1}</span><h3>{item.title}</h3><p>{item.sub}</p></li>)}</ol></div></section>;
}
