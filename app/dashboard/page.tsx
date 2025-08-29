'use client'

import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard de Vendas</h1>
            <button
              onClick={() => router.push('/')}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Sessões Hoje</h2>
            <div className="text-3xl font-bold text-indigo-600">42</div>
            <p className="text-sm text-gray-500 mt-2">Conversas com clientes</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Taxa de Conversão</h2>
            <div className="text-3xl font-bold text-green-600">68%</div>
            <p className="text-sm text-gray-500 mt-2">Vendas efetivadas</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Receita</h2>
            <div className="text-3xl font-bold text-blue-600">R$ 12.450</div>
            <p className="text-sm text-gray-500 mt-2">Valor total vendido</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Análise de Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Objeções Comuns</h3>
              <ul className="space-y-2">
                <li className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded">🚩 Preço alto</li>
                <li className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded">🚩 Não tenho interesse</li>
                <li className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded">🚩 Preciso pensar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Sugestões</h3>
              <ul className="space-y-2">
                <li className="text-sm text-green-700 bg-green-50 p-3 rounded">✅ Oferecer desconto</li>
                <li className="text-sm text-green-700 bg-green-50 p-3 rounded">✅ Agendar follow-up</li>
                <li className="text-sm text-green-700 bg-green-50 p-3 rounded">✅ Enviar caso de sucesso</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
