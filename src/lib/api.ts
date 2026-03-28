import { mockGlobalMetrics } from '@/data/mockData'
import type { GlobalMetrics } from '@/types'

export async function getGlobalMetrics(): Promise<GlobalMetrics> {
  try {
    const response = await fetch('/api/metrics')
    if (!response.ok) throw new Error('Failed to fetch metrics')
    return await response.json()
  } catch (error) {
    console.error('Error fetching metrics, using mock data:', error)
    return mockGlobalMetrics
  }
}
