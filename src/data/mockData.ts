import type { GlobalMetrics, AQIData, NewsItem } from '@/types'

export const mockGlobalMetrics: GlobalMetrics = {
  co2Concentration: 421.5,
  dailyCarbonEmissions: 12500000,
  dailyForestLoss: 2850,
  lastUpdated: new Date().toISOString(),
}

export const mockAQIData: AQIData[] = [
  {
    city: '北京',
    location: { lat: 39.9042, lng: 116.4074 },
    aqi: 78,
    pm25: 45,
    pm10: 68,
    co2: 415,
    timestamp: new Date().toISOString(),
  },
  {
    city: '上海',
    location: { lat: 31.2304, lng: 121.4737 },
    aqi: 65,
    pm25: 38,
    pm10: 52,
    co2: 420,
    timestamp: new Date().toISOString(),
  },
  {
    city: '广州',
    location: { lat: 23.1291, lng: 113.2644 },
    aqi: 58,
    pm25: 32,
    pm10: 45,
    co2: 418,
    timestamp: new Date().toISOString(),
  },
  {
    city: '深圳',
    location: { lat: 22.5431, lng: 114.0579 },
    aqi: 52,
    pm25: 28,
    pm10: 40,
    co2: 412,
    timestamp: new Date().toISOString(),
  },
  {
    city: '成都',
    location: { lat: 30.5728, lng: 104.0668 },
    aqi: 92,
    pm25: 58,
    pm10: 75,
    co2: 425,
    timestamp: new Date().toISOString(),
  },
] as const

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: '全球碳排放量创新高',
    source: '环境监测中心',
    time: '2026-03-25',
    summary: '最新数据显示，全球碳排放量持续上升，环保形势严峻。',
    category: '政策' as const,
    url: '#',
  },
  {
    id: '2',
    title: '森林保护取得新进展',
    source: '国际环保组织',
    time: '2026-03-24',
    summary: '全球森林保护项目取得显著成果，新增保护面积达百万公顷。',
    category: '公益' as const,
    url: '#',
  },
  {
    id: '3',
    title: '新能源技术突破',
    source: '科技日报',
    time: '2026-03-23',
    summary: '太阳能电池转换效率创下新纪录，为可再生能源发展带来新希望。',
    category: '技术' as const,
    url: '#',
  },
] as const

export const actionSuggestions = [
  { text: '今日空气质量良好，适合户外活动', aqiLevel: '优' },
  { text: '今日空气质量良，可正常户外活动', aqiLevel: '良' },
  { text: '今日空气质量轻度污染，建议减少长时间户外运动', aqiLevel: '轻度污染' },
  { text: '今日空气质量中度污染，敏感人群应减少外出', aqiLevel: '中度污染' },
  { text: '今日空气质量重度污染，建议所有人群减少户外活动', aqiLevel: '重度污染' },
  { text: '今日空气质量严重污染，务必避免所有户外活动', aqiLevel: '严重污染' },
] as const
