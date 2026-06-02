/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      // Redirigir www → apex (canónico sin www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mymarketing.es' }],
        destination: 'https://mymarketing.es/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
