import Link from 'next/link'

export default function IssuePage({
  params,
}: {
  params: { categoryId: string; sectionId: string; issueId: string }
}) {
  return (
    <div>
      <div>タイトル</div>
      <div>問題本文</div>
      <div>選択肢</div>
      <div>回答sabmitボタン</div>
      <div>
        <Link href={`/${params.categoryId}/${params.sectionId}/2`}>
          次の問題へ
        </Link>
      </div>
    </div>
  )
}
