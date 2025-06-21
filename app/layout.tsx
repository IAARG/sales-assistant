import './globals.css'; // Pode ser removido se não estiver usando Tailwind ou CSS global

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Assistente de Vendas</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
