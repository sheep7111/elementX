'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { excludedIngredients, heroAssets, heroSlides } from '@/lib/hero';
export function HeroCarousel(){
 const [index,setIndex]=useState(0),[paused,setPaused]=useState(false),[reduced,setReduced]=useState(true),[hovered,setHovered]=useState(false),[focused,setFocused]=useState(false),[detail,setDetail]=useState('');
 const touch=useRef<{x:number;y:number}|null>(null), dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setReduced(q.matches);sync();q.addEventListener('change',sync);return()=>q.removeEventListener('change',sync)},[]);
 const running=!paused&&!hovered&&!focused&&!reduced&&!detail;
 useEffect(()=>{if(!running)return;const timer=setInterval(()=>{if(!document.hidden)setIndex(i=>(i+1)%3)},5000);return()=>clearInterval(timer)},[running,index]);
 const move=(n:number)=>{setIndex((n+3)%3);setPaused(true)};
 const slide=heroSlides[index], badges=excludedIngredients.filter(x=>x.verified);
 return <section id="home" className="hero carousel story-carousel banner-full-image" aria-label="elementX 주요 이야기" aria-roledescription="슬라이드 배너" tabIndex={0}
 onPointerEnter={e=>{if(e.pointerType!=='touch')setHovered(true)}} onPointerLeave={()=>setHovered(false)}
 onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false)}}
 onKeyDown={e=>{if(detail)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(index+(e.key==='ArrowRight'?1:-1))}}}
 onTouchStart={e=>{touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY}}} onTouchCancel={()=>{touch.current=null}}
 onTouchEnd={e=>{if(touch.current){const dx=e.changedTouches[0].clientX-touch.current.x,dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy))move(index+(dx<0?1:-1))}touch.current=null}}>
 <div className="container banner-grid">
  <div className="banner-copy" key={index} role="group" aria-roledescription="슬라이드" aria-label={`${index+1} / 3`} aria-live={running?'off':'polite'}>
   <p className="eyebrow">{slide.label}</p><h1>{slide.title[0]}<br/>{slide.title[1]}</h1>
   <p className="banner-description desktop-description">{slide.description}</p><p className="banner-description mobile-description">{slide.mobile}</p>
   {index===1&&badges.length>0&&<ul className="banner-badges">{badges.map(x=><li key={x.label}>{x.label}</li>)}</ul>}
   <p className="banner-closing">{slide.closing}</p>
  </div>
  <div className={`banner-art art-${index+1}`} key={`art-${index}`}>
   {index===0&&<Image src={heroAssets.product} alt="따뜻한 자연광 아래 두 손으로 감싼 회흑색 elementX 비누와 X 각인" fill priority sizes="100vw" className="banner-product"/>}
   {index===1&&<Image src={heroAssets.banner2} alt="밝은 웜그레이 바닥에 평평하게 놓인 회흑색 비누와 X 각인 위에 자연스럽게 묻은 거품" fill sizes="100vw" className="banner-product"/>}
   {index===2&&<Image src={heroAssets.botanical} alt="따뜻한 자연광 아래 초록 잎과 밝은 석재 배경" fill sizes="100vw" className="banner-product"/>}
  </div>
  <div className="banner-actions">{slide.actions.map(([label,href],i)=><a className={`button ${i?'outline':''}`} key={href} href={href} onClick={e=>{if(href.startsWith('#hero-')){e.preventDefault();setDetail(href);dialog.current?.showModal()}}}>{label}</a>)}</div>
  <div className="carousel-controls" aria-label="슬라이드 조작"><button className="carousel-arrow" aria-label="이전 슬라이드" onClick={()=>move(index-1)}>←</button><div className="carousel-dots">{heroSlides.map((s,i)=><button key={s.label} aria-label={`${i+1}번 슬라이드`} aria-current={index===i?'true':undefined} onClick={()=>move(i)}><span/></button>)}</div><span className="carousel-count">0{index+1} / 03</span><button className="carousel-arrow" aria-label="다음 슬라이드" onClick={()=>move(index+1)}>→</button><button className="carousel-pause" disabled={reduced} aria-label={paused?'자동 전환 재생':'자동 전환 일시정지'} onClick={()=>setPaused(p=>!p)}>{reduced?'자동 전환 꺼짐':paused?'재생 ▷':'정지 Ⅱ'}</button></div>
 </div>
 <dialog ref={dialog} className="hero-detail-dialog" onClose={()=>setDetail('')} aria-labelledby="hero-detail-title"><section id={detail.slice(1)}><p className="eyebrow">ELEMENT X</p><h2 id="hero-detail-title">{detail==='#hero-origin'?'황칠 이야기':'제조 과정'}</h2><p>{detail==='#hero-origin'?'좋은 비누는 좋은 원료에서 시작된다고 믿기에, 비누의 원료가 되는 황칠나무를 직접 재배합니다. 실제 재배지와 원료 사진은 준비되는 대로 소개하겠습니다.':'재배부터 비누까지 직접 확인한다는 기준으로 준비합니다. 구체적인 제조 단계와 현장 사진은 확인을 마친 후 소개하겠습니다.'}</p><button className="button" onClick={()=>dialog.current?.close()}>닫기</button></section></dialog>
 </section>
}




