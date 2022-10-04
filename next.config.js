/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
