import Image from 'next/image';
import { ProcessDrawing } from '@/components/detail-photo-story';
import { saleOptions, formatPrice } from '@/lib/product';
import { bulkSizes, manufacturingSources, manufacturingSteps } from '@/lib/manufacturing';

export function ManufacturingStory() {
  return <section id="manufacturing" className="making-section section" aria-labelledby="making-title">
    <div className="container">
      <header className="making-heading">
        <p className="eyebrow">FROM THE BEGINNING</p>
        <h2 id="making-title">비누가 되기 전부터,<br />우리가 하는 일.</h2>
        <p>원료를 준비하는 일부터 하나의 비누가 되기까지.<br />elementX가 선택한 과정을 소개합니다.</p>
      </header>
      <div className="making-photo-lead"><Image src="/images/elementx-banner-3.png" alt="황칠 원료를 소개하는 잎 연출 이미지" width={1884} height={835} sizes="(max-width:760px) 100vw, 960px"/><p>직접 재배 → 발효 → 추출 → 비누화</p></div>
      <details className="making-expand"><summary>만드는 과정과 세정바 비교 자세히 보기</summary>
      <nav className="making-jumps" aria-label="제조와 벌크 이야기 바로가기">
        <a href="#making-comparison">만드는 방식</a><a href="#making-process">우리의 과정</a><a href="#bulk">벌크를 선택한 이유</a><a href="/reviews">사용 후기</a>
      </nav>
      <div id="making-comparison" className="making-comparison">
        <article className="making-method">
          <p className="eyebrow">SYNDET BAR</p><h3>합성 세정바</h3>
          <p>합성 세정 성분을 중심으로 배합해 만드는 고형 세정제입니다.</p>
          <ol><li>세정 성분과 배합 원료 준비</li><li>원료 혼합</li><li>압출·성형 등으로 바 만들기</li></ol>
          <p className="making-caption">대표적인 공정의 개요이며 제품과 제조 방식에 따라 달라집니다.</p>
        </article>
        <article className="making-method making-method-own">
          <p className="eyebrow">ELEMENT X SOAP</p><h3>우리가 만드는 비누</h3>
          <p>황칠나무를 직접 재배하고, 발효·추출한 원료를 비누화 과정에 사용합니다.</p>
          <ol><li>직접 재배 · 발효 · 추출</li><li>비누화 · 몰드 작업</li><li>개별 바 다듬기 · 건조</li></ol>
          <p className="making-caption">개별 바의 공정입니다. 벌크는 하나씩 다듬는 가공과 개별 포장을 덜어냅니다.</p>
        </article>
      </div>
      <p className="making-footnote">만드는 방식의 차이를 설명하는 비교입니다. 사용감과 피부 적합성은 제품의 전체 배합에 따라 달라집니다.</p>
      <details className="making-sources"><summary>비교 자료 보기</summary><ul>{manufacturingSources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></li>)}</ul></details>
      <div id="making-process" className="making-process">
        <header className="making-heading"><p className="eyebrow">OUR PROCESS</p><h3>직접 재배부터 건조까지</h3><p>원료 준비, 비누 만들기, 그리고 마무리.</p></header>
        <ol className="making-timeline">{manufacturingSteps.map((step, i) => <li key={step.title} id={i === 0 ? 'origin-step' : undefined}>
          <ProcessDrawing stage={i} />
          <div><span className="making-group">{step.group}</span><h4>{step.title}</h4><p>{step.text}</p></div>
        </li>)}</ol>
      </div>
    </details></div>
  </section>;
}

export function BulkStory() {
  return <section id="bulk" className="bulk-section section" aria-labelledby="bulk-title"><div className="container">
    <header className="making-heading"><p className="eyebrow">LESS FINISHING, LESS PACKAGING</p><h2 id="bulk-title">하나씩 다듬는 대신,<br />더 넉넉하게 담았습니다.</h2><p>하나씩 모양을 다듬고, 하나씩 포장하는 비용.<br />그 부담을 줄이기 위해 벌크를 선택했습니다.</p></header>
    <div className="bulk-statement"><p>개별 가공 없이.<br />개별 포장 없이.</p><div><span>벌크의 두 가지 중량</span><div className="bulk-sizes">{bulkSizes.map(size => <strong key={size}>{size}</strong>)}</div><p>한 개씩 완성하는 가공과 포장을 덜어,<br />가격 부담을 낮추려는 선택입니다.</p></div></div>
    <div className="bulk-price-summary">{saleOptions.filter(option => option.id.startsWith('bulk')).map(option => <a href={`/purchase#${option.id}`} key={option.id}><strong>{option.label} · {formatPrice(option.price)}</strong><span>100g당 {formatPrice(option.unitPrice)} · 무료배송</span></a>)}</div>
    {/* TODO: 실제 벌크 사진 확보 후 개별 제품과 나란히 배치. 벌크 형태를 임의로 연출하지 않는다. */}
  </div></section>;
}

