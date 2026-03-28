import { NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const CACHE_DURATION = 30 * 60 * 1000

export async function GET() {
  const cacheFile = join(process.cwd(), 'data', 'metrics.json')
  
  if (existsSync(cacheFile)) {
    try {
      const data = JSON.parse(readFileSync(cacheFile, 'utf-8'))
      return NextResponse.json(data)
    } catch (error) {
      console.error('Error reading cache file:', error)
    }
  }

  return NextResponse.json({
    co2Concentration: 421.5,
    dailyCarbonEmissions: 12500000,
    dailyForestLoss: 2850,
    aqi: 78,
    lastUpdated: new Date().toISOString(),
  })
}
