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

  function novaPergunta() {
    setResposta('')
    setInput('')
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between px-4 py-8">
      {/* LOGO + TÍTULO */}
      <div className="flex flex-col items-center">
        <img src="/logo.svg" alt="IAARG Logo" className="w-24 mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
          IAARG – Assistente de Vendas com IA 🤖
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6 max-w-xl">
          Descreva uma dúvida ou objeção do cliente e veja como a IA pode ajudar.
        </p>
      </div>

      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex gap-2 mb-6">
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

      {/* RESPOSTA DA IA */}
      {resposta && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow max-w-xl w-full text-gray-800">
          <h2 className="font-semibold mb-2">Resposta da IA:</h2>
          <p className="mb-4">{resposta}</p>
          <button
            onClick={novaPergunta}
            className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300"
          >
            Nova pergunta
          </button>
        </div>
      )}

      {/* RODAPÉ */}
      <footer className="mt-10 text-sm text-gray-500 text-center">
        Projeto open-source no{' '}
        <a
          href="https://github.com/IAARG/sales-assistant"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
        >
          GitHub
        </a>{' '}
        · IAARG © {new Date().getFullYear()}
      </footer>
    </main>
  )
}
