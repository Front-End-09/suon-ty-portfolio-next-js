/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  basePath: isProd ? 'nextjs-blog-deployment' : '',
  devIndicators: 'dist',
  output: "export",  // <=== enables static exports
}

module.exports = nextConfig
