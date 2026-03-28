export interface GlobalMetrics {
  co2Concentration: number
  dailyCarbonEmissions: number
  dailyForestLoss: number
  aqi: number
  lastUpdated: string
}

export interface AQIData {
  city: string
  aqi: number
  location: {
    lat: number
    lng: number
  }
  timestamp: string
}

export interface NewsItem {
  id: string
  title: string
  source: string
  time: string
  summary: string
  category: string
  url: string
}

export interface ActionSuggestion {
  text: string
  aqiLevel: '优' | '良' | '轻度污染' | '中度污染' | '重度污染' | '严重污染'
}
