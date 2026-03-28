'use client'

import { useEffect, useState } from 'react'
import { Navbar, Footer, GlobalCounters, ActionSuggestion, MapWrapper } from '@/components'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">地球状态</h1>
          <p className="text-secondary">加载中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <GlobalCounters />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-primary mb-6">交互式污染地图</h2>
          <MapWrapper />
          <ActionSuggestion />
        </div>
      </main>
      <Footer />
    </div>
  )
}
