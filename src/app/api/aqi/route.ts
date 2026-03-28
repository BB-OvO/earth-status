import { NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const cacheFile = join(process.cwd(), 'data', 'aqi.json')
  
  if (existsSync(cacheFile)) {
    try {
      const data = JSON.parse(readFileSync(cacheFile, 'utf-8'))
      return NextResponse.json(data)
    } catch (error) {
      console.error('Error reading cache file:', error)
    }
  }

  return NextResponse.json([
    {
      city: '北京',
      aqi: 120,
      location: {
        lat: 39.9,
        lng: 116.4
      },
      timestamp: new Date().toISOString()
    },
    {
      city: '上海',
      aqi: 65,
      location: {
        lat: 31.2,
        lng: 121.5
      },
      timestamp: new Date().toISOString()
    },
    {
      city: '广州',
      aqi: 58,
      location: {
        lat: 23.1,
        lng: 113.3
      },
      timestamp: new Date().toISOString()
    },
    {
      city: '深圳',
      aqi: 52,
      location: {
        lat: 22.5,
        lng: 114.1
      },
      timestamp: new Date().toISOString()
    },
    {
      city: '成都',
      aqi: 89,
      location: {
        lat: 30.7,
        lng: 104.1
      },
      timestamp: new Date().toISOString()
    },
    {
      city: '武汉',
      aqi: 72,
      location: {
        lat: 30.5,
        lng: 114.3
      },
      timestamp: new Date().toISOString()
    },
    {
      city: '西安',
      aqi: 95,
      location: {
        lat: 34.3,
        lng: 109.0
      },
      timestamp: new Date().toISOString()
    },
    {
      city: '杭州',
      aqi: 68,
      location: {
        lat: 30.3,
        lng: 120.2
      },
      timestamp: new Date().toISOString()
    }
  ])
}
