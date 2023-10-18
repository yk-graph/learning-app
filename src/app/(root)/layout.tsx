import { Logout } from '@/components/Logout'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-full bg-slate-900">
      <header className="flex items-center justify-end p-4 border-b border-b-white">
        <Logout />
      </header>
      <main className="py-8 px-4">{children}</main>
    </div>
  )
}
