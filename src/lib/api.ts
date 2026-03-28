import { mockGlobalMetrics } from '@/data/mockData'
import type { GlobalMetrics } from '@/types'

async function fetchWithTimeout(url: string, timeout = 5000): Promise<Response> {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  
  try {
    const response = await fetch(url, {
      signal: controller.signal,
    })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

export async function getGlobalMetrics(): Promise<GlobalMetrics> {
  try {
    const apiBaseUrl = typeof window !== 'undefined' 
      ? window.location.origin 
      : process.env.NEXT_PUBLIC_SITE_URL || ''
    
    const response = await fetchWithTimeout(`${apiBaseUrl}/api/metrics`, 5000)
    if (!response.ok) throw new Error('Failed to fetch metrics')
    return await response.json()
  } catch (error) {
    console.error('Error fetching metrics, using mock data:', error)
    return mockGlobalMetrics
  }
}
