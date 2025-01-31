// const { withNextVideo } = require('next-video/process')

import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'app', 'components', 'lib', 'utils', 'hooks'],
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    optimizeCss: true,
    esmExternals: true // Add this line
  },
  transpilePackages: ['@payloadcms/next'], // Add this line
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL].map((item) => {
        const url = new URL(item)
        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
          port: '',
          pathname: '**',
        }
      }),
    ],
  },
  redirects,
}

export default withPayload(nextConfig)
