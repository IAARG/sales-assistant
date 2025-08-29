import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (credentials?.email === "admin@sales.com" && credentials?.password === "admin123") {
          return {
            id: "1",
            email: "admin@sales.com",
            name: "Admin User"
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOptions)
export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
