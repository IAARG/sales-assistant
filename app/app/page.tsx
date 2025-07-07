export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          IAARG – Assistente de Vendas com IA 🤖
        </h1>
        <p className="text-gray-600">
          Descreva uma dúvida ou objeção do cliente e veja como a IA pode ajudar.
        </p>

        <div>
          <input
            type="text"
            placeholder="Ex: Cliente disse que está caro demais..."
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Enviar
          </button>
        </div>

        <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
          <p className="text-gray-700">
            💡 <strong>Sugestão da IA:</strong> Tente focar no custo-benefício. Pergunte ao cliente o que ele espera da solução e destaque como seu produto entrega mais valor por um preço justo.
          </p>
        </div>
      </div>
    </main>
  );
}
