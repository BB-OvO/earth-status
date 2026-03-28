import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Earth Status - 地球状态实时监测平台',
  description: '实时显示地球环境污染量化数据的 Web 平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="bg-background text-primary font-sans">
        {children}
      </body>
    </html>
  )
}
