export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">数据说明</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">数据来源</h2>
            <div className="bg-background border border-border rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-accent mb-2">空气质量 (AQI)</h3>
                <p className="text-secondary text-sm">
                  数据来源: OpenWeatherMap Air Pollution API
                </p>
                <p className="text-secondary text-sm mt-1">
                  更新频率: 每 30 分钟更新一次
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-accent mb-2">二氧化碳 (CO2)</h3>
                <p className="text-secondary text-sm">
                  数据来源: CO2 Earth / NASA Climate API
                </p>
                <p className="text-secondary text-sm mt-1">
                  更新频率: 每 60 分钟更新一次
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-accent mb-2">森林/火灾</h3>
                <p className="text-secondary text-sm">
                  数据来源: NASA FIRMS MODIS/CVIIRS
                </p>
                <p className="text-secondary text-sm mt-1">
                  更新频率: 每 24 小时更新一次
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-accent mb-2">环保新闻</h3>
                <p className="text-secondary text-sm">
                  数据来源: Guardian Environment / NatGeo RSS
                </p>
                <p className="text-secondary text-sm mt-1">
                  更新频率: 每 60 分钟更新一次
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">数据更新机制</h2>
            <div className="bg-background border border-border rounded-lg p-6 space-y-4">
              <ol className="list-decimal list-inside text-secondary text-sm space-y-2">
                <li>后端调度器使用 GitHub Actions 或 Node.js Cron 定时触发数据更新</li>
                <li>数据获取器请求上述 API 服务</li>
                <li>数据标准化器将不同格式数据统一为标准 JSON 结构</li>
                <li>处理后的数据存入静态 JSON 文件或轻量数据库</li>
                <li>前端只读取本地化处理后的数据，不直接请求第三方 API</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">免责声明</h2>
            <div className="bg-background border border-border rounded-lg p-6 space-y-4">
              <p className="text-secondary text-sm">
                本平台展示的数据为估算值和公开数据的聚合，仅供参考。实际环境状况可能因地理位置、时间、测量方法等因素而有所不同。
              </p>
              <p className="text-secondary text-sm">
                我们已尽最大努力确保数据的准确性和及时性，但不保证数据的绝对准确性。用户应自行判断数据的适用性，并在采取任何行动前咨询专业人士。
              </p>
              <p className="text-secondary text-sm">
                如发现数据异常或有疑问，请通过联系我们渠道反馈。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">技术栈</h2>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-secondary text-sm mb-4">
                本平台使用以下开源技术构建:
              </p>
              <ul className="list-disc list-inside text-secondary text-sm space-y-2">
                <li>前端框架: Next.js 14 (App Router)</li>
                <li>样式系统: Tailwind CSS</li>
                <li>地图服务: Leaflet.js + CartoDB Dark Matter</li>
                <li>部署平台: Vercel</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">联系我们</h2>
            <div className="bg-background border border-border rounded-lg p-6">
              <p className="text-secondary text-sm">
                如有合作意向或数据反馈，请通过以下方式联系我们:
              </p>
              <p className="text-secondary text-sm mt-2">
                邮箱: contact@earthstatus.earth
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
