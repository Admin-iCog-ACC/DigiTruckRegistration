/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "am-ET"],
    defaultLocale: "en-US",
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://digitruckethiopia.icogacc.com/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
