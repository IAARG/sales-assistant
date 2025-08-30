export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard de Vendas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Sessões Hoje</h2>
            <div className="text-2xl font-bold text-indigo-600">25</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Taxa de Conversão</h2>
            <div className="text-2xl font-bold text-green-600">72%</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Receita</h2>
            <div className="text-2xl font-bold text-blue-600">R$ 8,240</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Análise de Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Objeções Comuns</h3>
              <ul className="space-y-2">
                <li className="text-sm text-yellow-600">• Preço alto</li>
                <li className="text-sm text-yellow-600">• Não tenho interesse</li>
                <li className="text-sm text-yellow-600">• Preciso pensar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Sugestões</h3>
              <ul className="space-y-2">
                <li className="text-sm text-green-600">• Oferecer desconto</li>
                <li className="text-sm text-green-600">• Agendar follow-up</li>
                <li className="text-sm text-green-600">• Casos de sucesso</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a href="/" className="text-indigo-600 hover:text-indigo-800">← Voltar</a>
        </div>
      </div>
    </div>
  )
}
