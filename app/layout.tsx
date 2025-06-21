// app/layout.tsx
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
