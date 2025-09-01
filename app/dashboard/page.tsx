"use client";

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">IAARG Sales Dashboard</h1>
              <p className="text-sm text-gray-600">www.iaarg.com.br</p>
            </div>
            <button
              onClick={() => router.push('/')}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Sessões Hoje</h2>
                <div className="text-3xl font-bold text-indigo-600">42</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <span className="text-2xl">��</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Taxa de Conversão</h2>
                <div className="text-3xl font-bold text-green-600">68%</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Receita</h2>
                <div className="text-3xl font-bold text-blue-600">R$ 12.450</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gráficos e Análises */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Objeções Comuns</h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-yellow-50 rounded">
                <span className="text-yellow-600 mr-3">🚩</span>
                <span>Preço alto - 45% dos casos</span>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 rounded">
                <span className="text-yellow-600 mr-3">🚩</span>
                <span>Não tenho interesse - 30%</span>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 rounded">
                <span className="text-yellow-600 mr-3">🚩</span>
                <span>Preciso pensar - 25%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sugestões de Ação</h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-50 rounded">
                <span className="text-green-600 mr-3">✅</span>
                <span>Oferecer desconto progressivo</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded">
                <span className="text-green-600 mr-3">✅</span>
                <span>Agendar follow-up em 48h</span>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded">
                <span className="text-green-600 mr-3">✅</span>
                <span>Enviar casos de sucesso</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-indigo-600 rounded-lg shadow p-6 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">Pronto para transformar suas vendas?</h2>
          <p className="text-indigo-100 mb-4">Entre em contato para uma demonstração completa</p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50">
            Solicitar Demonstração
          </button>
        </div>
      </main>
    </div>
  );
}
