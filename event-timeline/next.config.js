/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  backendUrl: process.env.BACKEND_URL,
}

module.exports = nextConfig
