import { auth } from "@/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }
    
    const session = await auth()
    
    if (!session?.user) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // Check if user is admin (in our case, the specific email)
    const adminEmail = process.env.ADMIN_EMAIL || "attafiahmed.dev@gmail.com"
    if (session.user.email !== adminEmail) {
      return NextResponse.redirect(new URL('/admin/login?error=unauthorized', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}
