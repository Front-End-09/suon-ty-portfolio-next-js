/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  devIndicators: 'dist',
  output: "export",  // <=== enables static exports
}

module.exports = nextConfig
