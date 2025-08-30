export default function Home() {
  const handleDemo = () => {
    // Redirecionamento direto via JavaScript
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">IAARG Sales Assistant</h1>
        <p className="text-gray-600 mb-8">Sistema de consultoria de vendas inteligente</p>
        <button 
          onClick={handleDemo}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition"
        >
          Acessar Dashboard Demo
        </button>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>www.iaarg.com.br</p>
        </div>
      </div>
    </div>
  );
}
