export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-8 rounded-2xl shadow-xl w-full max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">IAARG</h1>
        <p className="text-lg">
          Assistente de Vendas com Inteligência Artificial em Tempo Real.
        </p>
      </div>

      <div className="mt-10 text-sm text-gray-500 text-center">
        <p>
          Projeto em desenvolvimento. Fique à vontade para acompanhar o progresso.
        </p>
        <p className="mt-2">Powered by Next.js + Tailwind CSS + Vercel</p>
      </div>
    </main>
  );
}
