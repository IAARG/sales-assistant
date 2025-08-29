'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Autenticação SIMPLES - sem NextAuth
    if (email === 'admin@sales.com' && password === 'admin123') {
      // Salva no localStorage (simulação de sessão)
      localStorage.setItem('userAuthenticated', 'true')
      localStorage.setItem('userEmail', email)
      
      // Redireciona para dashboard
      router.push('/dashboard')
    } else {
      alert('Login falhou. Use: admin@sales.com / admin123')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <div className="mx-auto h-16 w-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">SA</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Sales Assistant</h1>
          <p className="text-gray-600 mt-2">Sistema de Consultoria de Vendas</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="admin@sales.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isLoading ? 'Entrando...' : 'Entrar no Sistema'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Use: <strong>admin@sales.com</strong> / <strong>admin123</strong>
          </p>
          <a href="/" className="text-indigo-600 hover:text-indigo-800 text-sm mt-2 inline-block">
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  )
}
