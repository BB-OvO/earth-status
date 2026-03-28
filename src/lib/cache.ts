import type { GlobalMetrics, AQIData, NewsItem } from '@/types'

interface CacheData {
  metrics: GlobalMetrics | null
  aqi: AQIData[] | null
  news: NewsItem[] | null
  lastUpdated: string
}

const CACHE_FILE = './data/cache.json'

let cache: CacheData = {
  metrics: null,
  aqi: null,
  news: null,
  lastUpdated: new Date().toISOString(),
}

export async function loadCache(): Promise<CacheData> {
  try {
    const fs = await import('fs')
    if (fs.existsSync(CACHE_FILE)) {
      const data = fs.readFileSync(CACHE_FILE, 'utf-8')
      cache = JSON.parse(data)
    }
  } catch (error) {
    console.error('Error loading cache:', error)
  }
  return cache
}

export async function saveCache(data: CacheData): Promise<void> {
  try {
    const fs = await import('fs')
    fs.writeFileSync(CACHE_FILE, JSON.stringify(data, null, 2))
    cache = data
  } catch (error) {
    console.error('Error saving cache:', error)
  }
}

export async function getMetricsCache(): Promise<GlobalMetrics | null> {
  await loadCache()
  return cache.metrics
}

export async function setMetricsCache(data: GlobalMetrics): Promise<void> {
  await loadCache()
  cache.metrics = data
  cache.lastUpdated = new Date().toISOString()
  await saveCache(cache)
}

export async function getAQICache(): Promise<AQIData[] | null> {
  await loadCache()
  return cache.aqi
}

export async function setAQICache(data: AQIData[]): Promise<void> {
  await loadCache()
  cache.aqi = data
  cache.lastUpdated = new Date().toISOString()
  await saveCache(cache)
}

export async function getNewsCache(): Promise<NewsItem[] | null> {
  await loadCache()
  return cache.news
}

export async function setNewsCache(data: NewsItem[]): Promise<void> {
  await loadCache()
  cache.news = data
  cache.lastUpdated = new Date().toISOString()
  await saveCache(cache)
}
