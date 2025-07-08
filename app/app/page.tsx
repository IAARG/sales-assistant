'use client'
import { useState } from 'react'

export default function Page() {
  const [pergunta, setPergunta] = useState('')
  const [resposta, setResposta] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function enviarPergunta() {
    if (!pergunta) return
    setCarregando(true)
    setResposta('')

    try {
      const res = await fetch('/api/gerar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta }),
      })
      const dados = await res.json()
      setResposta(dados.resposta || 'Nenhuma resposta gerada.')
    } catch (e) {
      setResposta('Erro ao gerar resposta.')
    } finally {
      setCarregando(false)
    }
  }

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
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            onClick={enviarPergunta}
            disabled={carregando}
          >
            {carregando ? 'Gerando resposta...' : 'Enviar'}
          </button>
        </div>

        {resposta && (
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              💡 <strong>Sugestão da IA:</strong> {resposta}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
