import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'images.unsplash.com',
      'github.com',
      'avatars.githubusercontent.com',
    ],
  },
  
  // Compression
  compress: true,
  
  // PWA and Performance
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
    {
      source: '/sw.js',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
      ],
    },
  ],
  
  // Redirects for SEO
  redirects: async () => [
    {
      source: '/github',
      destination: 'https://github.com/attafii',
      permanent: true,
    },
    {
      source: '/linkedin',
      destination: 'https://linkedin.com/in/ahmed-attafi',
      permanent: true,
    },
  ],
  
  // Bundle analysis
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
      };
    }
    
    return config;
  },
  
  // Performance optimizations
  poweredByHeader: false,
  
  // TypeScript config
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint config
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
