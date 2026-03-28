import { Navbar, Footer, GlobalCounters, ActionSuggestion } from '@/components'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <GlobalCounters />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-primary mb-6">交互式污染地图</h2>
          <div className="w-full h-[600px] bg-background border border-border rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-secondary text-lg mb-2">地图暂时不可用</p>
              <p className="text-secondary text-sm">正在修复中...</p>
            </div>
          </div>
          <ActionSuggestion />
        </div>
      </main>
      <Footer />
    </div>
  )
}
