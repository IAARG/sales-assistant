/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/sales-assistant', // ← ESTA LINHA É CRUCIAL!
  assetPrefix: '/sales-assistant/' // ← ESTA TAMBÉM!
}

module.exports = nextConfig
