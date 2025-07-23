import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import ErrorBoundary from "@/components/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Attafi - Software Developer & IoT Specialist",
  description: "Passionate Software Developer and IoT Specialist from Tunisia, specializing in automotive software QA, web development, and innovative IoT solutions.",
  keywords: ["Ahmed Attafi", "Software Developer", "IoT Specialist", "Tunisia", "Capgemini", "Automotive Software", "Arduino", "React", "Next.js"],
  authors: [{ name: "Ahmed Attafi", url: "https://ahmed-attafi.vercel.app" }],
  creator: "Ahmed Attafi",
  metadataBase: new URL("https://ahmed-attafi.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-attafi.vercel.app",
    title: "Ahmed Attafi - Software Developer & IoT Specialist",
    description: "Passionate Software Developer and IoT Specialist from Tunisia, specializing in automotive software QA, web development, and innovative IoT solutions.",
    siteName: "Ahmed Attafi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Attafi - Software Developer & IoT Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Attafi - Software Developer & IoT Specialist",
    description: "Passionate Software Developer and IoT Specialist from Tunisia, specializing in automotive software QA, web development, and innovative IoT solutions.",
    images: ["/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
