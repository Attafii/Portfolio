import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = generateMetadata({
  title: "Ahmed Attafi - Full Stack Developer & Software Engineer",
  description: "Experienced Full Stack Developer from Tunisia specializing in React, Next.js, Node.js, and modern web technologies. Building innovative solutions with clean code and exceptional user experiences.",
  keywords: [
    "Ahmed Attafi", 
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
  title: "Ahmed Attafi - Full Stack Developer",
  description: "Experienced Full Stack Developer from Tunisia specializing in React, Next.js, Node.js, and modern web technologies.",
  url: "/",
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"
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
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional OpenGraph and SEO meta tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Ahmed" />
        <meta property="profile:last_name" content="Attafi" />
        <meta property="profile:username" content="ahmedattafi" />
        <meta property="article:author" content="Ahmed Attafi" />
        
        {/* Twitter Card additional meta */}
        <meta name="twitter:image:alt" content="Ahmed Attafi - Full Stack Developer Portfolio" />
        <meta name="twitter:domain" content="portfolio-7gljvpvwk-ahmed-attafis-projects.vercel.app" />
        
        {/* LinkedIn specific */}
        <meta property="og:image:secure_url" content="https://portfolio-7gljvpvwk-ahmed-attafis-projects.vercel.app/og-image.png" />
        
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
