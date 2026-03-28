'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components'
import { Footer } from '@/components'
import { GlobalCounters } from '@/components'
import { ActionSuggestion } from '@/components'
import { mockAQIData } from '@/data/mockData'

// Dynamic import with ssr: false to prevent window error
const PollutionMap = dynamic(() => import('@/components/PollutionMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-background border border-border rounded-lg flex items-center justify-center">
      <p className="text-secondary">地图加载中...</p>
    </div>
  ),
})

// Force client component
export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
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
          <PollutionMap data={mockAQIData} />
          <ActionSuggestion />
        </div>
      </main>
      <Footer />
    </div>
  )
}
