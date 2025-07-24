// app/page.tsx
"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 mt-20">
        <h1 className="text-3xl font-bold mb-4">Sales Assistant – IA para Vendedores</h1>

        <div className="bg-gray-100 p-4 rounded-lg mb-4 min-h-[100px]">
          <p className="text-gray-700">Olá! Como posso ajudar?</p>
        </div>

        <div className="flex justify-between space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            🔁 Nova Conversa
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            🔴 Parar Gravação
          </button>
        </div>
      </div>
    </main>
  );
}
