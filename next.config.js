/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  basePath: "/2048-in-react",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
}

module.exports = nextConfig
