'use client';
import { useEffect } from 'react';

const routes: Record<string, string> = {
  '#manufacturing': '/story#manufacturing',
  '#making-process': '/story#making-process', '#making-comparison': '/story#making-comparison',
  '#origin-step': '/story#origin-step', '#hero-origin': '/story#origin-step', '#hero-process': '/story#manufacturing',
  '#brand-story': '/story#brand-story', '#bulk': '/story#bulk', '#reviews': '/reviews',
  '#purchase': '/purchase', '#policies': '/policies',
};
export function LegacyHomeAnchors() {
  useEffect(() => {
    const migrate = () => {
      // 상세페이지에 포함된 섹션은 홈에서 바로 읽을 수 있도록 유지한다.
      if (document.getElementById(window.location.hash.slice(1))) return;
      const target = routes[window.location.hash]; if (target) window.location.replace(target);
    };
    migrate(); window.addEventListener('hashchange', migrate);
    return () => window.removeEventListener('hashchange', migrate);
  }, []);
  return null;
}
