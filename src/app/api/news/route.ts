import { NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const cacheFile = join(process.cwd(), 'data', 'news.json')
  
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
      id: '1',
      title: '联合国环境署发布2024年全球环境展望报告',
      source: '联合国环境署',
      time: '2024-03-25',
      summary: '报告指出全球温室气体排放量继续上升，呼吁各国采取更积极的减排措施。',
      category: '政策',
      url: '#'
    },
    {
      id: '2',
      title: '新型碳捕获技术取得突破性进展',
      source: '科学美国人',
      time: '2024-03-24',
      summary: '研究人员开发出效率更高的碳捕获材料，有望大幅降低碳捕获成本。',
      category: '技术',
      url: '#'
    },
    {
      id: '3',
      title: '亚马逊雨林近期火灾面积增加35%',
      source: '国家地理',
      time: '2024-03-23',
      summary: '卫星数据显示亚马逊地区火灾活动显著增加，专家警告生态系统面临压力。',
      category: '灾难',
      url: '#'
    },
    {
      id: '4',
      title: '全球植树造林计划取得阶段性成果',
      source: '卫报环境版',
      time: '2024-03-22',
      summary: '国际环保组织宣布在过去一年中成功种植超过10亿棵树。',
      category: '公益',
      url: '#'
    }
  ])
}
