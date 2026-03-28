'use client'

import dynamic from 'next/dynamic'
import { mockAQIData } from '@/data/mockData'

const PollutionMap = dynamic(() => import('./PollutionMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-background border border-border rounded-lg flex items-center justify-center">
      <p className="text-secondary">地图加载中...</p>
    </div>
  ),
})

export default function MapWrapper() {
  return <PollutionMap data={mockAQIData} />
}
