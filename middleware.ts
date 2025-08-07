// middleware.ts
import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/login', // Redireciona para /login se não estiver autenticado
  },
})

export const config = {
  matcher: ['/dashboard'], // Protege apenas a rota /dashboard
}
