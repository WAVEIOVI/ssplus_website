/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/ssplus_website',
  assetPrefix: '/ssplus_website/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
