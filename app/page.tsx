export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sales Assistant</h1>
        <p className="text-gray-600 mb-8">Sistema de consultoria de vendas</p>
        <a href="/dashboard" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
          Acessar Dashboard
        </a>
      </div>
    </div>
  )
}
