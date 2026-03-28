'use client'

import { useState } from 'react'
import { mockNews } from '@/data/mockData'
import type { NewsItem } from '@/types'

const categories = ['全部', '政策', '灾难', '技术', '公益']

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('全部')

  const filteredNews = activeCategory === '全部'
    ? mockNews
    : mockNews.filter((news) => news.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-4">环保新闻</h1>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-border text-secondary hover:bg-border/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredNews.map((news) => (
          <article
            key={news.id}
            className="bg-background border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
                {news.category}
              </span>
              <span className="text-secondary text-sm">{news.date}</span>
            </div>
            <h2 className="text-xl font-bold text-primary mb-2 hover:text-accent transition-colors">
              {news.title}
            </h2>
            <p className="text-secondary text-sm mb-4">{news.summary}</p>
            <div className="flex items-center justify-between">
              <span className="text-secondary text-sm">来源: {news.source}</span>
              <a
                href={news.url}
                className="text-accent text-sm hover:underline"
              >
                阅读全文 →
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-secondary">暂无相关新闻</p>
        </div>
      )}
    </div>
  )
}
