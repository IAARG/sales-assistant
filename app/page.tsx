import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Sales Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ferramenta inteligente para consultoria de vendas com IA
          </p>
          
          <div className="space-x-4 mb-16">
            <Link
              href="/login"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Acessar Sistema
            </Link>
            
            <Link
              href="/dashboard"
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition"
            >
              Ver Demo
            </Link>
          </div>

          {/* Recursos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="font-semibold mb-2">Dashboard Inteligente</h3>
              <p className="text-gray-600">Acompanhe métricas de vendas em tempo real</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Análise de Objeções</h3>
              <p className="text-gray-600">Identifique e supere objeções comuns</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Rápido e Eficiente</h3>
              <p className="text-gray-600">Interface intuitiva e responsiva</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>© 2024 Sales Assistant. Desenvolvido com Next.js e Tailwind CSS.</p>
            <p className="text-sm mt-2">Versão 1.0 - Pronto para produção</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
