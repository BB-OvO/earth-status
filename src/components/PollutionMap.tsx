'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { AQIData } from '@/types'

interface PollutionMapProps {
  data: AQIData[]
}

function getColor(aqi: number): string {
  if (aqi <= 50) return '#34C759'
  if (aqi <= 100) return '#FFC107'
  if (aqi <= 150) return '#FF9800'
  if (aqi <= 200) return '#FF5722'
  if (aqi <= 300) return '#D50000'
  return '#7B1FA2'
}

function getRadius(aqi: number): number {
  return Math.max(10000, aqi * 5000)
}

export default function PollutionMap({ data }: PollutionMapProps) {
  const [position] = useState<[number, number]>([35, 105])
  const [zoom] = useState(4)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = () => setHasError(true)
    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])

  if (hasError) {
    return (
      <div className="w-full h-[600px] bg-background border border-border rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-secondary text-lg mb-2">地图加载失败</p>
          <p className="text-secondary text-sm">请刷新页面重试</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[600px] bg-background border border-border rounded-lg overflow-hidden">
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        {data.map((item, index) => (
          <Circle
            key={index}
            center={[item.location.lat, item.location.lng]}
            radius={getRadius(item.aqi)}
            color={getColor(item.aqi)}
            fillColor={getColor(item.aqi)}
            fillOpacity={0.3}
          >
            <Popup>
              <div className="text-sm">
                <strong className="text-primary">{item.city}</strong>
                <p className="text-secondary mt-1">AQI: {item.aqi}</p>
                <p className="text-secondary">
                  {item.aqi <= 50
                    ? '空气质量优'
                    : item.aqi <= 100
                    ? '空气质量良'
                    : item.aqi <= 150
                    ? '敏感人群敏感'
                    : item.aqi <= 200
                    ? '空气质量轻度污染'
                    : item.aqi <= 300
                    ? '空气质量中度污染'
                    : '空气质量严重污染'}
                </p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  )
}
