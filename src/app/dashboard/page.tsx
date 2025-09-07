"use client";
import { useState } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Olá 👋, sou o IAARG, seu assistente de vendas inteligente!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/gerar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ Erro ao conectar com a IA." }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 text-xl font-bold">IAARG – Dashboard</header>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`p-3 rounded-lg max-w-lg ${m.role === "user" ? "bg-indigo-200 self-end" : "bg-white border"}`}>
            <b>{m.role === "user" ? "Você" : "IAARG"}:</b> {m.content}
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2 border-t bg-white">
        <input
          className="flex-1 border p-2 rounded-lg"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Enviar
        </button>
      </div>
    </div>
  );
}
