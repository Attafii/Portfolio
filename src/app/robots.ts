import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ahmed-attafi.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/private/',
          '*.json',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/admin/', '/api/', '/private/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/admin/', '/api/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
