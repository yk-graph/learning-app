import Link from 'next/link'

export default function CategoryDetailPage({
  params,
}: {
  params: { categoryId: string }
}) {
  return (
    <div>
      <div>CategoryDetailPage</div>
      <div>カテゴリー詳細ページの中にセクション一覧がある</div>
      <div>
        <Link href={`/${params.categoryId}/variable`}>変数</Link>
      </div>
      <div>
        <Link href={`/${params.categoryId}/function`}>関数</Link>
      </div>
      <div>
        <Link href={`/${params.categoryId}/async`}>非同期処理</Link>
      </div>
    </div>
  )
}
