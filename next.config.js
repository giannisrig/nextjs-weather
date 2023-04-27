/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
