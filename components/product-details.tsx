import Image from 'next/image';
import Link from 'next/link';
import { Accordion } from '@/components/interactive';
import { ReviewHighlights } from '@/components/review-highlights';
import { manufacturingSteps } from '@/lib/manufacturing';
import { packageIngredients } from '@/lib/ingredients';
import { saleOptions, formatPrice } from '@/lib/product';
import styles from './product-details.module.css';

const sceneDimensions: Record<string, [number, number]> = {
  'elementx-feature-foam.png': [1254, 1254],
  'elementx-detail-cleansing.png': [1885, 834],
  'elementx-banner-3.png': [1884, 835],
  'elementx-botanicals-v1.png': [1122, 1402],
  'elementx-net-hanging-v1.png': [1122, 1402],
};

function Scene({ image, alt }: { image: string; alt: string }) {
  const [width, height] = sceneDimensions[image];
  return <div className={styles.photo}><Image src={`/images/${image}`} alt={alt} width={width} height={height} sizes="(max-width: 1000px) 100vw, 1000px" /></div>;
}

const faqs = [
  { question: '벌크는 무엇이 다른가요?', answer: '비누를 하나씩 다듬는 가공과 개별 포장을 덜어낸 구성입니다. 500g과 1kg 중에서 선택할 수 있습니다.' },
  { question: '거품망으로 얼굴을 문질러도 되나요?', answer: '거품망은 거품을 내는 데 사용하고, 얼굴은 손에 덜어낸 거품으로 부드럽게 씻어 주세요.' },
  { question: '사용 후에는 어떻게 보관하나요?', answer: '비누와 망을 헹군 뒤 물줄기가 직접 닿지 않는 통풍되는 곳에 걸어 말려 주세요. 물이 잘 빠지는 비누 받침도 사용할 수 있습니다.' },
];

export function ProductDetails() {
  return <div className={styles.detail}>
    <section id="about" className={styles.chapter}>
      <header className={styles.heading}><p className={styles.label}>ELEMENT X · DAILY SOAP</p><h2>풍부한 거품으로 시작하는<br />매일의 세안.</h2><p>손에서 피어나는 미세한 거품.<br />충분히 거품 내고, 깔끔하게 씻어내세요.</p></header>
      <div id="features"><Scene image="elementx-feature-foam.png" alt="손 위에서 elementX 비누에 거품을 내는 연출 사진" /></div>
      <div className={styles.explanation}>
        <h3>elementX를 선택하는 세 가지 이유</h3>
        <dl className={styles.reasons}>
          <div><dt><span>01</span> 풍부하고 미세한 거품</dt><dd>elementX의 특징은 물과 만나 풍부하게 피어나는 미세한 거품입니다. 손이나 거품망으로 충분히 거품을 내어 사용하세요.</dd></div>
          <div><dt><span>02</span> 깔끔하게 씻어내는 세정</dt><dd>매일 피부를 씻는 비누의 기본에 집중했습니다. 손에 덜어낸 거품으로 부드럽게 세정하고, 미온수로 깨끗하게 헹궈 주세요.</dd></div>
          <div><dt><span>03</span> 원료부터 직접 준비하는 과정</dt><dd>황칠나무를 직접 재배하고, 발효와 추출을 거쳐 비누에 담습니다. 원료를 준비하는 단계부터 우리가 만드는 비누입니다.</dd></div>
        </dl>
      </div>
    </section>

    <section className={styles.chapter} aria-labelledby="daily-title">
      <header className={styles.heading}><p className={styles.label}>FOR YOUR EVERYDAY</p><h2 id="daily-title">이런 분께<br />elementX를 추천합니다.</h2></header>
      <Scene image="elementx-detail-cleansing.png" alt="풍성한 거품으로 얼굴을 씻는 사용 장면 연출 사진" />
      <ul className={styles.recommend}>
        <li><strong>비누의 거품이 아쉬웠던 분</strong><p>풍부하고 미세한 거품을 좋아하는 분께.</p></li>
        <li><strong>매일 깔끔하게 씻어내고 싶은 분</strong><p>일상의 세안에 사용할 고형 비누를 찾는 분께.</p></li>
        <li><strong>무엇으로, 어떻게 만들었는지 궁금한 분</strong><p>원료와 제조 과정을 확인하고 선택하고 싶은 분께.</p></li>
        <li><strong>꾸준히 쓰는 비누의 가격이 부담스러운 분</strong><p>개별 가공과 포장을 덜어낸 벌크 구성을 원하는 분께.</p></li>
      </ul>
    </section>

    <section id="manufacturing" className={styles.chapter}>
      <header className={styles.heading}><p className={styles.label}>FROM THE BEGINNING</p><h2>비누가 되기 전부터,<br />우리가 하는 일.</h2><p>황칠나무를 직접 키우고,<br />발효·추출한 원료를 비누에 담습니다.</p></header>
      <Scene image="elementx-banner-3.png" alt="빛이 드는 공간의 황칠 잎 연출 사진" />
      <div className={styles.explanation}><h3>재배부터 건조까지, 이렇게 만듭니다.</h3><ol className={styles.steps}>{manufacturingSteps.map((step, i) => <li key={step.title}><span className={styles.stepNumber}>{String(i+1).padStart(2,'0')}</span><div><h4>{step.title}</h4><p>{step.text}</p></div></li>)}</ol>
      <div className={styles.methodNote}><h3>합성 세정바와 만드는 출발점이 다릅니다.</h3><p><strong>합성 세정바</strong>는 합성 세정 성분을 중심으로 원료를 배합하고 성형합니다.</p><p><strong>elementX</strong>는 직접 재배한 황칠나무의 발효·추출 원료를 준비한 뒤, 비누화와 몰드·트리밍·건조 과정을 거칩니다.</p><p className={styles.note}>제조 방식의 차이를 설명하며, 사용감과 피부 적합성은 전체 배합에 따라 달라집니다.</p></div></div>
      <p className={styles.note}>개별 바의 제조 순서입니다. 벌크는 개별 가공과 포장을 덜어냅니다.</p>
      <Link className={styles.textLink} href="/story">만드는 이야기 자세히 보기 ↗</Link>
    </section>

    <section id="ingredients" className={styles.chapter}>
      <header className={styles.heading}><p className={styles.label}>INSIDE ELEMENT X</p><h2>하나의 비누에 담은<br />식물에서 얻은 원료.</h2><p>황칠나무 추출물과<br />올리브·코코넛·피마자씨 오일.</p></header>
      <Scene image="elementx-botanicals-v1.png" alt="비누 원료를 소개하기 위해 식물과 오일을 배치한 연출 사진" />
      <div className={styles.inset}><p className={styles.note}>사진은 원료 이해를 돕기 위한 연출이며 배합 비율을 나타내지 않습니다.</p><details className={styles.disclosure}><summary>전체 15가지 성분 확인하기</summary><p>포장박스의 영문 표기 순서입니다.</p><ol lang="en">{packageIngredients.map(name => <li key={name}>{name}</li>)}</ol><a href="/images/elementx-package-ingredients.png" target="_blank" rel="noreferrer">포장 표기 원본 보기 ↗</a></details></div>
    </section>

    <section id="how-to" className={styles.chapter}>
      <header className={styles.heading}><p className={styles.label}>LATHER · RINSE · DRY</p><h2>쓰고 난 뒤에는,<br />걸어서 말려주세요.</h2><p>비누와 거품망을 헹군 뒤<br />물줄기가 닿지 않는 곳에 걸어 보관하세요.</p></header>
      <Scene image="elementx-net-hanging-v1.png" alt="비누를 넣은 거품망을 욕실 고리에 걸어 말리는 방법을 보여주는 연출 사진" />
      <div className={styles.caption}><span>01 충분히 거품 내기</span><span>02 깨끗하게 헹구기</span><span>03 걸어서 말리기</span></div>
      <p className={styles.note}>거품망으로 피부를 문지르지 말고, 손에 덜어낸 거품으로 씻어 주세요.</p>
    </section>

    <section id="bulk" className={`${styles.chapter} ${styles.bulk}`}>
      <header className={styles.heading}><p className={styles.label}>LESS PACKAGING, MORE SOAP</p><h2>개별 가공과 포장을 덜어,<br />더 넉넉하게.</h2><p>하나씩 다듬고 포장하는 비용을 줄여<br />500g과 1kg 벌크로도 만나실 수 있습니다.</p></header>
      <div className={styles.weights}><strong>500g</strong><span>또는</span><strong>1kg</strong></div>
      <div className={styles.explanation}><h3>왜 벌크로 판매하나요?</h3><p>비누를 하나씩 예쁘게 다듬고 개별 포장하는 데에도 비용이 듭니다. 매일 사용할 비누라면, 이 비용을 덜어 더 실속 있게 구매할 수 있도록 하자는 생각에서 시작했습니다.</p><p><strong>벌크는 개별 모양 가공과 개별 포장을 생략한 중량 구성입니다.</strong> 500g은 100g당 7,700원, 1kg은 100g당 5,350원으로 선택할 수 있습니다.</p><p>처음이라면 95g 한 개, 선물이라면 포장된 3개 세트, 꾸준히 쓴다면 벌크 구성을 살펴보세요.</p></div>
    </section>
    <ReviewHighlights />
    <section id="formats" className={styles.chapter}>
      <header className={styles.heading}><p className={styles.label}>CHOOSE YOUR ELEMENT X</p><h2>나에게 맞는 구성으로.</h2><p>모든 구성 무료배송</p></header>
      <div className={styles.options}>{saleOptions.map(option => <Link key={option.id} href={`/purchase#${option.id}`} className={styles.option}><div><span>{option.kind}{option.best ? ' · BEST' : ''}</span><h3>{option.label}</h3><p>{option.description}</p></div><div><strong>{formatPrice(option.price)}</strong><span>{option.unitLabel} {formatPrice(option.unitPrice)}</span><b>구성 선택 ↗</b></div></Link>)}</div>
    </section>
    <section id="faq" className={`${styles.chapter} ${styles.inset}`}><header className={styles.heading}><h2>궁금한 점을 확인하세요.</h2></header><Accordion items={faqs} /></section>
    <footer className={styles.ending}><p>비누가 되기 전부터, 당신의 손에 닿기까지.</p><Link className="button" href="/purchase">elementX 구매하기 ↗</Link><p className={styles.note}>사진은 제품·원료·사용법을 표현한 연출 이미지입니다.</p><a className={styles.textLink} href="/images/elementx-real-soap-reference.jpg" target="_blank" rel="noreferrer">비누 실물 사진 보기 ↗</a></footer>
  </div>;
}
