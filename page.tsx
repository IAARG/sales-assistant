"use client";

import { useState } from "react";

export default function Home() {
  const [transcription, setTranscription] = useState("Olá! Como posso ajudar?");
  const [iaSuggestion, setIaSuggestion] = useState(
    "Responda destacando o diferencial do seu produto."
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <header className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Sales Assistant – IA para Vendedores
          </h1>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
            Sair
          </button>
        </header>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            🎙️ Transcrição em tempo real:
          </h2>
          <div className="bg-gray-50 border rounded-lg p-4 text-gray-900">
            {transcription}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">🤖 Sugestão da IA:</h2>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-indigo-800">
            {iaSuggestion}
          </div>
        </section>

        <footer className="flex justify-end space-x-4 pt-4 border-t">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">
            🔁 Nova Conversa
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            🔴 Parar Gravação
          </button>
        </footer>
      </div>
    </main>
  );
}
