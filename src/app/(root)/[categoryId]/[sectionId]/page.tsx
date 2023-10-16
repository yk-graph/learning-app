import Link from 'next/link'

export default function SectionDetailPage({
  params,
}: {
  params: { categoryId: string; sectionId: string }
}) {
  return (
    <div>
      <div>SectionDetailPage</div>
      <div>セクション詳細ページの中に問題一覧がある</div>
      <div>
        <Link href={`/${params.categoryId}/${params.sectionId}/1`}>問題1</Link>
      </div>
      <div>
        <Link href={`/${params.categoryId}/${params.sectionId}/2`}>問題2</Link>
      </div>
      <div>
        <Link href={`/${params.categoryId}/${params.sectionId}/3`}>問題3</Link>
      </div>
    </div>
  )
}
