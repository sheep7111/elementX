import Link from 'next/link';
import { ManufacturingStory, BulkStory } from '@/components/manufacturing-story';
import { BrandStory } from '@/components/brand-story';
import { PageIntro } from '@/components/page-intro';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata('만드는 이야기', '직접 재배부터 비누가 되기까지의 과정과 벌크를 선택한 이유.', '/story');
export default function StoryPage() {
  return <><PageIntro label="HOW WE MAKE IT" title="만드는 이야기" description="원료를 준비하는 마음부터, 가공과 포장을 덜어내는 선택까지." /><ManufacturingStory /><BulkStory /><BrandStory /><div className="page-next container"><Link className="button" href="/products">제품 알아보기</Link><Link className="button outline" href="/reviews">사용 후기 보기</Link></div></>;
}
