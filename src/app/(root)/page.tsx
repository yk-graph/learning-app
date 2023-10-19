import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>カテゴリーを選択する</div>
      <div>セクションを選択する</div>
      <div>
        <Link href="/js/variable/1">学習を開始する</Link>
      </div>
      <div>
        <Link href="/js">JavaScript</Link>
      </div>
      <div>
        <Link href="/react">React</Link>
      </div>
      <div>
        <Link href="/firebase">Firebase</Link>
      </div>
      <div>
        <Link href="/create">create</Link>
      </div>
    </div>
  )
}
