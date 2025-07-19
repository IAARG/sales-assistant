/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig;

// Renomear pasta de aplicativo para "app"
mv next.config.js next.config.cjs
