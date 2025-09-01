export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="text-2xl font-bold text-blue-600">
            IAARG
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Bem-vindo à IAARG
        </h1>
        <p className="text-lg text-center text-gray-600">
          Soluções inovadoras em Inteligência Artificial
        </p>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 IAARG. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
