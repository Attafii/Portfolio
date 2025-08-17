import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://attafii.vercel.app'
  const currentDate = new Date()

  // Static pages with SEO-optimized URLs
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ]

  // You can add dynamic pages here when you have real data
  // For example, blog posts or project pages
  const dynamicPages: MetadataRoute.Sitemap = []

  // If you have projects data, you could add:
  // const projects = await getProjects()
  // const projectPages = projects.map(project => ({
  //   url: `${baseUrl}/projects/${project.slug}`,
  //   lastModified: new Date(project.updated_at),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  // If you have blog posts, you could add:
  // const posts = await getBlogPosts()
  // const blogPages = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: new Date(post.updated_at),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [...staticPages, ...dynamicPages]
}
