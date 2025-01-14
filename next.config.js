import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // Only run ESLint on these directories during builds
    dirs: ['pages', 'app', 'components', 'lib', 'utils', 'hooks'],
    
    // Only disable this if you're getting blocking ESLint errors during build
    ignoreDuringBuilds:   'true'
  },
  typescript: {
    ignoreBuildErrors:  'true'
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  redirects,
}

export default withPayload(nextConfig)
