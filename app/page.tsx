import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Sales Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ferramenta inteligente para consultoria de vendas
          </p>
          
          <div className="space-x-4">
            <Link
              href="/login"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Acessar Sistema
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
