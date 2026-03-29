/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
