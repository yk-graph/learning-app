import Logout from '@/components/Logout'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-b-white">
      <Link href="/">TOP</Link>
      <Logout />
    </header>
  )
}

export default Header
