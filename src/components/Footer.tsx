export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Earth Status</h3>
            <p className="text-secondary text-sm">
              实时显示地球环境污染量化数据的 Web 平台，旨在通过客观数据唤醒公众意识。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-secondary text-sm hover:text-accent transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="/news" className="text-secondary text-sm hover:text-accent transition-colors">
                  环保新闻
                </a>
              </li>
              <li>
                <a href="/about" className="text-secondary text-sm hover:text-accent transition-colors">
                  数据说明
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">数据更新</h3>
            <p className="text-secondary text-sm">
              空气质量数据每 30 分钟更新一次
            </p>
            <p className="text-secondary text-sm mt-2">
              二氧化碳数据每 60 分钟更新一次
            </p>
            <p className="text-secondary text-sm mt-2">
              森林数据每日更新
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-secondary text-sm">
            © {currentYear} Earth Status. 本项目旨在通过"清醒"的数据展示，促使访问者理性思考环保议题。
          </p>
        </div>
      </div>
    </footer>
  )
}
