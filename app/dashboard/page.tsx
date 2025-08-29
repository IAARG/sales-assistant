'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const isAuthenticated = localStorage.getItem('userAuthenticated')
    const email = localStorage.getItem('userEmail')
    
    if (!isAuthenticated) {
      router.push('/login')
    } else {
      setUserEmail(email || 'Usuário')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('userAuthenticated')
    localStorage.removeItem('userEmail')
    router.push('/')
  }

  if (!userEmail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard de Vendas</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, {userEmail}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Sair do Sistema
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Sessões Hoje</h2>
            <div className="text-3xl font-bold text-indigo-600">42</div>
            <p className="text-sm text-gray-500 mt-2">Conversas com clientes</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Taxa de Conversão</h2>
            <div className="text-3xl font-bold text-green-600">68%</div>
            <p className="text-sm text-gray-500 mt-2">Vendas efetivadas</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Receita</h2>
            <div className="text-3xl font-bold text-blue-600">R$ 12.450</div>
            <p className="text-sm text-gray-500 mt-2">Valor total vendido</p>
          </div>
        </div>

        {/* Área de Análise */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Análise de Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Objeções Comuns</h3>
              <ul className="space-y-2">
                <li className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">🚩 Preço alto</li>
                <li className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">🚩 Não tenho interesse</li>
                <li className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">🚩 Preciso pensar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Sugestões</h3>
              <ul className="space-y-2">
                <li className="text-sm text-green-700 bg-green-50 p-2 rounded">✅ Oferecer desconto</li>
                <li className="text-sm text-green-700 bg-green-50 p-2 rounded">✅ Agendar follow-up</li>
                <li className="text-sm text-green-700 bg-green-50 p-2 rounded">✅ Enviar caso de sucesso</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="text-indigo-600 hover:text-indigo-800">
            ← Voltar para a página inicial
          </a>
        </div>
      </main>
    </div>
  )
}
