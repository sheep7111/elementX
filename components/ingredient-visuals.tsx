import Image from 'next/image';
import { packageIngredients } from '@/lib/ingredients';

const botanicalIngredients = [
  { name: '황칠나무 추출물', english: packageIngredients[0], kind: 'leaf' },
  { name: '올리브오일', english: packageIngredients[5], kind: 'olive' },
  { name: '코코넛오일', english: packageIngredients[8], kind: 'coconut' },
  { name: '피마자씨오일', english: packageIngredients[7], kind: 'seed' },
  { name: '라벤더오일', english: packageIngredients[12], kind: 'lavender' },
  { name: '페퍼민트오일', english: packageIngredients[13], kind: 'leaf' },
  { name: '티트리잎오일', english: packageIngredients[14], kind: 'sprig' },
];

export function IngredientVisuals() {
  return <section id="ingredients" className="ingredient-visual-section" aria-labelledby="ingredient-visual-title"><div className="ingredient-poster">
    <header><p className="eyebrow">INSIDE ELEMENT X</p><h2 id="ingredient-visual-title">하나의 비누에 담긴<br/>원료를 만나보세요.</h2><p>포장에 기재된 식물 유래 성분을 소개합니다.</p></header>
    <div className="botanical-photo-story"><Image src="/images/elementx-botanicals-v1.png" alt="코코넛, 올리브, 피마자씨, 라벤더와 잎을 배치한 식물 원료 연출 사진" width={1122} height={1402} sizes="(max-width:760px) 100vw, 960px"/><div className="botanical-photo-caption"><h3>식물에서 얻은 원료를 담아.</h3><p>올리브 · 코코넛 · 피마자씨 오일<br/>라벤더 · 페퍼민트 · 티트리잎 오일</p></div></div>
    <details className="botanical-name-details"><summary>식물 유래 성분명 보기</summary><ul>{botanicalIngredients.map(item => <li key={item.english}><strong>{item.name}</strong><span>{item.english}</span></li>)}</ul></details>
    <p className="ingredient-visual-note">원료 그림과 비누 사진은 이해를 돕기 위한 연출입니다.<br/>위 성분은 전성분의 일부이며, 배합 비율을 나타내지 않습니다.</p>
    <details className="ingredient-full-list"><summary>전체 15가지 성분 확인하기 <span aria-hidden="true">＋</span></summary><p>포장박스에 기재된 영문 표기 순서입니다.</p><ol lang="en">{packageIngredients.map(name=><li key={name}>{name}</li>)}</ol><a className="text-link" href="/images/elementx-package-ingredients.png" target="_blank" rel="noreferrer">포장 표기 원본 보기 ↗</a></details>
    {/* 한글은 원료 이해를 돕는 명칭. 최종 판매 라벨의 공식 한글 전성분 표기와 별도 대조. */}
  </div></section>;
}
