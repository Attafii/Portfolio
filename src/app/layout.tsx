import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import ErrorBoundary from "@/components/error-boundary";
import WebVitals from "@/components/web-vitals";
import { generateMetadata, generateStructuredData, defaultSEO } from "@/lib/seo";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Modern Inter font for clean, professional typography
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Poppins font for modern, clean navigation
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = generateMetadata({
  title: "Ahmed Attafi - Full Stack Developer & Software Engineer | Attafii Portfolio",
  description: "Ahmed Attafi (Attafii) - Expert Full Stack Developer from Tunisia. Specializing in React, Next.js, Node.js, TypeScript. Ahmed builds innovative web solutions and modern applications.",
  keywords: [
    "Ahmed Attafi", 
    "Attafii",
    "Ahmed",
    "Ahmed Attafi Portfolio",
    "Attafii Portfolio",
    "Ahmed Attafi Developer",
    "Ahmed Attafi Tunisia", 
    "Attafii Tunisia",
    "Ahmed Attafi Full Stack",
    "Ahmed Attafi Software Engineer",
    "Ahmed Attafi React",
    "Ahmed Attafi Next.js",
    "Software Developer", 
    "Full Stack Developer", 
    "Tunisia", 
    "React", 
    "Next.js", 
    "TypeScript", 
    "Node.js",
    "Web Development",
    "Software Engineering",
    "Portfolio"
  ],
  url: "/",
});

const structuredData = generateStructuredData({
  title: "Ahmed Attafi - Full Stack Developer & Software Engineer",
  description: "Ahmed Attafi (Attafii) - Expert Full Stack Developer from Tunisia specializing in React, Next.js, Node.js, TypeScript and modern web technologies.",
  url: "/",
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git",
    "Full Stack Development", "Frontend Development", "Backend Development"
  ]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.person),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.website),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.professionalService),
          }}
        />
        
        {/* Additional Name-focused Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              "name": "Attafii",
              "alternateName": ["Ahmed Attafi", "Ahmed", "Attafii Developer"],
              "url": "https://attafii.dev",
              "logo": "https://attafii.dev/logo.svg",
              "description": "Ahmed Attafi (Attafii) - Professional Full Stack Developer brand from Tunisia",
              "founder": {
                "@type": "Person",
                "name": "Ahmed Attafi"
              }
            }),
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/A (1).svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/A (1).svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional OpenGraph and SEO meta tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Ahmed" />
        <meta property="profile:last_name" content="Attafi" />
        <meta property="profile:username" content="attafii" />
        <meta property="article:author" content="Ahmed Attafi" />
        
        {/* Name-specific meta tags for better search recognition */}
        <meta name="author" content="Ahmed Attafi" />
        <meta name="creator" content="Ahmed Attafi" />
        <meta name="publisher" content="Ahmed Attafi" />
        <meta name="designer" content="Ahmed Attafi" />
        <meta name="developer" content="Ahmed Attafi" />
        <meta name="owner" content="Ahmed Attafi" />
        <meta name="copyright" content="Ahmed Attafi" />
        <meta name="subject" content="Ahmed Attafi - Full Stack Developer Portfolio" />
        <meta name="classification" content="Ahmed Attafi Portfolio, Attafii Developer" />
        <meta name="category" content="Portfolio, Web Development, Ahmed Attafi" />
        <meta name="coverage" content="Tunisia, Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="identifier-URL" content="https://attafii.dev" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Ahmed Attafi Portfolio" />
        <meta name="reply-to" content="attafiahmed.dev@gmail.com" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunisia" />
        <meta name="ICBM" content="33.886917, 9.537499" />
        <meta name="DC.title" content="Ahmed Attafi - Full Stack Developer" />
        <meta name="DC.creator" content="Ahmed Attafi" />
        <meta name="DC.subject" content="Web Development, Full Stack, Ahmed Attafi" />
        <meta name="DC.description" content="Ahmed Attafi (Attafii) Portfolio - Expert Full Stack Developer" />
        <meta name="DC.publisher" content="Ahmed Attafi" />
        <meta name="DC.contributor" content="Ahmed Attafi" />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://attafii.dev" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Tunisia" />
        <meta name="DC.rights" content="Copyright Ahmed Attafi" />
        
        {/* Twitter Card additional meta */}
        <meta name="twitter:image:alt" content="Ahmed Attafi - Full Stack Developer Portfolio" />
        <meta name="twitter:domain" content="attafii.dev" />
        
        {/* LinkedIn specific */}
        <meta property="og:image:secure_url" content="https://attafii.dev/og-image.png" />  
        {/* Search Engine Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ahmed Attafi" />
        <meta name="application-name" content="Ahmed Attafi Portfolio" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        
        {/* Prefetch DNS for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <Toaster richColors position="bottom-right" />
          <WebVitals />
        </ThemeProvider>

        {/* Analytics Scripts */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                  custom_map: {
                    'custom_parameter_1': 'Ahmed Attafi',
                    'custom_parameter_2': 'Attafii',
                    'custom_parameter_3': 'Portfolio'
                  }
                });
                
                // Track name-based searches
                gtag('event', 'page_view', {
                  developer_name: 'Ahmed Attafi',
                  brand_name: 'Attafii',
                  location: 'Tunisia',
                  profession: 'Full Stack Developer'
                });
              `}
            </Script>
          </>
        )}
        
        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
