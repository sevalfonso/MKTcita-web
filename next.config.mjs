/** @type {import('next').NextConfig} */
const nextConfig = {
  // PA-016: output standalone para imagen Docker de producción mínima
  output: 'standalone',

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

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Impide que la landing sea embebida en iframes (clickjacking)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Evita que el navegador adivine el MIME type
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Controla qué información de referrer se envía
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Fuerza HTTPS durante 2 años
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Restringe acceso a cámara, micrófono y geolocalización
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // CSP: permite Sanity CDN, Google Fonts, Vercel
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://plausible.io",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              // Sanity CDN para imágenes del blog y CMS
              "img-src 'self' data: blob: https://cdn.sanity.io https:",
              // Sanity API + Vercel + Plausible eventos
              "connect-src 'self' https://*.sanity.io https://vercel.live https://plausible.io",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ]
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
