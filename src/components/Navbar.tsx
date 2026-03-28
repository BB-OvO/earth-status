import Link from 'next/link'

const navItems = [
  { name: '首页', href: '/' },
  { name: '新闻', href: '/news' },
  { name: '数据说明', href: '/about' },
]

export default function Navbar() {
  return (
    <nav className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary hover:text-accent transition-colors">
            Earth Status
          </Link>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
