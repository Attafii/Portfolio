import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Skip middleware for performance-critical paths
  if (
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.includes('.') // Files with extensions
  ) {
    const response = NextResponse.next();
    
    // Cache static resources aggressively
    if (request.nextUrl.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$/)) {
      response.headers.set(
        'Cache-Control',
        'public, max-age=31536000, immutable'
      );
    }
    
    return response;
  }

  const response = NextResponse.next();
  
  // Essential security headers only (minimal overhead)
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  // Preload critical resources for main pages
  if (request.nextUrl.pathname === '/') {
    response.headers.set(
      'Link',
      '</fonts/geist-sans.woff2>; rel=preload; as=font; type=font/woff2; crossorigin'
    );
  }

  // Protect admin routes (simplified auth check)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (request.nextUrl.pathname === '/admin/login') {
      return response;
    }
    
    const session = await auth()
    
    if (!session?.user || session.user.email !== (process.env.ADMIN_EMAIL || "attafiahmed.dev@gmail.com")) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return response;
}

export const config = {
  matcher: [
    // Exclude static files and API routes for better performance
    '/((?!_next/static|_next/image|favicon.ico|.*\\.).*)',
    '/admin/:path*'
  ],
}
