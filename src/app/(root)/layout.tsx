import Logout from '@/components/logout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <Logout />
      </header>
      <div>{children}</div>
    </>
  )
}
