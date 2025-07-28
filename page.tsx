'use client'

import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState('')
  const [resposta, setResposta] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setResposta('')
    setLoading(true)

    const res = await fetch('/api/gerar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    })

    const data = await res.json()
    setResposta(data.resposta || 'Erro ao obter resposta da IA.')
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        IAARG – Assistente de Vendas com IA 🤖
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6 max-w-xl">
        Descreva uma dúvida ou objeção do cliente e veja como a IA pode ajudar.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xl flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: Cliente disse que está caro"
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {resposta && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow max-w-xl w-full text-gray-800">
          <h2 className="font-semibold mb-2">Resposta da IA:</h2>
          <p>{resposta}</p>
        </div>
      )}
    </main>
  )
}
