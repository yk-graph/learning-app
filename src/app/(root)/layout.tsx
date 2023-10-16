export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>Header</header>
      <div>{children}</div>
    </>
  )
}
