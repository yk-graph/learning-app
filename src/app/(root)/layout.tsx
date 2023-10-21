import { Header } from '@/components'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-full bg-slate-900">
      <Header />
      <main className="py-8 px-16">{children}</main>
    </div>
  )
}
