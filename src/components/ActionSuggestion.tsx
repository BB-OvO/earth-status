import { actionSuggestions } from '@/data/mockData'
import type { ActionSuggestion } from '@/types'

function getAQILevel(aqi: number): '优' | '良' | '轻度污染' | '中度污染' | '重度污染' | '严重污染' {
  if (aqi <= 50) return '优'
  if (aqi <= 100) return '良'
  if (aqi <= 150) return '轻度污染'
  if (aqi <= 200) return '中度污染'
  if (aqi <= 300) return '重度污染'
  return '严重污染'
}

export default function ActionSuggestionCard() {
  const aqi = 78
  const level = getAQILevel(aqi)
  const suggestion = actionSuggestions.find((s) => s.aqiLevel === level) || actionSuggestions[1]

  return (
    <div className="w-full bg-background border border-border rounded-lg p-6 mt-8">
      <h3 className="text-xl font-bold text-primary mb-4">今日行动建议</h3>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <span className="text-accent font-bold text-lg">💡</span>
        </div>
        <div>
          <p className="text-primary text-lg leading-relaxed">
            {suggestion.text}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-border text-secondary">
              当前 AQI: {aqi}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-border text-secondary">
              空气质量: {level}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
