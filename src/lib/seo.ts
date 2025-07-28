import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const defaultSEO = {
  title: 'Ahmed Attafi - Full Stack Developer & Software Engineer',
  description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building innovative solutions with clean code and exceptional user experiences.',
  keywords: [
    'Ahmed Attafi',
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'JavaScript',
    'Portfolio',
    'Software Development'
  ],
  author: 'Ahmed Attafi',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://attafii.vercel.app',
  image: '/og-image.png',
  twitterHandle: '@ahmedattafi',
  linkedInProfile: 'https://www.linkedin.com/in/ahmed-attafi/'
};

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = []
  } = config;

  const fullTitle = title.includes('Ahmed Attafi') ? title : `${title} | Ahmed Attafi`;
  const fullUrl = url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl;
  const ogImage = image ? `${defaultSEO.siteUrl}${image}` : `${defaultSEO.siteUrl}${defaultSEO.image}`;
  
  const allKeywords = [...new Set([...defaultSEO.keywords, ...keywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: author || defaultSEO.author }],
    creator: defaultSEO.author,
    publisher: defaultSEO.author,
    
    // Open Graph
    openGraph: {
      type,
      locale: 'en_US',
      url: fullUrl,
      siteName: 'Ahmed Attafi Portfolio',
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - Ahmed Attafi Portfolio`,
          type: 'image/png',
        }
      ],
      countryName: 'Tunisia',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags })
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      site: defaultSEO.twitterHandle,
      creator: defaultSEO.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImage],
    },

    // Additional meta tags
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Ahmed Attafi',
      'application-name': 'Ahmed Attafi Portfolio',
      'mobile-web-app-capable': 'yes',
      'msapplication-TileColor': '#3b82f6',
      'theme-color': '#3b82f6',
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Verification (you can add these when you have the codes)
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },

    // Canonical URL
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-US': fullUrl,
      },
    },
  };
}

export function generateStructuredData(config: SEOConfig & { 
  skills?: string[];
  projects?: Array<{
    name: string;
    description: string;
    url?: string;
    image?: string;
    technologies: string[];
  }>;
}) {
  const { title, description, url, skills = [], projects = [] } = config;
  const fullUrl = url ? `${defaultSEO.siteUrl}${url}` : defaultSEO.siteUrl;

  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Attafi",
    "url": defaultSEO.siteUrl,
    "sameAs": [
      defaultSEO.linkedInProfile,
      "https://github.com/Attafii",
      "https://twitter.com/ahmedattafi"
    ],
    "jobTitle": "Full Stack Developer",
    "description": description,
    "knowsAbout": skills,
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "University"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ahmed Attafi Portfolio",
    "url": defaultSEO.siteUrl,
    "author": {
      "@type": "Person",
      "name": "Ahmed Attafi"
    },
    "description": description,
    "inLanguage": "en-US"
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ahmed Attafi - Web Development Services",
    "url": defaultSEO.siteUrl,
    "description": "Professional web development services specializing in React, Next.js, and full-stack solutions",
    "provider": {
      "@type": "Person",
      "name": "Ahmed Attafi"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Development"
  };

  return {
    person: personSchema,
    website: websiteSchema,
    professionalService: professionalServiceSchema
  };
}

export { defaultSEO };
