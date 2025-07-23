import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // For demo purposes, we'll use a simple admin check
        // In production, you'd want proper password hashing
        const adminEmail = process.env.ADMIN_EMAIL || "attafiahmed.dev@gmail.com"
        const adminPassword = process.env.ADMIN_PASSWORD || "admin123"

        if (credentials.email === adminEmail && credentials.password === adminPassword) {
          return {
            id: "admin",
            email: adminEmail,
            name: "Ahmed Attafi",
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // Allow admin credentials login
      if (account?.provider === "credentials") {
        return true
      }

      // For OAuth providers, check if user is the admin
      const adminEmail = process.env.ADMIN_EMAIL || "attafiahmed.dev@gmail.com"

      // For this portfolio, we'll only allow the admin to sign in
      return user.email === adminEmail
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
})
