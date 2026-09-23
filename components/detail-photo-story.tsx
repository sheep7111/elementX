import Image from 'next/image';

export function DetailPhotoStory() {
  return <section id="features" className="detail-photo-story" aria-label="사진으로 만나는 elementX">{[
    { image: 'elementx-feature-foam.png', alt: 'elementX 비누를 손에서 거품 내는 연출 사진', label: '01 / RICH LATHER', title: <>손에서 피어나는,<br/>풍부하고 미세한 거품.</>, copy: '물에 적시고 충분히 거품 내어, 매일의 세정을 시작하세요.', tags: ['풍부한 거품', '미세한 거품', '손에서 먼저'] },
    { image: 'elementx-banner-3.png', alt: '자연광 아래 황칠 잎을 표현한 연출 사진', label: '02 / FROM THE LEAF', title: <>한 장의 잎에서,<br/>하나의 비누까지.</>, copy: '직접 키운 황칠나무를 발효하고 추출해 비누에 담습니다.', tags: ['직접 재배', '발효', '추출'] },
    { image: 'elementx-detail-cleansing.png', alt: '거품으로 부드럽게 얼굴을 씻는 연출 사진', label: '03 / DAILY CLEANSING', title: <>충분히 거품 내고,<br/>깔끔하게 헹궈내세요.</>, copy: '거품으로 부드럽게 씻고, 미온수로 마무리하는 시간.', tags: ['거품 내기', '부드럽게 세정', '깨끗하게 헹굼'] },
  ].map((item, i) => <article className={`photo-story-panel photo-story-${i}`} key={item.image}><div className="photo-story-media"><Image src={`/images/${item.image}`} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 960px"/><div className="photo-story-copy"><p className="eyebrow">{item.label}</p><h2>{item.title}</h2><p>{item.copy}</p></div></div><div className="photo-story-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}<p className="photo-story-disclosure">제품과 원료의 이해를 돕기 위한 연출 이미지입니다.</p></section>;
}

export function ProcessDrawing({ stage }: { stage: number }) {
  return <svg className="process-drawing" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {stage === 0 && <><path d="M60 100V54M60 72C26 71 24 43 24 30c30 0 37 20 36 42M60 60c0-30 19-40 37-40 1 26-9 42-37 40M35 102h50"/></>}
    {stage === 1 && <><path d="M40 28h40v13l12 13v44H28V54l12-13ZM37 20h46M29 68h62"/><circle cx="47" cy="81" r="4"/><circle cx="70" cy="60" r="3"/><path d="M54 39v-7m13 10v-7"/></>}
    {stage === 2 && <><path d="M26 25h68L70 58v15H50V58ZM38 85v18h44V85"/><path d="M60 74c-9 12-9 16 0 16s9-4 0-16Z"/></>}
    {stage === 3 && <><path d="M25 59h70v19a25 25 0 0 1-25 25H50a25 25 0 0 1-25-25ZM21 59h78M66 60l23-37M40 42q-8-8 0-16m13 16q-8-8 0-16"/></>}
    {stage === 4 && <><path d="m20 48 60-16 23 21-61 17ZM20 48v37l22 20 61-18V53M42 70v35M40 43l23 21M60 37l22 21"/></>}
    {stage === 5 && <><circle cx="44" cy="38" r="12"/><circle cx="44" cy="82" r="12"/><path d="m53 47 48 42M53 73l48-42"/><circle cx="67" cy="60" r="3"/></>}
    {stage === 6 && <><path d="M18 87h84M24 98h72M35 52q-12-12 0-25m25 25q-12-12 0-25m25 25q-12-12 0-25"/><ellipse cx="60" cy="71" rx="28" ry="10"/><path d="M32 71v10m56-10v10"/></>}
  </svg>;
}
