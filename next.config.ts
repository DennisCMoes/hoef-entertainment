import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['localhost', '127.0.0.1'],
  pageExtensions: ['mdx', 'tsx', 'ts'],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
