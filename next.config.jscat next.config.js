/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove a configuração experimental se não for mais necessária
  // experimental: {
  //   appDir: true
  // }
}

module.exports = nextConfig
