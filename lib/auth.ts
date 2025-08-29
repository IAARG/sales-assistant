import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Login simples para teste
        if (credentials?.email === 'admin@sales.com' && credentials?.password === 'admin123') {
          return { id: '1', email: 'admin@sales.com', name: 'Administrador' }
        }
        return null
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' }
})
