import Link from 'next/link';

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <header className="page-intro container"><Link href="/" className="page-home">홈으로</Link><p className="eyebrow">{label}</p><h1>{title}</h1><p>{description}</p></header>;
}
