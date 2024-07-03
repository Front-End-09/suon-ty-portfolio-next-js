/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  devIndicators: 'dist',
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
