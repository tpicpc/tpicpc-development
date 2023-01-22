/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/studio',
        permanent: true,
      },
    ]
  },
};
