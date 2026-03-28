'use client'

import { useState, useEffect } from 'react'
import { getGlobalMetrics } from '@/lib/api'
import type { GlobalMetrics } from '@/types'

export default function GlobalCounters() {
  const [metrics, setMetrics] = useState<GlobalMetrics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await getGlobalMetrics()
        setMetrics(data)
      } catch (error) {
        console.error('Failed to fetch metrics:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMetrics()
  }, [])

  if (loading || !metrics) {
    return (
      <div className="w-full bg-background border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-border/20 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <span className="text-secondary text-sm mb-2">大气 CO2 浓度 (ppm)</span>
            <div className="text-4xl md:text-5xl font-mono font-bold text-primary">
              {metrics.co2Concentration}
            </div>
            <span className="text-secondary text-xs mt-2">实时监测数据</span>
          </div>

          <div className="flex flex-col">
            <span className="text-secondary text-sm mb-2">今日全球碳排放估算 (吨)</span>
            <div className="text-4xl md:text-5xl font-mono font-bold text-primary">
              {metrics.dailyCarbonEmissions.toLocaleString()}
            </div>
            <span className="text-secondary text-xs mt-2">累计排放量</span>
          </div>

          <div className="flex flex-col">
            <span className="text-secondary text-sm mb-2">今日森林损失面积 (公顷)</span>
            <div className="text-4xl md:text-5xl font-mono font-bold text-primary">
              {metrics.dailyForestLoss.toLocaleString()}
            </div>
            <span className="text-secondary text-xs mt-2">累计损失面积</span>
          </div>
        </div>
      </div>
    </div>
  )
}
